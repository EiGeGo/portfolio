---
title: "My Summer UARK REU: A-VERDICT"
summary: "Building an agentic AI workflow for investigating industrial control system network traffic."
image: /images/reuPOSTER.jpg
tags: "Agentic AI, ICS Security, Network Forensics"
publishedAt: "2026-08-05"
---

During the Summer 2026 UARK Research Experience for Undergraduates, I worked in the Department of Electrical Engineering and Computer Science on **A-VERDICT**: Agentic Validation-Enabled Reporting for Detection of Industrial Cyber-Attack Traffic.

## The Problem

Industrial control system networks are difficult to investigate. Normal operational traffic can appear suspicious, while attackers may use valid credentials, approved paths, and legitimate control protocols. The problem is made harder by the limited availability of fully labeled industrial cybersecurity data.

My research asked whether an agentic AI system could use weakly labeled network evidence, environmental context, baseline traffic, and domain knowledge to generate useful attack hypotheses without presenting uncertain claims as facts.

## What I Built

I developed a pipeline that transforms packet-capture data into an analyst-readable investigation report:

1. Convert PCAP traffic into bidirectional network flows using TShark and Python.
2. Enrich each flow with asset names, roles, network zones, protocols, and communication paths.
3. Apply explainable weak-labeling rules for behaviors such as scanning, SSH lateral movement, exfiltration, and OT activity.
4. Summarize the traffic and compare suspicious behavior with clean baseline data.
5. Use specialized AI agents to generate, validate, rank, and report competing hypotheses.

## Agentic Design

The first version used one hypothesis agent, one validator, and one writer. I later expanded the system into specialized agents for:

- IT intrusion and lateral movement
- Collection and exfiltration
- OT control and impact
- Benign malfunction or misconfiguration

Separate evidence agents searched weak-labeled flows, clean baseline traffic, a Process-Intent Graph, and MITRE ATT&CK for ICS. A judging agent ranked the hypotheses, and a writer agent created the final SOC investigation report.

## Results

Using Operation Shazam network data from Idaho National Laboratory, A-VERDICT:

- Identified supported signs of SSH lateral movement and reconnaissance scanning.
- Ranked possible OT control activity lower because the evidence was weak.
- Preserved a plausible benign explanation.
- Flagged unsupported claims as missing evidence instead of treating them as confirmed attacks.

The project showed that agentic AI can help organize incomplete cybersecurity evidence, but a human analyst must still validate findings and approve any response actions.

## What I Learned

This project gave me experience with network-flow analysis, industrial cybersecurity, weak labeling, multi-agent AI systems, evidence retrieval, and technical report generation. It also showed me the importance of separating hypothesis generation from evidence validation so that confident language does not replace actual evidence.

## Future Work

Future improvements include reducing runtime, requiring citations to specific flow records, supporting additional industrial environments, and evaluating the system across multiple datasets with quantitative metrics.

## Acknowledgments

This work was supported by American Electric Power through the Young Fayetteville and Texarkana Area Scholars Program. Idaho National Laboratory provided the Operation Shazam PCAP data used in the proof of concept.
