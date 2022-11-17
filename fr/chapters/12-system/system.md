# 💻 Système

## Introduction

Je vais sûrement en décevoir beaucoup, mais tout ce qui est en lien avec le système est très loin d’être ma tasse de thé. Non pas que le sujet ne m’intéresse pas, mais je préfère très largement me focaliser sur des tâches de développement pures (ce qui se ressent énormément dans mon spectre de compétences).

Il est néanmoins important de savoir au minimum se démerder (la plupart du temps c’est juste une question de bonne volonté). En France nous avons l'excellente chaîne youtube de [Xavki](https://www.youtube.com/c/xavki-linux/videos) qui parle d’énormément de sujets autours de divers OS, Docker, etc… Par ailleurs, en ce qui me concerne je ne suis pas particulièrement un grand fan de tout ce qui est en lien avec la guerre fréquente entre les OS… En tant que développeur de solution de monitoring, j’ai le devoir de mettre les pieds sur les différentes solutions existantes ce qui fait que je suis amené à vivre différentes choses (pour avoir déjà un peu d’expérience en binding bas niveau sur les différents OS, je peux vous garantir qu’il y a toujours des trucs bien et des problèmes sur chaque système).

> ⛔ Je le dis souvent dans ce document mais ne vous enfermez jamais dans une bulle idéologique.

## Scripting: Shell, Bash et Powershell

En ce qui me concerne, j’ai déjà pas mal d’expérience vis-à-vis de diverses notions de scripting système avec des langages comme Powershell. Dans le monde du monitoring c’est une maîtrise assez importante car nous sommes fréquemment confrontés à des situations où il est important de savoir bidouiller des scripts pour récolter des métriques, automatiser des tâches ou tout simplement modifier/configurer un produit X ou Y.

Plus je m’enfonce dans le monde du Software, plus je me rend compte qu’il est vraiment important de maîtriser cela (bien souvent pour écrire et maintenir des scripts d’installation ou de déploiement par exemple). 

Cela me permet en tant que développeur de faire le pont avec les membres de mon équipe qui vont gérer la DevOps etc… ; tout en conservant ma passion et mon intérêt car nous restons dans le domaine du développement.

```py
function probeList {
    OUTPUT="$($PU_PATH -u $LOGIN -p $PASSWORD controller probe_list '' '')"
    case "$OUTPUT" in
        *"$FAILED_PATTERN"* ) rc='0';;
        * ) rc='1';;
    esac
    if [ "${rc}" -eq "1" ]; then
        local _t=( $(echo "$OUTPUT" | grep -Eo "[a-zA-Z_]+[[:spave:]]+PDS_PDS") )
        probeList_arr()
        for str in "${_t[@]}"; do
            if [ "$str" != "PDS_PDS" ] && [ "$str" != "hub" ] && [ "$str" != "controller" ] && [ "$str" != "hdb" ] && [ "$str" != "spooler" ]; then
                probeList_arr+=($str)
            fi
        done
    fi
}
```

---

⬅️ [🔬 Monitoring](../11-monitoring/monitoring.md) |
➡️ [💖 Remerciements](../13-remerciements/remerciements.md)
