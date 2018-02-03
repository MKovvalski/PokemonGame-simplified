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

function passPlayerPokemon (playerPokemon) {
    console.log(playerPokemon);
    return {
        type: "PASS_PLAYER_POKEMON_TO_BATTLE",
        playerPokemon
    }
}

function passRandomPokemon (randomPokemon) {
    console.log(randomPokemon);
    return {
        type: "PASS_RANDOM_POKEMON_TO_BATTLE",
        randomPokemon
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
    clickedAttack,
    passPlayerPokemon,
    passRandomPokemon
}
