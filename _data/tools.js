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
            'Authorization': `token ${process.env.GITHUB_TOKEN}`,
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
                'Authorization': `token ${process.env.GITHUB_TOKEN}`,
                'Accept': 'application/vnd.github+json'
              }
            }
          }
        );

        // Decode code.json file
        const decodedContent = Buffer.from(json.content, 'base64').toString('utf-8');
        const codejson = JSON.parse(decodedContent);

        // Add code.json object to data
        // Filter by status: only add tools in beta, production, or to be released
        if (['Production', 'Beta', 'Release Candidate'].includes(codejson.status)) {
          tools[repo] = codejson;
        }
      }
      catch (e) {
        console.warn(`Failed to fetch ${repo}, skipping...`);
      }
    });

  } catch (e) {
    console.log(`Unable to fetch repositories from ${orgName}`);
    console.log(e, 'error message');
  }

  return tools;
};