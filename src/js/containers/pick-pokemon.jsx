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
import {selectedPokemon} from "../reducers/reducers.jsx";

//classes and renders
class PickPokemon extends React.Component {
    componentDidMount () {
        this.props.randomPokemon(pokemons[Math.floor(Math.random()*6)])
    }

    handleClick = () => {
        if (typeof this.props.onConfirm === "function") {
            this.props.onConfirm();
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
                        <div className = "row2"><button className = "btn1" disabled = {(!this.props.gender || !this.props.pokemon)? true : false} onClick = {this.handleClick} >Zatwierdź wybór pokemona</button></div>

                </div>
    }
}

function mapStateToProps(state) {
    return {
        pokemon: state.selectedPokemon,
        gender: state.selectedGender
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        clickedPokemon: actions.clickedPokemon,
        randomPokemon: actions.randomPokemon
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(PickPokemon);

