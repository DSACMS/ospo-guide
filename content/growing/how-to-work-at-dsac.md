---
title: How to work at DSAC
description: Guides to working at the Digital Service at CMS
permalink: /growing/how-to-work-at-dsac/
layout: layouts/page
section: growing
tags: ospo
eleventyNavigation:
  parent: ospo-growing
  key: ospo-growing-how-to-work-at-dsac
  order: 4
  title: How to work at DSAC
sidenav: true
sticky_sidenav: true
---

## DSAC Engineering Handbook

This handbook serves as a guide for DSAC engineers, providing resources on CMS’ technology ecosystem, tools, and processes across DSAC and CMS teams! We crafted this document with an underlying goal: what does every DSAC engineer need to know to successfully work with technology at CMS?

Last updated: Feb 5, 2026

## Getting Started / Onboarding

To set up your local system and obtain access to all tools and environments, follow the onboarding tasks below:

* [DSAC Onboarding - CMS EMPLOYEES](https://docs.google.com/document/d/1Yf2A9vU0yDLxq6uhOFcWVdksrad-B0NrVUlT2RgqTUc/edit?tab=t.0#heading=h.k2wvtj754h1a)  
* [Developer Onboarding](https://github.cms.gov/DSAC/dev-onboarding) 

## Development Practices

### CMS GitHubs

There are various GitHub instances and organizations actively used at CMS.

**Public Github Organizations**
* [github.com/CMSGov](http://github.com/CMSGov)   
* OIT Enterprise: [github.com/CMS-Enterprise](http://github.com/CMS-Enterprise)  
* [github.com/Enterprise-CMCS](http://github.com/Enterprise-CMCS)  
* DSAC: [github.com/DSACMS](http://github.com/DSACMS)   
* [github.com/measureauthoringtool](http://github.com/measureauthoringtool) 

**Internal/Enterprise Instances**
* [github.cms.gov](http://github.cms.gov) 

### DSAC’s GitHub: DSACMS

DSAC owns [github.com/DSACMS](http://github.com/DSACMS) where all development for DSAC projects are located. 

**GitHub Management Policy**  
To oversee repository operations in DSACMS, the OSPO follows the GitHub Management Policy.  For more information on repository access, organization membership, and org-wide security settings, please refer to the policy below and/or contact the OSPO.  
[https://dsacms.github.io/ospo-guide/resources/github-management-policy/](https://dsacms.github.io/ospo-guide/resources/github-management-policy/) 

## Development Workflow Guidelines

Generally, DSAC repositories adhere to the following workflow standards to streamline collaboration.

**Branching**  
We follow the [GitHub Flow Workflow]([https://guides.github.com/introduction/flow/).

**Sending in PRs**  
When making pull requests, information specified in our [PULL\_REQUEST\_TEMPLATE.md](https://github.com/DSACMS/repo-scaffolder/blob/main/tier3/%7B%7Bcookiecutter.project_slug%7D%7D/.github/PULL_REQUEST_TEMPLATE.md%20) must be included. A set of checks (e.g. CodeQL, gitleaks, [OSPO workflows](https://github.com/DSACMS/repo-scaffolder/blob/main/docs/.github-directory.md#workflows%20)) will be run to verify contents of the code change.

### CMS Accounts

* Npm registry: [https://www.npmjs.com/org/cmsgov](https://www.npmjs.com/org/cmsgov)  
* Drupal: [https://www.drupal.org/centers-for-medicare-and-medicaid-services](https://www.drupal.org/centers-for-medicare-and-medicaid-services)  
* Hugging Face: [https://huggingface.co/HHS-Official](https://huggingface.co/HHS-Official)   
* OSPO’s pypi: [https://pypi.org/user/murt-cms-ospo/](https://pypi.org/user/murt-cms-ospo/)

## Tools

The OSPO has developed a comprehensive suite of tools to support project teams throughout their development lifecycle. These tools are designed to streamline workflows and promote best practices in open source and development.

### Want to create a new repository?

`repo-scaffolder` is a tool for creating new repositories that align with repository hygiene standards and best practices in US Federal open source development.

Visit: [https://dsacms.github.io/repo-scaffolder/](https://dsacms.github.io/repo-scaffolder/)

### Want to add GitHub actions to your repository?

`repo-scaffolder` contains reusable GitHub Action workflows that may be helpful for development and upkeep for your project’s repositories. Actions include auto-generating a [CHANGELOG.md](http://CHANGELOG.md), secret scanning using gitleaks, generating repository metadata, and more.

Visit: [https://github.com/DSACMS/repo-scaffolder/blob/main/docs/.github-directory.md\#workflows](https://github.com/DSACMS/repo-scaffolder/blob/main/docs/.github-directory.md#workflows) 

### Want to gain a better understanding of a repository’s history?

`repodive-tools` holds scripts and tools designed for assessing Git repositories. Its capabilities include running SCC, generating Gource logs, assessing  contributor resolution, and searching using GitHub.

Visit: [https://github.com/dsacms/repodive-tools](https://github.com/dsacms/repodive-tools) 

### Want a personal assistant?

`CMS Chat` is an AI chatbot developed by OIT to provide information about CMS, answer general knowledge questions, and assist with various tasks.

Visit: [cms.chat.gov](http://cms.chat.gov) 

### Want to learn more about open source at CMS?
`ospo-guide` serves as a one-stop shop for everything open source at CMS. Open to contributions\!

Visit: [https://dsacms.github.io/ospo-guide/](https://dsacms.github.io/ospo-guide/) 

### Want to see a glimpse of open source projects at CMS?
`metrics` contain reports detailing the activity, usage, and code composition of GitHub repositories throughout the CMS open source ecosystem.

Visit: [https://dsacms.github.io/metrics/](https://dsacms.github.io/metrics/) 

## AI Tools

### Want an AI workspace?

`JupyterHub`  is available for advanced users and data scientists. This is currently available through invitation only.

Visit: [https://aiworkspace.cms.gov](https://aiworkspace.cms.gov) 

### Want a personal assistant?

`CMS Chat` is a Claude chatbot developed by OIT with connections to CMS-specific knowledge sources to answer questions and assist with various tasks. It has the ability to process all PII, PHI, CUI as well as integrate with CMS Jira, Confluence, and CMS OneDrive/SharePoint.

Visit: [cms.chat.gov](http://cms.chat.gov) and login using your EUA credentials

`HHS ChatGPT` is an AI chatbot provided by HHS best used to assist with the following tasks: governance and policy discussions, OA/FISMA analysis, dashboard and metrics design, and complex problem-solving. It is strong at structured thinking, reasoning through tradeoffs, and providing context across systems.

*Be mindful of inputting sensitive data/PII/PHI in this platform as it is not protected – CMS Chat is best for this.

Visit: [chatgpt.com](http://chatgpt.com) and login using your CMS email address

`HHS Claude` is another chatbot provided by HHS. It has more Claude platform functionality than CMS Chat (e.g. projects, teams). It is most suitable for generating clear writing and working with large amounts of text whether it be drafting, summarizing, editing, and reviewing documents. 

*Be mindful of inputting sensitive data/PII/PHI in this platform as it is not protected  – CMS Chat is best for this.

Visit: [chatgpt.com](http://chatgpt.com) and login using your CMS email address

### Want a personal assistant on Google Workspace?
`Gemini` functionality is accessible through the CMS Google Pilot Workspace such as prompt-drive image generation in Google Drive and text editing in Google Docs.

### Want a personal assistant on Outlook?
`Microsoft Copilot` is best used for day-to-day productivity within Microsoft tools. It works well for in-workflow assistance rather than deep analysis (e.g. searching/summarizing your email, calendars, documents, etc). 

### Want a personal assistant on Slack?
`SlackAI` is already embedded in our CMS enterprise Slack, with limited functionality for summarizing specific channels/threads within set time ranges.


## Third Party Platforms & Services

**CMS Hybrid Cloud Hosting Services**  
CMS's cloud infrastructure platform built on AWS that provides essential cloud services including DNS, SMTP relay, SSL/TLS certificates, VPN, backups, VPC management, identity and access management (IAM), and security tools.

Visit: [https://cloud.cms.gov/](https://cloud.cms.gov/) 

**Synk**  
A security scanning tool for identifying vulnerabilities in code dependencies and container images. CMS uses it as part of their vulnerability management and security testing processes.

Visit: [https://snyk.io/](https://snyk.io/) 

**SonarQube**  
A code quality analysis platform used by CMS for software quality assurance. CMS provides access to SonarQube through their OC Tools Help Desk for static code analysis and identifying code quality issues in development projects.

**Jenkins**  
Jenkins is a continuous integration/continuous deployment (CI/CD) automation server.

**Wiz Cloud Security Platform**  
A comprehensive cloud security platform for identifying vulnerabilities, misconfigurations, and threats across cloud environments.

To get access to the tools above, reach out to OIT.

## Security

[Information Security and Privacy Group](https://cmsgovonline.sharepoint.com/sites/CMS-SharePoint-OIT-ISPG/SitePages/Home.aspx) (ISPG) is the premier security and privacy team at CMS, nestled in OIT. For an overview of security and privacy compliance at CMS, check out [security.cms.gov](https://security.cms.gov/). It includes information like:

* [Security Policies](https://security.cms.gov/topic/cms-policies-and-guidance) and what they mean  
* [Overview of “Authority to Operate”](https://security.cms.gov/learn/authorization-operate-ato) as well as links to how to sign up for different stages  
* [The Zero Trust Blog](https://security.cms.gov/search?ispg%5Bquery%5D=zero%20trust)  
* Different teams within ISPG such as who handles security incidents\!

Additionally, the CMS Hybrid Cloud also maintains a security team that works with ISPG to oversee the security of the infrastructure that teams build their applications on. They run a [security alerting and notification service](https://cloud.cms.gov/security-alerting-notification-service/) for the Cloud IaaS offerings, offer [security controls that teams can inherit](https://cloud.cms.gov/introduction-inheritable-controls/), and [provide security tooling](https://cloud.cms.gov/cms-approved-enterprise-security-tools-services/) to applications to facilitate their use.

**GitHub Action Workflows**  
The OSPO’s GitHub Action workflows include security checks and scans:

- Secret Scanning using [gitleaks.yml](https://github.com/DSACMS/repo-scaffolder/blob/main/tier3/%7B%7Bcookiecutter.project_slug%7D%7D/.github/workflows/gitleaks.yml)  
- [Github’s CodeQL](https://codeql.github.com/docs/codeql-overview/about-codeql/)

## Communities

### DSAC Eng CoP

Engineering CoP is where DSAC engineers come together to share project updates and best practices. Meetings are every other Friday at 10am ET/7am PT, before staff meeting.

### CMS

**Working Groups**

* [Zero Trust Ambassador Office Hour](https://security.cms.gov/learn/zero-trust#zero-trust-ambassador-program)  
* [CMS Cybersecurity Community Forum](https://confluenceent.cms.gov/spaces/ISPG/pages/266526827/CMS+Cybersecurity+Community+Forum+C3F)  
* SAS Conversion Working Group

**Slack Channels**  
Check out the slack channels below to learn more about CMS initiatives and stay informed on the latest news\!

* \#ai-community  
* \#cms-chat  
* \#cms-data-community  
* \#cms-ospo
* \#security\_community  
* \#c3-forum (Monthly security forum run by ISPG)  
* \#cms-cloud-security-forum (focused on CMS’ AWS Organization)

### Federal

**AI Community of Practice**   
GSA hosts an agency-wide AI CoP for advancing collaboration, enhancing workforce capacity, and supporting the integration of AI into mission delivery  
[https://www.gsa.gov/technology/government-it-initiatives/artificial-intelligence/ai-community-of-practice](https://www.gsa.gov/technology/government-it-initiatives/artificial-intelligence/ai-community-of-practice) 

## Resources

### Policies

Open Source Policy: [https://github.com/CMSgov/cms-open-source-policy](https://github.com/CMSgov/cms-open-source-policy)   
CMS Technical Reference Architecture: [https://tra.cloud.cms.gov/](https://tra.cloud.cms.gov/) 

### Help Desks

CMS IT Services: 
- [https://cmsitsm.servicenowservices.com](https://cmsitsm.servicenowservices.com)
_Website includes a Virtual Tech Lounge to get live remote help with computer issues_
- 1-800-562-1953
CMS Web Help Service Desk: [https://jira.cms.gov/servicedesk/customer/whsd](https://jira.cms.gov/servicedesk/customer/whsd)   
CMS Enterprise Agile Tools: [https://jiraent.cms.gov/servicedesk/customer/portal/4](https://jiraent.cms.gov/servicedesk/customer/portal/4)   
CMS Cloud Support Portal: [https://jiraent.cms.gov/plugins/servlet/desk/portal/22](https://jiraent.cms.gov/plugins/servlet/desk/portal/22)   
IDR Cloud Support Portal: [https://jiraent.cms.gov/plugins/servlet/desk/portal/24](https://jiraent.cms.gov/plugins/servlet/desk/portal/24) 

Having trouble finding the right help desk?  Try asking CMS Chat, it has a list of all of them.

### Other

* [IT Contracting Cookbook](https://confluenceent.cms.gov/spaces/DDCC/pages/37885970/IT+Contracting+Cookbook)  
* [DSAC Reading List](https://docs.google.com/document/d/1aSJfaiaZm7KXOrkKYctAnOAbAGbRUNH1BmG0gz5csi4/edit?tab=t.0#heading=h.yg0a1m3ekkzk)

## Contributing & Credits

### Making Contributions

This handbook is a living document maintained by the DSAC community. We welcome and encourage contributions from all engineers in DSAC to help keep this resource current, accurate, and comprehensive.

**What to Contribute**  
We're open to contributions including but not limited to:

* Add new tools, resources, or platforms relevant to DSAC engineers  
* Update outdated information, fix broken links  
* Share best practices from DSAC projects  
* Improve clarity and organization of existing content  
* Add examples, code snippets, resources, and use cases to help engineers hit the ground running faster

**How to Contribute**  
This guide is hosted in the CMS OSPO Guide repository located here. To contribute:

1. **Submit a Pull Request**: Follow the PR body, answering all questions to provide context about your contribution.  
2. **Review**: The handbook-approvers team, consisting of senior DSAC engineers and front office members, will review your PR. They may request changes or provide feedback.  
3. **Merge**: Once approved, your contributions will be merged and become part of the official handbook\!

**Maintainers**  
This handbook is maintained by the DSAC engineering community with core maintainers being [@natalialuzuriaga](https://github.com/natalialuzuriaga) & [@spopelka-dsac](https://github.com/spopelka-dsac). 

**Contact**  
For any questions:

* Drop a message in the \#dsac-eng slack channel  
* Bring up topics during the DSAC Eng CoP meetings  
* Reach out to a maintainer

### Credits

This handbook represents the collective knowledge and experience of the DSAC engineering community. We would like to give a special thanks to:

* All DSAC-ers, current and past, who have shared their expertise and feedback to form and build upon this document  
* DSAC Front Office for their vision and support in establishing this document as a foundational resource for DSAC Engineering  
* DSAC OSPO for developing and maintaining the tools and resources documented here
