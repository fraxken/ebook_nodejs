# JavaScript

## 🌞 Introduction

Devenir développeur back-end c’est avant tout comprendre que **vous allez passer vos journées à écrire des codes en JavaScript** 😵 (un développeur front aura bien souvent en comparaison beaucoup d’autres tâches comme implémenter des maquettes ce qui lui permettra de respirer).

Je rencontre tous les jours des développeurs qui passent leur temps à galérer car ils ne font jamais les efforts nécessaires pour **combler leur manque de compréhension** des fonctionnalités qui composent JavaScript ou Node.js 😐 (Promise, Symbol, Reflection, Generators, Streams, Event-loop …).

Il est donc nécessaire de vous entraîner et vous former bien plus intensivement que vos collègues qui aspirent à devenir “**majoritairement**” développeur front-end (Même si le front-end lui aussi devient de plus en plus technique avec quelquefois des frameworks qui demandent une maîtrise importante de JavaScript).

Les entretiens **se jouent majoritairement sur votre maîtrise du langage** (plus vous êtes à l’aise et plus vous aurez une chance d’obtenir le boulot). Que ce soit pour un algorithme, un challenge ou même la création d’un projet (une API http par exemple).

Si vous passez dix minutes pour vous souvenir de comment mettre une clé dans un objet, **alors il est fort probable que vous avez grillé votre entretien** 😭. Avoir de l’expérience avec un framework ou une librairie est une bonne chose, mais cela ne doit pas se faire au prix d’un manque de compétences en JavaScript.

> 💡 Les conseils et références qui seront abordés dans le chapitre JavaScript ont été “un peu” discutés dans [un talk](https://www.youtube.com/watch?v=k4cABQN46qE) entre Rayed Benbrahim et moi. Le format vidéo vous conviendra peut-être mieux pour une première approche.

---

Ce document s'adresse principalement à des développeurs (débutants ou non 🐣) qui souhaitent s’orienter vers une carrière **back-end Node.js**. Potentiellement à des personnes souhaitant établir une carrière en transverse ayant la motivation pour subir une montée en compétences aussi bien back que front.

> 👀 En ce qui me concerne j’avais déjà une expérience non négligeable en front-end lors de mes débuts en **2013**. Je ne peux donc pas vous en vouloir si vous souhaitez avoir les deux cordes à votre arc (**mais attention c’est loin d’être simple**).

Le document n’a pas forcément pour objectif de partir dans de la vulgarisation **dès lors que des ressources existantes le font déjà très bien** (sauf si je pense avoir une opportunité et les compétences nécessaires pour le faire mieux). Je préfère le voir comme **un portail vers un ensemble de références** de bien meilleure qualité.

Beaucoup de références ne sont pas en français alors **il est fortement recommandé d’avoir un bon niveau en anglais** (si ce n’est pas le cas il va vous falloir apprendre).

## 💬 Pourquoi ?

C’est toujours un plaisir pour moi d’aider les autres et de partager mon savoir et mes références ❤️. Je le fais déjà au quotidien au travers des différentes communautés et groupes dans lesquelles je suis actif.

C’est aussi pour moi l’occasion de travailler à la construction d’un document rassemblant une majeure partie des éléments qui ont constitué mon parcours 📚 (et potentiellement **me remettre en question et faire un nouveau travail de recherche**). Cela devrait me permettre à titre personnel de former des juniors et mentee beaucoup plus facilement en les aidant avec mon propre document 💡.

De plus, je suis attristé de voir qu’en France __nous manquons encore cruellement de développeurs qualifiés en Node.js__. Beaucoup de mes clients ont un réel manque de candidats ayant une réelle connaissance ou intérêt envers le monde du back-end (la plupart des développeurs se concentrent bien souvent sur leur parcours front et/ou mobile).

## 😬 L’investissement nécessaire

Devenir un développeur back-end Node.js demande énormément de courage 😳 et un investissement souvent bien plus ciblé **sur JavaScript** ainsi que diverses notions comme l’architecture, les tests etc. Le front-end est très largement dominant dans l’écosystème JavaScript et quelques fois cela peut être une source de pression pour un débutant (même à mon niveau d’expertise ce n’est pas tout le temps évident… L'année dernière on m'a recommandé de faire du front-end pour avoir plus de missions 😒).

Il y a forcément moins d’opportunités que sur le front mais en contrepartie cela veut aussi dire qu’il y a **beaucoup moins de candidats Junior qui se spécialisent** en back-end JavaScript. Beaucoup d'entreprises se retrouveront dans une position ou les candidats pour une offre sont majoritairement des développeurs ayant une expérience non corrélée au back-end (ou pas suffisamment 😱).

Évidemment il va falloir vous investir très sérieusement dans l’apprentissage et la pratique pour prouver votre motivation avec des actes. De nos jours cela commence souvent par casser la croyance que faire une API CRUD avec “**express**” va être suffisant pour vous octroyer un boulot (c’est de moins en moins le cas ⛔).

Ce document aura justement pour mission de vous offrir un ensemble de références qui vous aideront tout au long de votre parcours (du moins au possible.. ce document reste imprégné de mes propres forces et faiblesses).

### Note complémentaire pour les reconversions 🎓

Sortir d’une formation accélérée ne vous aidera probablement pas (et croire le contraire vous assurera un échec quasiment certain 😟). Les formateurs sont bien souvent peu qualifiés et sous-payés et les taux d’embauches après formation bien plus faibles que ce que l'on vous a vendu (voir inexistant selon le degré de médiocrité du programme). Beaucoup idéalisent le métier et ne sont pas psychologiquement prêt à vivre le quotidien d’un réel développeur 🙉🙈. 

Bref, il vous faut absolument fournir de très grands efforts pour vous en sortir et espérer décrocher un premier emploi (si c’est votre objectif). Je vous invite par ailleurs à lire l’excellent article de Rayed sur [Devenir développeur après une reconversion](https://practicalprogramming.fr/devenir-developpeur).

### 📌 Légendes
Le document comporte un ensemble de références (liens) vers des vidéos et articles qui sont segmentés par niveau de difficulté et langue ( FR  français ou  EN  anglais).

- **[Débutant]**
Ce sont bien souvent des ressources de vulgarisation ou d’informations accessibles pour des débutants. Attention sur certains sujets coriaces la notion débutant peut néanmoins sous-entendre que vous avez des acquis.

- **[Intermédiaire]**
Ce sont des ressources qui nécessitent une certaine fondation pour pouvoir les aborder. Cela ne veut néanmoins pas dire qu’elles nécessiteront techniquement longtemps pour être abordées.

- **[Avancé]**
A la différence d'intermédiaire, les ressources avancées sont beaucoup plus chevelues sur le plan technique et pratique.

- **[A savoir]**
Ce sont des liens traitant de sujets qu’il est intéressant de connaître (souvent des détails sur le fonctionnement et les comportements peu compris etc). Ce sont des ressources bien souvent débutant/intermédiaire.

> Les notations ne sont pas parfaites et elles sont ici principalement pour essayer de vous guider au maximum.

---
[Page suivante](../javascript/introduction.md)
