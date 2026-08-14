---
title: "OpenAI Build Week: Human-in-the-Loop Network Security"
summary: "Giving agentic network-security systems access to the organizational context they cannot observe on their own."
image: /images/openAI-build-week.png
tags: "Agentic AI, Human-in-the-Loop, Hackathon"
publishedAt: "2026-07-01"
link: "https://github.com/recolaa/OpenAIBuildWeek"
---

During OpenAI Build Week, I worked with a group project exploring how human context could improve agentic network-security decisions.

## The Problem

Traditional network security uses fixed rules to allow normal traffic and block suspicious activity. Agentic security systems can go further by investigating events, explaining findings, and responding automatically.

However, a network agent can usually see **what happened**, but not **why** it happened.

A request may look suspicious because it comes from a new location, an unfamiliar device, an unusual time, or a VPN. The agent cannot independently know whether the employee is traveling, whether the activity was approved, or whether an emergency explains the behavior.

## Our Solution

We designed a human-in-the-loop system that gives the network agent a way to ask trusted people for missing context.

When the agent detects an anomalous event, it sends the known evidence and its unanswered questions to a user-interface agent. The interface asks authorized users for relevant organizational context, then returns their responses to the network agent.

The system combines:

- Evidence visible on the network
- Context provided by trusted users
- A final human-approved security decision

This allows the agent to make a better-informed choice without treating an unusual connection as automatically malicious.

## How It Works

Our prototype follows this workflow:

1. A host sends traffic through a router toward a server.
2. The network-management agent detects an anomalous event.
3. The agent identifies what context is missing.
4. A UI agent asks users for information that cannot be observed from the network.
5. Human responses are returned to the network agent.
6. The final decision is used to modify or preserve the network rules.

For the hackathon demonstration, we simplified the possible response to **allowing or dropping traffic**.

## My Role

I focused on the **user interface and chat-agent system**. My work involved designing how the agent would communicate with users, ask targeted questions in a shared group chat, and collect enough responses before returning a decision to the network-security agent.

I helped define the workflow for:

- Receiving suspicious network-event details
- Determining what human context was missing
- Asking authorized users a clear question
- Waiting for a sufficient number of responses
- Converting the responses into an **allow-or-drop** result
- Returning the decision to the network agent in a structured format

This work taught me how to design agent interactions that are understandable to users while still producing reliable information for an automated cybersecurity system.

## What I Learned

This project gave me experience with:

- Agentic AI for cybersecurity
- Human-in-the-loop system design
- Network-event representation
- Multi-agent communication
- Team-based rapid prototyping
- Designing safe limits for automated security actions

The main lesson was that better cybersecurity decisions do not always require more network data. Sometimes the missing evidence exists with the people who understand the organization.

## View the Project

Project repository: [OpenAI Build Week on GitHub](https://github.com/recolaa/OpenAIBuildWeek)
