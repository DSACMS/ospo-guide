---
title: Usability Testing Guides
description: A set of guides on usability testing
permalink: /resources/usability-testing/
layout: layouts/page
section: resources
tags: ospo
eleventyNavigation:
  parent: ospo-resources
  key: ospo-resources-usabilitytesting
  order: 12
  title: Usability Testing Guides
sidenav: true
sticky_sidenav: true
subnav:
  - text: Packaging Python Projects
    href: '/resources/packaging/exporting-python-projects/'
  - text: Creating GitHub Repo Templates
    href: '/resources/packaging/github-repo-template-guide/'
  - text: Packaging JavaScript Projects
    href: '/resources/packaging/npm-packaging-guidelines/'
---

# Usability testing guide for repos

## Introduction

This guide serves as an instructional resource for open source hackers to conduct usability testing for a variety of purposes and audiences. This resource will include the following sections:

- **Intro:** The basics of usability testing: what it is, why it’s helpful for open source work, how to get started testing, etc.
- **Recruitment/Outreach:** Tips and notes for getting participants to interview/test with
- **Template: Usability Testing Interview Script:** Sample interview script for a usability testing session
- **Template: Notetaking:** Sample notetaking template for capturing insights during a session
- **Template: Survey:** Sometimes usability testing includes short surveys at the end of sessions where participants were asked to complete tasks to evaluate different aspects of those tasks

Please note that this guide and its contents are platform-agnostic.

## What is usability testing?

Usability testing is one kind of user testing, which is an essential part of technology development. Sometimes, the term “usability testing” is used interchangeably with “user testing.”

[Nielsen Norman](https://www.nngroup.com/), a top design firm, defines usability testing as when  
“a researcher (called a “facilitator” or a “moderator”) asks a participant to perform tasks, usually using one or more specific user interfaces. While the participant completes each task, the researcher observes the participant’s behavior and listens for feedback.”

## Why should repositories undergo usability testing?

A key value of open source culture is the belief that software should be public and open, allowing anyone to collaborate on code, and that this open exchange creates community-driven improvements and innovation. In this non-hierarchical environment, anyone can be a contributor, and respect for other contributors (and future contributors\!) is shown, in part, by rigorous documentation of actions, steps, and review for a given repository.

Usability testing can also be an important part of upkeep of repositories, sites, and products. When building a repository or site, it’s important to validate and verify its ease of use for other users, which could be other community members or end-users of the product at hand. Open source hackers can find value in testing to see if users find the experience, navigation, and actions on the site intuitive. **If anyone should be able to contribute to an open source project, then that project should also be accessible and usable by anyone.**

## What do you need for observation-based usability testing on a repo?/ How do you build a usability testing plan?

Preface: This guide assumes that

- Research will occur virtually
- Researchers are interested in qualitative, observation-based usability testing. Other types or techniques of usability testing include but are not limited to:
  - [Eye tracking](https://www.nngroup.com/articles/eyetracking-setup/)
  - [Unmoderated testing](https://www.nngroup.com/articles/unmoderated-usability-testing/)
  - [A/B testing](https://www.nngroup.com/articles/ab-testing/)
  - [Guerilla testing](https://www.usertesting.com/blog/what-is-guerrilla-testing)
  - [Content Highlighter Testing](https://guides.18f.org/methods/validate/content-highlighter-testing/)
  - [Multivariate Testing](https://guides.18f.org/methods/validate/multivariate-testing/)
  - [Visual Preference Testing](https://guides.18f.org/methods/validate/visual-preference-testing/)

Observation-based usability testing involves three key components:

1. The interviewer
2. Tasks/activities
3. The interviewee

The interviewer will ask the interviewee to complete tasks/activities and answer questions about a site or section of site they would like to learn about. By asking the interviewee to complete tasks, interviewers can see in real time how someone might interact with the product, which can help identify challenges, areas of confusion, and also validate what actions are intuitive.

Checklist for usability testing:

- [ ] A quiet environment
- [ ] A laptop or desktop computer
- [ ] A lead interviewer
- [ ] A notetaker
- [ ] An observer/notetaker (OPTIONAL)
- [ ] Documents  
       - [ ] Interview/testing script, including tasks/activities and survey (if applicable)  
       - [ ] An informed consent form (if applicable)  
       - [ ] A notetaking document  
       - [ ] A data storage/disposal strategy, if applicable

## What are you capturing in usability testing?

- How the participant navigates the tasks, makes decisions, and completes their next steps
- Moments of confusion, hesitancy, or distraction
- How they react to certain prompts or other onscreen items

It might also be useful to capture relevant quantitative metrics, including

- Total time to complete a given task or flow
- Time spent on particular pages or screens
- Number of pages revisited
- Etc.

Many of these indicators are captured by way of observation – other takeaways, like how a participant comes to a decision and what their intuitions or points of confusion are, are shared verbally (in usability testing, participants are usually asked to think aloud).

## What makes a good task? How do you write a good task?

We recommend you review [Nielsen Norman’s guide to writing tasks](https://www.nngroup.com/articles/task-scenarios-usability-testing/).

## Who do you test with and how many people do you test with?

How many people to interview and what kinds of characteristics they represent should be part of your usability testing plan. The goals of your plan will depend on what you want to observe, test, and see, and on the project itself. It can be helpful to list characteristics of users to develop a user profile; for example:

_We are seeking users who:_

- _Are from different geographic areas of the US_
- _Etc. etc._

If your site/repo/product is public already, you may want to source community members as well as non-users of what you have produced. This helps ensure you are capturing initial impressions of your product in addition to those who have some level of familiarity with the testing material.

## Recruitment outreach

It can be helpful to prepare an outreach tracker and sample outreach language/documentation to make your messaging as simple as possible. Think about the right points of contact and start crafting some basic language.

For scheduling purposes, it might be helpful to use a calendaring system or tool to allow participants to “book” an open interview slot. It will likely be helpful to produce an outreach tracker to monitor progress for recruitment.

## After usability testing

Usability testing is one step towards making improvements to your product \- following the testing sessions, you should consider the following next steps:

- Conducting synthesis on your research findings
- Brainstorming and prioritizing potential interventions or changes
- Conducting necessary project hygiene \- make sure files are organized and sharing results of your learnings (post on the repo itself)
- Making the necessary tickets to see your changes implemented
- Repeat the process for additional development cycles\!

## ---

## Resources and reference materials:

- [Nielsen Norman Usability Research Guide](https://www.nngroup.com/articles/qual-usability-testing-study-guide/)
- [18F Usability Testing Methods](https://guides.18f.org/methods/validate/usability-testing/)
  - [Interview Checklist](https://guides.18f.org/ux-guide/interview-checklist/)
  - [Example Participant Agreement](https://guides.18f.org/ux-guide/participant-agreement/)
  - [Usability Test Script](https://guides.18f.org/ux-guide/usability-test-script/)
  - [Interview Debrief Guide](https://guides.18f.org/ux-guide/interview-debrief/)
  - [Usability Test Quality Heuristics](https://guides.18f.org/ux-guide/usability-test-quality-heuristics/)
- [10 usability heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/): helpful for developing questions and examining themes as you draft test material
