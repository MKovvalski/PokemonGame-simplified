import dmgCalc from "../DamageCalculator.jsx";

const initialState = {
    gender1: null,
    pokemon1: null,
    pokemon2: null,
};

export default function (state = initialState, action) {
    switch(action.type) {
        case "GENDER_SELECTED":
            return {...state, gender1 : action.gender};
            break;
        case "POKEMON_SELECTED":
            return {...state, pokemon1 : action.pokemon};
            break;
        case "POKEMON2_SELECTED":
            return {...state, pokemon2 : action.pokemon};
            break;
        case "ATTACK_SELECTED":
            return {...state, pokemon2: {...state.pokemon2, stamina: state.pokemon2.stamina - dmgCalc(action.attack, state.pokemon1, state.pokemon2)}};
            break;

    }
    return state;
}
