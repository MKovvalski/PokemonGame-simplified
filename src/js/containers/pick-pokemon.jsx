//presets
import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

//importing game-data
import pokemons from "../game-data/pokemons.jsx";

//importing other components/containers
import PickCharacter from "./pick-character.jsx";

//importing actions
import actions from "../actions/all-actions.jsx";

//classes and renders
class PickPokemon extends React.Component {
    componentDidMount () {
        this.props.randomPokemonGenerator(pokemons[Math.floor(Math.random()*6)]);
    }

    handleClick = () => {
        if (typeof this.props.onConfirm === "function") {
            this.props.onConfirm();
            this.props.passPlayerPokemon(this.props.pokemon);
            this.props.passRandomPokemon(this.props.randomPokemon);
        }
    };

    generateList () {
      return pokemons.map((pokemon) => {
          return <li key={pokemon.id} onClick ={() => this.props.clickedPokemon(pokemon)}><div className= "background-col"><img src = {pokemon.gif_attack}/><div className = "pokemonName">{pokemon.id}</div></div></li>
      })
    };

    render () {
        return <div>
                    <div>
                            <PickCharacter/>
                        <div>
                            <ul>
                                {this.generateList()}
                            </ul>
                        </div>
                        <div>
                            <div>
                            <h2>{this.props.pokemon.id}</h2>
                            <div><img className= "img" src = {this.props.pokemon.gif_calm}/></div>
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
                        <div><button disabled = {false} onClick = {this.handleClick} >Zatwierdź wybór pokemona</button></div>

                </div>
    }
}

function mapStateToProps(state) {
    return {
        pokemon: state.selectedPokemon,
        randomPokemon: state.selectedRandomPokemon,
        gender: state.selectedGender,
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

