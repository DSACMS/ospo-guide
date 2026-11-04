---
title: Event Reports
description: Reports on events attended
permalink: /events/reports/
layout: layouts/page
section: events
tags: ospo
eleventyNavigation:
  parent: ospo-events
  key: ospo-events-reports
  order: 1
  title: Reports
sidenav: true
sticky_sidenav: true
subnav:
  - text: California Department of Technology Open Source Summit 2026
    href: '/events/reports/california-dpt-oss-2026/'
---

The CMS Open Source Program Office shares reports from conferences and events across open source, healthcare, and civic technology. These reports capture key takeaways, lessons learned, and ideas to inform our work at CMS and support collaboration with the broader open source community:

<ul class="subnav-list-style">
  {% for report in subnav %}
    <li>
        <a class="subnav-style" href="{{ report.href | url }}" >
          {{ report.text }}
        </a>
    </li>
  {% endfor %}
</ul>
