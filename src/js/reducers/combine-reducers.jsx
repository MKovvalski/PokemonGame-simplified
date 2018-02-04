// presets
import {combineReducers} from "redux";

// importing reducers
import {
    selectedGender,
    selectedPokemon,
    selectedRandomPokemon,
    battleReducer,
    incrementedCounter,
    passedWinnerInfo
} from "./reducers.jsx";

// combined reducers
const allReducers = combineReducers({
        selectedGender,
        selectedPokemon,
        selectedRandomPokemon,
        battleReducer,
        incrementedCounter,
        passedWinnerInfo
    });

export default allReducers;