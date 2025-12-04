require('dotenv').config();
const fetch = require('@11ty/eleventy-fetch');

module.exports = async function () {
  const tools = {};

  const orgName = 'DSACMS';
  const perPage = 100;
  const page = 1;

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

    await Promise.all(repoNames.map(async (repo) => {
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
        const { status, tags } = codejson;

        // Add code.json object to data
        // Filter by tags: only add featured
        // Filter by status: only add tools in beta, production, or to be released
        if (tags.includes('featured') && ['Production', 'Beta', 'Release Candidate'].includes(status)) {
          tools[repo] = codejson;
        }
      }
      catch (e) {
        console.warn(`No code.json file in ${repo}, skipping...`);
      }
    }));

  } catch (e) {
    console.log(`Unable to fetch repositories from ${orgName}`);
    console.log(e, 'error message');
  }
  return tools;
};