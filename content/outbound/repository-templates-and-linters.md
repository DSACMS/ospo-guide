---
title: Repository Templates & Linters
description: Guidance on CMS OSPO Repository Templates & Linters
permalink: /outbound/repository-templates-and-linters/
layout: layouts/page
section: outbound
tags: ospo
eleventyNavigation:
  parent: ospo-outbound
  key: ospo-outbound-repotemplateslinters
  order: 3
  title: Repository Templates & Linters
sidenav: true
sticky_sidenav: true
---

As part of our baseline repository hygiene standards, we require certain markdown files and documentation in the project based on their maturity model tier. 

{% image_with_class "assets/resources/img/outbound/maturity_model_trees_graphic_horizontal.png" "" "Maturity Model Tiers Summary" %}

Below are templates and linters that can used to start new projects or add to existing projects. Repo-scaffolder is a tool that can assist with adding this content to repositories:

| Tier   | Repository Template Link                                                                                    |
| ------ | ----------------------------------------------------------------------------------------------------------- |
| [Tier 0](https://github.com/DSACMS/repo-scaffolder/blob/main/tier0/README.md) | [Template](https://github.com/DSACMS/repo-scaffolder/tree/main/tier0/%7B%7Bcookiecutter.project_slug%7D%7D) |
| [Tier 1](https://github.com/DSACMS/repo-scaffolder/blob/main/tier1/README.md) | [Template](https://github.com/DSACMS/repo-scaffolder/tree/main/tier1/%7B%7Bcookiecutter.project_slug%7D%7D) |
| [Tier 2](https://github.com/DSACMS/repo-scaffolder/blob/main/tier2/README.md) | [Template](https://github.com/DSACMS/repo-scaffolder/tree/main/tier2/%7B%7Bcookiecutter.project_slug%7D%7D) |
| [Tier 3](https://github.com/DSACMS/repo-scaffolder/blob/main/tier3/README.md) | [Template](https://github.com/DSACMS/repo-scaffolder/tree/main/tier3/%7B%7Bcookiecutter.project_slug%7D%7D) |
| [Tier 4](https://github.com/DSACMS/repo-scaffolder/blob/main/tier4/README.md) | [Template](https://github.com/DSACMS/repo-scaffolder/tree/main/tier4/%7B%7Bcookiecutter.project_slug%7D%7D) |

Learn more:
- Repository Hygiene Requirements
  - [File Requirements by Tier](https://github.com/DSACMS/repo-scaffolder/blob/main/maturity-model-tiers.md#repository-file-content-requirements-by-tier)
  - [File Content Requirements by Tier](https://github.com/DSACMS/repo-scaffolder/blob/main/maturity-model-tiers.md#repository-file-content-requirements-by-tier)
- repo-scaffolder
  - [Get started on your repository using repo-scaffolder](https://dsacms.github.io/repo-scaffolder)
  - [Create a repository](https://github.com/DSACMS/repo-scaffolder?tab=readme-ov-file#know-what-maturity-tier-you-need)
  - [Add required files to an existing repository](https://github.com/DSACMS/repo-scaffolder?tab=readme-ov-file#update-an-existing-repository-using-repo-scaffolder)
