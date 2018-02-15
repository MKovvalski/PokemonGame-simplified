
function calculateDmg(attack, pokemon1, pokemon2) {
    const hitRatio = Math.floor((Math.random()*100) + 1);
    if (hitRatio > attack.accuracy) {
        return 0
    } else {
        if (attack.type === "modifying_myself" && attack.type === "modifying_enemy") {
            return attack.power
        } else {
            if (attack.type === "special") {
                const dmgSpec = Math.ceil(( ( ( (pokemon1.lvl * 2 ) / 5 ) + 2 ) * attack.power * (pokemon1.specAtk / pokemon2.specDef) / 50 ));
                if (pokemon2.weakTo.indexOf(attack.nature) !== -1) {
                    return dmgSpec * 2;
                } else if (pokemon2.resistantTo.indexOf(attack.nature) !== -1) {
                    return dmgSpec / 4;
                } else {
                    return dmgSpec
                }
            } else {
                const dmgNorm = Math.ceil(( ( ( (pokemon1.lvl * 2 ) / 5 ) + 2 ) * attack.power * (pokemon1.atk / pokemon2.def) / 50 ));
                if (pokemon2.weakTo.indexOf(attack.nature) !== -1) {
                    return dmgNorm * 2;
                } else if (pokemon2.resistantTo.indexOf(attack.nature) !== -1) {
                    return dmgNorm / 4;
                } else {
                    return dmgNorm
                }
            }
        }
    }
}

export default calculateDmg;