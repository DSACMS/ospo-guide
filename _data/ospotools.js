const fs = require("fs");
const path = require("path");

module.exports = function () {
  const ospotools = [];


  const orgName = "DSACMS";
  const perPage = 5;
  const page = 1;

  // TODO: Add token due to rate limiting, without token it is 60 requests per hour
  // TODO: Consider using octokit?

    // Get repositories on DSACMS Github
  fetch(`https://api.github.com/orgs/${orgName}/repos?per_page=${perPage}&page=${page}`)
    .then(response => response.json())
    .then(repos => {
      repos.forEach(repo => {
        console.log(repo.name);
        // Grab code.json from each repo
        fetch(`https://api.github.com/repos/${orgName}/${repo.name}/contents/code.json`)
          .then(res => res.json())
          .then(codejson => {
            // The content is base64-encoded
            const decodedContent = atob(codejson.content);
            const json = JSON.parse(decodedContent); // Parse JSON string to object
            console.log("Parsed JSON:", json);
            console.log(`README for ${repo}:\n`, decodedContent);
          })
          .catch(err => console.error(`Could not fetch README for ${repo}:`, err));
      });
    })
    .catch(error => console.error("Error:", error));
  
  return ospotools
};