---
title: Building and Buying Custom Software
description: 'Procurement'
permalink: /guidance/procurement
layout: layouts/page
tags: codegov
eleventyNavigation:
  parent: codegov-guidance
  key: codegov-guidance-procurement
  order: 2
  title: How to procure software
sidenav: true
sticky_sidenav: true
---


# Building and Buying Custom Software

<a target="_blank" href="https://obamawhitehouse.archives.gov/sites/default/files/omb/memoranda/2016/m_16_21.pdf">Section 3.1</a> of the Source Code Policy requires that:

> In meeting their software needs, covered agencies must conduct [a] three-step analysis […] intended to leverage existing solutions – consistent with principles of category management and shared services – and suitable commercial solutions, while mitigating unnecessary spending on custom-developed software solutions.

### The three steps are:
1. Conduct Strategic Analysis and Analyze Alternatives;
2. Consider Existing Commercial Solutions; and
3. Consider Custom Development

Below are tips that your agency can use to apply these steps effectively.

## Step 1: Conduct Strategic Analysis and Analyze Alternatives

> Step 1 (Conduct Strategic Analysis and Analyze Alternatives): Each agency must conduct research and analysis prior to initiating any technology acquisition or custom code development. The strategic analysis should consider not only agency mission and operational needs, but also external public initiatives and interagency initiatives such as Cross-Agency Priority Goals. Having conducted the strategic analysis, agencies shall then conduct an alternatives analysis, evaluating whether to use an existing Federal software solution or to acquire or develop a new software solution. The alternatives analysis shall give preference to the use of an existing Federal software solution

The purpose of Step 1 is to ensure that your agency – not just your acquisition team, but also your technology team, program management team, and leadership, among others – has a complete strategic view of what offerings exist before determining that an acquisition is in fact required.

Further, Step 1 is meant to ensure that agencies do market research to discover what Federal and non-Federal solutions are already available before buying or building software.

### <em>Things to consider during</em> Step 1:

<p>
    Consult your agency's mission statement to broaden your strategy beyond the immediate project requirements.
    As required in the policy, also consider relevant "external public initiatives and interagency initiatives such as Cross-Agency Priority Goals" for the same reason.
    Review OFPP memorandum M-16-12 "Improving the Acquisition and Management of Common Information Technology: Software Licensing" and consult with your agency's appointed Software Manager.
</p>

## Step 2: Consider Existing Commercial Solutions

> Step 2 (Consider Existing Commercial Solutions): If an agency's alternatives analysis concludes that existing Federal software solutions cannot efficiently and effectively meet the needs of the agency, the agency must explore whether its requirements can be satisfied with an appropriate commercially-available solution

As with Step 1, the purpose of Step 2 is to develop your agency's strategic view of the marketplace prior to initiating an acquisition. Agencies should remember in surveying the marketplace of commercial solutions that many commercial solutions can be extended through custom code to satisfy your requirements entirely (see discussion of hybrid solutions below).

### Things to consider during Step 2:

<p>Open Source Software may meet the definition of "commercial computer software" and may also be included in a commercial solution in accordance with FAR 2.101(b). For example, Open Source Software that "[h]as been offered for sale, lease, or license to the general public" may be considered "commercial" for purposes of a federal acquisition. Be sure to consult your agency's policy regarding Open Source Software acquisitions.

It is important to apply category management principles, which give preference to best-in-class solutions, in your analysis.

Agencies must use <a target="_blank" href="https://obamawhitehouse.archives.gov/sites/default/files/omb/memoranda/2016/m-16-12_1.pdf">Category Management Policy 16-1</a> for this analysis.</p>

## Step 3: Consider Custom Development

> Step 3 (Consider Custom Development): If an agency's alternatives analysis concludes that an existing Federal software solution or commercial solution cannot adequately satisfy its needs, the agency may consider procuring custom-developed code in whole or in conjunction with existing Federal or commercial code. When commissioning new custom-developed software, agencies must consider the value of publishing custom code as OSS and negotiate data rights reflective of its value-consideration. Agencies must also obtain sufficient rights to fulfill this policy's objectives related to Government-wide code reuse and the open source pilot program.

Having determined that no Federal or commercial solutions exist that completely meet their needs, agencies may build or buy custom software.

