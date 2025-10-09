---
title: Beginner Guide to Creating GitHub Repos
description: 'A glossary of definitions for frequently asked words and phrases'
permalink: /resources/beginner-guide-github-repos/
layout: layouts/page
section: resources
tags: ospo
eleventyNavigation:
  parent: ospo-resources
  key: beginner-guide-github-repos
  order: 9
  title: Beginner Guide to Creating Repos
sidenav: true
sticky_sidenav: true
---

## **GitHub for Complete Beginners**

A step-by-step guide for creating a repository for people new to GitHub.

This guide is an optional companion to repo-scaffolder. If you’ve never used GitHub or the command line before, start here.

## 1. What is GitHub and a Repository?

* **GitHub** is a website where you can store and share project files.  
* A **repository (repo)** is like a project folder on GitHub. It contains files, history, and collaboration tools.  
* You’ll use **repo-scaffolder** to create a repo with the right structure for open source, but first, let’s cover the basics.

## 2. Two Ways to Create a Repository

### Option A: Web Browser - The Easy Way

1. Go to [GitHub.com](https://github.com) and log in.   
    - You will need a GitHub account  
2. Click the **\+** button (top right) → **New repository**. 
<img src="/assets/_common/_img/add-repo-button-screenshot.png"
    alt="Add a repo button"
    width="1090"
    data-evergreen="false"
    data-last-checked="2025-10-08" />

3. Give your repository a name (for example: `my-project`).  
4. Choose **Public**.
<img src="/assets/_common/_img/public-button-screenshot.png"
    alt="Public button"
    width="1090"
    data-evergreen="false"
    data-last-checked="2025-10-08" />

5. (Optional) Check **Add a README file**.  
6. Click **Create repository**.
<img src="/assets/_common/_img/create-repo-button-screenshot.png"
    alt="Create a repo button"
    width="1090"
    data-evergreen="false"
    data-last-checked="2025-10-08" />

Your repo now exists on GitHub\! 

### Option B: <span class="tooltip" data-tooltip="A command line interface (CLI) is a software mechanism you use to interact with your operating system using your keyboard.">The Command Line (CLI)</span>

If you’ll be using **repo-scaffolder**, you’ll need the command line. Think of it as a text only workspace where you type commands instead of clicking buttons.

#### Open your terminal:

* **Windows:** Install [Git for Windows](https://git-scm.com/download/win). Open **Git Bash**.  
* **macOS:** Open **Terminal** (Applications → Utilities → Terminal).  
* **Linux:** Press `Ctrl+Alt+T`.

#### Check that Git is installed:

```shell
$ git --version
```


You should see a version number. If not, install [Git](https://git-scm.com/downloads).

#### Create a local repo and connect it to GitHub:

1. Make a project folder and go inside it  
```shell
$ mkdir my-project
$ cd my-project  
```

2. Start a Git repo   
```shell
$ git init
``` 

3. Create a **README** file    
```shell
$ echo "# My Project" > README.md #Mac/Linux  
``` 
>OR

```shell 
$ echo # My Project > README.md #Windows PowerShell
```

4. Save it into **Git**  
```shell
$ git add README.md 
$ git commit -m "Initial commit" 
```

5. Connect to GitHub (replace USERNAME)  
```shell 
$ git branch -M main  
$ git remote add origin git@github.com:USERNAME/my-project.git
```

6. Upload (push) to GitHub  
```shell
$ git push -u origin main
```

Now your repo lives both on your computer and on GitHub.

## 3. Working with repo-scaffolder

Instead of building everything by hand, repo-scaffolder gives you templates and checklists that match open source best practices.

Once you’re comfortable with the terminal basics above, you can run:

```shell
$ cookiecutter https://github.com/DSACMS/repo-scaffolder --directory=tierX 
```

(where **`X`** is the maturity tier your project needs).

[Repo-scaffolder](https://dsacms.github.io/repo-scaffolder/) will walk you through questions, create the repo with the right files (like LICENSE, CONTRIBUTING, SECURITY.md), and help you meet open source requirements.

## 4. Using Repository Templates

Once you are comfortable creating repositories, you can use **repository templates** to set up a new project that meets open source and organizational requirements.

Each **maturity model tier** requires specific file and documentation, such as project information, security policies, licensing details, and contributing guidelines. These ensure transparency, collaboration, and long-term sustainability.

 To get started, use the tools provided in [repo-scaffolder](https://dsacms.github.io/repo-scaffolder/#repo-to-project) site to create a new project from a template.

 Additional guidance is available here, [repo-scaffolder](https://github.com/DSACMS/repo-scaffolder?tab=readme-ov-file#2-set-up-your-repository) GitHub - Learn how to generate a new repository using the correct tier.