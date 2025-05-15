---
title: Creating your enterprise code inventory
description: 'Code Inventory'
permalink: /guidance/code-inventory
layout: layouts/page
tags: codegov
eleventyNavigation:
  parent: codegov-guidance
  key: codegov-guidance-codeinventory
  order: 3
  title: How to inventory code
sidenav: true
sticky_sidenav: true
---

# Overview

Section
  <a href="https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/memoranda/2016/m_16_21.pdf" target="_blank">7.2</a>
  and <a href="https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/memoranda/2016/m_16_21.pdf" target="_blank">7.3</a> of the Source Code Policy require agencies to provide an inventory of their 'custom-developed code' to support government-wide reuse and make Federal open source code easier to find.

Using these inventories, <!--TODO: Fix this URL to be Code.gov after new CNAME is pointed--><a href="https://dsacms.github.io/code-gov/">Code.gov</a> will provide a platform to search federally funded open source software and software available for government-wide reuse.

## Publishing Your Agency's Inventory

Agencies are required to publish their inventories using a standard metadata schema - a JSON file that they'll make available on their agency websites. Agencies are strongly encouraged to use version 2.0.0 of the schema, which is described below. This version includes revisions that make your inventory much more useful and intuitive.

Agencies should make the `code.json` available in the root folder of their website (e.g., https://www.agency.gov/code.json). Code.gov will then retrieve these JSON files daily and compile them.

## Metadata Schema version 2.0.0

The schema fields and definitions are listed below.
Here is <a href="https://github.com/GSA/code-gov-data/blob/master/schemas/schema-2.0.0.json">version 2.0.0 of the metadata schema file in JSON format</a>
with parent/child relationships.

### Agency code.json file location and contents:
<ul>
  <li><code>code.json</code> must live in the root directory of your agency’s website.</li>
  <li>
    <code>code.json</code> must include a single object represented as JSON, with key-value pairs according to the list below.
  </li>
</ul>

## Source Code Considerations for AI R&amp;D Models
Consistent with the 
<a href="https://bidenwhitehouse.archives.gov/briefing-room/presidential-actions/2025/01/14/executive-order-on-advancing-united-states-leadership-in-artificial-intelligence-infrastructure/">Executive Order on Maintaining American Leadership in Artificial Intelligence (EO 13859)</a>, agencies are directed to improve source code inventory documentation (i.e., agency code.json) to enable discovery and usability of source code AI models. 

  <table>
    <thead>
      <tr>
        <th scope="col">Field Name</th>
        <th scope="col">Tags</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Data Type</th>
        <td>Array</td>
      </tr>
      <tr>
        <th scope="row">Definition</th>
        <td>
          An array of keywords that will be helpful in discovering and searching for the release.
        </td>
      </tr>
      <tr>
        <th scope="row">Required</th>
        <td>Always</td>
      </tr>
      <tr>
        <th scope="row"><span style="white-space: nowrap;">AI R&amp;D Guidance<span></th>
        <td>
          Agencies shall include the keyword of <code>usg-artificial-intelligence</code> for all source code determined to support AI R&amp;D. Other keywords can be developed and used as appropriate and coordinated with standard data tagging available on
          <a href="https://resources.data.gov/resources/dcat-us-priorities/#data-assets-to-fuel-ai-rd">resources.data.gov</a>.
        </td>
      </tr>
    </tbody>
  </table>
  <table>
    <thead>
      <tr>
        <th scope="col">Field Name</th>
        <th scope="col">Contact</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Data Type</th>
        <td>Object</td>
      </tr>
      <tr>
        <th scope="row">Definition</th>
        <td>Point of contact information for the release.</td>
      </tr>
      <tr>
        <th scope="row">Required</th>
        <td>Always</td>
      </tr>
      <tr>
        <th scope="row"><span style="white-space: nowrap;">AI R&amp;D Guidance</span></th>
        <td>Be sure to identify and include domain experts and their contact information who can discuss the model with interested AI researchers. If not the same as the domain expert, Agencies shall also identify an expert and their contact information who can discuss restrictions or controls on the model.</td> 
      </tr>
    </tbody>
  </table>
  <table>
    <thead>
      <tr>
        <th scope="col">Field Name</th>
        <th scope="col">exemptionText</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Data Type</th>
        <td>String or Null</td>
      </tr>
      <tr>
        <th scope="row">Definition</th>
        <td>If an exemption is listed in the <code>usageType</code> field, this field should include a one or two sentence justification for the exemption used.</td>
      </tr>
      <tr>
        <th scope="row">Required</th>
        <td>No</td>
      </tr>
      <tr>
        <th scope="row"><span style="white-space: nowrap;">AI R&amp;D Guidance</span></th>
        <td>Agencies shall describe how researchers may be able to access <code>governmentWideReuse</code> or exempt data.</td>
      </tr>
    </tbody>
  </table>
  <table>
    <thead>
      <tr>
        <th scope="col">Field Name</th>
        <th scope="col">relatedCode</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Data Type</th>
        <td>Array</td>
      </tr>
      <tr>
        <th scope="row">Definition</th>
        <td>An array of affiliated government repositories that may be a part of the same project. For example, <code>relatedCode</code> for <code>code-gov-front-end</code> would include <code>code-gov-api</code> and <code>code-gov-client</code>.</td>
      </tr>
      <tr>
        <th scope="row">Required</th>
        <td>No</td>
      </tr>
      <tr>
        <th scope="row"><span style="white-space: nowrap;">AI R&amp;D Guidance</span></th>
        <td>Agencies shall describe related models and code.</td>
      </tr>
    </tbody>
  </table>

## Example code.json file

Here are some [good metadata examples](https://github.com/GSA/code-gov/blob/master/docs/metadata_examples.md) for reference when creating your agency code.json file.

You can find previous schema revisions in [our changelog](https://github.com/GSA/code-gov-data/blob/master/CHANGELOG.md)
