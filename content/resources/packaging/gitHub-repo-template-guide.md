---
title: Creating GitHub Repo Templates
description: 'Guidelines for publishing JavaScript projects as packages'
permalink: /resources/packaging/github-repo-template-guide/
layout: layouts/page
section: resources
tags: ospo
eleventyNavigation:
  parent: ospo-resources-packaging
  key: ospo-resources-packaging-exporting
  order: 2
  title: Creating GitHub Repo Templates
sidenav: true
sticky_sidenav: true
---

### **Phase 1: Initial Setup**

#### **Step 1: Fork and Clone the Repository**

1\. Go to the repository and fork it  
2\. Clone fork locally, git clone \`repo-name\` \`name-of-template\`  
3\. cd \`name-of-template\`  
4\. Set up remotes:
```shell
git remote add upstream `name-of-template`  
git remote -v  # Verify remotes are set up correctly
```

#### **Step 2: Create Frontend-Only Branch**

*  Create a new branch for frontend template
```shell  
git checkout -b frontend-template-v1
```

* Remove non-frontend files (adjust paths based on actual structure)  
```shell
rm  -rf backend  # If backend folder exists  
rm -rf docs/scripts  # Backend-specific scripts  
rm -rf .github/workflows/deploy.yml  # Backend deployment workflows
```

* Keep only frontend-related files:  
  * app/  
  * .github/workflows/   
  * Root files like .gitignore, [README.md](http://README.md)

#### **Step 3: Clean Up Frontend Directory Structure**

* Navigate to your frontend directory
```shell
cd app/
```
* Verify current structure  
```shell
ls -la
```
* Expected structure after cleanup:

```shell
app/
 ├── site/
 ├── src/
 ├── .eleventy.js
 ├── package.json
 ├── package-lock.json
 ├── postcss.config.js
 └── rollup.config.mjs
```

### **Phase 2: Template Preparation**

#### **Step 4: Create Template Documentation**

* Create files in your repository root:  
  * FILE: README.md (This replaces the existing README)  
* Install dependencies  
* Start development server  
* Open local server  
* Match project structure

## **Ensure Build Commands Work**
```shell
npm run start  #Development server with hot reload  
npm run build  #Production build (outputs to dist/)  
npm run prod  #Test production build locally  
npm run lint  #Check code quality  
npm run prettier  #Format code
```

## **Deployment**

### **Build for Production**
```shell
* cd app/  
* npm run build
```

### **Deploy**

* **GitHub Pages:** Push to gh-pages branch

### **Customization Checklist**

- [ ] Update app/site/\_data/ with your data sources  
- [ ] Modify app/site/index.liquid homepage  
- [ ] Customize app/src/css/ styling  
- [ ] Update app/.eleventy.js configuration if needed  
- [ ] Test build: npm run build  
- [ ] Update README.md for your project

## **Troubleshooting**

### **Common Issues**

* **Build fails:** Check Node.js version (requires 16+)  
* **Styles not loading:** Run npm run build:postcss  
* **JS errors:** Check npm run build:rollup

## **Verification Checklist**

After deployment, verify:

- [ ] Site loads at your URL  
- [ ] All CSS styles are applied  
- [ ] JavaScript functionality works  
- [ ] Images load correctly  
- [ ] Navigation works  
- [ ] Mobile responsiveness  
- [ ] Performance (run Lighthouse audit)