// jeśli typ to heal to celem jest życie własnego pokemona
// jeśli normal/special to celem jest życie przeciwnego pokemona

//sprawdź jakiego typu jest attack

//przez attack info rozumiemy dane przesłane z reducerListener2 (to object)

//funkcja musi pobierać dane pokemona przeciwnika i gracza

function calculateDmg(attack, pokemon1, pokemon2) { //payload przekazywany w reducer-listener'a
    const hitRatio = Math.floor((Math.random()*10) + 1);
    if (hitRatio > attack.accuracy) {
        return 0
    } else {
        if (attack.type === "heal") {
            return - attack.power
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