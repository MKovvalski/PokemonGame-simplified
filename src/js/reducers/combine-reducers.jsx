// presets
import {combineReducers} from "redux";

// importing reducers
import {
    selectedPokemon,
    selectedRandomPokemon,
    battleReducer,
    passedWinnerInfo
} from "./reducers.jsx";

// combined reducers
const allReducers = combineReducers({
        selectedPokemon,
        selectedRandomPokemon,
        battleReducer,
        passedWinnerInfo
    });

export default allReducers;