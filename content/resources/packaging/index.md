---
title: Packaging Guides
description: 'Packaging Guides'
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
    href: '/resources/packaging/exporting-python-projects'
  - text: Creating GitHub Repo Templates
    href: '/resources/packaging/github-repo-template-guide/'
  - text: Packaging JavaScript Projects
    href: '/resources/packaging/npm-packaging-guidelines/'
---

### Below are guides related to packaging and publishing projects:

<ul style="list-style: none; padding-left: 0;">
{% for guide in collections.packagingGuides %}
    <li>
        <style>
            #packaging-style:hover {
                background-color: #dfe1e2;
            }
        </style>
        <a href="{{ guide.url }}" id="packaging-style"
          style="text-decoration: none; font-size: 1.2rem; font-weight: 600;
          color: #046b99; padding: 1.5%"
        >
          {{ guide.data.title }}
        </a>
    </li>
{% endfor %}
</ul>