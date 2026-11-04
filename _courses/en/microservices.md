---
ref: C-003
title: Microservices
institution: IMT Mines Alès
period: Since 2023
format: 40 h · lectures + labs + project
students: 100
class_size: 20–30
summary: Understand when and how to split an application into microservices, then put it into practice on a real project.
order: 3
---

## <span class="n">00</span> At a glance

Microservices promise autonomous teams, targeted scaling and a more resilient application. They also bring latency, deployment complexity and scattered data. This course goes through the history of server architecture to understand where microservices come from, and above all when they are worth their cost.

The module alternates lectures, a design lab and a development project, in classes of 20 to 30 students.

**Prerequisites**: web development basics (HTTP, REST APIs) and databases.

## <span class="n">Lab</span> Planning a monolith migration

Students play a project manager at a consulting firm. A client wants to migrate their online store, an MVC app plus a mobile API, which slows down whenever orders pile up. Catalog, cart, accounts, third-party payment, invoicing, warehouse, promo codes, back office: everything lives in the monolith.

They must deliver:

- a target architecture that isolates the most heavily used parts so they can scale;
- a progressive rollout plan that replaces part of the application as soon as possible, without ever going for a *big bang*.

## <span class="n">Project</span> A microservices game

In groups, students build a dungeon crawler playable in the browser. You create a hero (hit points, level, stats, inventory, gold), send them into a dungeon, move tile by tile and fight your way to the exit. The game can be entirely text-based: what gets graded is the microservices.

Any language is allowed, with a few constraints:

- at least two different database systems;
- at least one message queue;
- an authentication service;
- a logging service, browsable chronologically or by hero;
- a `docker-compose` file that starts every service and its databases.

Before writing any code, each group hands in an architecture document: list of services, routes (URL and HTTP verb), technology and structure of each database, broker, mode and messages of each queue, and one OpenAPI specification per service.

## <span class="n">01</span> From monolith to microservices

- A short history of server architecture: mainframes, on-premise, front-end / back-end split, cloud, Docker and Kubernetes.
- The monolith: one team, one repository, one way to scale… and one way to go down. Its strengths are real: fast development, simple deployment and monitoring.
- Service Oriented Architecture, and what sets it apart from microservices.
- Microservices: sovereign services, each with its own data store and deployment, free to use any technology. And their limits: synchronicity, latency, deployment complexity.

## <span class="n">02</span> Designing a microservices architecture

- Starting from an existing monolith: never go *big bang*, solve authentication first, pick your first step, migrate and synchronize the data.
- Starting from scratch: planning comes first, and Domain Driven Design draws the boundaries between services.

## <span class="n">03</span> Modern web architecture

- The back end: a stateless REST API served over HTTP, its verbs, and CORS.
- The front end: a web or mobile application with its own state and part of the logic.

## <span class="n">04</span> Databases

- Choosing a database for performance, flexibility and setup cost.
- Relational, document, key/value and column-oriented: strengths and limits of each.
- Transactions when data is spread out: CQRS, losing ACID guarantees, the CAP theorem.

## <span class="n">05</span> Communication between services

- Synchronous (REST, RPC): the guarantee that the action happened, at the cost of latency.
- Asynchronous (events, AMQP): distributing work and updating several systems at once.
- RabbitMQ and its different modes, then Kafka.

## <span class="n">06</span> Local development and debugging

- Working across teams: architecture decisions, Git submodules, OpenAPI contracts, CI/CD.
- Running the system on your machine: Docker images, local databases, and debugging only what you need.

## <span class="n">07</span> Authentication

- Where to authenticate: a dedicated service, at the edge, or through an external provider.
- JWT (RFC 7519): header, payload and signature.
