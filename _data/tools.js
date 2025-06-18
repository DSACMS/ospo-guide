require('dotenv').config();
const fetch = require('@11ty/eleventy-fetch');
const { AssetCache } = require('@11ty/eleventy-fetch');

module.exports = async function () {
  const tools = {};

  const orgName = 'DSACMS';
  const perPage = 100;
  const page = 1;

  // Check cache
  let asset = new AssetCache(`tools_${orgName}`);

  if (asset.isCacheValid('1d')) {
    console.log("checking");
    return asset.getCachedValue();
  }

  try {
    // Fetch repositories
    const repoJson = await fetch(
      `https://api.github.com/orgs/${orgName}/repos?per_page=${perPage}&page=${page}`,
      {
        duration: '1d',
        type: 'json',
        fetchOptions: {
          headers: {
            'Authorization': `token ${process.env.GH_API_TOKEN}`,
            'Accept': 'application/vnd.github+json'
          }
        }
      }
    );
    // Extract all repository names
    const repoNames = repoJson.map(repo => repo.name);

    repoNames.forEach(async (repo) => {
      try {
        // Fetch code.json file from repository
        const json = await fetch(
          `https://api.github.com/repos/${orgName}/${repo}/contents/code.json`,
          {
            duration: '1d',
            type: 'json',
            fetchOptions: {
              headers: {
                'Authorization': `token ${process.env.GH_API_TOKEN}`,
                'Accept': 'application/vnd.github+json'
              }
            }
          }
        );

        // Decode code.json file
        const decodedContent = Buffer.from(json.content, 'base64').toString('utf-8');
        const codejson = JSON.parse(decodedContent);
        const tags = codejson.tags;

        // Add code.json object to data
        // Filter by status: only add tools in beta, production, or to be released
        if (['production', 'beta', 'release candidate'].includes(codejson.status.toLowerCase()) && tags.includes("featured")) {
          tools[repo] = codejson;
          console.log("repo added: ", repo);
        }
      }
      catch (e) {
        console.warn(`No code.json file in ${repo}, skipping...`);
      }
    });

  } catch (e) {
    console.log(`Unable to fetch repositories from ${orgName}`);
    console.log(e, 'error message');
  }

  return tools;
};