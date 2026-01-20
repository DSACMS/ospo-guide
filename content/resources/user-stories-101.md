---
title: User Story Writing 101
description: Guide on writing user stories
permalink: /resources/user-stories-101/
layout: layouts/page
section: resources
tags: ospo
eleventyNavigation:
  parent: ospo-resources
  key: ospo-resources-userstories
  order: 6
  title: User Story Writing 101
sidenav: true
sticky_sidenav: true
---

### What is a user story?

A short description of a feature, in simple language that outlines the desired outcome, told from a user’s perspective.

- A user story is not a list of requirements or technical instructions, detailing a description of the solution

### Why is writing user stories valuable?

It helps to clarify the who, what and why.

### Benefits of writing user stories

- Maintains focus on the user
- Enables team collaboration
- Drives creative solutions
- Creates momentum

### Who should write user stories?

As in all things tech, it depends. Product managers are often write user stories, but they are not the only ones responsible. Software engineers should also write user stories, particularly when defining technical needs, developer experience improvements or backend functionality that impacts users.

### How to write an effective user story?

1. Focus on the user’s/customer’s perspective
2. Stay away from technical aspects
3. Stay away from the how

**Standard Template:**  
As **\<who\>**, I want to **\<what\>**, so that **\<why\>**.  
Who are we building for?  
What are we building? What is the intention?  
Why are we building it?

**Example:**  
As a language learner, I want an offline mode in a language learning app, so I can continue learning without an internet connection.

- The who is very important, **language learner** is specific, **user** is not and can lead to confusion.

**Do not omit the “SO THAT,” the why is incredibly important.**

USER STORIES should be specific

### It’s important to measure if a user story is effective

**INVEST** Measuring an effective user story:

- **Independent** (of all others)
- **Negotiable** (an invitation to a conversation)
- **Valuable** (meets customers needs)
- **Estimable** (to a good approximation)
- **Small** (fits within a timebox)
- **Testable** (can be verified)

### The 3 Cs of a user story

1. **Card** \- A story is written on a card. This keeps it small.
2. **Conversations** \- A conversation is a series of discussions among the development team and internal and external stakeholders to understand the complexity and value of the story.
   1. Three perspectives
      1. Business
      2. Delivery
      3. Testing
3. **Confirmations** \- The confirmation is to make sure that the conversation around the story has reached a conclusion.

### Formats for writing acceptance criteria:

- Given a specific situation \- This sets the initial condition.
  - Example: Given the user is logged into the app.
- When something happens \- This describes the action or event.
  - Example: When the user selects “Download Lesson.”
- Then a certain result should follow \- This defines the expected outcome.
  - Example: The lesson is saved for offline use.

### Common challenges in writing user stories

| Challenge                    | What                                                                           | Do                                                                                                                                                                                                                              | Don't                                                                                                | Why                                                                                         |
| :--------------------------- | :----------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :--------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------ |
| **Ambiguity**                | The story is too vague, leaving room for multiple interpretations.             | As a user, I want a dashboard with customizable widgets, clear labels and a help tip for each section.                                                                                                                          | As a user, I want an intuitive dashboard.                                                            | Intuitive is not really defined. Different users may interpret it differently.              |
| **Scope Creep**              | The user story includes too many features or expands beyond its original goal. | Break the user story into multiple stories: <ol><li>As a customer, I want to track current and past orders in my account.</li><li>As a customer, I want to receive estimated delivery time based on real-time status.</li></ol> | As a customer, I want to track my orders and receive real-time delivery updates with AI predictions. | The request mixes order tracking with a complex AI feature. This makes the story too large. |
| **Incomplete Requirements**  | The user story lacks key details needed for implementation.                    | As an admin, I want to add, edit, delete or deactivate users from the system.                                                                                                                                                   | As an admin, I want to manage users.                                                                 | What does the word “manage” include? Adding, deleting, editing, something else?             |
| **Lack of User Perspective** | The story is written from the system or developer perspective.                 | As a return user, I want to log into my account securely, so I can access my saved data.                                                                                                                                        | Implement a login API                                                                                | This describes the technical task, not the user's need.                                     |

### Honing in on a feature:

- The why must connect to the “who” and “what”
- If the “what” cannot be tested with a simple action, the user story may need to be scoped down.
- The result should be simple
