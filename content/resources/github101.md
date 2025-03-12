---
title: GitHub 101
description: 'Basic Git Terminology and GitHub Workflow overview'
permalink: /resources/github101/
layout: layouts/page
section: resources
tags: ospo
eleventyNavigation:
  parent: ospo-resources
  key: ospo-resources-github101
  order: 3
  title: GitHub 101
sidenav: true
sticky_sidenav: true
---

## Table of Contents

1. [Git Terminology](#git-terminology)
2. [GitHub Workflow: Making Changes to your Repository](#github-workflow-making-changes-to-your-repository)
3. [CMS-Specific GitHub Resources](#github-workflow-making-changes-to-your-repository)

## Git Terminology

_Taken from [GitHub Docs](https://docs.github.com/en/get-started/quickstart/github-glossary)_

### {% image_with_class "assets/resources/img/github101/repo_icon.png" "" "Repository" %} Repository

_Also known as “repo”_
A repository is the most basic element of GitHub. They're easiest to imagine as a
project's folder. A repository contains all of the project files (including documentation),
and stores each file's revision history. Repositories can have multiple collaborators and can be either public or private.

### {% image_with_class "assets/resources/img/github101/branch_icon.png" "" "Branch" %} Branch

A parallel version of a repository. It is contained within the repository, but does not affect the primary or main branch allowing you to work freely without disrupting the "live" version. When you've made the changes you want to make, you can merge your branch back into the main branch to publish your changes.

### Main Branch

The primary branch of all repositories. All committed and accepted changes should be on the master branch. You can work directly from the master branch, or create other branches.

### {% image_with_class "assets/resources/img/github101/commit_icon.png" "" "Commit" %} Commit

An individual change to a file (or set of files). When you make a commit to save your work, Git keeps a record of the specific changes committed along with who made them and when. Commits usually contain a commit message which is a brief description of what changes were made.

### {% image_with_class "assets/resources/img/github101/pull_request_icon.png" "" "Pull Request" %} Pull Request

_Also known as “PR”_
Proposed changes to a repository submitted by a user and accepted or rejected by a repository's collaborators.

### Pull Request Review

Comments from collaborators on a pull request that approve the changes or request further changes before the pull request is merged.

### {% image_with_class "assets/resources/img/github101/issue_icon.png" "" "Issue" %} Issue

Suggested improvements, tasks or questions related to the repository. Issues can be created by anyone (for public repositories), and are moderated by repository collaborators. Each issue contains its own discussion thread. You can also categorize an issue with labels and assign it to someone.

### {% image_with_class "assets/resources/img/github101/fork_icon.png" "" "Fork" %} Fork

A personal copy of another user's repository that lives on your account. Forks allow you to freely make changes to a project without affecting the original upstream repository. You can also open a pull request in the upstream repository and keep your fork synced with the latest changes since both repositories are still connected.

### {% image_with_class "assets/resources/img/github101/star_icon.png" "" "Star" %} Star

A bookmark or display of appreciation for a repository. Stars are a manual way to rank the popularity of projects.

### GitHub Repository Page

{% image_with_class "assets/resources/img/github101/github_repository_page.png" "" "GitHub Repository Page" %}

## GitHub Workflow: Making Changes to your Repository

_Taken from [GitHub Docs](https://docs.github.com/en/get-started/quickstart/hello-world)_

1. [Create a new branch](https://docs.github.com/en/get-started/start-your-journey/hello-world#creating-a-branch)

- The main branch serves as the primary branch for new pull requests and code commits.
- Everytime you’d like to make changes to your repository, create a new branch which is a copy from the main branch.

2. [Make your edits in the newly-created branch](https://docs.github.com/en/get-started/start-your-journey/hello-world#making-and-committing-changes)

- All your edits will be made under this new branch.
- Saved changes are called commits.
- When you create a commit, write a commit message, which is a description explaining why a particular change was made.

3. [Open a Pull Request](https://docs.github.com/en/get-started/start-your-journey/hello-world#opening-a-pull-request)

- When you open a pull request, you're proposing your changes and requesting that someone review and pull in your contribution and merge them into the specified branch.
- Pull requests show differences of the content from both branches. The changes, additions, and subtractions are shown in different colors.
- Reviewers start discussions on the proposed changes by commenting on the pull request. After a full review, they can either approve your pull request to merge or request for any edits.

4. [Merge the Pull Request](https://docs.github.com/en/get-started/start-your-journey/hello-world#merging-your-pull-request)

- Once your pull request has been reviewed and approved, merge in your pull request, resulting in your changes on your branch being incorporated into the main branch.

## Recommended GitHub Branch Workflow: Keeping Track of Many Pending Changes

### Merging A New Feature into a Development Branch

- When you want to implement a new feature into a repository, it is best practice to have a staging version of the code to test before it becomes the canonical version of the code
- This is why you should have a `dev` branch in addition to `main`
- New feature changes should be committed to `dev` for testing first before being merged into `main` when confidence is high it will not break production

#### Step-by-step Merging a feature into main

1. Person 1 clones repository to their local machine

2. Person 1 creates a new feature branch off of dev: `git checkout -b my-cool-new-feature`

3. Person 1 makes changes of some kind to the files

4. Person 1 Adds & commits the files: `git add -A && git commit -am "My new feature commit"`

5. Person 1 pushes the changes: `git push`

6. Person 1 creates a pull request from feature branch into dev, i.e. `my-cool-new-feature` will be merged into `dev`

7. Another Person, Person 2, will then review this pull request to judge whether the potential changes should be merged

8. Person 2 then merges the pull request

9. Later, after the `dev` branch has been tested and it is time to update `main` a pull request will be created to merge `dev` into `main`

10. The team will then review the resulting pull request and merge dev into main once they are satisfied with the state of `dev`

## CMS Specific GitHub Resources

Instructions on accessing CMS Cloud GitHubs (CMSGov & OIT-Enterprise):
[https://cloud.cms.gov/accessing-cms-cloud-github](https://cloud.cms.gov/accessing-cms-cloud-github)

Instructions on managing CMS Cloud GitHub repositories. Find guidance on creating repositories, configuring repositories, making pull requests to repositories:
[https://cloud.cms.gov/managing-cms-cloud-github-repositories](https://cloud.cms.gov/managing-cms-cloud-github-repositories)

List of Repositories on CMS Cloud Github:
[https://cloud.cms.gov/cms-cloud-github-repository-list](https://cloud.cms.gov/cms-cloud-github-repository-list)
