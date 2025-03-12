---
title: CMS OSPO Report - CVE-2024-3094 Backdoor in XZ
description: 'CMS OSPO Report on XZ Supply Chain Attack'
permalink: /resources/xz-supply-chain-attack/
layout: layouts/page
section: resources
tags: ospo
eleventyNavigation:
  parent: ospo-resources
  key: ospo-resources-xz
  order: 4
  title: XZ Supply Chain Attack
sidenav: true
sticky_sidenav: true
---

## What happened?

A supply chain attack, or a cyber attack aimed at breaking the weakest part of a software development process, on an important open source archival tool was discovered on March 29th, 2024. A backdoor, or alternative method of access, was added to some more recent versions of the xz tool that allowed an attacker to do RCE (Remote Code Execution) on specific machines that have ssh enabled. XZ is an immensely popular software that is used in file compression broadly.

Luckily, this attack did not affect many systems as it was caught before the changes were merged into their intended targets. Linux works as a grouping of specific programs and the specific groupings are called Linux distributions. The attack targeted specific distributions of Linux, an open source operating system, that used Debian or Red Hat style software packaging. The attack only made it into unstable versions of Debian and Fedora and were rolled back very quickly. The vulnerability was caught by a Microsoft employee that noticed that their ssh login attempts were taking longer than expected. SSH is a tool used for securely accessing computer systems remotely.

On further investigation of the person responsible for the attack, who goes by the alias ‘Jia Tan’, it seems that they showed a pattern of introducing compromising open source contributions into key projects. This person, or very likely a group of people with considerable resources, has spent years gaining the trust of key open source developers and projects. A key and most concerning example of a malicious contribution that ‘Jia Tan’ made was to the libarchive repository to change instances of a safe call to a function to an unsafe version of that function (printf). This persona has not shown activity since the attack was discovered.

## What does this mean for CMS systems?

This attack should not affect us in any major way. Any crucial systems that CMS is responsible for should not have been running experimental versions of Debian or Fedora using systemd services, and that is the only way key systems would be affected. Systems that do not use Systemd services, such as MacOS, would not be affected. Systemd is a system processing monitor and suite of tools that is only available for the Linux operating system.

Going forward, CMS should encourage the adoption of healthy standards such as:

- Code review
- Applying security scanning tools
- Isolation of build environments
- Ensuring that crucial systems maintained by contractors show compliance

