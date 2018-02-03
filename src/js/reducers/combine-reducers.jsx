// presets
import {combineReducers} from "redux";

// importing reducers
import {
    selectedGender,
    selectedPokemon,
    selectedRandomPokemon,
    selectedAttack,
    playerPokemonSentToBattle,
    randomPokemonSentToBattle
} from "./reducers.jsx";

const allReducers = combineReducers({
        selectedGender,
        selectedPokemon,
        selectedRandomPokemon,
        playerPokemonSentToBattle,
        randomPokemonSentToBattle,
        selectedAttack,
    });

export default allReducers;