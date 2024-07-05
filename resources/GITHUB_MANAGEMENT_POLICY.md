# GitHub Management Policy

## DSACMS Organization

## Table of Contents

##### [GitHub Organization Access](#github-organization-access)
- [Get access to a team as a member](#get-access-to-a-team-as-a-member)
- [Request a new team to be created](#request-a-new-team-to-be-created)
- [Request a new repo to be created](#request-a-new-repo-to-be-created)
- [Request a team to be added to a repo](#request-a-team-to-be-added-to-a-repo)
- [Request a third-party integration to be added to the repo](#request-a-third-party-integration-to-be-added-to-the-repo)

##### [Offboarding](#offboarding)
- [Monthly audit of membership](#monthly-audit-of-membership)
- [Review activity log](#review-activity-log)
- [Security](#security)
    - [Organization-wide Settings](#organization-wide-settings)
        - [Authentication Security](#authentication-security)
        - [Code Security](#code-security)
    - [Check Tokens & Keys](#check-tokens--keys)
        - [Personal Access Tokens](#personal-access-tokens)
        - [Private Keys for GitHub Apps](#private-keys-for-github-apps)
    - [Check Secrets](#check-secrets)
        - [Actions Secrets & Variables](#actions-secrets--variables)
        - [Codespaces Secrets](#codespaces-secrets)
        - [Dependabot Secrets](#dependabot-secrets)
    - [Monitor usage under GitHub plan](#monitor-usage-under-github-plan)
##### [FAQs](#faqs)

## GitHub Organization Access

### Get access to a team as a member

The member will be under the **member role** where they have no administrative permissions on the team.

Information required:
- GitHub username
- Team name

### Request a new team to be created

#### Step 1: Creating a Parent Team with All Project Members

All project members will be under the **member role** where they have no administrative permissions on the team. Team visibility and notifications are enabled unless specified otherwise.

Information required:
- Team name: *projectName*\_committers
- List of GitHub usernames to be added
- Team visibility: visible or secret

#### (Optional) Step 2: Creating Child Teams

[Child teams](https://docs.github.com/en/organizations/organizing-members-into-teams/about-teams#nested-teams) can be granted additional and more granular access to certain repositories. Examples of child teams can include code reviewers, developers under a repo domain, and project leads.

Information required:
- Team name: *projectName*\_*teamType*
   - Examples of team types: frontend team, backend team, reviewers
- List of GitHub usernames to be added


### Request a new repo to be created

If you are looking to migrate an existing repository hosted in a different organization into a new repository under DSACMS, the new repository will be created as private by default. In order for your repository to be released as public, please follow our [outbound review checklist](https://github.com/DSACMS/ospo-guide/blob/main/outbound/OUTBOUND_CHECKLISTS.md) for your project’s maturity tier.

If you are looking to create a completely new repository, your repository can be created as private or public. Based on the maturity model tier selected, a collection of [markdown templates](https://github.com/DSACMS/ospo-guide/blob/main/outbound/REPOSITORY_TEMPLATES_AND_LINTERS.md) will be included as part of our repository hygiene standards. GitHub security features such as Dependabot and secret scanning will be enabled.

Information required:
- Repository Name
- Repository Description
- Project’s [Maturity Model Tier](https://github.com/DSACMS/repo-scaffolder/blob/main/maturity-model-tiers.md)
- Repository Topics
- Team name or List of Committers’ GH username + email
- Repository Visibility: private or public
    - Include an assessment of benefits and risks of selecting this visibility

### Request a team to be added to a repo

All team members will be granted WRITE access to the repo. If you or other members want to be promoted to MAINTAIN access, please indicate this in the form. ADMIN access is only available to DSACMS organization owners for now.

Information required:
- Team name
- Team type: parent or child
- Repository name to be given access to
- Reason for access


### Request a third-party integration to be added to the repo

Currently, the DSACMS org does not use many third-party integrations at the moment. Guidance for this is still being established at the moment as we are currently working on developing our inbound processes.

Information required:
- Third-party Integration / GitHub App to be added
- Reason for usage
- Project’s [Maturity Model Tier](https://github.com/DSACMS/repo-scaffolder/blob/main/maturity-model-tiers.md)
- Keys that will need to be created


## Offboarding

### Monthly audit of membership

#### Members

Review the [list of current organization members](https://github.com/orgs/DSACMS/people) and their attributes:

- Is 2FA enabled?
- What is their role? (owner vs member)
- What team do they belong to? What are their member permissions?

#### Outside/Pending Collaborators

Review the [list of outside collaborators](https://github.com/orgs/DSACMS/outside-collaborators) and their attributes:

- Is 2FA enabled?
- What repositories do they have access to?

#### Invitations

Review the [list of sent invitations](https://github.com/orgs/DSACMS/people/pending_invitations) and [failed invitations](https://github.com/orgs/DSACMS/people/failed_invitations):

- Assess whether to resend or delete failed invitations


### Review activity log

The audit log for organization activity must be reviewed on a monthly basis. Export the log as a CSV and attach it to the *name_of_ticket_here* in internal CMS GitHub. Any org members can do this. https://github.com/organizations/DSACMS/settings/audit-log

- Organization Membership
- Team Management
- Repository Management
- Billing Updates
- Copilot Activity
- Hook Activity
- Personal Access Token Activity


### Security

#### Organization-wide Settings

##### Authentication Security
Two-factor authentication is required for everyone under the DSACMS organization.

##### Code Security

<ins>Review Code Security Configurations</ins>\
https://github.com/organizations/DSACMS/settings/security_products

- All repositories use the GitHub-recommended code security configuration:
![Code Security Configuration](../assets/githubmanagementpolicy/code_security_configurations.png)

- Currently, all public repositories under DSACMS use GitHub Advanced Security
    features (i.e. Code Scanning, Secret Scanning). Private repositories will only have
    free features enabled.

<ins>Review Global Settings</ins>\
https://github.com/organizations/DSACMS/settings/security_analysis
- Dependabot is enabled by default with a rule to dismiss low-impact alerts for
development-scoped dependencies.
- Code scanning features will be enabled on a case-by-case basis.


#### Check Tokens & Keys

##### Personal Access Tokens

<ins>Review Tokens Settings</ins>

The active tokens must be reviewed on a monthly basis. Export the log as a CSV and attach it to the *name_of_ticket_here* in internal GitHub.\
https://github.com/organizations/DSACMS/settings/personal-access-tokens/active

- Who is the owner?
- Does the token have organization and repository permissions and/or access?
- When was the token last used?

<ins>Requesting for Personal Access Tokens</ins>\
Personal Access Tokens will be granted for repo permissions with read and/or write access. Organization permissions will require explicit permission.

##### Private Keys for GitHub Apps
Please review keys used for third-party apps and GitHub apps: https://github.com/organizations/DSACMS/settings/installations


#### Check Secrets

##### Actions Secrets & Variables
https://github.com/organizations/DSACMS/settings/secrets/actions

- Secrets and variables allow you to manage reusable configuration data. Secrets
    are encrypted and are used for sensitive data.\
    https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions
- Anyone with collaborator access to the repositories with access to a secret or variable can use it for Actions.
- Cannot be used in private repositories in our current plan.

##### Codespaces Secrets
https://github.com/organizations/DSACMS/settings/secrets/codespaces
- Development environment secrets are environment variables that are encrypted.
They are available to any codespace user with collaborator access to the
repositories with access to that secret.
- Cannot be used in private repositories in our current plan.

##### Dependabot Secrets
https://github.com/organizations/DSACMS/settings/secrets/dependabot
- Anyone with collaborator access to the repositories with access to each secret can
use it for Dependabot.

### Monitor usage under GitHub plan

The DSACMS GitHub Organization is currently under the **GitHub free plan**.

![GitHub Free Plan Features](../assets/githubmanagementpolicy/github_free_plan_features.png)

The [usage](https://github.com/settings/billing/summary#usage) of the features below must be reviewed on a monthly basis. Export this information into a report using the “Get Usage Report” button and attach it to the *name_of_ticket_here* in internal GitHub.

<table>
    <thead>
        <tr>
            <th>Feature</th>
            <th>Limit</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>GitHub Actions</td>
            <td>2,000 minutes</td>
        </tr>
        <tr>
            <td>Packages</td>
            <td>1 GB</td>
            </tr>
        <tr>
            <td>Storage for Actions and Packages</td>
            <td>0.5 GB</td>
        </tr>
        <tr>
            <td>Codespaces: Usage hours</td>
            <td>120 core hours</td>
        </tr>
        <tr>
            <td>Codespaces: Storage</td>
            <td>15 GB</td>
        </tr>
        <tr>
            <td>Git LFS Data: Storage</td>
            <td>1 GB</td>
        </tr>
        <tr>
            <td>Git LFS Data: Bandwidth</td>
            <td>1 GB</td>
        </tr>
    </tbody>
</table>

### FAQs

##### Can I be admin for a repository?
For now, no. Admin is only reserved for OSPO staff but as we continue to use this organization and form our GitHub policy guidance, this may change in the future.

##### How do GitHub Teams work? What are the differences between parent teams and child teams?
- Teams can only be made up of members of your organization, outside collaborators are unable to be on a team.
- You should give parent teams repository access permissions that are safe for every member of the parent team and its child teams. As you move toward the bottom of the hierarchy, you can grant child teams additional, more granular access to
more sensitive repositories.