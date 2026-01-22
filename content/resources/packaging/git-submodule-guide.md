---
title: Creating Git Submodules
description: Guidelines for Git Submodules
permalink: /resources/packaging/git-submodule-guide/
layout: layouts/page
section: resources
tags: ospo
hideFromResources: true
eleventyNavigation:
  parent: ospo-resources-packaging
  key: ospo-resources-packaging-exporting
  order: 4
  title: Creating Git Submodule Projects
sidenav: true
sticky_sidenav: true
---

# **Git Submodules 101: A Practical Guide for Metrics**

## **What is a Git Submodule?**

A Git submodule is a way to include a Git repository inside another Git repository, while keeping their histories completely separate.

Example:

* **Without submodules**: Copy/paste code from one project into another. When the original updates, the copy doesn't automatically get those updates.  
* **With submodules**: Link to another repository. The code appears in the project, but lives in its own separate repository with its own version history.

## **Why Use Submodules for Metrics**

### **The Problem**

**Before submodules:**

```bash
metrics/ (one big repo)
├── app/ (frontend)
├── scripts/ (backend)
└── templates/ (backend)

The problem: We need two sites (internal and external) with the same frontend
```

If we copied the frontend into two repos, we'd have:

* Duplicate code to maintain  
* Bug fixes needed in two places  
* Feature updates needed in two places  
* Inconsistent UIs between internal and external sites

**After submodules:**

```bash
metrics-frontend/  (one source of truth)
└── app/

metrics-external/  (uses frontend)
├── scripts/
├── frontend/ → metrics-frontend (submodule)
└── templates/

metrics-internal/  (uses same frontend)
├── scripts/
├── frontend/ → metrics-frontend (submodule)
└── templates/
```

Now:

* ✅ Frontend code exists in ONE place  
* ✅ Update frontend once, both backends get it  
* ✅ Consistent UI across internal and external sites  
* ✅ Frontend can be developed and tested independently

---

## **How Submodules Work: The Technical Details**

### **What Gets Stored Where**

When you add a submodule, Git stores:

**In the parent repository (.git/):**

* A reference to the submodule repository URL  
* A specific commit SHA that the submodule should be at  
  * SHA \- Secure Hash Algorithm in Git is a unique, 40-character hexadecimal string that acts as a cryptographic checksum, serving as a unique identifier for a particular commit in a Git repository  
* Configuration in `.gitmodules` file

**In the working directory:**

* The actual submodule files (cloned from the other repo)

**What this means:**

* The parent repo doesn't contain the submodule's code  
* It only contains a "pointer" saying: "At this location, use this repository at this commit"  
* When you clone the parent, you need to tell Git to also fetch the submodule

### **The .gitmodules File**

After running \``` git submodule add` ``, Git creates a `.gitmodules` file:

```bash
[submodule "frontend"]
    path = frontend
    url = https://github.com/DSACMS/metrics_frontend.git
    branch = main
```

This tells Git:

* **submodule name**: "frontend"  
* **path**: Where to put it in your repo (the `frontend/` folder)  
* **url**: Where to clone it from  
* **branch**: Which branch to track (optional)

### **Commit References**

The parent repository tracks a specific commit of the submodule. When you look at `git status`:

```bash
$ git status
On branch main
Changes not staged for commit:
  modified: frontend (new commits)
```

This means:

* Your submodule has newer commits available  
* The parent is still pointing to an older commit  
* You need to decide if you want to update the reference

---

## **Common Submodule Commands for Daily Work**

### **Initial Setup (One Time)**

**Adding a submodule:**

```bash
git submodule add https://github.com/DSACMS/metrics_frontend.git frontend
git commit -m "Add frontend submodule"
git push
```

**Cloning a repo with submodules:**

```bash
# Option 1: Clone and get submodules at once
git clone --recursive https://github.com/DSACMS/metrics.git

# Option 2: Clone first, then get submodules
git clone https://github.com/DSACMS/metrics.git
cd metrics
git submodule update --init --recursive
```

### **Daily Development**

**Updating the submodule to latest:**

```bash
cd frontend
git pull origin main
cd ..
git add frontend
git commit -m "Update frontend submodule to latest"
git push
```

**Making changes to the submodule:**

