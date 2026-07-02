---
title: Gen AI Usage Guidance in Software Development
description: Guidance for using Generative AI when developing tools at the CMS OSPO
permalink: /outbound/gen-ai-policy/
layout: layouts/page
section: outbound
tags: ospo
eleventyNavigation:
  parent: ospo-outbound
  key: ospo-outbound-genaipolicy
  order: 13
  title: Gen AI Usage Guidance in Software Development
sidenav: true
sticky_sidenav: true
---

## DSACMS Gen AI Policy
- Explicitly state where AI was used in PRs
- Never ship AI code you can’t explain line by line to a developer
- If the human effort put in a PR, e.g. writing LLM prompts, is less than the effort we would need to put to review it, please don't submit the PR. Think of it this way: we can already write LLM prompts or run automated tools ourselves, and that would be faster and more secure than reviewing external PRs.

## Pull Request Guidelines

### Example 1: Repositories that allow AI-generated contributions

We don’t accept PRs that:
- Don’t directly address an existing issue
- Touch more than X files at a time
- Contain more than Y commits
- Change core system files such as …
- Are untested / don’t pass our test suite / don’t pass our linters / don’t follow styleguide

- [ ] Generated AI was used in this contribution

If checked, please provide an explanation on how AI was used in the development of this pull request:

### Example 2: Repositories not accepting AI-generated pull requests
We don’t accept PRs that:
- Don’t directly address an existing issue
- Touch more than X files at a time
- Contain more than Y commits
- Change core system files such as …
- Are untested / don’t pass our test suite / don’t pass our linters / don’t follow styleguide
- Are entirely AI generated

We accept feedback in the form of issues for the following: bug reports, feature requests

## Reducing the Risk of Extractive Contributions
- Limiting PRs/contributions to existing tickets reduces the risk of "roadmap drift", where contributions take away limited time/energy/attention from the established priorities of the project.
- Limiting files and commits and file surface reduces the ‘splash radius’ and review time needed from a human.
- Test suite, linters, style guides ensure that contributions meet our requirements, do not introduce breaking changes, and keep a consistent voice/brand/culture.
- These are built to reduce extractive contributions from HUMANS first, and also limits extractive AI contributions as a side-effect.
- Turns reviews from a high-effort one-off evaluation into a checklist. Checklists are made for Humans. They create structured spaces for intentional, participatory transition that reduce cognitive and actual burden and effort.
- Machine-readable metadata can be derived from metrics, but human judgement prevails, and communication is human-readable, by and for people.
Templates for responding to extractive contributions can be copy-pasted and automated to encourage contributions that follow the guidelines, without the maintainers needing to custom-respond to every PR.
- It’s not humans versus machines, it’s clarity v.s. ambiguity.