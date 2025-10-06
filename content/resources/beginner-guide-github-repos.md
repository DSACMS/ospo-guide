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

## **1. What is GitHub and a Repository?**

* **GitHub** is a website where you can store and share project files.  
* A **repository (repo)** is like a project folder on GitHub. It contains files, history, and collaboration tools.  
* You’ll use **repo-scaffolder** to create a repo with the right structure for open source, but first, let’s cover the basics.

## **2. Two Ways to Create a Repository**

### **Option A: The Easy Way (Web Browser)**

1. Go to [GitHub.com](https://github.com) and log in.   
   1. You will need a GitHub account  
2. Click the **\+** button (top right) → **New repository**.  
3. Give your repository a name (for example: `my-project`).  
4. Choose **Public**.  
5. (Optional) Check **Add a README file**.  
6. Click **Create repository**.

Your repo now exists on GitHub\! 

### **Option B: <span class="tooltip" data-tooltip="A command line interface (CLI) is a software mechanism you use to interact with your operating system using your keyboard.">The Command Line (CLI)</span>**

If you’ll be using **repo-scaffolder**, you’ll need the command line. Think of it as a text only workspace where you type commands instead of clicking buttons.

#### **Open your terminal:**

* **Windows:** Install [Git for Windows](https://git-scm.com/download/win). Open **Git Bash**.  
* **macOS:** Open **Terminal** (Applications → Utilities → Terminal).  
* **Linux:** Press `Ctrl+Alt+T`.

#### **Check that Git is installed:**
 
`$ git --version`  


You should see a version number. If not, install [Git](https://git-scm.com/downloads).

#### **Create a local repo and connect it to GitHub:**

1. Make a project folder and go inside it  
    ```  
    $ mkdir my-project
    $ cd my-project  
    ```

2. Start a Git repo   

    `$ git init`  

3. Create a README file    

    `$ echo "# My Project" > README.md` - Mac/Linux  
  
    Or  
 
    `$ echo # My Project > README.md` - Windows PowerShell  

4. Save it into Git  
    ```
    $ git add README.md 
    $ git commit -m "Initial commit" 
    ```

5. Connect to GitHub (replace USERNAME)  
    ```
    $ git branch -M main  
    $ git remote add origin git@github.com:USERNAME/my-project.git
    ```

6. Upload (push) to GitHub  
    ``` 
    $ git push -u origin main
    ```

Now your repo lives both on your computer and on GitHub.

## **3. Working with repo-scaffolder**

Instead of building everything by hand, repo-scaffolder gives you templates and checklists that match open source best practices.

Once you’re comfortable with the terminal basics above, you can run:

```  
$ cookiecutter https://github.com/DSACMS/repo-scaffolder --directory=tierX 
```

(where **`X`** is the maturity tier your project needs).

[Repo-scaffolder](https://dsacms.github.io/repo-scaffolder/) will walk you through questions, create the repo with the right files (like LICENSE, CONTRIBUTING, SECURITY.md), and help you meet open source requirements.
