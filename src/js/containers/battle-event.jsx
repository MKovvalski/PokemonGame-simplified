//presets
import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

//importing actions
import actions from "../actions/all-actions.jsx";

//classes
class Battle extends React.Component {
    constructor(props) {
        super(props);
        const playerBaseStamina = this.props.battleReducer.playerPokemon.stamina;
        const randomBaseStamina = this.props.battleReducer.randomPokemon.stamina;
        this.state = {
            display: "block",
            textArea: "battle begins!",
            playerBaseStamina: playerBaseStamina,
            randomBaseStamina: randomBaseStamina

        };
    };

    attackListGenerator = () => {
        return this.props.battleReducer.playerPokemon.attacks.map((attack) => {
            return <button disabled = {this.state.disabled} className="btn2" onClick = {() => this.handleAttackAction(attack)} key = {attack.id}>{attack.id}</button>
        })
    };

    handleAttackAction (attack) {
        this.setState ({
            display: "none",
            textArea: this.props.battleReducer.playerPokemon.id + " attacks with " + attack.id
        });
        setTimeout(() => { //jak to zoptymalizować/skrócić?!
            let randomPokemonStamina = this.props.battleReducer.randomPokemon.stamina;
            this.props.playerClickedAttack(attack);
            if (randomPokemonStamina === this.props.battleReducer.randomPokemon.stamina) {
               this.setState ({
                   textArea: this.props.battleReducer.playerPokemon.id + " missed"
               })
            }
            if (this.props.battleReducer.randomPokemon.stamina >= 0) {
                setTimeout(() => {
                    let randomAttack = this.props.battleReducer.randomPokemon.attacks[Math.floor(Math.random()*3)];
                    this.setState ({
                        textArea: this.props.battleReducer.randomPokemon.id + " attacks with " + randomAttack.id
                    });
                    setTimeout(() => {
                        let playerPokemonStamina = this.props.battleReducer.playerPokemon.stamina;
                        this.props.randomSelectedAttack(randomAttack);
                        if (playerPokemonStamina === this.props.battleReducer.playerPokemon.stamina) {
                            this.setState ({
                                textArea: this.props.battleReducer.randomPokemon.id + " missed"
                            })
                        }
                        if (this.props.battleReducer.playerPokemon.stamina <= 0) {
                            setTimeout(() => {
                                this.setState ({
                                    display: "none",
                                    textArea: this.props.battleReducer.playerPokemon.id + " fainted"
                                });
                                setTimeout(() => {
                                    this.props.passingWinnerInfo(this.props.battleReducer.randomPokemon);
                                    this.props.onConfirm();
                                },3500);
                            },3000)
                        } else {
                            setTimeout(() => {
                                this.setState({
                                    display: "block",
                                    textArea: "waiting for next move"
                                })
                            }, 2000);
                        }
                    },3000);
                },3000);
            } else {
                setTimeout(() => {
                    this.setState ({
                        display: "none",
                        textArea: this.props.battleReducer.randomPokemon.id + " fainted"
                    });
                    setTimeout(() => {
                        this.props.onConfirm();
                        this.props.passingWinnerInfo(this.props.battleReducer.playerPokemon);
                    },2500);
                },2000)
            }
        },2000);
    };

    handleLifeBarChange = (staminaValue, pokemonStamina) => {
        return ((pokemonStamina * 132) / staminaValue);
    };

    render () {
        let playerPokeStamina = this.props.battleReducer.playerPokemon.stamina;
        let randomPokeStamina = this.props.battleReducer.randomPokemon.stamina;
        return <div className= "container">
                    <div className= "background">
                       <div className="row1-2">
                           <div className= "col1-2-1">
                               <div className= "life-bar-overbar1">
                                   <div style = {{backgroundColor: "green", height: "3px", width: this.handleLifeBarChange(this.state.randomBaseStamina,randomPokeStamina)}}></div>
                               </div>
                           </div>
                           <div className= "col1-2-2">
                               <img src={this.props.battleReducer.randomPokemon.gif_calm} alt=""/>
                           </div>
                       </div>
                       <div className= "row1-2a">
                          <div className= "col1-2-1a">
                              <img className="player-pokemon" src={this.props.battleReducer.playerPokemon.gif_back} alt=""/>
                          </div>
                           <div className= "col1-2-2a">
                               <div className= "life-bar-overbar2">
                                   <div style = {{backgroundColor: "green", height: "3px", width: this.handleLifeBarChange(this.state.playerBaseStamina,playerPokeStamina)}}></div>
                               </div>
                       </div>
                       </div>
                    </div>
                    <ul style = {{display: this.state.display}}>{this.attackListGenerator()}</ul>
                    {this.state.textArea}
               </div>

    }
}

function mapStateToProps(state) {
    return {
        battleReducer: state.battleReducer
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        playerClickedAttack: actions.playerClickedAttack,
        randomSelectedAttack: actions.randomSelectedAttack,
        passingWinnerInfo: actions.passingWinnerInfo
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Battle);
