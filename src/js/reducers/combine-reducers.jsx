// presets
import {combineReducers} from "redux";

// importing reducers
import {
    selectedPokemon,
    selectedRandomPokemon,
    battleReducer,
    passedWinnerInfo,
    passedDisplaySetting
} from "./reducers.jsx";

// combined reducers
const allReducers = combineReducers({
        selectedPokemon,
        selectedRandomPokemon,
        battleReducer,
        passedWinnerInfo,
        passedDisplaySetting
    });

export default allReducers;