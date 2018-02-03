
function calculateDmg(attack, pokemon1, pokemon2) {
    const hitRatio = Math.floor((Math.random()*10) + 1);
    if (hitRatio > attack.accuracy) {
        console.log("missied " + pokemon1);
        return 0
    } else {
        if (attack.type === "heal") {
            return attack.power
        } else {
            if (attack.type === "special") {
                return Math.ceil(( ( ( (pokemon1.lvl * 2 ) / 5 ) + 2 ) * attack.power * (pokemon1.specAtk / pokemon2.specDef) / 50 ))
            } else {
                return Math.ceil(( ( ( (pokemon1.lvl * 2 ) / 5 ) + 2 ) * attack.power * (pokemon1.atk / pokemon2.def) / 50 ))
            }
        }
    }
}

export default calculateDmg;