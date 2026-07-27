---
title: Repo Diving Guide
description: Short summary of the page
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

**Repo Diving** is a powerful way to better understand software projects by collection information about their code, contributors, dependencies, and development history. Rather than manually inspecting repositories one at a time, this toolkit provides a collection of scripts and tools that automate common analysis tasks and make it easier to gather insights across many repositories. 

The following guide introduces each avaliable tool, outlines any required setup, and provides step-by-step instructions for running them so you can begin using the repository in your own workflows. 





## Local Development
To run locally, please follow the instructions in [CONTRIBUTING.md](CONTRIBUTING.md) under Buidling the Project and Building Dependencies.


## Usage

Run SCC on repos:

    1. Make sure that scc is installed on your machine
    2. Set valid environment variables including GitHub token
    3. `./run-scc-on-repos.sh <Directory to store GitHub code>`

Note: The SCC script will clone the repositories in the directory that you specify. If the 
repository already exists in the directory then it will not download it again. This is useful 
for if you want to re-use this directory to run the other scripts on it. 

Gen Gource logs on repos:

    1. Make sure that gource is installed on your machine
    2. Set valid environment variables including GitHub token
    3. `./gen-gource-logs-on-repos.sh <Directory to store GitHub code`

Note: The gource script will clone the repositories in the directory that you specify. If the 
repository already exists in the directory then it will not download it again. This is useful 
for if you want to re-use this directory to run the other scripts on it. 


Run contributor resolution (rough):

    1. `./run-contrib-resolution.sh <Directory with the GitHub Code already there>`
    3. Enter ctrl+d for any empty records that appear
    4. `./concat.sh`
    5. Look at merged_output.txt and enjoy!


Note: this script assumes that all of the repositories have been cloned already.

### Using GitHub's Search Function to Find Project Dependants

A useful feature of GitHub is the search feature that you can find [here](https://github.com/search).

Using the search feature you can search projects that your GitHub account has permission to view and filter the results to your liking.

For example, you can search GitHub for projects that have a specific project as a dependency. This is known as searching for a project's dependants. This is done by
using the `path:` keyword in order to filter the results that have a specific file in the results. Therefore, if you add the parameter `path:package.json` to your search
you will search GitHub for Javascript project dependency files and you can search for projects that have a specific Javascript dependency this way. 

Here is an example of searching GitHub for projects that use the package `@trussworks/react-uswds`:

https://github.com/search?q=%40trussworks%2Freact-uswds+path%3Apackage.json+NOT+is%3Afork&type=code

You might also notice that there are some parameters added such as the parameter `NOT is:fork` which excludes projects that are a fork of other projects. You can 
also do additional parameters to further filter the results by categories such as org. To filter by organization you can add `org:DSACMS` [in order to only show
projects that belong to that organization](https://github.com/search?q=%40trussworks%2Freact-uswds+path%3Apackage.json++org%3Adsacms+NOT+is%3Afork&type=code).

To read more about the GitHub search feature from GitHub's official documentation you can get to that [here](https://docs.github.com/en/search-github/getting-started-with-searching-on-github/about-searching-on-github)


<!--
## Coding Style and Linters

TODO - Add the repo's linting and code style guidelines

Each application has its own linting and testing guidelines. Lint and code tests are run on each commit, so linters and tests should be run locally before committing.
-->

<!--
## Branching Model

TODO - with example below:
This project follows [trunk-based development](https://trunkbaseddevelopment.com/), which means:

* Make small changes in [short-lived feature branches](https://trunkbaseddevelopment.com/short-lived-feature-branches/) and merge to `main` frequently.
* Be open to submitting multiple small pull requests for a single ticket (i.e. reference the same ticket across multiple pull requests).
* Treat each change you merge to `main` as immediately deployable to production. Do not merge changes that depend on subsequent changes you plan to make, even if you plan to make those changes shortly.
* Ticket any unfinished or partially finished work.
* Tests should be written for changes introduced, and adhere to the text percentage threshold determined by the project.

This project uses **continuous deployment** using [Github Actions](https://github.com/features/actions) which is configured in the [./github/workflows](.github/workflows) directory.

Pull-requests are merged to `main` and the changes are immediately deployed to the development environment. Releases are created to push changes to production.
-->

<!--
## Contributing
Thank you for considering contributing to an Open Source project of the US Government! For more information about our contribution guidelines, see [CONTRIBUTING.md](CONTRIBUTING.md).
-->

<!--
## Codeowners
The contents of this repository are managed by **{responsible organization(s)}**. Those responsible for the code and documentation in this repository can be found in [CODEOWNERS.md](CODEOWNERS.md).
-->

<!--
## Community
The repodive-tools team is taking a community-first and open source approach to the product development of this tool. We believe government software should be made in the open and be built and licensed such that anyone can download the code, run it themselves without paying money to third parties or using proprietary software, and use it as they will.

We know that we can learn from a wide variety of communities, including those who will use or will be impacted by the tool, who are experts in technology, or who have experience with similar technologies deployed in other spaces. We are dedicated to creating forums for continuous conversation and feedback to help shape the design and development of the tool.

We also recognize capacity building as a key part of involving a diverse open source community. We are doing our best to use accessible language, provide technical and process documents, and offer support to community members with a wide variety of backgrounds and skillsets.
-->

<!--
### Community Guidelines
Principles and guidelines for participating in our open source community are can be found in [COMMUNITY_GUIDELINES.md](COMMUNITY_GUIDELINES.md). Please read them before joining or starting a conversation in this repo or one of the channels listed below. All community members and participants are expected to adhere to the community guidelines and code of conduct when participating in community spaces including: code repositories, communication channels and venues, and events.
-->

<!--
## Feedback
If you have ideas for how we can improve or add to our capacity building efforts and methods for welcoming people into our community, please let us know at **{contact email}**. If you would like to comment on the tool itself, please let us know by filing an **issue on our GitHub repository.**
-->

<!--
## Glossary
Information about terminology and acronyms used in this documentation may be found in [GLOSSARY.md](GLOSSARY.md).
-->