This is part of CISA’s [secure by design](https://www.cisa.gov/securebydesign) initiative that is extremely relevant to this attack. Additionally, it is important to encourage the continued adoption of the CMS OIT Cybersecurity initiatives such as CMS (GRC) Governance Risk and Compliance.

## What does this mean for open source at CMS?

As an Open Source Program Office, it is largely our responsibility to foster practices that make attacks like this as difficult as possible. A key detail that allowed this attack to happen was an important open source project being poorly maintained. The xz project had only two people working on it and one of them turned out to be malicious. As an OSPO, it is important to establish practices that enforce swift detection and action towards projects that are poorly maintained. Additionally, the malicious actor also was allowed to alter the SECURITY.md file of the xz project to redirect to their personal email address. This is never something that should be allowed without review, and key stakeholders should be alerted if important files like the LICENSE or SECURITY.md are changed. [Automated checks](https://github.com/DSACMS/repo-scaffolder/blob/main/tier4/%7B%7Bcookiecutter.project_slug%7D%7D/.github/workflows/checks.yml) could have been used to raise suspicion sooner, such as linting tools to detect some of the more obviously malicious changes to important projects.

At a broader level, it is important to structure open source infrastructure in a way that doesn’t place too much pressure on one or a few maintainers while using the strengths of open source. This incident shows the strength of open source in the sheer number of barriers the malicious actor had to overcome in order to get as far as they did.

Additionally, this is something that the ongoing efforts of the CMS Source Code Stewardship Task Force (SCSTF) can help to prevent in the future. By cataloging these previously unknown projects and taking action in their maintenance we can greatly reduce the attack surface for these types of attacks in the future.

## What does this mean for open source more broadly?

This incident highlights both the strengths and weaknesses of open source at present. As per a [recent blog post from CISA](https://www.cisa.gov/news-events/news/lessons-xz-utils-achieving-more-sustainable-open-source-ecosystem): “We are fortunate that the open nature of the wider open source ecosystem allowed a developer to spot this supply chain compromise before it could cause much harm.”

The fact that the attack was so difficult to carry out and caught so quickly speaks to the strengths of the open source strategy of [many eyes](https://en.wikipedia.org/wiki/Linus%27s_law). However, the fact that the malicious code made it so far speaks to the lack of investment in open source maintenance. Additionally, it also shows emerging flaws in crowdsourced open source development lacking proper means to detect and prevent malicious trust-seeking behavior.

A key problem that open source software needs to solve is preventing people from creating the impression of being a trusted developer. New and established strategies for establishing trust need to be leveraged to make it more difficult for malicious actors to exist in the open source landscape. Strategies could include the use of GPG keys, Web of Trust, and other methods of establishing trust.

Overall, this incident shows the need for the increased propagation of healthy open source standards and practices. OSPOs should be a key part of this effort to identify and support sparsely maintained projects.

A key aspect of this attack that has been given more attention is open source maintainer burnout. Stakeholders in both the private and public sectors rely heavily on volunteer projects maintained by volunteers.

A problem that arises when studying open source software supply chains is something known as the “[Nebraska problem:](https://xkcd.com/2347/)” When a software project that is critical to most of the world’s software use-cases is poorly funded, poorly maintained, or poorly staffed, etc.

A needed solution is for stakeholders to pay more attention to the projects that they rely so heavily on to conduct business and fund grant and incentive programs to hire paid maintainers that will do needed work. Key experts in both open source and cybersecurity agree that increased investment in open source supply chain critical tools is needed. CISA agrees on their blog that “every technology manufacturer that profits from open source software must do their part by being responsible consumers of and sustainable contributors to the open source packages they depend on.”

## How do we foster a culture of open source security?

Luckily, we are not alone in our efforts to foster a culture of open source security. There are reputable groups in this area such as the Open Source Security Foundation [(OpenSSF)](https://openssf.org/) which help open software projects integrate healthy open source security practices into their development process.

The public sector also has a large role to play in fostering a culture of open source security more broadly. Many of the attacks from groups we see today have state actors levels of sophistication. This level of challenge cannot be easily addressed by individuals or private organizations alone and is best addressed in part by national efforts coordinated across sectors by organizations like CISA.

Moreover, as part of CISA’s secure by design initiative, no individual maintainer should be solely responsible for a project’s cybersecurity. The organizations and private individuals that benefit so much from open software must give back in order to ensure long-term safety and sustainability.

One key technique that projects can use to foster open source security includes passing badging and validation checks at vital points of infrastructure. Points of failure should be identified and monitored for unauthorized use or access. In addition, badges should be given out to projects that meet or exceed open source security standards. Badges such as the [OpenSSF scorecard](https://scorecard.dev/) badge can be used to quickly gauge the security practices of a project at a glance. Security in open source projects can be greatly increased through the use of identification of key components of a software solution that are monitored and validated for their resilience to attack.

It is important to recognize the distributed nature of open source software as well as the wide breadth of use cases found within the collective user base. Open source software is far from a monolith, and different projects will require different cybersecurity techniques and different metrics to gauge the health of the projects’ security practices. Monitoring and metrics for open source security should be designed around a risk-based model with minimal intervention needed from maintainers.

Moreover, identifying solutions based on risk and key vulnerable points can shed light on the looming threat of supply chain vulnerabilities. Both upstream and downstream metrics and awareness are needed in order to combat these modern threats to open source supply chain security.

Another important aspect of software security is trust. Trust is important when talking about software development both closed and open and is key to preventing another incident like the XZ backdoor. Large organizations such as CMS should monitor and be aware of the crucial open source projects that they depend on, constructing an OSS trust graph. It is important for CMS to know about the projects that they ship in and out of the organization.

## Glossary

**SSH (Secure Shell)**
A network protocol that provides users with a secure way to access a remote computer. SSH also refers to the suite of utilities that implement the protocol.

**Backdoor**
A method of bypassing normal authentication or securing unauthorized access to a computer. Backdoors can be installed by attackers or left by developers.

**CISA (Cybersecurity and Infrastructure Security Agency)**
A U.S. federal agency responsible for enhancing the security, resilience, and reliability of the nation's cybersecurity and infrastructure. CISA provides resources, tools, and information to protect against cyber threats.

**RCE (Remote Code Execution)**
A type of vulnerability that allows an attacker to execute arbitrary code on a remote machine over the network. RCE vulnerabilities can lead to complete system compromise and are considered very serious security issues.

**XZ**
An open source free software tool that allows the user to create and use data archives and compress data to be decompressed for later use. XZ was initially developed for Unix operating systems but is now also supported by Microsoft Windows.

**Repo (Repository)**
A software repository is a directory structure of files that together make

up all the needed information about a software project. Usually, repositories or repos have their edit and version history included in the form of a .git directory and have their changes tracked via git version control software.

**Git and Version Control**
Git is a suite of free software tools that let the user track the changes that take place in a given directory, known as a repo or repository. Git allows for different versions and branches of the same project to be created and worked on simultaneously.

**Dependency (Software Dependency)**
Software is complicated and it would be extremely difficult to create a piece of software that does everything that it needs to do without using anyone else’s software. Therefore, most developers rely on other pieces of software to help their software accomplish its purpose. For instance, Microsoft Excel cannot operate on its own without the help of an operating system such as MacOS or Microsoft Windows. Additionally, most software relies on common shared ‘libraries’ or sets of computer code to accomplish common tasks or solve common problems. The set of software that a piece of software relies on to run or accomplish its goal is called its dependencies.

**Software Supply Chain**
In order for users to have access to software, developers need to create some way to provide the deliverable product to the user. For this purpose, many systems exist that form software supply chains that deliver software as well as updates to that software to the user. For example, one of the most popular Linux distributions, Debian, has a trusted package management system known as apt (aptitude). This package management system allows the user of Debian Linux to download and update software through the command line through a trusted verified source. Software supply chains differ in their nature depending on use-case and maturity but the purpose is to deliver software to the user.

## Reviews and Reviewers:

- Isaac Milarsky
- Natalia Luzuriaga
- Andrea Fletcher
- Elizabeth Schweinsberg
- Alberto Colón Viera
- Remy DeCausemaker
- Ron Heft
- CMS Security Community Slack

## Additional Resources:

- [OpenWall: oss-security](https://www.openwall.com/lists/oss-security/2024/03/29/4)
- [JFrog Blog: XZ Backdoor Attack](https://jfrog.com/blog/xz-backdoor-attack-cve-2024-3094-all-you-need-to-know/)
- [RobMensching Blog](https://robmensching.com/blog/posts/2024/03/30/a-microcosm-of-the-interactions-in-open-source-projects/)
- [CISA News](https://www.cisa.gov/news-events/news/lessons-xz-utils-achieving-more-sustainable-open-source-ecosystem)
- [CISA Recommended Practices](https://www.cisa.gov/sites/default/files/2023-12/ESF_SECURING_THE_SOFTWARE_SUPPLY_CHAIN%20RECOMMENDED%20PRACTICES%20FOR%20MANAGING%20OPEN%20SOURCE%20SOFTWARE%20AND%20SOFTWARE%20BILL%20OF%20MATERIALS.pdf)
- [NPR: Open Source XZ Hack](https://www.npr.org/2024/05/17/1197959102/open-source-xz-hack)
