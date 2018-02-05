import dmgCalc from "../methods/damageCalculator.jsx";
import pokemons from "../game-data/pokemons.jsx";

export function selectedPokemon(state = pokemons[0], action) {
    switch (action.type) {
        case "POKEMON_SELECTED":
            return action.pokemon;
        default:
            return state;
    }
}

export function battleReducer(state = null, action) {
    switch (action.type) {
        case "PASS_PLAYER_POKEMON_TO_BATTLE":
            return {...state, playerPokemon: action.playerPokemon};
            break;
        case "PASS_RANDOM_POKEMON_TO_BATTLE":
            return {...state, randomPokemon: action.randomPokemon};
            break;
        case "PLAYER_POKEMON_ATTACK_SELECTED":
            if (action.attack.type === "modifying_myself") {
                if (action.attack.target === "atk") {
                    return {...state, playerPokemon: {...state.playerPokemon, atk: state.playerPokemon.atk + action.attack.power}}
                }
            } else if (action.attack.type === "modifying_enemy") {
                if (action.attack.target === "def") {
                    return {...state, randomPokemon: {...state.randomPokemon, def: state.randomPokemon.def - action.attack.power}}
                }
            } else {
                return {...state, randomPokemon: {...state.randomPokemon, stamina: state.randomPokemon.stamina - dmgCalc(action.attack, state.playerPokemon, state.randomPokemon)}};
            }
            break;
        case "RANDOM_POKEMON_ATTACK_SELECTED":
            if (action.attack.type === "modifying_myself") {
                if (action.attack.target === "atk") {
                    return {...state, randomPokemon: {...state.randomPokemon, atk: state.randomPokemon.atk + action.attack.power}}
                }
            } else if (action.attack.type === "modifying_enemy") {
                if (action.attack.target === "def") {
                    return {...state, playerPokemon: {...state.playerPokemon, def: state.playerPokemon.def - action.attack.power}}
                }
            } else {
                return {...state, playerPokemon: {...state.playerPokemon, stamina: state.playerPokemon.stamina - dmgCalc(action.attack, state.randomPokemon, state.playerPokemon)}};
            }
            break;
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

export function incrementedCounter(state = {count: 0}, action) {
    switch (action.type) {
        case "CHANGE_COUNTER":
            return {count: state.count + 1};
        default:
            return state
    }
    
}

export function passedWinnerInfo(state = null, action) {
    switch (action.type) {
        case "PASSING_WINNER_INFO":
            return action.pokemon;
        default:
            return state
    }
}
