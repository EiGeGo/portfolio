---
title: "My Summer Graph Theory Research"
summary: "Studying spanning trees in chair-free graphs while developing rigorous proof-writing and mathematical reasoning skills."
image: /images/spanning-t.png
tags: "Graph Theory, Proof Writing, LaTeX"
publishedAt: "2026-08-04"
---

During Summer 2026, I worked with Dr. Warren Shull at the University of Arkansas on a graph theory problem involving spanning trees in chair-free graphs.

## The Research Problem

A spanning tree connects every vertex of a graph without creating a cycle. A Hamiltonian path is an especially simple spanning tree with no branch vertices, but determining whether one exists becomes difficult for large graphs.

Our research studies spanning trees that are close to Hamiltonian paths by limiting their number of branch vertices. We focused on **chair-free graphs**, which exclude a particular five-vertex structure called a chair. Spanning trees have been studied extensively in claw-free graphs, but much less is known about the broader class of chair-free graphs.

The current paper works toward conditions that guarantee a chair-free graph has a spanning tree with at most one branch vertex.

## Our Approach

The proof uses contradiction. We assume that the desired spanning tree does not exist and then choose the "best" available spanning tree using several carefully ordered conditions, including:

- The fewest possible branch vertices
- The smallest branch-vertex degrees
- The shortest and simplest possible stem structure
- The smallest pendant paths under lexicographic comparison

We then study which additional edges can or cannot exist. When a proposed edge allows us to replace part of the tree with a better structure, it contradicts our original choice. Other cases are eliminated because they would create an induced chair.

## My Contributions

I contributed to developing and checking claims about the relationships between leaves, branch vertices, pendant paths, and possible shared neighbors. Much of this work involved constructing edge-exchange arguments: removing selected tree edges, adding graph edges, and proving that the resulting spanning tree improves one of our chosen measurements.

Because the paper is still in progress, the work also involved revising statements, finding gaps, testing cases, and deciding which intermediate claims were strong enough to support the larger proof.

## Proof and Thinking Skills

This project strengthened skills that I hope to apply in cybersecurity:

- **Adversarial thinking:** searching for configurations that could break an argument
- **Evidence-based reasoning:** proving each claim from defined assumptions instead of relying on intuition
- **Decomposition:** breaking a large theorem into smaller claims with clear dependencies
- **Edge-case analysis:** checking exceptional structures and hidden assumptions
- **Constructive problem solving:** modifying an object to expose a contradiction
- **Precision:** keeping notation, definitions, and logical conditions consistent across a long proof

These skills translate naturally to cybersecurity, where network relationships, attack paths, trust connections, and unusual edge cases must be analyzed carefully.

## Learning LaTeX

I also learned how to write mathematical research in **LaTeX**. I used it to organize theorem and claim environments, format notation, write multi-case proofs, manage references, and collaborate on a growing technical paper.

## Current Status

The paper is still in progress. What's left is finishing the remaining claims, checking that the edge-exchange arguments cover every case, and connecting the intermediate results into a full proof of the target theorem.

## What I Learned

The hard part wasn't any single proof. It was that the ground kept moving. We started with a simple version of the tree, and as we worked up to more complex versions, the base conditions and arguments changed with them. A claim I'd spent a week on would suddenly rest on assumptions that no longer held. There were also several versions of the document in play at once, each with its own notation and its own set of conditions.

At first I handled that badly. I'd keep working from the version in my head instead of the one we'd moved to, and I'd have to redo arguments I thought were finished.

What fixed it was giving up on the idea that anything was settled. I started re-checking which conditions a claim actually depended on before building on it, and treating a change in the setup as normal rather than as lost work. By the end I could pick up a revised version and find where my part still applied much faster than I could at the start!
