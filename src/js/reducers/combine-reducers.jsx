// presets
import {combineReducers} from "redux";

// importing reducers
import PokemonReducer from "./reducer-pokemons.jsx";
import PlayerCharacter from "./reducer-characters.jsx";

// importing action-listeners
import reducerListener from "./reducer-listener.jsx";

const allReducers = combineReducers({
        pokemonList: PokemonReducer,
        characterGender: PlayerCharacter,
        reducerListener: reducerListener,
    });

export default allReducers;