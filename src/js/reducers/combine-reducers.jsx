// presets
import {combineReducers} from "redux";

// importing reducers
import {
    selectedPokemon,
    selectedRandomPokemon,
    battleReducer,
    incrementedCounter,
    passedWinnerInfo
} from "./reducers.jsx";

// combined reducers
const allReducers = combineReducers({
        selectedPokemon,
        selectedRandomPokemon,
        battleReducer,
        incrementedCounter,
        passedWinnerInfo
    });

export default allReducers;