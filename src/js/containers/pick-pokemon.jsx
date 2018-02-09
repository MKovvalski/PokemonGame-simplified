//presets
import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

//importing game-data
import pokemons from "../game-data/pokemons.jsx";

//importing actions
import actions from "../actions/all-actions.jsx";

//classes and renders
class PickPokemon extends React.Component {
    componentDidMount () {
        this.props.randomPokemonGenerator(pokemons[0]);
    }

    handleClick = () => {
        if (typeof this.props.onConfirm === "function") {
            this.props.onConfirm();
            this.props.passPlayerPokemon(this.props.pokemon);
            this.props.passRandomPokemon(this.props.randomPokemon);
        }
    };

    generateList = () => {
      return pokemons.map((pokemon) => {
          return <li className = "pokemon-in-list" key={pokemon.id} onClick ={() => this.props.clickedPokemon(pokemon)}><div className= "background-col"><img src = {pokemon.gif_attack}/><div className = "pokemonName">{pokemon.id}</div></div></li>
      })
    };

    render () {
        return <div className = "game-framing">
                    <div className = "border">
                        <div className = "row1-2a">
                            <div className = "col1-2a">
                                <ul className = "pokemon-list">
                                    {this.generateList()}
                                </ul>
                            </div>
                            <div className  = "col1-2b">
                                <div>
                                    <h2>{this.props.pokemon.id}</h2>
                                    <img className= "img" src = {this.props.pokemon.gif_calm}/>
                                </div>
                                <ul>
                                    <li>Attack:<span>{this.props.pokemon.atk}</span></li>
                                    <li>Defense:<span>{this.props.pokemon.def}</span></li>
                                    <li>Special-Attack:<span>{this.props.pokemon.specAtk}</span></li>
                                    <li>Special-Defense:<span>{this.props.pokemon.specDef}</span></li>
                                    <li>Speed:<span>{this.props.pokemon.speed}</span></li>
                                    <li>Stamina:<span>{this.props.pokemon.stamina}</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className = "row1-2b">
                            <button disabled = {false} onClick = {this.handleClick} >Zatwierdź wybór pokemona</button>
                        </div>
                    </div>
        </div>
    }
}

function mapStateToProps(state) {
    return {
        pokemon: state.selectedPokemon,
        randomPokemon: state.selectedRandomPokemon,
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        clickedPokemon: actions.clickedPokemon,
        randomPokemonGenerator: actions.randomPokemon,
        passPlayerPokemon: actions.passPlayerPokemon,
        passRandomPokemon: actions.passRandomPokemon
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(PickPokemon);

