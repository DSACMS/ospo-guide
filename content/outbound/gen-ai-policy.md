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

## DSACMS Generative AI Policy

At DSACMS, AI tools *(LLMs, coding assistants)* are welcome as part of contribution workflow, but they don't change who's responsible for the code you submit.

In our repositories, Generative AI usage is outlined in [CONTRIBUTING.md](https://github.com/DSACMS/repo-scaffolder/blob/main/tier3/%7B%7Bcookiecutter.project_slug%7D%7D/CONTRIBUTING.md), which has a dedicated "AI Usage" section covering acceptable and unacceptable uses when contributing directly to repositories.

The guidelines below are organized around the core tenets we want every developer to hold when using Generative AI here at DSACMS.

## Guidelines

### Transparency and Disclosure

If AI is used in your work, explicitly state where and how it was used in your pull request.

- Acceptable: Using AI to gain understanding of existing code or to brainstorm solution ideas for an issue.
- Acceptable: Using AI to translate or proofread your comments or PR descriptions, as long as the wording stays as close as possible to what you originally wrote.

### Human in the Loop
Using mentioned above, using AI does not change who's responsible for the code you submit. A person remains accountable for their every contribution and AI does not act on the project's behalf unsupervised.

- Unacceptable: Using external AI tooling *(bots, agents)* to directly interacting with the project, including creating issues, opening PRs, or commenting on GitHub.

### Responsible Development and Code Quality
Using AI does not lower the bar and quality of your code contributions.

- Unacceptable: Submitting AI generated code you can't explain line by line to a developer, or using AI output without fully understanding it or verifying it's the correct approach
- Unacceptable: Using AI to increase the breadth of your contributions, such as spreading yourself across several projects at once. You provide more value by engaging deeply with one or two projects than shallowly with many.

### Review
The effort you put into a contribution should meet or exceed the effort it takes to review it. We want to reduce the number of extractive contributions coming in, since this takes valuable time and effort away from doing our work.

- Unacceptable: Submitting a PR where the effort you put in, such as writing a prompt, is less than the effort it would take a maintainer to review it. We can already write prompts or run automated tools ourselves and doing that directly is faster and more secure than reviewing a low effort PR.

Please refer to [Reducing the Risk of Extractive Contributions](#reducing-the-risk-of-extractive-contributions) section for additional guidance.


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