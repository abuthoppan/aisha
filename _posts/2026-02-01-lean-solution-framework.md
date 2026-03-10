---
layout: post
title: "The Lean Solution Framework: Build Without Bloat"
date: 2026-02-01
categories: [Framework]
tags: [lean, process, startup, documentation]
read_time: 10
excerpt: "How to plan, build, launch and operate a product using just enough process — without the enterprise overhead that kills startup velocity."
---

Most architecture frameworks were designed for enterprises with dedicated governance teams, change advisory boards, and six-month planning cycles. They're the wrong tool for startups.

The **Lean Solution Framework (LSF)** is different. It gives you just enough structure to avoid chaos — without the overhead that kills speed.

## The Five Phases

### 01 — Discover: *Why?*

Understand the problem before touching a solution.

**Documents:**
- **Problem Canvas** — Problem, affected users, current workarounds, cost of inaction (1 page max)
- **Stakeholder Map** — Who influences, decides, and is affected
- **Constraint Register** — Budget, time, regulatory, technical constraints

**Exit criteria:** Stakeholders agree on the problem and it's worth solving.

---

### 02 — Design: *What?*

Define what to build at the right level of detail.

**Documents:**
- **Solution Brief** — Vision, scope, approach, success metrics (2–3 pages)
- **Architecture Diagram** — Components, integrations, data flow
- **Decision Log (ADR)** — Key decisions and rationale
- **Risk & Assumptions Log** — What could go wrong

**Exit criteria:** Team and client agree on what's being built and why.

---

### 03 — Develop: *Build*

Build iteratively with just enough governance.

No big spec documents. Requirements live as user stories with acceptance criteria. Architecture decisions get added to the ADR log as they arise.

**Exit criteria:** Working software that passes agreed test scenarios.

---

### 04 — Implement: *Launch*

Deploy and transition to real-world use without breaking the business.

**Documents:**
- **Go-Live Checklist** — Everything that must be true before launch
- **Cutover Plan** — Steps to move from old to new, with rollback option
- **User Guide** — How to use and operate the solution

**Exit criteria:** Solution is live, users can operate it, rollback plan exists.

---

### 05 — Operate: *Run*

Keep it running and improving.

**Exit criteria:** Team can support and evolve the product without the original architect.

---

## The Five Lean Rules

1. **One source of truth** — pick one tool and keep everything there
2. **Living documents only** — if it won't be updated, don't create it
3. **Diagrams over prose** — a good diagram replaces 3 pages of text
4. **Decision log is non-negotiable** — future you will thank present you
5. **Exit criteria before entry** — don't start a phase without knowing what done looks like

## The Key Mindset Shift

The LSF isn't about doing less — it's about doing the *right* things at the *right* time. Every document in the framework exists because not having it causes a specific, known problem. If you find yourself creating a document nobody reads, cut it.

> A good test: could your least technical stakeholder read this and understand what they're approving? If not, you need a simpler version on top of it.
