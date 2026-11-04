---
ref: C-003
title: Micro-services
institution: IMT Mines Alès
period: Depuis 2023
format: 40 h · cours + TD + projet
students: 100
class_size: 20–30
summary: Comprendre quand et comment découper une application en micro-services, puis le mettre en pratique sur un vrai projet.
order: 3
---

## <span class="n">00</span> En bref

Les micro-services promettent des équipes autonomes, une montée en charge ciblée et une application plus robuste. Ils apportent aussi de la latence, de la complexité de déploiement et des données éclatées. Ce cours part de l'histoire de l'architecture serveur pour comprendre d'où viennent les micro-services, et surtout quand ils valent leur coût.

Le module alterne cours théorique, un TD de conception et un projet de développement, en classe de 20 à 30 élèves.

**Prérequis** : bases en développement web (HTTP, API REST) et en bases de données.

## <span class="n">TD</span> Planifier la migration d'un monolithe

Les élèves jouent le rôle de chef de projet dans une ESN. Un client veut migrer son site de vente en ligne, un MVC doublé d'une API mobile, qui ralentit dès que les commandes affluent. Catalogue, panier, comptes, paiement par un service tiers, facturation, entrepôt, codes promo, administration : tout est dans le monolithe.

Ils doivent rendre :

- un plan d'architecture cible, qui isole les parties les plus sollicitées pour les faire monter en charge ;
- un plan de mise en place progressive, pour remplacer au plus vite une partie de l'application sans jamais passer par un *big bang*.

## <span class="n">Projet</span> Un jeu en micro-services

Par groupes, les élèves construisent un jeu de type *dungeon crawler* jouable dans le navigateur. On crée un héros (points de vie, niveau, caractéristiques, inventaire, or), on l'envoie dans un donjon, on avance case par case et on combat jusqu'à la sortie. Le jeu peut être entièrement textuel : ce qui est évalué, ce sont les micro-services.

Le langage est libre, avec quelques contraintes :

- au moins deux systèmes de base de données différents ;
- au moins une file de messages ;
- un service d'authentification ;
- un service de logs, consultable dans l'ordre chronologique ou par héros ;
- un `docker-compose` qui lance tous les services et leurs bases.

Avant d'écrire du code, chaque groupe rend un dossier d'architecture : liste des services, routes (URL et verbe HTTP), technologie et structure de chaque base, broker, mode et messages de chaque file, et une spécification OpenAPI par service.

## <span class="n">01</span> Du monolithe aux micro-services

- Petite histoire de l'architecture serveur : mainframes, *on-premise*, séparation front-end / back-end, cloud, Docker et Kubernetes.
- Le monolithe : une équipe, un dépôt, un seul moyen de monter en charge… et un seul moyen de tomber. Ses avantages sont réels : rapidité de développement, déploiement et monitoring simples.
- La *Service Oriented Architecture*, et ce qui la sépare des micro-services.
- Les micro-services : des services souverains, chacun avec son propre stockage et son propre déploiement, sans contrainte de technologie. Et leurs limites : synchronisme, latence, complexité de déploiement.

## <span class="n">02</span> Concevoir une architecture en micro-services

- Partir d'un monolithe existant : ne jamais faire de *big bang*, régler l'authentification en premier, choisir sa première étape, migrer et synchroniser les données.
- Partir d'une page blanche : la planification avant tout, et le *Domain Driven Design* pour tracer les frontières entre services.

## <span class="n">03</span> Architecture web moderne

- Le back-end : une API REST sans état, servie en HTTP, ses verbes et le CORS.
- Le front-end : une application web ou mobile, avec son propre état et une part de logique.

## <span class="n">04</span> Bases de données

- Choisir sa base selon les performances, la flexibilité et le coût de mise en place.
- Relationnelles, orientées documents, clé/valeur, orientées colonnes : forces et limites de chacune.
- Les transactions quand les données sont réparties : CQRS, perte des garanties ACID, théorème CAP.

## <span class="n">05</span> Communication entre services

- Synchrone (REST, RPC) : la garantie que l'action a été exécutée, au prix de la latence.
- Asynchrone (événements, AMQP) : distribuer le calcul et mettre à jour plusieurs systèmes à la fois.
- RabbitMQ et ses différents modes, puis Kafka.

## <span class="n">06</span> Développer et déboguer en local

- Travailler à plusieurs équipes : décisions d'architecture, Git submodules, contrats OpenAPI, CI/CD.
- Faire tourner le système sur son poste : images Docker, bases locales, et ne déboguer que ce qui est nécessaire.

## <span class="n">07</span> Authentification

- Où authentifier : un service dédié, en entrée du système (*edge-level*) ou via un service externe.
- Les JWT (RFC 7519) : en-tête, contenu et signature.
