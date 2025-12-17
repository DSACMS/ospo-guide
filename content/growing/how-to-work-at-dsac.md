---
title: How to work at DSAC
description: 'Guides to working at DSAC as an engineer'
permalink: /growing/how-to-work-at-dsac/
layout: layouts/page
section: growing
tags: ospo
eleventyNavigation:
  parent: ospo-growing
  key: ospo-growing-how-to-work-at-dsac
  order: 4
  title: How to work at DSAC
sidenav: true
sticky_sidenav: true
---

## DSAC Engineering Handbook

This handbook serves as a guide for DSAC engineers, providing resources on CMS’ technology ecosystem, tools, and processes across DSAC and CMS teams.

Last updated: Dec 17, 2025

## Getting Started / Onboarding

To set up your local system and obtain access to all tools and environments, follow the onboarding tasks below:

* [DSAC Onboarding - CMS EMPLOYEES](https://docs.google.com/document/d/1Yf2A9vU0yDLxq6uhOFcWVdksrad-B0NrVUlT2RgqTUc/edit?tab=t.0#heading=h.k2wvtj754h1a)  
* [Developer Onboarding](https://github.cms.gov/DSAC/dev-onboarding) 

## Development Practices

### CMS GitHubs

There are various GitHub instances and organizations actively used at CMS.

**Public Github Organizations**
* [github.com/CMSGov](http://github.com/CMSGov)   
* OIT Enterprise: [github.com/CMS-Enterprise](http://github.com/CMS-Enterprise)  
* [github.com/Enterprise-CMCS](http://github.com/Enterprise-CMCS)  
* DSAC: [github.com/DSACMS](http://github.com/DSACMS)   
* [github.com/measureauthoringtool](http://github.com/measureauthoringtool) 

**Internal/Enterprise Instances**
* [github.cms.gov](http://github.cms.gov) 

### DSAC’s GitHub: DSACMS

DSAC owns [github.com/DSACMS](http://github.com/DSACMS) where all development for DSAC projects are located. 

**GitHub Management Policy**  
To oversee repository operations in DSACMS, the OSPO follows the GitHub Management Policy.  For more information on repository access, organization membership, and org-wide security settings, please refer to the policy below and/or contact the OSPO.  
[https://dsacms.github.io/ospo-guide/resources/github-management-policy/](https://dsacms.github.io/ospo-guide/resources/github-management-policy/) 

## Development Workflow Guidelines

Generally, DSAC repositories adhere to the following workflow standards to streamline collaboration.

**Branching**  
We follow the [GitHub Flow Workflow]([https://guides.github.com/introduction/flow/).

**Naming Conventions for Commits**  
Commit messages use the following [list of verbs](https://keepachangelog.com/en/1.1.0/\#how?).

**Sending in PRs**  
When making pull requests, information specified in our [PULL\_REQUEST\_TEMPLATE.md](https://github.com/DSACMS/repo-scaffolder/blob/main/tier3/%7B%7Bcookiecutter.project_slug%7D%7D/.github/PULL_REQUEST_TEMPLATE.md%20) must be included. A set of checks (e.g. CodeQL, gitleaks, [OSPO workflows](https://github.com/DSACMS/repo-scaffolder/blob/main/docs/.github-directory.md#workflows%20)) will be run to verify contents of the code change.

### CMS Accounts

* Npm registry: [https://www.npmjs.com/org/cmsgov](https://www.npmjs.com/org/cmsgov)  
* Drupal: [https://www.drupal.org/centers-for-medicare-and-medicaid-services](https://www.drupal.org/centers-for-medicare-and-medicaid-services)  
* Hugging Face: [https://huggingface.co/HHS-Official](https://huggingface.co/HHS-Official)   
* OSPO’s pypi: [https://pypi.org/user/murt-cms-ospo/](https://pypi.org/user/murt-cms-ospo/)

## Tools

The OSPO has developed a comprehensive suite of tools to support project teams throughout their development lifecycle. These tools are designed to streamline workflows and promote best practices in open source and development.

### Want to create a new repository?

`repo-scaffolder` is a tool for creating new repositories that align with repository hygiene standards and best practices in US Federal open source development.

Visit: [https://dsacms.github.io/repo-scaffolder/](https://dsacms.github.io/repo-scaffolder/)

### Want to add GitHub actions to your repository?

`repo-scaffolder` contains reusable GitHub Action workflows that may be helpful for development and upkeep for your project’s repositories. Actions include auto-generating a [CHANGELOG.md](http://CHANGELOG.md), secret scanning using gitleaks, generating repository metadata, and more.

Visit: [https://github.com/DSACMS/repo-scaffolder/blob/main/docs/.github-directory.md\#workflows](https://github.com/DSACMS/repo-scaffolder/blob/main/docs/.github-directory.md#workflows) 

### Want to gain a better understanding of a repository’s history?

`repodive-tools` holds scripts and tools designed for assessing Git repositories. Its capabilities include running SCC, generating Gource logs, assessing  contributor resolution, and searching using GitHub.

Visit: [https://github.com/dsacms/repodive-tools](https://github.com/dsacms/repodive-tools) 

### Want a personal assistant?

`CMS Chat` is an AI chatbot developed by OIT to provide information about CMS, answer general knowledge questions, and assist with various tasks.

Visit: [cms.chat.gov](http://cms.chat.gov) 

### Want to learn more about open source at CMS?
`ospo-guide` serves as a one-stop shop for everything open source at CMS. Open to contributions\!

Visit: [https://dsacms.github.io/ospo-guide/](https://dsacms.github.io/ospo-guide/) 

### Want to see a glimpse of open source projects at CMS?
`metrics`  contain reports detailing the activity, usage, and code composition of GitHub repositories throughout the CMS open source ecosystem.

Visit: [https://dsacms.github.io/metrics/](https://dsacms.github.io/metrics/) 

## Third Party Platforms & Services
* Synk

## Security
TODO

**GitHub Action Workflows**  
The OSPO’s GitHub Action workflows include security checks and scans:

- Secret Scanning using [gitleaks.yml](https://github.com/DSACMS/repo-scaffolder/blob/main/tier3/%7B%7Bcookiecutter.project_slug%7D%7D/.github/workflows/gitleaks.yml)  
- [Github’s CodeQL](https://codeql.github.com/docs/codeql-overview/about-codeql/)

## Communities

### DSAC Eng CoP

Engineering CoP is where DSAC engineers come together to share project updates and best practices. Meetings are every other Friday at 10am ET/7am PT, before staff meeting.

### CMS

**Working Groups**

* SAS Conversion Working Group

**Slack Channels**  
Check out the slack channels below to learn more about CMS initiatives and stay informed on the latest news\!

* \#ai-community  
* \#cms-chat  
* \#cms-data-community  
* \#cms-ospo

### Federal

**AI Community of Practice**   
GSA hosts an agency-wide AI CoP for advancing collaboration, enhancing workforce capacity, and supporting the integration of AI into mission delivery  
[https://www.gsa.gov/technology/government-it-initiatives/artificial-intelligence/ai-community-of-practice](https://www.gsa.gov/technology/government-it-initiatives/artificial-intelligence/ai-community-of-practice) 

## Resources

### Policies

Open Source Policy: [https://github.com/CMSgov/cms-open-source-policy](https://github.com/CMSgov/cms-open-source-policy)   
CMS Technical Reference Architecture: [https://tra.cloud.cms.gov/](https://tra.cloud.cms.gov/) 

### Help Desks

CMS IT Services: [https://cmsitsm.servicenowservices.com](https://cmsitsm.servicenowservices.com)   
CMS Web Help Service Desk: [https://jira.cms.gov/servicedesk/customer/whsd](https://jira.cms.gov/servicedesk/customer/whsd)   
CMS Enterprise Agile Tools: [https://jiraent.cms.gov/servicedesk/customer/portal/4](https://jiraent.cms.gov/servicedesk/customer/portal/4)   
CMS Cloud Support Portal: [https://jiraent.cms.gov/plugins/servlet/desk/portal/22](https://jiraent.cms.gov/plugins/servlet/desk/portal/22)   
IDR Cloud Support Portal: [https://jiraent.cms.gov/plugins/servlet/desk/portal/24](https://jiraent.cms.gov/plugins/servlet/desk/portal/24) 

### Other

IT Contracting Cookbook: [https://confluenceent.cms.gov/spaces/DDCC/pages/37885970/IT+Contracting+Cookbook](https://confluenceent.cms.gov/spaces/DDCC/pages/37885970/IT+Contracting+Cookbook)  
[DSAC Reading List](https://docs.google.com/document/d/1aSJfaiaZm7KXOrkKYctAnOAbAGbRUNH1BmG0gz5csi4/edit?tab=t.0#heading=h.yg0a1m3ekkzk)
