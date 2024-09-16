# 🔐 Sécurité

## Dépendances directes et indirectes

Les projets possédant des dépendances indirectes sont bien plus vulnérables comme [le montre cette récente étude](https://arxiv.org/pdf/1902.09217.pdf) ou [cet article](https://snyk.io/blog/78-of-vulnerabilities-are-found-in-indirect-dependencies-making-remediation-complex/) de snyk. Le grand problème est qu’il devient difficile de simplement corriger une faille de sécurité rapidement puisqu’elle n’est pas directement liée à la dépendance que vous utilisez.

Évitez à tout prix les packages avec des dépendances dépassant une profondeur de 2-3 packages (cela introduit toujours plusieurs dépendances indirectes à maintenir et sécuriser ce qui peut très vite devenir complexe).

Le projet [NodeSecure](https://github.com/NodeSecure/cli) permet d’analyser en profondeur les dépendances d’un projet ou d’un package npm.

<img src="../../../assets/securite/nsecure.png" alt="NodeSecure" width="750">

- FR [Présentation du projet NodeSecure - Thomas Gentilhomme - ParisJS #101](https://www.youtube.com/watch?v=hmrKI1jZLGc)

> [!IMPORTANT]
> Attention à ne pas non plus tomber dans la parano. Il n’est pas non plus, tout le temps simple, de résoudre des problématiques en quelques packages. L’important est d’être conscient du problème et de faire attention.

## Supply chain attack

Attaque de la chaîne d'approvisionnement en français. Pour un acteur malveillant il est ici question d'attaquer à un élément tiers comme vos dépendances, votre CI ou tout autres composants qui pourrait devenir vulnérable et donner accès à des informations sensibles.

En quelques années cela est devenu un problème très important et massivement exploité pour diverses attaques. Des initiatives et outils comme [SLSA](https://slsa.dev/) et [Sigstore](https://www.sigstore.dev/) on vu le jour dans l'objectif de garantir la provenance d'artifacts (packages etc..).

Des startups ont là aussi vu le jour comme [Socket.dev](https://socket.dev/) dans l'objectif d'apporter des solutions professionnelles viables (notamment à l'écosystème JavaScript).

- EN [NPM security: preventing supply chain attacks](https://snyk.io/blog/npm-security-preventing-supply-chain-attacks/)

## SBOM

Pour diverses raisons, vous pourriez être amené à réaliser un inventaire de vos dépendances (artéfacts). Des standards et outils comme [CycloneDX](https://cyclonedx.org/) vous permettront de générer facilement un fichier JSON, aisément analysable par des tiers (comme Snyk).

De mon côté j'utilise le CLI [cdxgen](https://github.com/CycloneDX/cdxgen) pour générer un inventaire compliant à partir du package.json.

- [Créez une nomenclature des logiciels (SBOM) pour assurer la sécurité de votre chaîne d’approvisionnement open source](https://snyk.io/fr/blog/building-sbom-open-source-supply-chain-security/)

---

⬅️ [🔐 Sécurité: Garder sous contrôle votre Environnement](./3-garder-sous-controle-environnement.md) |
➡️ [🔐 Sécurité: Faille de sécurité courante](./5-faille-securite-courante.md)
