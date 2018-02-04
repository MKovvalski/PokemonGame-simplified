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
    return {
        type: "PASS_PLAYER_POKEMON_TO_BATTLE",
        playerPokemon
    }
}

function passRandomPokemon (randomPokemon) {
    return {
        type: "PASS_RANDOM_POKEMON_TO_BATTLE",
        randomPokemon
    }
}

function playerClickedAttack(attack) {
    console.log(attack);
    return {
        type: "PLAYER_POKEMON_ATTACK_SELECTED",
        attack
    }
}

function randomSelectedAttack(attack) {
    console.log(attack);
    return {
        type: "RANDOM_POKEMON_ATTACK_SELECTED",
        attack
    }
}

function passingWinnerInfo(pokemon) {
    return {
        type: "PASSING_WINNER_INFO",
        pokemon
    }
}
export default {
    clickedGender,
    clickedPokemon,
    randomPokemon,
    playerClickedAttack,
    randomSelectedAttack,
    passPlayerPokemon,
    passRandomPokemon,
    passingWinnerInfo
}
