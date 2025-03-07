---
title: Archiving Repositories
description: 'Guidance on archiving repositories'
permalink: /outbound/archiving-repositories
layout: layouts/page
section: outbound
tags: ospo
eleventyNavigation:
  parent: ospo-outbound
  key: ospo-outbound-archivingrepositories
  order: 7
  title: Archiving Repositories
sidenav: true
sticky_sidenav: true
---

Repositories that will no longer be maintained must undergo an end-of-life archival process. When a repository is archived, its issues, pull requests, code, labels, milestones, projects, wiki, releases, commits, tags, branches, reactions, code scanning alerts, comments and permissions become read-only.

Archival of a repository is not a failure, and it is not a bad thing. We archive our repositories to communicate clearly to, and manage the expectations of, current and prospective users and contributors. A unique function of a Federal public sector open source community is that we serve not only as contributors, but as Stewards. Projects are not valuable solely based upon the utility of their results or outputs, they reflect the record of our progress. Archives provide transparency, accountability, and attribution. Archives build trust, reduce duplicate work, and reduce risk. The work we do today, saved in our archived repositories, may allow historians to more accurately and completely understand how our work contributed to the story of our Nation.

## Considerations

_Based on TODOgroup's guide: <br /> [https://github.com/todogroup/guides/blob/master/shutting-down-an-open-source-project.md](https://github.com/todogroup/guides/blob/master/shutting-down-an-open-source-project.md)_

- Agency goals have changed
- Key person or team that headed the effort leaves
- Project performance metrics (e.g. participation, usage, adoption, updates) are declining based on your latest user data
- Maintenance status has changed (e.g. code is no longer being patched or updated by the community to resolve vulnerabilities)

# Repository Archival Checklist

## Review Metadata

In **code.json**:

1. Change **status** to **archival**.
2. Review all fields to ensure project metadata is correct and accurate.

## Review Repository

Repository Documentation can provide explicit statements about the status of a project or community. Communicating clearly, whether the project is active or inactive, is important.

Repository Issues and pull requests serve as a type of record of the decision making processes of a project, and can provide visibility into project history and intended or recommended future development. Deleting them outright is not recommended.

### Issues

- [ ] Review all issues.
  - [ ] Close fixed issues
  - [ ] Comment on unresolved issues
  - [ ] Label issues
  - [ ] Close issues as `won't fix` where applicable

### Pull-requests

- [ ] Review all pull requests.
  - [ ] Merge PRs that have no conflicts and pass all tests
  - [ ] Test and merge any Dependabot PRs that don't fail tests
  - [ ] Comment on any open PRs
  - [ ] Close any `'won't fix` PRs where applicable

### Update Repository Documentation

- [ ] Update README.md to include a note about archival
  - Sample Text:
    > "This project is now archived and no longer actively maintained. It has been archived to retain its contents for reference. Feel free to explore and fork the repository, but please note that updates or support will not be provided."

### Development

- [ ] Review [code quality](https://github.com/DSACMS/repo-scaffolder/blob/main/tier3/checklist.md#code-review)
- [ ] Review [commit history](https://github.com/DSACMS/repo-scaffolder/blob/main/tier3/checklist.md#review-commit-history)
- [ ] Resolve code scanning and security alerts (e.g. Dependabot, CodeQL)
- [ ] Review releases and tags (if applicable, Maturity Model Tier3+)
- [ ] Review project board
  - [ ] Apply an "archived" label to all columns or cards as necessary
  - [ ] Complete or close any open milestones
- [ ] Review wiki
  - [ ] Add a clear notice to home page about archival status
  - [ ] Check each page for completeness. Mark them as incomplete if necessary
- [ ] Review committer access
- [ ] CHANGELOG.md
  - [ ] Ensure this file outlines completed work and the project's final state
- [ ] Delete inactive branches

## Archiving a repository on DSACMS GitHub

_Based on_ [https://docs.github.com/en/repositories/archiving-a-github-repository/archiving-repositories#archiving-a-repository](https://docs.github.com/en/repositories/archiving-a-github-repository/archiving-repositories#archiving-a-repository)

In the repository's settings page, click on the **Archive this Repository** button located in the Danger Zone.

|                                                    Step 1                                                     |                                                            Step 2                                                             |
| :-----------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------: |
| {% image_with_class "assets/resources/img/archiving-repositories/archiving_example_1.png" "" "Danger Zone" %} | {% image_with_class "assets/resources/img/archiving-repositories/archiving_example_2.png" "" "Archiving Repository Window" %} |

## Archiving a repository on CMS-wide GitHub Organizations

To archive a repository on any CMS-wide GitHub Organizations, please submit a ticket to the respective IT Help Desk. The request visibility will be made private by default, so you will need to share with the ticket with project leads to obtain approvals.

#### CMSgov

Submit a request to the [CMS Web Help Service Desk:](https://jira.cms.gov/servicedesk/customer/whsd)
[https://jira.cms.gov/servicedesk/customer/portal/1/create/11](https://jira.cms.gov/servicedesk/customer/portal/1/create/11)

#### CMS-Enterprise

Submit a request to the [CMS Enterprise Agile Tools Service Desk:](https://jiraent.cms.gov/servicedesk/customer/portal/4)
[https://jiraent.cms.gov/servicedesk/customer/portal/4/create/183](https://jiraent.cms.gov/servicedesk/customer/portal/4/create/183)
