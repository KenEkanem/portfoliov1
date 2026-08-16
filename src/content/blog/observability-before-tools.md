---
title: "Observability before tools"
description: "Three questions to answer before adding another dashboard to your stack."
published: 2026-04-11
category: "Field Notes"
readTime: "3 min read"
featured: false
tags: [observability, opentelemetry, operations]
---

It is easy to start an observability project with a shopping list. It is harder — and more valuable — to start with uncertainty.

## What must we know?

List the questions your team struggles to answer during an incident. Which customer journeys are failing? Where did latency enter the request? What changed before the error rate moved? Those questions should shape the telemetry you collect.

## Who needs the answer?

A service owner and a support teammate approach the same incident with different context. Useful observability meets both of them where they are. Names should match the language of the product, and dashboards should tell a coherent story.

## What will we do next?

A signal without an action becomes noise. Every alert should point toward a decision: investigate, scale, roll back, or communicate. If nobody knows what a signal asks them to do, it does not deserve to interrupt them.

Tools matter, but only after the questions are clear. Begin with the unknowns. Then make the system explain itself.
