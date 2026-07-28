---
title: Repo Diving Guide
description: Learn how to use repo-diving scripts to analyze repository metrics, history, contributors, and dependencies.
permalink: /inbound/repo-diving/
layout: layouts/page
section: inbound
tags: ospo
eleventyNavigation:
  parent: ospo-inbound
  key: ospo-inbound-repo-diving
  order: 4
  title: Getting Started with Repo Diving 
sidenav: true
sticky_sidenav: true
---
<!-- Intro -->
**Repo Diving** in this context refers to exploring a Git repository and gathering relevant information for a specific purpose. It is a powerful way to better understand software projects by collecting information about their code, contributors, dependencies, and development history.

Rather than manually inspecting repositories one at a time, the [**repodive-tools repository**](https://github.com/DSACMS/repodive-tools) provides a collection of CMS-developed scripts that orchestrate a variety of third-party tools to automate common repository analysis tasks. These scripts leverage existing utilities to collect repository metrics, metadata, dependency information, visualizations, and other insights across many repositories, making large-scale analysis significantly more efficient.

The following guide introduces each available tool, explains its purpose within the toolkit, outlines any required setup, and provides step-by-step instructions for running the associated scripts so you can incorporate them into your own workflows.

## Scripts Available

If needed, learn about the dependencies needed [here!](https://dsacms.github.io/ospo-guide/inbound/repo-diving/#installing-dependencies)

<!-- 1st Script -->
### Run SCC on repos
- run-scc-on-repos.sh

#### Overview

This script automates running **scc** across every repository in a GitHub organization. Instead of manually cloning each repository and executing **scc** one at a time, the script retrieves every repository through the GitHub API, clones any that are not already available locally, runs **scc** on each repository, and saves the resulting metrics as JSON reports for later analysis.

#### Prerequisites:
- Access to the configured GitHub Enterprise organization.
- A valid GitHub Enterprise Personal Access Token.
- Required dependencies **git, curl, jq, scc**.

#### Usage
1. Install all required dependencies
2. Set the required environment variables, including **`GITHUB_TOKEN`**
3. **./run-scc-on-repos.sh \<Directory to store GitHub code>**

#### Notes
- The SCC script clones repositories into the directory you specify.
- If the repository already exists in that directory, it will not be cloned again.
- Existing local clones can be reused when running other repodive scripts.
- SCC reports are generated as JSON files and stored in the **`scc_reports`** directory.

<!-- 2nd Script -->
### Gen Gource logs on Repositories
- gen-gource-logs-on-repos.sh

#### Overview

This script retrieves repositories from the configured GitHub organization, clones or updates them locally, generates a Gource custom log for each repository, and formats the logs so they can be combined into a single visualization of repository activity.

- The generated log files contain timestamped repository events (such as file additions, modifications, and deletions) that can later be combined and used by Gource to generate repository activity visualizations.

#### Prerequisites:
- Access to the configured GitHub organization.
- A valid GitHub Personal Access Token.
- Required dependencies **git, curl, jq, gource**.

#### Usage
1. Install all required dependencies
2. Set the required environment variables, including **`GITHUB_TOKEN`**
3. **./gen-gource-logs-on-repos.sh \<Directory to store GitHub code>**

#### Notes
- The gource script clones repositories into the directory you specify. If the repository already exists in that directory, it will not be cloned again. This is useful for if you want to re-use this directory to run the other scripts on it. 
- The script also makes sure to get the latest version of the local clone using **git pull**.
- Existing local clones can be reused when running other repodive scripts.
- Gource log files are generated for each repository and stored in the **gource_logs** directory.
- Each generated log is formatted so it can be combined with logs from other repositories for organization-wide visualizations.

<!-- 3rd Script -->
### Generate a Combined Contributor Breakdown 
- run-contrib-resolution.sh
- concat.sh

#### Overview
The first script generates a contributor report for each cloned Git repository using **git shortlog**. The second script combines those reports, adds together commit counts for matching contributor names and email addresses, and produces a sorted contributor breakdown across all repositories.

- This script assumes that all of the repositories have been cloned already.

#### Prerequisites:
- All target repositories must already be cloned into one directory.
- Required dependencies **git**.
- Required shell utilities, including **awk**, **cat**, **sort**, and **mktemp**, must be available.

#### Usage
1. Install all required dependencies
2. **./run-contrib-resolution.sh \<Directory with the GitHub Code already there>**
3. **Enter ctrl+d for any empty records that appear**
4. **./concat.sh**
5. Look at merged_output.txt and enjoy!

#### Notes
- run-contrib-resolution.sh saves one contributor report per repository in the shortlog_reports directory.
- Contributor identities are grouped by their exact name and email combination.
- merged_output.txt contains the combined contributor totals.
- shortlog-breakdown.txt contains the same totals sorted from highest to lowest.

<!-- Additional-->
## Additional Repository Analysis Techniques

### Using GitHub's Search Function to Find Project Dependants

A useful feature of GitHub is the search feature that you can find [here](https://github.com/search).

Using the search feature you can search projects that your GitHub account has permission to view and filter the results to your liking.

For example, you can search GitHub for projects that have a specific project as a dependency. This is known as searching for a project's dependants. This is done by using the **`path:`** keyword in order to filter the results that have a specific file in the results. Therefore, if you add the parameter **`path:package.json`** to your search you will search GitHub for Javascript project dependency files and you can search for projects that have a specific Javascript dependency this way. 

Here is an example of searching GitHub for projects that use the package **`@trussworks/react-uswds`**:
- [https://github.com/search?q=%40trussworks%2Freact-uswds+path%3Apackage.json+NOT+is%3Afork&type=code](https://github.com/search?q=%40trussworks%2Freact-uswds+path%3Apackage.json+NOT+is%3Afork&type=code)

You might also notice that there are some parameters added such as the parameter **`NOT is:fork`** which excludes projects that are a fork of other projects. You can 
also do additional parameters to further filter the results by categories such as org. To filter by organization you can add **`org:DSACMS`** [in order to only show
projects that belong to that organization](https://github.com/search?q=%40trussworks%2Freact-uswds+path%3Apackage.json++org%3Adsacms+NOT+is%3Afork&type=code).

To read more about the GitHub search feature from GitHub's official documentation you can get to that [here](https://docs.github.com/en/search-github/getting-started-with-searching-on-github/about-searching-on-github)

<!-- Extra guidance on dependencies -->
## Installing Dependencies

To first start be sure to download the following dependencies that are required for the scripts used later on:

[Install scc](https://github.com/boyter/scc)

**`scc`** is a command-line tool that analyzes a repository and reports code metrics such as lines of code, comments, and language breakdowns. 

[Install gource](https://github.com/acaudwell/Gource)

**`gource`** is a visualization tool for Git repositories (and other version control systems). Instead of showing you statistics like scc, it animates the history of a repository, showing how the project evolved over time.

[Install git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

**`git`** is a distributed version control system used to track changes, collaborate with others, and manage project history. It is required to clone repositories and contribute to development.

[Install curl](https://everything.curl.dev/install/index.html)

**`curl`** is a command-line tool for transferring data to and from servers using URLs. Developers commonly use it to download files, test APIs, and make HTTP requests from the terminal.

[Install jq](https://jqlang.org/download/)

**`jq`** is a command-line JSON processor. The repodive scripts use it to parse GitHub API responses and extract repository names and clone URLs.