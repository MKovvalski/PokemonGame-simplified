// presets
import {combineReducers} from "redux";

// importing reducers
import {selectedGender, selectedPokemon, selectedRandoPokemon, selectedAttack} from "./reducers.jsx";

const allReducers = combineReducers({
        selectedGender,
        selectedPokemon,
        selectedRandoPokemon,
        selectedAttack,
    });

export default allReducers;