import dmgCalc from "../DamageCalculator.jsx";
import characters from "../game-data/characters.jsx";
import pokemons from "../game-data/pokemons.jsx";

export function selectedGender(state = characters[0], action) {
    switch (action.type) {
        case "GENDER_SELECTED":
            return action.gender;
        default:
            return state;
    }
}

export function selectedPokemon(state = pokemons[0], action) {
    switch (action.type) {
        case "POKEMON_SELECTED":
            return action.pokemon;
        default:
            return state;
    }
}

export function selectedRandomPokemon(state = null, action) {
    switch (action.type) {
        case "RANDOM_POKEMON_SELECTED":
            return action.pokemon;
        default:
            return state;
    }
}

export function playerPokemonSentToBattle (state = null, action) {
    switch (action.type) {
        case "PASS_PLAYER_POKEMON_TO_BATTLE":
            console.log(action.playerPokemon);
            return {...state, playerPokemon: action.playerPokemon};
        default:
            return state;
    }
}
export function randomPokemonSentToBattle (state = null, action) {
    switch (action.type) {
        case "PASS_RANDOM_POKEMON_TO_BATTLE":
            console.log(action.randomPokemon);
            return {...state, randomPokemon: action.randomPokemon};
        default:
            return state;
    }
}
export function selectedAttack(state = null, action) {
    switch (action.type) {
        case "ATTACK_SELECTED":
            return {...state, randomPokemon: {...state.randomPokemon, stamina: state.randomPokemon.stamina - dmgCalc(action.attack, state.pokemon, state.randomPokemon)}};
        default:
            return state;
    }
}