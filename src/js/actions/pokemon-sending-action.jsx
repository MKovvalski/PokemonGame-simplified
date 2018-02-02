const PokemonReducer = (pokemon) => {
    return {
        type: "POKEMON_SELECTED",
        payload: pokemon
    }
};

export default PokemonReducer