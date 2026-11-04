---
ref: C-002
title: Git, from the basics to team workflow
institution: Yooz
period: 2025
format: 4 to 8 hours workshop
students: 80
students_label: participants
summary: Understand how Git works so you can use it with confidence, on your own and as a team.
order: 2
---

## <span class="n">00</span> At a glance

Everyone uses Git, but few people know what it actually does. This short workshop starts from how Git works inside so every command makes sense, then moves on to team workflow and the problems teams hit every day.

The length depends on what you want to cover: 4 h for the basics and the workflow, up to 8 h with the deep-dive modules.

## <span class="n">Lab</span> One repository, start to finish

Participants create a Git repository and run a series of operations on it:

- opening and closing branches;
- causing and resolving merge conflicts;
- rebasing, to understand what a rebase really does and why you shouldn't do it on a shared branch.

## <span class="n">01</span> How Git works

- Three kinds of objects: blob, tree and commit.
- Git stores snapshots, not a history of diffs.
- How it saves space (zlib, delta compression), and why binary files are a problem.

## <span class="n">02</span> Local commands

- Inspecting: `status`, `log`, `diff`.
- Preparing a commit: `add`, `mv`, `rm`, `restore`, `reset`.
- Committing, and fixing the last commit with `--amend`.
- Branches: `branch`, `switch`, `merge`.
- Going further: `cherry-pick`, `checkout` and rebase.

## <span class="n">03</span> Working with a remote

- `clone`, `fetch`, `pull`, `push`.
- Rewriting history without overwriting other people's work: `push --force-with-lease`.

## <span class="n">04</span> A team workflow

The role of each branch (`master`, `development`, `release`, `hotfix`, `feature`, work branches), and how code flows between them. The workshop adapts to the workflow your team already uses.

## <span class="n">05</span> Common problems, and how to get out of them

- A conflict when bringing a hotfix back into `development`.
- Removing a commit from your branch without losing your work.
- Having merged `development` into a hotfix branch.
- Bringing a single commit from a feature into `development`.

## <span class="n">+</span> Deep-dive modules

Depending on your needs, the workshop can extend to 8 h with:

- automating branch creation and closing;
- a deep dive into Git's internals, to see what happens under each command.
