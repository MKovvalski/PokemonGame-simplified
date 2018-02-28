// presets
import {combineReducers} from "redux";

// importing reducers
import {
    selectedPokemon,
    selectedRandomPokemon,
    battleReducer,
    passedWinnerInfo,
    passedDisplaySetting,
    passedTransformationInfo
} from "./reducers.jsx";

// combined reducers
const allReducers = combineReducers({
        selectedPokemon,
        selectedRandomPokemon,
        battleReducer,
        passedWinnerInfo,
        passedDisplaySetting,
        passedTransformationInfo
    });

export default allReducers;