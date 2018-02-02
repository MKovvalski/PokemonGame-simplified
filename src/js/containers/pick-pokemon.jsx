//presets
import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

//importing other components/containers
import PickCharacter from "./pick-character.jsx";

//importing actions
import PokemonData from "../actions/pokemon-sending-action.jsx";
import SendPokemon2 from "../actions/pokemon2-sending-action.jsx";

//classes and renders
class PickPokemon extends React.Component {

    handleClick = () => {
        if (typeof this.props.onConfirm === "function") {
            this.props.onConfirm();
            this.props.sendPokemon2(this.props.pokemons[Math.floor(Math.random()*8)])
        }
    };

    generateList () {
      return this.props.pokemons.map((pokemon) => {
          return <li key={pokemon.id} onClick ={() => this.props.pokemonData(pokemon)}><div className= "background-col"><img src = {pokemon.gif_attack}/><div className = "pokemonName">{pokemon.id}</div></div></li>
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
                            <h2>{!this.props.listener.pokemon1 ? this.props.pokemons[0].id : this.props.listener.pokemon1.id}</h2>
                            <div>{!this.props.listener.pokemon1 ? <img className= "img" src ={this.props.pokemons[0].gif_calm}/> : <img className= "img" src = {this.props.listener.pokemon1.gif_calm}/>}</div>
                            </div>
                            <ul>
                                <li>Attack:{!this.props.listener.pokemon1 ?<span className = "move-right">{this.props.pokemons[0].atk}</span> : <span className = "move-right">{this.props.listener.pokemon1.atk}</span>}</li>
                                <li>Defense:{!this.props.listener.pokemon1  ? <span className = "move-right">{this.props.pokemons[0].def}</span> : <span className = "move-right">{this.props.listener.pokemon1.def}</span>}</li>
                                <li>Special-Attack:{!this.props.listener.pokemon1 ? <span className = "move-right">{this.props.pokemons[0].specAtk}</span> : <span className = "move-right">{this.props.listener.pokemon1.specAtk}</span>}</li>
                                <li>Special-Defense:{!this.props.listener.pokemon1 ? <span className = "move-right">{this.props.pokemons[0].specDef}</span> : <span className = "move-right">{this.props.listener.pokemon1.specDef}</span>}</li>
                                <li>Speed:{!this.props.listener.pokemon1 ? <span className = "move-right">{this.props.pokemons[0].speed}</span> : <span className = "move-right">{this.props.listener.pokemon1.speed}</span>}</li>
                                <li>Stamina:{!this.props.listener.pokemon1  ? <span className = "move-right">{this.props.pokemons[0].stamina}</span> : <span className = "move-right">{this.props.listener.pokemon1.stamina}</span>}</li>
                            </ul>
                        </div>
                    </div>
                        <div className = "row2"><button className = "btn1" disabled = {(!this.props.listener.gender1 || !this.props.listener.pokemon1)? true : false} onClick = {this.handleClick} >Zatwierdź wybór pokemona</button></div>

                </div>
    }
}

function mapStateToProps(state) {
    return {
        pokemons: state.pokemonList,
        listener: state.reducerListener,
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        pokemonData:PokemonData,
        sendPokemon2: SendPokemon2,
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(PickPokemon);

