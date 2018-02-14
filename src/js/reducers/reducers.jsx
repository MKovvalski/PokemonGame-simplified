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

const initialState = {
    playerPokemon: pokemons[1],
    randomPokemon: pokemons[0],
    attackToDisplay: null
};

export function battleReducer(state = initialState, action) {
    switch (action.type) {
        case "PASS_PLAYER_POKEMON_TO_BATTLE":
            return {...state, playerPokemon: action.playerPokemon};
            break;
        case "PASS_RANDOM_POKEMON_TO_BATTLE":
            return {...state, randomPokemon: action.randomPokemon};
            break;

        case "PLAYER_POKEMON_ATTACK_SELECTED":
            if (action.attack.type === "modifying_myself") { //jak przekazać to do jakieś funkcji?
                if (action.attack.target === "atk") {
                    return {...state, playerPokemon: {...state.playerPokemon, atk: state.playerPokemon.atk + action.attack.power}}
                }
                if (action.attack.target === "def") {
                    return {...state, playerPokemon: {...state.playerPokemon, def: state.playerPokemon.def + action.attack.power}}
                }
                if (action.attack.target === "specAtk") {
                    return {...state, playerPokemon: {...state.playerPokemon, specAtk: state.playerPokemon.specAtk + action.attack.power}}
                }
                if (action.attack.target === "specDef") {
                    return {...state, playerPokemon: {...state.playerPokemon, specDef: state.playerPokemon.specDef + action.attack.power}}
                }
                if (action.attack.target === "speed") {
                    return {...state, playerPokemon: {...state.playerPokemon, speed: state.playerPokemon.speed + action.attack.power}}
                }
                if (action.attack.target === "stamina") {
                  if (state.playerPokemon.stamina + action.attack.power > action.stamina) {
                      return {...state, playerPokemon: {...state.playerPokemon, stamina: action.stamina}}
                  }
                    return {...state, playerPokemon: {...state.playerPokemon, stamina: state.playerPokemon.stamina + action.attack.power}}
                }
            } else if (action.attack.type === "modifying_enemy") {
                if (action.attack.target === "atk") {
                    return {...state, randomPokemon: {...state.randomPokemon, atk: state.randomPokemon.atk - action.attack.power}}
                }
                if (action.attack.target === "def") {
                    return {...state, randomPokemon: {...state.randomPokemon, def: state.randomPokemon.def - action.attack.power}}
                }
                if (action.attack.target === "specAtk") {
                    return {...state, randomPokemon: {...state.randomPokemon, specAtk: state.randomPokemon.specAtk - action.attack.power}}
                }
                if (action.attack.target === "specDef") {
                    return {...state, randomPokemon: {...state.randomPokemon, specDef: state.randomPokemon.specDef - action.attack.power}}
                }
                if (action.attack.target === "speed") {
                    return {...state, randomPokemon: {...state.randomPokemon, speed: state.randomPokemon.speed - action.attack.power}}
                }
            } else {
                return {...state, randomPokemon: {...state.randomPokemon, stamina: state.randomPokemon.stamina - dmgCalc(action.attack, state.playerPokemon, state.randomPokemon)}};
            }
            break;
        case "RANDOM_POKEMON_ATTACK_SELECTED":
            if (action.attack.type === "modifying_myself") {
                if (action.attack.target === "atk") {
                    return {...state, randomPokemon: {...state.randomPokemon, atk: state.randomPokemon.atk - action.attack.power}}
                }
                if (action.attack.target === "def") {
                    return {...state, randomPokemon: {...state.randomPokemon, def: state.randomPokemon.def - action.attack.power}}
                }
                if (action.attack.target === "specAtk") {
                    return {...state, randomPokemon: {...state.randomPokemon, specAtk: state.randomPokemon.specAtk - action.attack.power}}
                }
                if (action.attack.target === "specDef") {
                    return {...state, randomPokemon: {...state.randomPokemon, specDef: state.randomPokemon.specDef - action.attack.power}}
                }
                if (action.attack.target === "speed") {
                    return {...state, randomPokemon: {...state.randomPokemon, speed: state.randomPokemon.speed - action.attack.power}}
                }
                if (action.attack.target === "stamina") {
                    return {...state, randomPokemon: {...state.randomPokemon, stamina: state.randomPokemon.stamina - action.attack.power}}
                }
                if (action.attack.target === "stamina") {
                    if (state.randomPokemon.stamina + action.attack.power > action.stamina) {
                        return {...state, randomPokemon: {...state.randomPokemon, stamina: action.stamina}}
                    }
                    return {...state, randomPokemon: {...state.playerPokemon, stamina: state.randomPokemon.stamina + action.attack.power}}
                }
            } else if (action.attack.type === "modifying_enemy") {
                if (action.attack.target === "atk") {
                    return {...state, playerPokemon: {...state.playerPokemon, atk: state.playerPokemon.atk + action.attack.power}}
                }
                if (action.attack.target === "def") {
                    return {...state, playerPokemon: {...state.playerPokemon, def: state.playerPokemon.def + action.attack.power}}
                }
                if (action.attack.target === "specAtk") {
                    return {...state, playerPokemon: {...state.playerPokemon, specAtk: state.playerPokemon.specAtk + action.attack.power}}
                }
                if (action.attack.target === "specDef") {
                    return {...state, playerPokemon: {...state.playerPokemon, specDef: state.playerPokemon.specDef + action.attack.power}}
                }
                if (action.attack.target === "speed") {
                    return {...state, playerPokemon: {...state.playerPokemon, speed: state.playerPokemon.speed + action.attack.power}}
                }
            } else {
                return {...state, playerPokemon: {...state.playerPokemon, stamina: state.playerPokemon.stamina - dmgCalc(action.attack, state.randomPokemon, state.playerPokemon)}};
            }
            break;
        case "PASSING_ATTACK_INFO_TO_DISPLAY":
            return {...state, attackToDisplay: action.attack};
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

export function passedWinnerInfo(state = null, action) {
    switch (action.type) {
        case "PASSING_WINNER_INFO":
            return action.pokemon;
        default:
            return state
    }
}
