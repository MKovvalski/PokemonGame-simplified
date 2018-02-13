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
        this.props.randomPokemonGenerator(pokemons[Math.floor(Math.random()*10)]);
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
          return <li className = "pokemon-in-list" key={pokemon.id} onClick ={() => this.props.clickedPokemon(pokemon)}><img className = "pokemon" src = {pokemon.gif_attack}/><div className = "pokemon-name">{pokemon.id}</div></li>
      })
    };

    generateListOfTypes = () => {
        return this.props.pokemon.type.map ((type,i) => {
           return <li style = {{backgroundColor: this.generateProperBackground(type)}} key = {type+i}>{type}</li>
        })
    };

    generateProperBackground = (type) => {
        if (type === "grass") {
            return "#00b33c"
        }
        if (type === "water") {
            return "#4dc3ff"
        }
        if (type === "fire") {
            return "#ff6600"
        }
        if (type === "normal") {
            return "#b8b894"
        }
        if (type === "electric") {
            return "#ffd11a"
        }
        if (type === "ice") {
            return "#99ffff"
        }
        if (type === "fighting") {
            return "#cc3300"
        }
        if (type === "poison") {
            return "#9933ff"
        }
        if (type === "ground") {
            return "#cc9900"
        }
        if (type === "flying") {
            return "#d9b3ff"
        }
        if (type === "psychic") {
            return "#ff80bf"
        }
        if (type === "bug") {
            return "#99e600"
        }
        if (type === "rock") {
            return "#aaaa55"
        }
        if (type === "ghost") {
            return "#8a00e6"
        }
        if (type === "dark") {
            return "#55552b"
        }
        if (type === "dragon") {
            return "#6600ff"
        }
        if (type === "steel") {
            return "#a6a6a6"
        }
        if (type === "fairy") {
            return "#ffcccc"
        }
    };

    render () {
        const pokemon = this.props.pokemon;
        return <div className = "game-framing">
                    <div className = "border">
                        <div className = "row1-2aa">
                            <div className = "col1-2a">
                                <ul className = "pokemon-list">
                                    {this.generateList()}
                                </ul>
                            </div>
                            <div className  = "col1-2b">
                                <div className = "inner-row-1">
                                    <div className = "pokemon-img-and-name">
                                        <h2>{this.props.pokemon.id}</h2>
                                        <img className= "pokemon-img" src = {this.props.pokemon.gif_calm}/>
                                    </div>
                                    <div className = "pokemon-stat-list-box">
                                        <ul className = "pokemon-stat-list">
                                            <li><span className = "hp-stat-name">hp</span><span className = "hp-stat-number">{this.props.pokemon.stamina}<span className = "hp-life-bar"><span className = "hp-hp-title">HP</span><span className = "hp-green-bar"></span></span></span></li>
                                            <li><span className = "stat-name">attack</span><span className = "stat-number">{this.props.pokemon.atk}</span></li>
                                            <li><span className = "stat-name">defense</span><span className = "stat-number">{this.props.pokemon.def}</span></li>
                                            <li><span className = "stat-name">sp.atk</span><span className = "stat-number">{this.props.pokemon.specAtk}</span></li>
                                            <li><span className = "stat-name">sp.def</span><span className = "stat-number">{this.props.pokemon.specDef}</span></li>
                                            <li><span className = "stat-name">speed</span><span className = "stat-number">{this.props.pokemon.speed}</span></li>
                                        </ul>
                                        <div className = "pokemon-type">
                                            <h3 className = "type-title">Type</h3>
                                            <ul className = "pokemon-type-list">
                                                {this.generateListOfTypes()}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className = "inner-row-2">
                                    <div className = "pokemon-description">{this.props.pokemon.description}</div>
                                </div>
                                <div className = "inner-row-3">
                                    <ul className = "attack-list-1-2">
                                        <li>
                                            <div className = "attack-name">{pokemon.attacks[0].id}</div>
                                            <div className = "attack-nature" style = {{backgroundColor: this.generateProperBackground(pokemon.attacks[0].nature)}}>{pokemon.attacks[0].nature}</div>
                                        </li>
                                        <li>
                                            <div className = "attack-name">{pokemon.attacks[1].id}</div>
                                            <div className = "attack-nature" style = {{backgroundColor: this.generateProperBackground(pokemon.attacks[1].nature)}}>{pokemon.attacks[1].nature}</div>
                                        </li>
                                    </ul>
                                    <ul className = "attack-list-1-2">
                                        <li><div className = "attack-name">{pokemon.attacks[2].id}</div>
                                            <div className = "attack-nature" style = {{backgroundColor: this.generateProperBackground(pokemon.attacks[2].nature)}}>{pokemon.attacks[2].nature}</div>
                                        </li>
                                        <li>
                                            <div className = "attack-name">{pokemon.attacks[3].id}</div>
                                            <div className = "attack-nature" style = {{backgroundColor: this.generateProperBackground(pokemon.attacks[3].nature)}}>{pokemon.attacks[3].nature}</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className = "row1-2bb">
                            <div className = "button-border">
                                <div className = "button-changing-container" disabled = {false} onClick = {this.handleClick}>Ready for battle?</div>
                            </div>
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

