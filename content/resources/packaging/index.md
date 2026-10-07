---
title: Packaging Guides
description: A set of guides on creating software packages
permalink: /resources/packaging/
layout: layouts/page
section: resources
tags: ospo
eleventyNavigation:
  parent: ospo-resources
  key: ospo-resources-packaging
  order: 3
  title: Packaging Guides
sidenav: true
sticky_sidenav: true
subnav:
  - text: Packaging Python Projects
    href: '/resources/packaging/exporting-python-projects/'
  - text: Packaging JavaScript Projects
    href: '/resources/packaging/npm-packaging-guidelines/'
  - text: Creating GitHub Repo Templates
    href: '/resources/packaging/github-repo-template-guide/'
  - text: Creating Git Submodules
    href: '/resources/packaging/git-submodule-guide/'
---

### Below are guides related to packaging and publishing projects:

<ul class="packaging-list-style">
  {% for guide in subnav %}
    <li>
        <a class="packaging-style" href="{{ guide.href | url }}" >
          {{ guide.text }}
        </a>
    </li>
  {% endfor %}
</ul>
