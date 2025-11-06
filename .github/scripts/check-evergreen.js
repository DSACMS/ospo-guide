const fs = require("fs");
const path = require("path");
const { Octokit } = require("@octokit/action");

const CONTENT_DIR = path.join(process.cwd(), "content");
const ISSUE_TITLE = "🌲 Evergreen Image Review Required";
const MONTHS_THRESHOLD = parseInt(process.env.THRESHOLD_MONTHS || "12", 10);
const ISSUE_LABELS = (process.env.ISSUE_LABELS || "evergreen-review, maintenance,content-check").split(",").map((l) => l.trim());

function getAllMarkdownFiles(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    for (const file of list) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            results = results.concat(getAllMarkdownFiles(filePath));
        } else if (filePath.endsWith(".md")) {
            results.push(filePath);
        }
    }

    return results;
}

function monthsBetween(date1, date2) {
    return (date2.getFullYear() - date1.getFullYear()) * 12 + (date2.getMonth() - date1.getMonth());
}

function checkFile(filePath) {
    const content = fs.readFileSync(filePath, "utf8");
    const lines = content.split("\n");
    const findings = [];

    const shortcodeRegex = /{%\s*image_with_class\s+[^%]*?"(false|true|[^"]*)?"\s+"?(\d{4}-\d{2}-\d{2})?"?\s*%}/g;

    lines.forEach((line, i) => {
        const matches = [...line.matchAll(shortcodeRegex)];
        for (const match of matches) {
            const lastChecked = match[2];
            if (!lastChecked) {
                findings.push({ filePath, line: i + 1, lastChecked: "missing" });
            } else {
                const date = new Date(lastChecked);
                if (isNaN(date)) {
                    findings.push({ filePath, line: i + 1, lastChecked: "invalid format" });
                    continue;
                }
                const monthsOld = monthsBetween(date, new Date());
                if (monthsOld >= MONTHS_THRESHOLD) {
                    findings.push({ filePath, line: i + 1, lastChecked });
                }
            }
        }
    });

    return findings;
}

async function createOrUpdateIssue(findings) {
   const octokit = new Octokit(); 
   const [owner, repo] = process.env.GITHUB_REPOSITORY.split("/");

   const issueBody = [
    `### Evergreen image tags need review\n`,
    `The following images are over **${MONTHS_THRESHOLD} months old** or missing a \`lastChecked\` date:\n`,
    ...findings.map((finding) => `- \`${finding.filePath}\`: line ${finding.line} - lastChecked: **${finding.lastChecked}**`),
    "\nPlease review and update these images or confirm they are still current."
   ].join("\n");

   const existing = await octokit.rest.issues.listForRepo({
    owner,
    repo,
    state: "open"
   });

   const existingIssue = existing.data.find((issue) => issue.title === ISSUE_TITLE);

   if (existingIssue) {
    await octokit.rest.issues.update({
        owner,
        repo,
        issue_number: existingIssue.number,
        body: issueBody,
        labels: ISSUE_LABELS
    });
    console.log("✅ Created new evergreen issue.");
   }
};

(async function run() {
    try {
        const files = getAllMarkdownFiles(CONTENT_DIR);
        let allFindings = [];
        for (const f of files) {
            allFindings = allFindings.concat(checkFile(f));
        }

        if (allFindings.length === 0) {
            console.log("🎉 All evergreen tags are up to date!");
            return;
        }

        console.log(`Found ${allFindings.length} outdate/missing evergreen tags.`);
        await createOrUpdateIssue(allFindings);
    } catch (err) {
        console.error("❌ Error running evergreen check:", err);
        process.exit(1);
    }
})();