```bash
cd frontend
git checkout -b feature/change
# Make the change changes
git add .
git commit -m "Add new feature"
git push origin feature/my-change
# Create PR in metrics_frontend repo
```

**After teammate updates the submodule:**

```bash
git pull
git submodule update --remote
```

---

## **Metrics Workflow**

### **Scenario 1: Fixing a Frontend Bug**

**Problem:** The navigation bar has a broken link

**Steps:**

```bash
# 1. Navigate into the submodule
cd metrics/frontend

# 2. Create a branch (best practice)
git checkout -b fix/nav-broken-link

# 3. Fix the bug in app/site/_includes/nav.liquid
# (edit the file)

# 4. Commit in the submodule
git add app/site/_includes/nav.liquid
git commit -m "Fix broken link in navigation"
git push origin fix/nav-broken-link

# 5. Create PR in metrics-frontend repo
# (go to GitHub and create PR)

# 6. After PR merges, update both backends
cd metrics/frontend
git checkout main
git pull origin main
cd ../..
git add frontend
git commit -m "Update frontend with nav fix"
git push

# Do the same for the metrics internal site
```

**Result:** Bug fixed once, both internal and external sites are fixed.

### **Scenario 2: Adding a New Data Source (Backend Only)**

**Problem:** Need to add OpenSSF scorecard data to external site

**Steps:**

```bash
# 1. Work in the backend repo
cd metrics (external)

# 2. Create feature branch
git checkout -b feature/add-ossf-scorecard

# 3. Add new Python script
# scripts/fetch_ossf_scorecard.py 

# 4. Update data generation to output to frontend
# Make sure script writes to: frontend/app/site/_data/ossf_scores.json

# 5. Test locally
python scripts/fetch_ossf_scorecard.py
cd frontend/app
npm start
# Verify data appears in UI

# 6. Commit backend changes only
cd ../..
git add scripts/
git commit -m "Add OpenSSF scorecard data fetching"
git push origin feature/add-ossf-scorecard

# 7. Create PR in metrics (external) repo
```

**Result:** New data added to external backend, frontend displays it automatically\!

### **Scenario 3: Frontend Needs New Data Structure**

**Problem:** Frontend wants to show commit frequency, but backend doesn't provide it yet

**Coordination needed:**

```bash
# Backend :
cd metrics (external)
git checkout -b feature/add-commit-frequency
# Add to scripts/refresh_metrics.py to generate commit_frequency.json
# Output to: frontend/app/site/_data/commit_frequency.json
git commit -m "Add commit frequency data generation"

# Frontend:
cd metrics_frontend
git checkout -b feature/show-commit-frequency
# Update app/site/index.liquid to display commit_frequency.json
git commit -m "Add commit frequency visualization"

# Both create PRs, test together, merge when ready
```

---

## **Understanding Submodule States**

### **The Three States**

1. **Uninitialized**: Submodule exists in `.gitmodules` but folder is empty

```bash
git submodule update --init
```

2. **Initialized but outdated**: Submodule folder has old commits

```bash
git submodule update --remote
```

3. **Up to date**: Submodule is at the commit the parent expects

```bash
# No action needed
```

### **Checking Submodule Status**

```bash
# In parent repo root
git submodule status

# Output examples:
-a1b2c3d frontend (heads/main)         # Uninitialized (minus sign)
 a1b2c3d frontend (heads/main)         # Initialized, up to date (space)
+a1b2c3d frontend (heads/main)         # Initialized, has new commits (plus)
```

---

## **Common Pitfalls and How to Avoid Them**

### **Pitfall 1: Forgetting to Initialize Submodules**

**Symptom:** You clone the repo and `frontend/` folder is empty

**Solution:**

```bash
git submodule update --init --recursive
```

**Prevention:** Always clone with `--recursive` flag:

```bash
git clone --recursive [repo-url]
```

### **Pitfall 2: Making Changes in Submodule but Not Committing**

**Symptom:** You edit files in `frontend/`, but changes disappear after `git submodule update`

**Why it happens:** Submodules are separate repositories. Changes in the submodule need to be committed in the submodule.

**Solution:**

```bash
cd frontend
git status  # See what changed
git add .
git commit -m "My changes"
git push origin [branch-name]
```

### **Pitfall 3: Submodule Shows as "Modified" but You Didn't Change It**

