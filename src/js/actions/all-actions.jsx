//all actions in one file

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

function playerClickedAttack(attack, stamina) {
    return {
        type: "PLAYER_POKEMON_ATTACK_SELECTED",
        attack,
        stamina

    }
}

function randomSelectedAttack(attack, stamina) {
    return {
        type: "RANDOM_POKEMON_ATTACK_SELECTED",
        attack,
        stamina
    }
}

function passingWinnerInfo(pokemon) {
    return {
        type: "PASSING_WINNER_INFO",
        pokemon
    }
}

function passingAttackInfo(attack) {
    return {
        type: "PASSING_ATTACK_INFO_TO_DISPLAY",
        attack
    }
}

export default {
    clickedPokemon,
    randomPokemon,
    playerClickedAttack,
    randomSelectedAttack,
    passPlayerPokemon,
    passRandomPokemon,
    passingWinnerInfo,
    passingAttackInfo
}
