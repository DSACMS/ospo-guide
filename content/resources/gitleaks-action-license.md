---
title: Gitleaks Action License
description: Navigate gitleaks license requirements for the GitHub action.
permalink: /resources/gitleaks-action-license/
layout: layouts/page
section: resources
tags: ospo
eleventyNavigation:
  parent: ospo-resources
  key: ospo-resources-gitleaksactionlicense
  order: 10
  title: Gitleaks Action License
sidenav: true
sticky_sidenav: true
---

# **Gitleaks GitHub Action License Requirements Explained**

This document addresses the difference in licensing requirements between **gitleaks/gitleaks-action** (version 2 and later) and **gacts/gitleaks**, specifically regarding the need for a license key when scanning repositories belonging to an organization.

# **Gitleaks Action v2 and Organization Licensing**

The official GitHub Action, **gitleaks/gitleaks-action** (v2 and newer), now requires a license key when used to scan repositories that belong to a GitHub organization.

Please note that if you are scanning repos that belong to an organization, you'll have to [acquire a `GITLEAKS_LICENSE`](http://gitleaks.io) to use v2 (free "Trial" license available).

This licensing change may be surprising to users who previously used Gitleaks-Action free of charge. The reasoning and context for this decision to monetize the project are fully detailed in an official blog post: \<[https://blog.gitleaks.io/gitleaks-llc-announcement-d7d06a52e801](https://blog.gitleaks.io/gitleaks-llc-announcement-d7d06a52e801)\>

The license key is passed to the action using the `GITLEAKS_LICENSE` environment variable.

# **Comparison with *gacts/gitleaks***

In contrast, the community-maintained GitHub Action, **gacts/gitleaks**, does not require a license key for use with organizations.

**gacts/gitleaks** typically wraps the Gitleaks binary itself but operates independently of the licensing structure introduced in the official **gitleaks/gitleaks-action** for organizational use. Users who prefer a zero-cost option for organization-wide scanning can often utilize community forks or alternative actions like **gacts/gitleaks**.

The difference in licensing reflects a divergence in the support and maintenance models for these two actions
