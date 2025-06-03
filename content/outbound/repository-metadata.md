---
title: Repository Metadata
description: 'Collecting repository metadata using code.json'
permalink: /outbound/repository-metadata/
layout: layouts/page
section: outbound
tags: ospo
eleventyNavigation:
  parent: ospo-outbound
  key: ospo-outbound-repositorymetadata
  order: 4
  title: Repository Metadata
sidenav: true
sticky_sidenav: true
---
In compliance with M-16-21 and the SHARE IT Act, agencies are required to publish metadata on all custom-developed code. The `code.json` metadata standard was established to standardize the collection of information about the agency's software projects. It is comprised of 41 fields that capture project identification, technical details, development status, agency/team information, and more to provide a comprehensive overview of each software project. For more detailed information on the specific fields and their definitions, you can refer to the [gov-codejson metadata documentation](https://github.com/DSACMS/gov-codejson).

The OSPO built [various tools](https://github.com/DSACMS/gov-codejson/blob/main/docs/procedures.md) to automate detecting, creating, and updating code.json files:
- [codejson-generator](https://github.com/DSACMS/codejson-generator): A form to generate code.json files
- [automated-codejson-generator](https://github.com/DSACMS/automated-codejson-generator): A GitHub Action for creating and updating code.json
- [repo-scaffolder](https://github.com/DSACMS/repo-scaffolder?tab=readme-ov-file#metadata-collection-using-codejson): Metadata creation using the CLI

Learn more:
- [gov-codejson](https://github.com/DSACMS/gov-codejson)
  - [Overview](https://github.com/DSACMS/gov-codejson/blob/main/docs/metadata.md#fields)
  - [Schemas](https://github.com/DSACMS/gov-codejson/tree/main/schemas)
- [SHARE IT Act](https://dsacms.github.io/share-it-act-lp/)