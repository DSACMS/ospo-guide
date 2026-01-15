# CMS Open Source Program Office Guide

ospo-guide is a collection of resources written by the CMS Open Source Program Office.
https://dsacms.github.io/ospo-guide/

What's in the guide:

- [Inbound](https://dsacms.github.io/ospo-guide/inbound/)
- [Outbound](https://dsacms.github.io/ospo-guide/outbound)
- [Growing](https://dsacms.github.io/ospo-guide/growing)
- [Resources](https://dsacms.github.io/ospo-guide/resources)
- [About](https://dsacms.github.io/ospo-guide/about)

# Digital Service at CMS (DSACMS)

We're a group of civic-minded technologists transforming how the federal government delivers healthcare to the American people. The Digital Service at CMS (DSAC) consists of engineers, designers, and product managers—serving our country by building and maintaining the technology underpinning our national health care programs.

# Centers for Medicare and Medicaid Services (CMS)

Every day, millions of people in this country interact with the healthcare system. We believe these interactions should be straightforward, transparent and seamless. Whether it's looking for health insurance, making sense of medical bills, or researching nursing homes, we are working to unlock medical information and empower people with health data.

- [76M people on Medicaid & CHIP](https://www.medicaid.gov/medicaid/program-information/medicaid-and-chip-enrollment-data/report-highlights/index.html) (2024)
- [67M people on Medicare](https://data.cms.gov/summary-statistics-on-beneficiary-enrollment/medicare-and-medicaid-reports/medicare-monthly-enrollment) (2024)
- [21M found insurance in ACA marketplace](https://www.cms.gov/newsroom/press-releases/historic-213-million-people-choose-aca-marketplace-coverage) (2024)

# What does the Digital Service at CMS do?

We work to transform the U.S. healthcare system by:

- Modernizing systems
- Improving the design of healthcare experiences
- Participating in policy development
- Delivering value to the government, healthcare providers, and patients

We accomplish these goals by bringing the best and brightest talent from industry and government to CMS for a "tour of duty." By collaborating closely with dedicated CMS career civil servants, our work includes everything from creating public websites to implementing new legislation in back-office systems. Learn more about our work [here.](https://www.cms.gov/digital-service)

# What does the Open Source Program Office (OSPO) at CMS do?

Establish and maintain guidance, policies, practices, and talent pipelines that advance equity, build trust, and amplify impact across CMS, HHS, and Federal Open Source Ecosystems by working and sharing openly.

## CMS OSPO in the News

- [Open Source and the Digital Service at CMS.gov - All Things Open 2022](https://www.youtube.com/watch?v=Q0EJIevZS0I)
- Whitehouse Open Source Software Security Initiative (OS3I) Supply Chain RFI
- [Innersource Summit 2023: Innersource to Open Source Journey in Government](https://innersourcecommons.org/events/isc-2023/)
- [Inside CMS’ Groundbreaking Open Source Program Office](https://www.youtube.com/watch?v=34LQnyB3ydQ)
- [Repodiving into Open Source at CMS.gov](https://www.youtube.com/watch?v=AypgQch2Qpk)
- [OSPOs in Highly Regulated Environments Panel Discussion @ Open Source Summit EU 2023](https://osseu2023.sched.com/event/1OGeo/panel-discussion-ospos-transition-paths-for-regulated-environments-ana-jimenez-santamaria-linux-foundation-maurice-hendriks-city-of-amsterdam-nico-rikken-alliander-clare-dillon-innersourcecommons-thomas-steenbergen-epam?iframe=no&w=100%&sidebar=yes&bg=no)
- TODOGroup OSPOlogy September 2023 Meeting
- OSPOs for Good Summit 2023 @ United Nations Headquarters NYC
- [PyCon May 2024](https://github.com/DSACMS/pycon-poster-2024/blob/main/repo-baselines.pdf)
- Code for America May 2024
- Open Source Summit North America (OSSNA) 2024
  - [Establishing a Repository Baseline](https://www.youtube.com/watch?v=v0aaVBicOjI)
  - [Repository Cohorts](https://www.youtube.com/watch?v=FpVNSAj9eDg)

## Acknowlegements

Our work is developed as a collaboration between the United States Digital Service (USDS.gov), The Department of Health and Human Services (HHS.gov), The Digital Service at the Centers for Medicare & Medicaid Services (CMS.gov), The USDigitalResponse.org, and other Federal Open Source Community Members.

Thank you all for your support and contributions.

# Development and Software Delivery Lifecycle

The following guide is for members of the project team who have access to the repository as well as code contributors. The main difference between internal and external contributions is that external contributors will need to fork the project and will not be able to merge their own pull requests. For more information on contributing, see: [CONTRIBUTING.md](./CONTRIBUTING.md).

## Local Development

The site uses 11ty. Ensure that you have the latest version of [Node](https://nodejs.org/en/download) installed.

To run the site locally:

1. Clone this repo
2. From the repo directory, run:
   ```sh
   npm install
   npm run dev
   ```
3. Open http://localhost:8080

## I’d like to make a contribution, how do I update this content?

We welcome contributions to be made to our resources. All are encouraged to suggest improvements that benefit the rest of the organization. To make a contribution to a document:

1. Find markdown file with document contents located in `/content`.
2. Make edits in a separate branch. Be sure to update `subnav` front matter if new sections are made.
3. Create a pull request with anyone in the OSPO team as reviewers as noted in [COMMUNITY.md](COMMUNITY.md).

## Coding Style and Linters

We use a github workflow in place that performs a number of tests on every pull request:

- Automated accessbility test with`pa11y-ci`
- Code linting with `eslint`
- HTML validation with `html-validate`
- Internal link checking with `check-html-links`

Additionally, we use `prettier` for code formatting.

## Branching Model

This project follows [trunk-based development](https://trunkbaseddevelopment.com/), which means:

- Make small changes in [short-lived feature branches](https://trunkbaseddevelopment.com/short-lived-feature-branches/) and merge to `main` frequently.
- Be open to submitting multiple small pull requests for a single ticket (i.e. reference the same ticket across multiple pull requests).
- Treat each change you merge to `main` as immediately deployable to production. Do not merge changes that depend on subsequent changes you plan to make, even if you plan to make those changes shortly.
- Ticket any unfinished or partially finished work.
- Tests should be written for changes introduced, and adhere to the text percentage threshold determined by the project.

This project uses **continuous deployment** using [Github Actions](https://github.com/features/actions) which is configured in the [./github/workflows](.github/workflows) directory.

Pull-requests are merged to `main` and the changes are immediately deployed to the production environment.

## Community

The ospo-guide team is taking a community-first and open source approach to the product development of this tool. We believe government software should be made in the open and be built and licensed such that anyone can download the code, run it themselves without paying money to third parties or using proprietary software, and use it as they will.

We know that we can learn from a wide variety of communities, including those who will use or will be impacted by the tool, who are experts in technology, or who have experience with similar technologies deployed in other spaces. We are dedicated to creating forums for continuous conversation and feedback to help shape the design and development of the tool.

We also recognize capacity building as a key part of involving a diverse open source community. We are doing our best to use accessible language, provide technical and process documents, and offer support to community members with a wide variety of backgrounds and skillsets.

### Community Guidelines

Principles and guidelines for participating in our open source community are can be found in [COMMUNITY.md](COMMUNITY.md). Please read them before joining or starting a conversation in this repo or one of the channels listed below. All community members and participants are expected to adhere to the community guidelines and code of conduct when participating in community spaces including: code repositories, communication channels and venues, and events.

## Feedback

If you have ideas for how we can improve or add to our capacity building efforts and methods for welcoming people into our community, please let us know at opensource@cms.hhs.gov. If you would like to comment on the tool itself, please let us know by filing an **issue on our GitHub repository.**

### Policies

### Open Source Policy

We adhere to the [CMS Open Source
Policy](https://github.com/CMSGov/cms-open-source-policy). If you have any
questions, just [shoot us an email](mailto:opensource@cms.hhs.gov).

### Security and Responsible Disclosure Policy

_Submit a vulnerability:_ Vulnerability reports can be submitted through [Bugcrowd](https://bugcrowd.com/cms-vdp). Reports may be submitted anonymously. If you share contact information, we will acknowledge receipt of your report within 3 business days.

For more information about our Security, Vulnerability, and Responsible Disclosure Policies, see [SECURITY.md](SECURITY.md).

### Public domain

This project is in the public domain within the United States, and copyright
and related rights in the work worldwide are waived through the [CC0 1.0
Universal public domain
dedication](https://creativecommons.org/publicdomain/zero/1.0/) as indicated in [LICENSE](LICENSE).

All contributions to this project will be released under the CC0 dedication. By
submitting a pull request or issue, you are agreeing to comply with this waiver
of copyright interest.
 
 ## About the Project 
<!-- This should be a longer-form description of the project. It can include history, background, details, problem statements, links to design documents or other supporting materials, or any other information/context that a user or contributor might be interested in. --> 
 
 ## Project Vision 
<!-- Provide the long-term goals and aspirations for this project. --> 
 
 ## Project Mission 
<!-- Provide the core mission and objectives driving this project. --> 
 
 ## Agency Mission 
<!-- Provide the mission of the agency and how this project aligns. --> 
 
 ## Team Mission 
<!-- Provide the team's mission and how they work together. --> 
 
 ## Core Team 
An up-to-date list of core team members can be found in [MAINTAINERS.md](MAINTAINERS.md). At this time, the project is still building the core team and defining roles and responsibilities. We are eagerly seeking individuals who would like to join the community and help us define and fill these roles. 
 
 ## Local Development 
<!--- TODO - with example below: 
This project is monorepo with several apps. Please see the [api](./api/README.md) and [frontend](./frontend/README.md) READMEs for information on spinning up those projects locally. Also see the project [documentation](./documentation) for more info. --> 
 
 ## Coding Style and Linters 
<!-- TODO - Add the repo's linting and code style guidelines --> 
 Each application has its own linting and testing guidelines. Lint and code tests are run on each commit, so linters and tests should be run locally before commiting. 
 
 ## Contributing 
Thank you for considering contributing to an Open Source project of the US Government! For more information about our contribution guidelines, see [CONTRIBUTING.md](CONTRIBUTING.md). 
 
 ## Codeowners 
The contents of this repository are managed by **{responsible organization(s)}**. Those responsible for the code and documentation in this repository can be found in [CODEOWNERS.md](CODEOWNERS.md). 
 
 ## Community Guidelines 
Principles and guidelines for participating in our open source community are can be found in [COMMUNITY_GUIDELINES.md](COMMUNITY_GUIDELINES.md). Please read them before joining or starting a conversation in this repo or one of the channels listed below. All community members and participants are expected to adhere to the community guidelines and code of conduct when participating in community spaces including: code repositories, communication channels and venues, and events. 
 
 ### Software Bill of Materials (SBOM) 
A Software Bill of Materials (SBOM) is a formal record containing the details and supply chain relationships of various components used in building software.
In the spirit of [Executive Order 14028 - Improving the Nation's Cyber Security](https://www.gsa.gov/technology/it-contract-vehicles-and-purchasing-programs/information-technology-category/it-security/executive-order-14028), a SBOM for this repository is provided here: https://github.com/{repo_org}/{repo_name}/network/dependencies.
For more information and resources about SBOMs, visit: https://www.cisa.gov/sbom.