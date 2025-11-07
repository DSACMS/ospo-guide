---
title: Packaging JavaScript Projects
description: 'Guidelines for publishing JavaScript projects as packages'
permalink: /resources/packaging/npm-packaging-guidelines/
layout: layouts/page
section: resources
tags: ospo
hideFromResources: true
eleventyNavigation:
  parent: ospo-resources-packaging
  key: ospo-resources-packaging-exporting
  order: 3
  title: Packaging JavaScript Projects
sidenav: true
sticky_sidenav: true
---

# NPM Packaging Guidelines

## **Prerequisites**

* Node.js and npm installed  
* Basic knowledge of HTML, CSS, and JavaScript  
* Your frontend library code ready

## **Steps**

#### Step 1: Prepare Your Project Structure

* Create a new directory for the package:
```shell
mkdir my-frontend-lib  
cd my-frontend-lib
```

* Set up the basic folder structure:
```shell
my-frontend-lib/
├── src/
│   ├── index.js
│   ├── styles.css
│   └── components/
├── examples/
├── package.json
├── README.md
└── .gitignore
```

#### Step 2: Initialize the Package

* Run npm init and answer the prompts:
```shell 
npm init - y
```

#### Step 3: Configure package.json

* Edit your **`package.json`** to include these essential fields

#### Step 4: Create Your Library Entry Point

* Create **`src/index.js`** as your main entry point

#### Step 5: Add Your Styles

* Create **`src/styles.css`**

#### Step 6: Create Documentation

* Write a comprehensive **`README.md`**

#### Step 7: Create `.gitignore`

#### Step 8: Test Locally

* Before publishing, test your package locally

#### Step 9: Publish to NPM

* First, create an npm account at [npmjs.com](http://npmjs.com)  
  * Follow instructions

#### Step 10: Version Management

* Commands for updates
```shell  
npm version patch   #For bug fixes  
npm version minor  #For new features  
npm version major  #For breaking changes  
npm publish  #Then publish the update
```

## **Common Mistakes**

* Don't include \`node\_modules\` in your package  
* Don't publish sensitive information  
* Always test before publishing  
* Don't break existing APIs without major version bump  
* Include all necessary files in the files array