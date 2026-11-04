---
ref: C-001
title: Code quality
institution: IMT Mines Alès
period: Since 2022–2023
format: 34 h · lectures + labs
students: 100
class_size: 20–30
summary: Clean code, testing, architecture and team practices for software that stands the test of time.
order: 1
---

## <span class="n">00</span> At a glance

Our job is to build applications, which means writing code… but mostly reading it. This course starts from that observation: a program must run on a machine, **and** make sense to humans.

The module alternates lectures with hands-on labs, in classes of 20 to 30 students. The course is taught in French.

**Prerequisites**: object-oriented programming, and some TypeScript, Java or C++.

## <span class="n">Labs</span> Taking over hard-to-maintain code

Students start from code that is hard to read and hard to maintain, the kind you find in real companies. Session after session, they turn it into code that is maintainable and open to change:

- applying the clean code rules from the lectures;
- setting up static analysis to measure and guide the fixes;
- describing the API with OpenAPI;
- containerizing with Docker.

## <span class="n">01</span> Software quality

What "quality" means for software, and what its absence costs.

- The cost of poor quality: bugs, time spent fixing, technical debt, but also lost user trust and developers who leave.
- Functional specifications (the "what") and non-functional requirements (the "how"): never written down, always expected.
- NFRs one by one: data integrity, maintainability, modifiability, fault tolerance, resilience, robustness, scalability, security, performance.
- Measuring without aiming at the wrong target: a metric is a tracking tool, not a goal.

## <span class="n">02</span> Clean code

Simple rules for code that works and, above all, reads well.

- Naming, indentation, useful comments (and the ones to delete), function size, duplication, hardcoded values, visibility.
- Cyclomatic complexity and time complexity (Big O notation).
- The principles behind the choices: KISS, DRY, YAGNI, fail fast, separation of concerns, loose coupling, composition over inheritance.
- Tooling: static analysis (linters, SonarQube), Git and its conventions, build tools, Docker.
- TypeScript focus: exceptions, async code, `null` vs `undefined`, immutability, production logging, and types that make illegal states unrepresentable.

## <span class="n">02 bis</span> Clean code in the age of AI agents

If the code is generated, how do you stay in control?

- What a language model is, and why context changes everything.
- Written rules (Markdown files), and TDD to force a verification loop.
- Spec-driven development (SDD): the contract first, with tests and documentation derived from it, using Spec Kit as an example.

## <span class="n">03</span> Testing

Everyone loves having tests, nobody loves writing them.

- Why test: confidence, understanding the code, fearless refactoring, bugs caught before production.
- Writing readable, deterministic tests: Given / When / Then, Arrange / Act / Assert.
- Unit tests, mocks, integration, end-to-end and functional tests.
- Mutation testing: 100% coverage doesn't prove the code is tested.
- TDD, and the tooling: Vitest/Jest, v8/istanbul coverage, Testcontainers, Stryker.

## <span class="n">04</span> Software architecture

Why keep it simple when you can make it very, very complicated?

- Interfaces as boundaries between components.
- Hexagonal architecture: keep business logic independent from both the database and the API. Domain, application, driving and driven ports, infrastructure, presentation.
- Gang of Four design patterns: Singleton, Factory, Builder, Prototype, Adapter, Composite, Decorator, Bridge, Template, Chain of responsibility, Observer, Visitor.
- SOLID principles.
- Designing a REST API: constraints, HTTP verbs, status codes, resource naming, versioning, OpenAPI.

## <span class="n">05</span> Development practices

Quality is a team effort too.

- Code review: what it should check, and how to run it kindly, as an author and as a reviewer.
- Pair programming, its roles and what it really costs.
- Continuous integration and DevOps.
- Agile: the manifesto, its twelve principles, Scrum and its rituals.
- Application security: the OWASP Top 10, injection, authentication and sensitive data.

## <span class="n">06</span> Takeaways

> Write to be read. Test. Share.
