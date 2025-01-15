# **\[DRAFT\] Inbound Review Checklist**

## **Instructions**

This is a review process to approve open source software to be used in the agency. If you would like to use a specific software, please complete the following steps.

[Instructions](#instructions)

[Request Overview](#request-overview)

[Existing Products and Alternatives](#existing-products-and-alternatives)

[Software Evaluation \[BR-OSS-2\]](#software-evaluation-br-oss-2)

[Total Cost of Ownership \[BR-OSS-3\]](#total-cost-of-ownership-br-oss-3)

[License Compatibility \[BR-OSS-4\]](#license-compatibility-br-oss-4)

[Security Assessment](#security-assessment)

[Additional Notes & Questions](#additional-notes-&-questions)

[Sign off](#sign-off)

[Going Forward](#going-forward)

## **Request Overview**

### Software Information

Please provide the following information on the software:

|                                                     | Response |
| :-------------------------------------------------- | :------- |
| Name                                                |          |
| Intended Purpose                                    |          |
| Project associated with request                     |          |
| Software Type (OSS, Enterprise, Package, API, etc.) |          |

### Project & Team Information

Please provide the following information on the project and team:

|                                                                                           | Response |
| :---------------------------------------------------------------------------------------- | :------- |
| Who is using the software? *Is it all users or specific people? Provide a list of people* |          |
| Describe the project associated with the request                                          |          |

## **Existing Products and Alternatives**

According to Section 3.1 of the Source Code Policy:

In meeting their software needs, covered agencies must conduct \[a\] [three-step analysis](https://code.gov/agency-compliance/compliance/procurement/) \[…\] intended to leverage existing solutions – consistent with principles of category management and shared services – and suitable commercial solutions, while mitigating unnecessary spending on custom-developed software solutions.

### Conduct Strategic Analysis and Analyze Alternatives

It is important to conduct strategic analysis and alternatives analysis to determine whether to use an existing Federal software solution or to acquire or develop a new software solution.

**According to BR-OSS-1, products in use at CMS that provide the required functionality are preferred.** CMS prefers mature COTS and OSS products that have demonstrated successful implementation at or outside of CMS. The benefits must outweigh the risks of using new or unproven products. Like custom code, CMS business owners using OSS in a CMS application are responsible for its maintenance.

When evaluating alternatives, consider the following:

#### Existing CMS-approved software

- Are there other OSS or COTS products in use at CMS that can serve the same purpose as the OSS?

#### Commercial Solutions

- COTS can be extended through custom code to satisfy your requirements, however this can become [difficult and costly to maintain](https://guides.18f.gov/derisking-government-tech/software-solutions/#why-to-avoid-umots-or-beware-customizing-cots).

#### Custom Software

- Having determined that no Federal or commercial solutions exist that completely meet their needs, consider building or buying custom software.

#### Resources

- [18F guide on understanding and choosing a software solution](https://guides.18f.gov/derisking-government-tech/software-solutions/)

The project teams at CMS are recommended to conduct market research and analyze commercial and other open-source alternatives that may meet their business needs. For your preferred solution along with each alternative considered, fill out the table below:

_Create a table for each solution considered_

#### Preferred Solution: \*Insert Name\*

| Software Solution                                                                                                | Response |
| :--------------------------------------------------------------------------------------------------------------- | :------- |
| Summary                                                                                                          |          |
| Acquisition Approach                                                                                             |          |
| Do you need to host your solution?                                                                               |          |
| Where are you planning to host?                                                                                  |          |
| Is your solution approved by IT Security for use at CMS (FedRamp, FISMA approved, within the CMS cloud enclave)? |          |
| Is your solution in the process of CMS IT Security approval?                                                     |          |
| Will your solution have a user interface?                                                                        |          |
| Pros                                                                                                             |          |
| Cons                                                                                                             |          |
| Phase per year breakdown Include costs for: Development Operations & Maintenance System Total                    |          |
| What are the cost savings or avoidance associated with this solution?                                            |          |

#### Alternative A: \*Insert name here\*

| Software Solution                                                                                                | Responses |
| :--------------------------------------------------------------------------------------------------------------- | :-------- |
| Summary                                                                                                          |           |
| Acquisition Approach                                                                                             |           |
| Do you need to host your solution?                                                                               |           |
| Where are you planning to host?                                                                                  |           |
| Is your solution approved by IT Security for use at CMS (FedRamp, FISMA approved, within the CMS cloud enclave)? |           |
| Is your solution in the process of CMS IT Security approval?                                                     |           |
| Will your solution have a user interface?                                                                        |           |
| Pros                                                                                                             |           |
| Cons                                                                                                             |           |
| Phase per year breakdown Development costs Operations and Maintenance costs System total cost                    |           |
| What are the cost savings or avoidance associated with this solution?                                            |           |

## **Software Evaluation \[BR-OSS-2\]**

Finding the right OSS that meets CMS’s needs requires assessing the maturity of the software and the level of support provided by the community involved in the OSS project. Evaluate the software based on the criteria below according to BR-OSS-2:

_When assessing each criterion, be sure to flag any potential risks found._

| Criteria                     | Questions                                                                                                                                                                                         | Response |
| :--------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :------- |
| Market Share                 | What is the OSS’s market / industry rate of adoption?                                                                                                                                             |          |
| Credibility                  | What is the position of OSS’ structured bodies and organizations?                                                                                                                                 |          |
| Maintenance                  | Is the software actively maintained? When was the last activity?                                                                                                                                  |          |
| Documentation                | Are there comprehensive and readily available documentation such as markdown files hosted on repositories, release notes, instruction manuals, documentation websites?                            |          |
| Community                    | Is there an active online community behind the OSS? Are there any commercial conflicts? What is the composition of the community (e.g. commercial organizations, government agencies)?            |          |
| Source Code Quality          | Does the open source project routinely use source code inspection tools to assess quality and security of the source code? Is the code well documented? Does an independent body review the code? |          |
| Rate of Change               | What is the rate of change of the OSS? This includes the rate of code change and the rate of new releases.                                                                                        |          |
| Bug & Tracking Vulnerability | Is there a bug / vulnerability reporting and resolution system? How quickly are patches issued to resolve them?                                                                                   |          |
| Productization               | Refer to [Considerations](#considerations:) section                                                                                                                                               |          |

### Notes on Productization

CMS is especially interested in the degree to which the OSS is “productized” (in comparison to COTS), which encompasses much of these three criteria. Although most OSS is only partially productized, information is available to support productization. **CMS’s primary concern is assessing the burden to overcome the lack of productization and determining whether the benefits outweigh the risks in this regard.** Initially, CMS will only consider OSS that has third-party vendor support for productization (Red Hat, for example, is a third-party vendor that offers an “enterprise-ready” distribution of Linux (an open source operating system platform) along with associated support, training, and consulting services).

#### Considerations

- Does the project directly provide or offer support contracts for this product?
- Is there a 3rd party vendor who provides or offers support contracts for this product?
- Is the product released on a regular cadence or release schedule?
- Does the product use ‘releases’ on GitHub or other distribution platforms?
- Is there training available (paid or free) for this product? If yes, please add URLs.
- Does CMS already pay for or contract with a vendor who supports this product?
- If a subscription lapses, does CMS continue to have access to the product as it is, or do we lose access to the system?
- Do any other agencies or operational divisions use this product in a production system?

## **Total Cost of Ownership \[BR-OSS-3\]**

For CMS, reducing cost is relevant and a valid driver for using OSS. According to BR-OSS-3, the agency must determine the total cost of ownership and the risks of using open source as a solution before adopting or authorizing adoption of OSS for a CMS project.

It will be CMS’s responsibility to ensure that all subsequent government estimates and/or contractor quotes clearly show a detailed breakout of costs associated with using the OSS.

### Cost Types

**Evaluation Costs**: OSS must be installed and evaluated locally to assess its use within the enterprise.

**Maintenance Costs**: IT departments must define and implement a strategy to manage the OSS once installed, such as installing patches and upgrades.

**Installation and Configuration Costs**: Installation and configuration of OSS can be time consuming. Effective installation and configuration depend heavily on the organization’s skill level in using open source development tools, system administration, and operations.

**Integration and Customization Costs**: Open source projects may not be designed to operate within enterprise IT infrastructure. IT departments may have to integrate and customize OSS to suit their environments.

**Operations & Support Costs**: Addressed in the [License Compatibility](#license-compatibility-br-oss-4) section

| Assessment                                                                                                                             | Cost Type                    | Response |
| :------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------- | :------- |
| Describe how you will specifically configure and use the software/application.                                                         | Installation & Configuration |          |
| How well will the OSS integrate within CMS’s environment? Is customization of the OSS required?                                        | Integration & Customization  |          |
| Are any other applications required for this software to operate? Are there any special integrations into the other software required? | Integration & Customization  |          |
| Describe how maintenance will be conducted                                                                                             | Maintenance                  |          |
| Does CMS have adequate resources to support development, operations, and maintenance for the OSS?                                      | Maintenance                  |          |

## **License Compatibility \[BR-OSS-4\]**

When selecting OSS, CMS must ensure that the associated OSS license is consistent with CMS’s objectives and environment. The TRB is responsible for approval of OSS licenses within the [CMS Open Source Policy](https://github.com/CMSgov/cms-open-source-policy).

### Licensing Model / Compliance

_Provide information on the software’s license and terms & conditions associated with its usage_

|                                                                                                                                                                                               | Response |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------- |
| What are the licensing terms/agreements?                                                                                                                                                      |          |
| What is the licensing usage type? (i.e. Named user, site concurrent, etc.)                                                                                                                    |          |
| What is the licensing model? (i.e. perpetual, perpetual \+ support renewal, subscription)                                                                                                     |          |
| Does the license associated with the OSS have any of the following restrictions that are unreasonable for CMS: limiting the redistribution of the software code merging with proprietary code |          |

### Costs

_Provide information on how the software is priced_

|                                          | Response |
| :--------------------------------------- | :------- |
| What are the costs per license?          |          |
| Are there any annual or renewal costs?   |          |
| Who holds the license agreement?         |          |
| Who is currently paying for these costs? |          |

### Provisioning

_Provide information on the setup, configuration, and access management process required to enable software usage._

|                                                    | Response |
| :------------------------------------------------- | :------- |
| How will the software be provided to CMS?          |          |
| Who will provide the software?                     |          |
| Does the requestor have access to the license key? |          |
| What is the licensing contact information?         |          |

### Support

_Assess the support services delivered, the tools and processes involved, roles of support teams, and overall operation and support costs \[BR-OSS-3\]._

|                                                                                                                  | Response |
| :--------------------------------------------------------------------------------------------------------------- | :------- |
| What is the support model? Do users need to pay for technical support and assistance? Is there a support period? |          |
| Is there an active support agreement? (SLAs)                                                                     |          |
| What is the support contact information?                                                                         |          |

## **Security Assessment**

To evaluate the risks associated with using the software, our software approval and assurance process incorporates thorough checks focused on security, integrity, dependencies, potential malicious activity, and long-term project support. Leveraging tools like OpenSSF Scorecard and MITRE Hipcheck, we identify and flag potential concerns for further investigation by our product and security teams.

### Compliance with Federal & Agency Security Policies

Are there CMS or federal security policies that prohibit the use of the OSS? Does the OSS product allow implementation of CMS or federal security requirements?

### Software Composition Analysis

1. Generate a Software Bill of Materials (SBOM) (see: [https://www.cisa.gov/sbom](https://www.cisa.gov/sbom) for more details)
   1. If project is on GitHub, you can find and export the SBOM in the repository insights page: github.com/\<REPO*\>*/network/dependencies
   2. If the project is not on GitHub, you can use a tool like pysyft to generate an SBOM too.
2. Use tools in the toolkit below to ingest the SBOM and create reports providing detailed information of the software composition
   1. Check for common and known vulnerabilities using the National Vulnerability Database (NVD)

### Toolkit

Below is a list of suggested tools to run for software composition analysis:

| Tool                        | Description                                                                                                                                                                                          | Cost | Link                                                                                                                |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---- | ------------------------------------------------------------------------------------------------------------------- |
| Trivy                       | An open source security scanner that identifies vulnerabilities and misconfigurations across repositories, binary artifacts, container images, and more.                                             | Free | [https://trivy.dev/latest](https://trivy.dev/latest)                                                                |
| Synk                        | A platform that provides advanced software composition analysis in helping developers find, prioritize, and fix security vulnerabilities and license issues in open source dependences.              | Paid | [https://snyk.io/product/open-source-security-management](https://snyk.io/product/open-source-security-management/) |
| Sonarqube                   | A code quality tool that provides static code analysis, secrets detection, and security standards compliance.                                                                                        | Paid | [https://www.sonarsource.com/products/sonarqube](https://www.sonarsource.com/products/sonarqube/)                   |
| Phylum.io                   | A software supply chain security platform that identifies risks and attacks (malicious code, author, reputation, engineering risk, abandoned packages, license issues and software vulnerabilities). | Paid | [https://www.phylum.io/](https://www.phylum.io/)                                                                    |
| Black Kite                  | A platform to manage cyber ecosystem risk by providing cyber risk detection and response in supply chain.                                                                                            | Paid | [https://blackkite.com](https://blackkite.com/)                                                                     |
| Dark Sky: Bulletproof Trust | A software assurance & intelligence platform to quantify software risk and uncover threats to open-source packages used.                                                                             | Paid | [https://www.darkskytechnology.com/bulletproof-trust](https://www.darkskytechnology.com/bulletproof-trust)          |

**Results**

\*\*Insert report and review here\*\*

### Run and Review OpenSSF Scorecard

The [OpenSSF Scorecard](https://securityscorecards.dev/#what-is-openssf-scorecard) assesses security risks and community security practices of the software through a series of automated checks. The scorecard checks for vulnerabilities affecting different parts of the software supply chain including source code, build, dependencies, testing, and project maintenance.

#### Determining which scorecard minimums to use

- Is it a web-facing project?
- Does it allow for user input?
- Is it written in a memory unsafe language like C or C++?
- Is it packaged and released on a distribution site like pypi, npm, crates, etc…?

#### Instructions

1. Run the scorecard on the software repository [using the CLI](https://securityscorecards.dev/#using-the-cli).
2. Report the scores in the table below. Check whether they pass the minimum.

| Checks                                                                                                      | Description & Condition                                                                                                                                                            | Risk     | Min                | Score |
| :---------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------- | :----------------- | :---- |
| [Dangerous-Workflow](https://github.com/ossf/scorecard/blob/main/docs/checks.md#dangerous-workflow)         | Does the project avoid dangerous coding patterns in GitHub Actions? (e.g. Untrusted Code Checkout, Script Injection with Untrusted Context Variables)                              | Critical | 10                 | ✅❌  |
| [Dependency-Update-Tool](https://github.com/ossf/scorecard/blob/main/docs/checks.md#dependency-update-tool) | Does the project use tools to help update its dependencies e.g. Dependabot, RenovateBot?                                                                                           | High     | 10                 |       |
| [Token-Permissions](https://github.com/ossf/scorecard/blob/main/docs/checks.md#token-permissions)           | Does the project declare GitHub workflow tokens as read only?                                                                                                                      | High     | 9                  |       |
| [Branch-Protection](https://github.com/ossf/scorecard/blob/main/docs/checks.md#branch-protection)           | Does the project use Branch Protection?                                                                                                                                            | High     | 6                  |       |
| [Code-Review](https://github.com/ossf/scorecard/blob/main/docs/checks.md#code-review)                       | Does the project require code review before code is merged?                                                                                                                        | High     | 10                 |       |
| [Binary-Artifacts](https://github.com/ossf/scorecard/blob/main/docs/checks.md#binary-artifacts)             | Is the project free of checked-in binaries?                                                                                                                                        | High     | 10                 |       |
| [Maintained](https://github.com/ossf/scorecard/blob/main/docs/checks.md#maintained)                         | Is the project maintained?                                                                                                                                                         | High     | 10                 |       |
| [Vulnerabilities](https://github.com/ossf/scorecard/blob/main/docs/checks.md#vulnerabilities)               | Does the project have unfixed vulnerabilities? Uses the [OSV service](https://osv.dev/).                                                                                           | High     | 8                  |       |
| [Fuzzing](https://github.com/ossf/scorecard/blob/main/docs/checks.md#fuzzing)                               | Does the project use fuzzing tools, e.g. OSS-Fuzz? (For projects that accepts user input)                                                                                          | Medium   | 10                 |       |
| [Static Code Analysis Tools](https://github.com/ossf/scorecard/blob/main/docs/checks.md#fuzzing)            | Does the project use static code analysis tools, e.g. CodeQL, LGTM, SonarCloud?                                                                                                    | Medium   | 10                 |       |
| [Pinned-Dependencies](https://github.com/ossf/scorecard/blob/main/docs/checks.md#pinned-dependencies)       | Does the project declare and pin dependencies? (For stadiums \+ federations)                                                                                                       | Medium   | 8                  |       |
| [Security Policy](https://github.com/ossf/scorecard/blob/main/docs/checks.md#security-policy)               | Does the project contain a security policy?                                                                                                                                        | Medium   | 10                 |       |
| [CII-Best-Practices](https://github.com/ossf/scorecard/blob/main/docs/checks.md#cii-best-practices)         | Does the project have a [CII Best Practices Badge](https://www.bestpractices.dev/en)? Project has a OpenSSF Best Practices Badge (For stadiums \+ federations)                     | Low      | 5                  |       |
| [Contributors](https://github.com/ossf/scorecard/blob/main/docs/checks.md#contributors)                     | Does the project have contributors from multiple organizations?                                                                                                                    | Low      | 6                  |       |
| [License](https://github.com/ossf/scorecard/blob/main/docs/checks.md#license)                               | Does the project declare a license?                                                                                                                                                | Low      | 9                  |       |
| [CI-Tests](https://github.com/ossf/scorecard/blob/main/docs/checks.md#ci-tests)                             | Does the project run tests in CI, e.g. GitHub Actions, Prow?                                                                                                                       | Low      | 10                 |       |
| [Packaging](https://github.com/ossf/scorecard/blob/main/docs/checks.md#packaging)                           | Does the project build \+ publish official packages from CI/CD and/or released on a distribution site, e.g. GitHub Publishing, pypi, npm, crates? (For projects that are packages) | Medium   | 10                 |       |
| [Signed-Releases](https://github.com/ossf/scorecard/blob/main/docs/checks.md#signed-releases)               | Does the project [cryptographically sign releases](https://wiki.debian.org/Creating%20signed%20GitHub%20releases)?                                                                 | High     | 8 If under TLD: 10 |       |

**Results**

Overall Score:

\*\*Insert review here\*\*

### Run and Review MITRE Hipcheck

[Hipcheck](https://github.com/mitre/hipcheck) is a command line interface (CLI) tool for analyzing open source software packages and source repositories to understand their software supply chain risk. It analyzes a project's software development practices and detects active supply chain attacks to give you both a long-term and immediate picture of the risk from using a package.

**Results**

\*\*Insert scorecard report here\*\*

## **Additional Notes & Questions**

\*Insert any notes or questions here\*

## **Sign off**

After reviewing the materials prepared by the team that put in the request, the business owner signs off on a risk acceptance for usage of the software product.

Requesting sign off from key people on this request.

| Reviewer Organization          | Reviewer Name                                   | Reviewer’s Recommendation                                                           |
| :----------------------------- | :---------------------------------------------- | :---------------------------------------------------------------------------------- |
| Code Reviewer's Recommendation | CODE REVIEWER 1 CODE REVIEWER 2 CODE REVIEWER 3 | \[Approved/Needs Approval\] \[Approved/Needs Approval\] \[Approved/Needs Approval\] |
| ISSO                           | ISSO REVIEWER                                   | \[Approved/Needs Approval\]                                                         |
| ISG Technical Approval         | ISG REVIEWER                                    | \[Approved/Needs Approval\]                                                         |
| Business Owner(s)              | BUSINESS OWNER 1 BUSINESS OWNER 2               | \[Approved/Needs Approval\] \[Approved/Needs Approval\]                             |

## **Going Forward**

Contractors using open source frameworks and libraries are responsible for:

- ensuring that the OSS works properly within the CMS environment
- staff is well versed in configuring and subsequently operating the software
- monitoring the community behind the OSS product for new versions and patches, and support for older versions
- monitoring the community to ensure it continues to offer substantial support for the OSS product