In doing so, the most important thing to remember is that the Federal Source Code Policy requires agencies to "acquire and enforce rights sufficient to enable Government-wide reuse" when contracting for the custom development of code. With respect to release, the Federal Source Code Policy's Pilot Program requires agencies to release at least 20 percent of new custom-developed code each year as open source software. While agencies are encouraged to release a greater percentage of code, if doing so is beneficial to the government, agencies are not required to release more than 20 percent of code.

Accordingly, consider the following during the acquisition lifecycle:

## Presolicitation

Once your agency has determined that custom code development is necessary, it is important to actively communicate that government reuse and open source, as appropriate, are core to the requirements of your project from the outset. Whether during an RFI or industry day, relay to potential vendors early and often that your agency intends to receive appropriate rights for government re-use and/or open source.

Your acquisition strategy should allow the agency to determine which software modules or components should be built separately. In the spirit of modular development, the technical and licensing approach can be tackled per component to maximize public benefit.

## Solicitation, Negotiation, and Award

### Government code reuse

Agencies must obtain unlimited rights to all custom-developed code first produced in the performance of the contract.

The Federal Acquisition Regulation's (FAR) General Rights in Data clause – FAR 52.227-14 – provides for "unlimited rights" in data first produced in the performance of the contract, which generally covers custom-developed code. This includes both the right to share the custom-developed code with other agencies and, as explained below, the right to publicly release the code for reuse subject to restrictions in an open source license However, if an agency is not seeking, or able, to obtain the rights to publicly release the code, the rights license should still provide, at a minimum, the Government's rights to share the custom-developed code with other agencies. Rights for government reuse outside the unlimited rights clause may be accomplished by using the limited rights notice under Alternate II of the 52.227-14 clause. In enforcing such data rights, agencies should ensure that deliverables do not contain markings that limit rights of distribution within the contracting agency or bureau only.

A number of agencies have already developed supplementary contract clauses to further address and clarify the government's rights. Agencies, in particular those visiting this issue for the first time, can benefit from comparing their practices and contract clauses with others and standardizing where possible.

As one example, the Department of Defense has developed a license rights clause for noncommercial computer software where the parties look to the source of funds used to develop computer software as the basis for establishing associated reuse rights by the government.

If the government exclusively funds the development of the code, the clause would give the agency an unlimited rights license in noncommercial technical data, noncommercial computer software and noncommercial computer software documentation.

If the development is exclusively funded by the contractor, the agency usually acquires a restricted rights license in noncommercial computer software.

The DFARS 252.227-7013 and -7014 clauses specifically provide for this determination to be made at the lowest practicable portion of software, which allows the Department of Defense to assert reuse rights in a hybrid solution involving both commercial and custom code.

If an agency is interested in taking advantage of the DFARS language, it could consider a deviation in accordance with FAR Subpart 1.4 to follow the relevant Defense Federal Acquisition Regulation Supplement.

As a best practice, consider expressly asserting in the solicitation (and resulting contract) that unlimited rights attach to all code furnished in the performance of the contract, unless the parties expressly agree otherwise in the contract. This practice can help to avoid disputes after contract award as to whether triggers in the standard clauses (e.g., "first produced in the performance of the contract" or "developed exclusively with government funds") have been met.

### Open source software

If applicable, identify the requirement for open-source software in the solicitation. If you have a preferred open source license, specify it in the solicitation.

The FAR's unlimited rights clause establishes the basic right for the Government to publish custom-developed code first produced in the performance of the contract publicly for reuse subject to restrictions in an open source license.

If an agency intends to publish software as open source, it should not include Alternate IV to the clause, which would provide the contractor a blanket permission to assert copyright. A contractor's request for permission to assert copyright under FAR 52.227-14 should be denied in instances where the agency intends to publish code as OSS. A contractor, if given such permission, could assert its copyright interests against third parties interested in using and contributing to custom-developed code released by the Government. In all instances, even where a contractor is given permission to assert copyright, the Government must preserve the right to share code with other agencies and those contractors retained by the agencies to modify, refresh, or otherwise use the code by or on behalf of the Government.

### Other considerations
#### Identify all deliverables and asserted restrictions

<p> For commercial data/software, the contractor needs to provide a copy of the proposed commercial license agreement to the contracting officer prior to contracting;</p>

<p>For noncommercial data/software, the contractor needs to identify prior to contracting, often in proposals, the data that will be delivered with restrictions (FAR 27.404-3b; DFARS 252.227-7017);</p>

