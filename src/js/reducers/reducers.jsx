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

export function selectedRandoPokemon(state = null, action) {
    switch (action.type) {
        case "RANDOM_POKEMON_SELECTED":
            return action.pokemon;
        default:
            return state;
    }
}

export function selectedAttack(state = null, action) {
    switch (action.type) {
        case "ATTACK_SELECTED":
            return {...state, randomPokemon: {...state.randomPokemon, stamina: state.randomPokemon.stamina - dmgCalc(action.attack, state.playerPokemon, state.randomPokemon)}};
        default:
            return state;
    }
}