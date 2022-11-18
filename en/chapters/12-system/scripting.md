# 💻 System

## Shell, Bash & Powershell

As far as I'm concerned, I already have a lot of experience with various notions of system scripting with languages like Powershell. In the world of monitoring, this is a fairly important skill because we are frequently faced with situations where it is important to know how to tweak scripts to collect metrics, automate tasks or simply modify/configure an X or Y product.

The deeper I go into the Software world, the more I realize that it is really important to master this (often to write and maintain installation or deployment scripts for example).

This allows me as a developer to bridge the gap with my team members who will manage DevOps etc…; while maintaining my passion and my interest because we remain in the field of development.

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

⬅️ [💻 System: Introduction](./introduction.md) |
➡️ [💖 Thanks](../thanks/thanks.md)