<p>The solicitation and contract must specify delivery of the data package and source code. The agency should include additional data requirements clauses in the FAR to permit flexibility in ordering additional deliverables.</p>

#### Make sure that your contractor holds to the software and data rights requirements, and require the contractor to provide all licenses for software dependencies as part of the deliverables

<p>Ensure that all deliverables are appropriately marked with the applicable restrictive legends;</p>
<p>If contractor omits restrictive markings, data or software delivered without restrictive markings, the Government is deemed to have received unlimited rights in the deliverable (the Government may allow the contractor to correct the error according to certain procedures);</p>
<p>If delivery is made with restrictive markings that are not authorized by the contract, the marking is characterized as nonconforming (contract contains procedure for correcting nonconforming markings);</p>
<p>Agencies should also require delivery of the source code and other relevant materials and associated documents, which is specified in the contract requirements.</p>

#### Hybrid solutions

Appropriately, agencies often contract for the delivery of solutions that are a hybrid of commercial and custom-developed code. Hybrid solutions entail a mix of rights; agencies may have unlimited rights to custom-developed parts of the solution but restricted rights to the rest. Because of this added complexity, contracts for hybrid solutions warrant closer attention to make sure that unlimited rights are being secured for the custom code and that the code is actually delivered.

Agencies should not give up unlimited rights to government reuse of the segment of the solution involving custom code unless an appropriate basis is established for doing so. One such basis may exist if the custom code qualifies as a minor modification to commercial computer software, which by law and regulation is considered a commercial item in which the government takes restricted rights. Another such basis may be the negotiation of Government Purpose Rights, as defined in the DFARS.

### Contract Administration

After contract award, agencies should watch for unauthorized or incorrect markings that seek to limit the Government's rights, such as by limiting reuse rights to the acquiring agency, and agencies should take advantage of the procedures provided in FAR 27.404-5 to cancel such markings.

## Glossary
<dl>
<dt> Data</dt>
    <dd>
    "Data" means recorded information, regardless of form or the media on which it may be recorded. The term includes technical data and computer software. The term does not include information incidental to contract administration, such as financial, administrative, cost or pricing, or management information. [FAR 52.227-14 (a)]
    </dd>
<dt>Computer software</dt>
<dd>"Computer software" means (i) Computer programs that comprise a series of instructions, rules, routines, or statements, regardless of the media in which recorded, that allow or cause a computer to perform a specific operation or series of operations; and (ii) Recorded information comprising source code listings, design details, algorithms, processes, flow charts, formulas, and related material that would enable the computer program to be produced, created, or compiled. Does not include computer databases or computer software documentation. [FAR 52.227-14 (a)]<br/><br/>
"Computer software" means computer programs, source code, source code listings, object code listings, design details, algorithms, processes, flow charts, formulae, and related material that would enable the software to be reproduced, recreated, or recompiled. Computer software does not include computer databases or computer software documentation. [DFARS 252.227-7014(a)(4)]</dd>

<dt>Unlimited rights</dt>
<dd>"Unlimited rights" means the right of the Government to use, disclose, reproduce, prepare derivative works, distribute copies to the public, and perform publicly and display publicly, in any manner and for any purpose, and to have or permit others to do so. [FAR 52.227-14 (a)]<br/><br/>"Unlimited rights" means rights to use, modify, reproduce, perform, display, release, or disclose technical data in whole or in part, in any manner, and for any purpose whatsoever, and to have or authorize others to do so. [DFARS 252.227-7014(a)(16)]</dd>
<dt>Government purpose rights</dt>
<dd>"Government purpose" means any activity in which the United States Government is a party, including cooperative agreements with international or multi-national defense organizations or sales or transfers by the United States Government to foreign governments or international organizations. Government purposes include competitive procurement, but do not include the rights to use, modify, reproduce, release, perform, display, or disclose computer software or computer software documentation for commercial purposes or authorize others to do so. "Government purpose rights" means the rights to— (i) Use, modify, reproduce, release, perform, display, or disclose computer software or computer software documentation within the Government without restriction; and (ii) Release or disclose computer software or computer software documentation outside the Government and authorize persons to whom release or disclosure has been made to use, modify, reproduce, release, perform, display, or disclose the software or documentation for United States government purposes.[DFARS 252.227-7014(a)(11-12)]</dd>
<dl>
