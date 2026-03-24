---
title: Contributor Ladder
description: Guidelines for receiving contributions in open source repositories
permalink: /outbound/contributor-ladder/
layout: layouts/page
section: outbound
tags: ospo
eleventyNavigation:
  parent: ospo-outbound
  key: ospo-outbound-contributorladder
  order: 13
  title: Contributor Ladder
sidenav: true
sticky_sidenav: true
---

| Contribution Type | Description |
| ----- | ----- |
| **Share Repo (Outbound Contribution)** | This initial step involves sharing the project with a wider audience to attract potential contributors and users. |
| **Accepting Issues (Inbound Contribution)** | This is a crucial first step for receiving feedback and bug reports from the community. It allows users to start engaging with the project. |
| **Accepting Pull Requests (PRs)** | This is where collaborative coding begins. You can start by accepting PRs that are directly linked to existing issues. |
| **Accepting Roadmap Input** | As the project matures, you can open up the roadmap for community input, allowing contributors to help shape the future direction of the project. |
| **Accepting External Reviewers** | This involves inviting trusted community members to review code and other contributions, which helps to scale the project and improve quality. |
| **Accepting Community Governance** | At the highest level of maturity, a project can be governed with the community, by elected or appointed leaders from the contributor base. |

## Pull Request Guidelines

We don’t accept PRs that:
- Don’t directly address an existing issue
- Touch more than X files at a time
- contain more than Y commits
- Change core system files such as …
- Are untested / don’t pass our test suite / don’t pass our linters / don’t follow styleguide
- Are entirely AI generated

We accept feedback in the form of issues for the following: bug reports, feature requests

**Reducing the risk of Extractive Contributions**
- Limiting PRs/contributions to existing tickets reduces the risk of ‘roadmap drift’ where contributions take away limited time/energy/attention from the established priorities of the project.
- Limiting files and commits and file surface reduces the ‘splash radius’ and review time needed from a human.
- Test suite, linters, styleguides ensure that contributions meet our requirements, do not introduce breaking changes, and keep a consistent voice/brand/culture.
- These are built to reduce extractive contributions from HUMANS first, and also limits extractive AI contributions as a side-effect.
- Turns reviews from a high-effort one-off evaluation, into a checklist. Checklists are made for Humans. They create structured spaces for intentional, participatory transition, that reduce cognitive and actual burden and effort.
- Machine-readable metadata can be derived from metrics, but human judgement prevails, and communication is human-readable, by and for people.
Templates for responding to extractive contributions can be copy-pasted and automated to encourage contributions that follow the guidelines, without the maintainers needing to custom-respond to every PR.
- It’s not humans versus machines, it’s clarity v.s. ambiguity.