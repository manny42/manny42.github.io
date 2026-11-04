---
ref: C-001
title: Qualité de code
institution: IMT Mines Alès
period: Depuis 2022–2023
format: 34 h · cours + TD
students: 100
class_size: 20–30
summary: Clean code, tests, architecture et pratiques d'équipe pour écrire des logiciels à l'épreuve du temps.
order: 1
---

## <span class="n">00</span> En bref

Notre métier consiste à développer des applications, ce qui demande d'écrire du code… mais surtout d'en lire. Ce cours part de ce constat : un programme doit pouvoir être exécuté par une machine, **et** compris par des humains.

Le module alterne cours théorique et TD appliqués, en classe de 20 à 30 élèves.

**Prérequis** : programmation orientée objet, et des bases en TypeScript, Java ou C++.

## <span class="n">TD</span> Reprendre un code difficile

Les élèves partent d'un code peu lisible et peu maintenable, comme on en rencontre en entreprise. Au fil des séances, ils l'améliorent jusqu'à le rendre maintenable et ouvert à la modification :

- application des règles de clean code vues en cours ;
- mise en place d'une analyse statique pour mesurer et guider les corrections ;
- description de l'API avec OpenAPI ;
- conteneurisation avec Docker.

## <span class="n">01</span> Qualité logicielle

Ce que « qualité » veut dire pour un logiciel, et ce que coûte son absence.

- Le coût de la non-qualité : bugs, temps de correction, dette technique, mais aussi perte de confiance des utilisateurs et difficulté à garder ses développeurs.
- Spécifications fonctionnelles (le « quoi ») et *non-functional requirements* (le « comment ») : implicites, mais toujours attendus.
- Les NFR un par un : intégrité des données, maintenabilité, modifiabilité, tolérance aux pannes, résilience, robustesse, scalabilité, sécurité, performance.
- Mesurer sans se tromper de cible : une métrique est un outil de suivi, pas un objectif.

## <span class="n">02</span> Clean code

Des règles simples pour écrire du code qui fonctionne, et surtout qui se lit.

- Nommage, indentation, commentaires utiles (et ceux à supprimer), taille des fonctions, duplication, valeurs en dur, visibilité.
- Complexité cyclomatique et complexité en temps (notation Big O).
- Les principes qui guident les choix : KISS, DRY, YAGNI, *fail fast*, séparation des responsabilités, couplage faible, composition plutôt qu'héritage.
- L'outillage : analyse statique (linter, SonarQube), Git et ses conventions, outils de build, Docker.
- Focus TypeScript : exceptions, asynchronisme, `null` et `undefined`, immutabilité, logs en production, et un typage qui rend les états incohérents impossibles à représenter.

## <span class="n">02 bis</span> Clean code à l'ère des agents IA

Si on génère le code, comment ne pas en perdre le contrôle ?

- Ce qu'est un modèle de langage, et pourquoi le contexte change tout.
- Des règles écrites (fichiers Markdown), le TDD pour forcer une boucle de vérification.
- Le développement piloté par la spécification (SDD) : le contrat d'abord, les tests et la documentation qui en découlent, avec Spec Kit comme exemple.

## <span class="n">03</span> Tests

Tout le monde aime les avoir, personne n'aime les écrire.

- Pourquoi tester : confiance, compréhension du code, refactoring sans crainte, bugs détectés avant la production.
- Écrire un test lisible et déterministe : *Given / When / Then*, *Arrange / Act / Assert*.
- Tests unitaires, mocks, tests d'intégration, de bout en bout et fonctionnels.
- Tests par mutation : une couverture de 100 % ne prouve pas que le code est testé.
- Le TDD, et l'outillage : Vitest/Jest, couverture v8/istanbul, Testcontainers, Stryker.

## <span class="n">04</span> Architecture logicielle

Pourquoi faire simple quand on peut faire très très compliqué.

- Les interfaces comme frontières entre composants.
- Architecture hexagonale : isoler la logique métier de la base de données comme de l'API. Domaine, application, ports *driving* et *driven*, infrastructure, présentation.
- Design patterns du *Gang of Four* : Singleton, Factory, Builder, Prototype, Adapter, Composite, Decorator, Bridge, Template, Chain of responsibility, Observer, Visitor.
- Les principes SOLID.
- Concevoir une API REST : contraintes, verbes HTTP, codes de retour, nommage des ressources, versions, OpenAPI.

## <span class="n">05</span> Pratiques de développement

La qualité est aussi une affaire d'équipe.

- La revue de code : ce qu'elle doit vérifier, et comment la mener avec bienveillance, côté auteur comme côté relecteur.
- Le pair programming, ses rôles et ce qu'il coûte vraiment.
- L'intégration continue et le DevOps.
- L'agilité : le manifeste, ses douze principes, Scrum et ses rituels.
- La sécurité applicative : le Top 10 OWASP, l'injection, l'authentification et les données sensibles.

## <span class="n">06</span> Ce qu'on retient

> Écrire pour être lu. Tester. Partager.
