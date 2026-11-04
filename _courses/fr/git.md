---
ref: C-002
title: Git, de la base au workflow d'équipe
institution: Yooz
period: 2025
format: Atelier de 4 à 8 heures
students: 80
students_label: participants
summary: Comprendre comment Git fonctionne pour s'en servir sereinement, seul comme en équipe.
order: 2
---

## <span class="n">00</span> En bref

Tout le monde utilise Git, mais peu de gens savent ce qu'il fait vraiment. Ce court atelier part du fonctionnement interne de Git pour que chaque commande ait du sens, puis va jusqu'au workflow d'une équipe et aux problèmes que cela peut engendrer.

La durée s'adapte à ce que vous voulez voir : 4 h pour les bases et le workflow, jusqu'à 8 h avec les modules d'approfondissement.

## <span class="n">TD</span> Un dépôt, de A à Z

Les participants créent un dépôt Git et y enchaînent les opérations :

- ouvrir et fermer des branches ;
- provoquer et résoudre des conflits de merge ;
- rebaser, pour comprendre ce que fait vraiment un rebase et pourquoi il ne faut pas le faire sur une branche partagée.

## <span class="n">01</span> Comment fonctionne Git

- Trois types d'objets : blob, tree et commit.
- Git enregistre des instantanés, pas un historique de différences.
- Comment il économise l'espace (zlib, compression delta), et pourquoi les fichiers binaires lui posent problème.

## <span class="n">02</span> Commandes locales

- Observer : `status`, `log`, `diff`.
- Préparer un commit : `add`, `mv`, `rm`, `restore`, `reset`.
- Committer, et corriger le dernier commit avec `--amend`.
- Les branches : `branch`, `switch`, `merge`.
- Aller plus loin : `cherry-pick`, `checkout` et le rebase.

## <span class="n">03</span> Travailler avec un dépôt distant

- `clone`, `fetch`, `pull`, `push`.
- Réécrire l'historique sans écraser le travail des autres : `push --force-with-lease`.

## <span class="n">04</span> Un workflow d'équipe

Le rôle de chaque branche (`master`, `development`, `release`, `hotfix`, `feature`, branches de travail), et comment le code circule de l'une à l'autre. L'atelier s'adapte au workflow déjà en place dans votre équipe.

## <span class="n">05</span> Les problèmes courants, et comment s'en sortir

- Un conflit en reportant un hotfix sur `development`.
- Supprimer un commit de sa branche sans perdre son travail.
- Avoir mergé `development` dans une branche de hotfix.
- Récupérer un seul commit d'une feature dans `development`.

## <span class="n">+</span> Modules d'approfondissement

Selon vos besoins, l'atelier peut s'étendre jusqu'à 8 h avec :

- l'automatisation de la création et de la fermeture des branches ;
- une plongée dans les entrailles de Git, pour comprendre ce qui se passe sous chaque commande.
