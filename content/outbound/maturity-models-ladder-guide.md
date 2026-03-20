---
title: Maturity Model Ladder Guide
description: Path of growth in the repository life cycle
permalink: /outbound/maturity-model-ladder-guide/
layout: layouts/page
section: outbound
tags: ospo
eleventyNavigation:
  parent: ospo-outbound
  key: ospo-outbound-maturitymodelladder
  order: 2
  title: Maturity Model Ladder Guide
sidenav: true
sticky_sidenav: true
---

Once repositories are created, they evolve over time as the codebase grows in size and complexity due to new code, documentation, and dependencies. The team often starts as a single or couple developers, then attracts users who not only seek to use the project but come with a willingness to make contributions to the project itself. The repository receives feedback in the form of issues, pull requests, and forum comments, thus structured workflows are needed for managing contributions. Soon, a community around the project is formed whose presence holds weight in influencing the direction and future of the project. 

The Maturity Model Ladder Guide seeks to capture the ways repositories grow on their open source journey. We explore how a repository can be set up with structures and workflows to support its evolving needs.

## Contribution Ladder

| Contribution Type | Description |
| ----- | ----- |
| **Share Repo (Outbound Contribution)** | This initial step involves sharing the project with a wider audience to attract potential contributors and users. |
| **Accepting Issues (Inbound Contribution)** | This is a crucial first step for receiving feedback and bug reports from the community. It allows users to start engaging with the project. |
| **Accepting Pull Requests (PRs)** | This is where collaborative coding begins. You can start by accepting PRs that are directly linked to existing issues. |
| **Accepting Roadmap Input** | As the project matures, you can open up the roadmap for community input, allowing contributors to help shape the future direction of the project. |
| **Accepting External Reviewers** | This involves inviting trusted community members to review code and other contributions, which helps to scale the project and improve quality. |
| **Accepting Community Governance** | At the highest level of maturity, a project can be governed with the community, by elected or appointed leaders from the contributor base. |

## Tier Progression Requirements

| Growing to Tier X | Must Have / Mandatory | Nice to have / Recommended |
| :---- | :---- | :---- |
| Tier 1 | Documentation: README, CONTRIBUTING, LICENSE, SECURITY Policy | Receiving issues |
| Tier 2 | Documentation: Community Guidelines, Code of Conduct Actively working in the open within small teams Innersource Receiving and accepting issues | Guidelines for writing PRs Guidelines for reviewing PRs Formal team structure |
| Tier 3 | Accepting Pull Requests Development Practices: Testing Suite Contributing guidelines enforced Team structure enforced | Documentation: Community Governance Contributor Ladder |
| Tier 4 | Documentation: Community Governance Accept Roadmap Input Accept External Reviewers Contributor Ladder Accept Community Governance Development Practices: Releases |  |

### Tier 0 → 1: Private to Public

***Share Repo (Outbound Contribution)**: Sharing the project with a wider audience to attract potential contributors and users*

The first step of a project on its open source journey is to share the repository publicly. This requires:

- a LICENSE  
  - Specifies the software’s terms of use. Generally, all federal projects follow CC0-1.0 / are public domain.  
- Base documentation to be in place  
  - README.md contains project information  
  - CONTRIBUTING.md contains ways to contribute to the project.  
  - SECURITY.md contains the security policy for reporting bugs  
  - COMMUNITY.md contains team information  
  - code.json file with project metadata as required by SHARE IT Act  
- Outbound review to check the repository’s contents  
  - Follow the [Tier 1 outbound checklist](https://github.com/DSACMS/repo-scaffolder/blob/main/tier1/checklist.md)

After addressing the tasks above, we can flip the switch on the repository, turning it from private to public. As a Tier 1 repository, it is considered a “one-time release” where the repository is designed to be viewable by a public audience. 

It is recommended for the repository to accept issues as a way to receive feedback from users. However, as a Tier 1 repository, it is made clear to the user that there is no expectation that the repository is maintained and updated in the future.

### Tier 1 → 2: One Time Release to Close Team Collaboration / Innersource

***Accepting Issues (Inbound Contribution)**: Receiving feedback and bug reports from the community, allowing users to start engaging with the project*

Tier 2 is a step up from Tier 1, going from no/minimal activity in the repository to regularly shipping code. A dedicated small team is spearheading the development of the project where they are working in the open —either publicly or inside their organization’s firewall (innersource). As the project grows, users start to engage with the project through asking questions, filing bug reports, suggesting feature improvements and providing overall feedback. It is important for the team to set up practices and structures for managing engagement:

- Receiving and accepting issues  
- Documentation
  - COMMUNITY.md and CODE\_OF\_CONDUCT.md contains community guidelines

It is recommended for the repository to accept pull requests as a way to receive feedback from users. However, as a Tier 2 repository, it is made clear to the user that development is owned by the project team.

### Tier 2 → 3: Innersource to Working in the Open

***Accepting Pull Requests (PRs):** This is where the collaborative coding begins. You can start by accepting PRs that are directly linked to existing issues.*

Tier 3 is different from Tier 2 in that it receives and encourages outside contributions from the community. Still, the project is ultimately agency-led/owned. The repository’s infrastructure is set up for external users to contribute:

- Contributors can create pull requests that fix bugs or implement features based on existing issues filed in the repository  
- Contributing guidelines are heavily enforced. For pull requests to be accepted and merged, they must align with requirements dictated in CONTRIBUTING.md 
- A testing suite is essential to ensure contributions does not have breaking changes  
- Core team members, maintainers and codeowners are formally assigned and listed

With external users playing a more involved role in the repository, it is recommended for the repository to have a GOVERNANCE.md file, dictating the project’s governance structure.

### Tier 3 → 4: Community Governance

***Accepting Roadmap Input:** As the project matures, you can open up the roadmap for community input, allowing contributors to help shape the future direction of the project.*

***Accepting External Reviewers:** This involves inviting trusted community members to review code and other contributions, which helps to scale the project and improve quality.*

***Accepting Community Governance:** At the highest level of maturity, a project can be governed with the community, by elected or appointed leaders from the contributor base.*

A tier 4 repository is a mature open source project with shared ownership between the agency and its active user community. Trusted members of the community are invited to hold formal positions in the repository where they can assist the core team with development of the repository as well as influence the roadmap.

- Documentation  
  - GOVERNANCE.md dictates the project’s governance structure establishing how the project is managed collaboratively with its community  
- Contributor Ladder  
  - Contributor, Maintainer, and Alumni roles are fulfilled by the community to assist the project team with development and maintenance  
- Roadmap Input  
  - The roadmap is made public. Community input is welcome to shape the direction and future of the project  
- Communication channels  
  - Usage of wikis, slack channels, and forums to host and promote discussions about the project  
- Releases and versioning are essential to the project, providing a stable history of the project  
  - Follow [release guidelines](https://github.com/DSACMS/repo-scaffolder/blob/main/release-guidelines-template.md)