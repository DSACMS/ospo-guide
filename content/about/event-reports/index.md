---
title: Event Reports
description: Reports on conferences and events attended
permalink: /resources/event-reports
layout: layouts/page
section: about
tags: ospo
eleventyNavigation:
  parent: ospo-about
  key: ospo-about-event-reports
  order: 4
  title: Event Reports
sidenav: true
sticky_sidenav: true
subnav:
  - text: California Department of Technology Open Source Summit 2026
    href: '/about/event-reports/california-dpt-oss-2026/'
---

For conferences and events attended, the OSPO writes event reports with our takeaways:

<ul class="packaging-list-style">
  {% for report in subnav %}
    <li>
        <a class="packaging-style" href="{{ report.href | url }}" >
          {{ report.text }}
        </a>
    </li>
  {% endfor %}
</ul>
