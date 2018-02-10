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
          return <li className = "pokemon-in-list" key={pokemon.id} onClick ={() => this.props.clickedPokemon(pokemon)}><div><img className = "pokemon" src = {pokemon.gif_attack}/><div>{pokemon.id}</div></div></li>
      })
    };

    render () {
        return <div className = "game-framing">
                    <div className = "border">
                        <div className = "row1-2aa">
                            <div className = "col1-2a">
                                <ul className = "pokemon-list">
                                    {this.generateList()}
                                </ul>
                            </div>
                            <div className  = "col1-2b">
                                <div className = "pokemon-img-and-name">
                                    <h2>{this.props.pokemon.id}</h2>
                                    <img className= "pokemon-img" src = {this.props.pokemon.gif_calm}/>
                                </div>
                                <div className = "pokemon-stat-list-box">
                                    <ul className = "pokemon-stat-list">
                                        <li><span className = "hp-stat-name">hp:</span><span className = "hp-stat-number">{this.props.pokemon.stamina}</span></li>
                                        <li><span className = "stat-name">attack:</span><span className = "stat-number">{this.props.pokemon.atk}</span></li>
                                        <li><span className = "stat-name">defence</span><span className = "stat-number">{this.props.pokemon.def}</span></li>
                                        <li><span className = "stat-name">sp.atk</span><span className = "stat-number">{this.props.pokemon.specAtk}</span></li>
                                        <li><span className = "stat-name">sp.def</span><span className = "stat-number">{this.props.pokemon.specDef}</span></li>
                                        <li><span className = "stat-name">speed</span><span className = "stat-number">{this.props.pokemon.speed}</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className = "row1-2bb">
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

