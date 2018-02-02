//all actions in one file

function clickedGender(gender) {
    return {
        type: "GENDER_SELECTED",
        gender
    }
}

function clickedPokemon(pokemon) {
    return {
        type: "POKEMON_SELECTED",
        pokemon
    }
}

function randomPokemon(pokemon) {
    return {
            type: "RANDOM_POKEMON_SELECTED",
            pokemon
        }
}

function clickedAttack(attack) {
    return {
        type: "ATTACK_SELECTED",
        attack
    }
}

export default {
    clickedGender,
    clickedPokemon,
    randomPokemon,
    clickedAttack
}