**Symptom:** \``` git status` `` shows \` `` modified: frontend (new commits)` ``

**Why it happens:** Someone else updated the submodule to a newer commit. Your local copy is behind.

**Solution:**

```bash
# Option 1: Update to the commit the parent expects
git submodule update

# Option 2: Update to latest and update parent
cd frontend
git pull origin main
cd ..
git add frontend
git commit -m "Update frontend submodule"
```

### **Pitfall 4: Detached HEAD State**

**Symptom:** You're in the submodule and Git says "You are in 'detached HEAD' state"

**Why it happens:** Submodules by default checkout a specific commit, not a branch.

**Solution:** Before making changes, always checkout a branch:

```bash
cd frontend
git checkout main
# or
git checkout -b feature/my-feature
```

### **Pitfall 5: Pushing Parent Before Submodule**

**Symptom:** You update the submodule reference in parent repo, but submodule changes aren't pushed yet. Teammates can't clone your work.

**Prevention:**

```bash
# Always push in this order:
cd frontend
git push origin [branch]  # Push submodule first
cd ..
git push origin [branch]  # Then push parent
```

---

## **Advantages of Submodule Structure**

### **For Metrics**

1. **Single Source of Truth**  
   * Frontend code lives in one place  
   * Bug fixes propagate to all backends  
   * UI consistency guaranteed  
2. **Independent Development**  
   * Frontend can work on UI without touching data logic  
   * Backend can work on data generation without touching UI  
   * Separate version control histories  
3. **Easy to Scale**  
   * Want a third backend (maybe for specific project types)? Just add the submodule  
   * No code duplication  
4. **Clear Separation of Concerns**  
   * `metrics_frontend`: "How do we display data?"  
   * `metrics (external)`: "What data do we show for public repos?"  
   * `metrics (internal)`: "What data do we show for private repos?"  
5. **Better Code Reviews**  
   * Frontend PRs only review UI/UX changes  
   * Backend PRs only review data generation logic  
   * Reviewers can focus on their area of expertise

---

## **Submodules vs Other Approaches**

### **Why Not Just Copy the Code?**

**Copying:**

```bash
metrics-data-external/
└── frontend/ (copied code)

metrics-data-internal/
└── frontend/ (copied code)
```

**Problems:**

* Fix a bug in one, manually copy to the other  
* UIs can drift apart over time  
* Double the maintenance work

### **Why Not Use npm Package?**

**npm package approach:**

```bash
npm install DSACMS/metrics_frontend
```

**Why we didn't:**

* Our frontend isn't just JavaScript, it's Liquid templates, Eleventy config, CSS  
* Need the full source for Eleventy to build  
* Submodules are simpler for full-stack apps  
* Don't need npm registry overhead

## **Quick Reference**

### **Essential Commands**

```bash
# Adding a submodule
git submodule add [url] [path]

# Cloning with submodules
git clone --recursive [repo-url]

# Initialize submodules in existing clone
git submodule update --init --recursive

# Update submodule to latest
cd [submodule-path]
git pull origin main
cd ..
git add [submodule-path]
git commit -m "Update submodule"

# Update all submodules to latest
git submodule update --remote

# See submodule status
git submodule status

# Work on submodule
cd [submodule-path]
git checkout -b feature/my-feature
# Make changes
git commit -m "My changes"
git push origin feature/my-feature
```

---

## **Learn More**

**Official Git Documentation:**

* [Git Submodules Book](https://git-scm.com/book/en/v2/Git-Tools-Submodules)

**Tips:**

* Always commit and push submodule changes before pushing parent repo  
* Use branches in submodules, avoid detached HEAD  
* Document submodule workflow in your README  
* Consider using \```git config submodule.recurse` true`` for automatic updates

---

## **Summary**

For Metrics:

* **metrics\_frontend** \= The reusable UI component  
* **metrics (external)** \= Backend that includes frontend as submodule  
* **metrics (internal**) \= Internal backend that includes the same frontend

This structure gives us:

* ✅ One frontend, multiple backends  
* ✅ Independent development workflows  
* ✅ Consistent UI across all sites  
* ✅ Clear separation of concerns  
* ✅ Easy maintenance and updates

Git submodules are perfect for this use case where we need to share a complete application (not just a library) across multiple parent projects while maintaining separate version histories.
