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
            displayAttacks: "block",
            displayText: "none",
            textArea: "battle begins!",
            playerBaseStamina: playerBaseStamina,
            randomBaseStamina: randomBaseStamina,
            counter: playerBaseStamina
        };
    };

    attackListGenerator = () => {
        return this.props.battleReducer.playerPokemon.attacks.map((attack) => {
            return <li className="attack-button" onMouseEnter={() => this.props.passingAttackInfo(attack)} onClick = {() => this.handleAttackAction(attack)} key = {attack.id}>{attack.id}</li>
        })
    };

    handleAttackAction (attack) { // wymaga optymalizacji
        let playerPokemon = this.props.battleReducer.playerPokemon;
        let randomPokemon = this.props.battleReducer.randomPokemon;
        if (attack.type === "modifying_myself" || attack.type === "modifying_enemy") {
            this.setState({
                displayText: "block",
                displayAttacks: "none",
                textArea: playerPokemon.id  + " uses " + attack.id
            })
        } else {this.setState ({
            displayText: "block",
            displayAttacks: "none",
            textArea: playerPokemon.id + " attacks with " + attack.id
        })
        }
        setTimeout(() => {
            let randomPokemonStamina = this.props.battleReducer.randomPokemon.stamina;
            this.props.playerClickedAttack(attack, this.state.playerBaseStamina );
            if (attack.type === "modifying_myself") {
                if (attack.targetName === "stamina") {
                    if (this.state.playerBaseStamina === playerPokemon.stamina) {
                        this.setState ({
                            textArea: playerPokemon.id + " cannot regenerate more stamina then it already has"
                        })
                    } else {
                        this.setState ({
                            textArea: playerPokemon.id + " regenerated " + attack.power + " points of stamina"
                        })
                    }
                } else {
                    this.setState ({
                        textArea: playerPokemon.id + " " + attack.targetName + " rose!"
                    })
                }
            } else if (attack.type === "modifying_enemy") {
                this.setState ({
                    textArea: randomPokemon.id + " " + attack.targetName + " fell!"
                })
            } else if (attack.type === "normal" || attack.type === "special") {
                if (randomPokemonStamina === this.props.battleReducer.randomPokemon.stamina) {
                    this.setState ({
                        textArea: playerPokemon.id + " missed"
                    })
                }
            }
            if (this.props.battleReducer.randomPokemon.stamina >= 0) {
                setTimeout(() => {
                    const randomAttack = randomPokemon.attacks[Math.floor(Math.random()*3)];
                    if (randomAttack.type === "modifying_myself" || randomAttack.type === "modifying_enemy") {
                        this.setState({
                            textArea: randomPokemon.id + " uses " + randomAttack.id
                        })
                    } else {
                        this.setState ({
                            textArea: randomPokemon.id + " attacks with " + randomAttack.id
                        })
                    }
                    setTimeout(() => {
                        let playerPokemonStamina = this.props.battleReducer.playerPokemon.stamina;
                        this.props.randomSelectedAttack(randomAttack, this.state.randomBaseStamina);
                        if (randomAttack.type === "modifying_myself") {
                            if (attack.targetName === "stamina") {
                                if (this.state.randomBaseStamina === randomPokemon.stamina) {
                                    this.setState ({
                                        textArea: randomPokemon.id + " cannot regenerate more stamina then it already has"
                                    })
                                } else {
                                    this.setState ({
                                        textArea: randomPokemon.id + " regenerated " + attack.power + " points of stamina"
                                    })
                                }
                            } else {
                                this.setState ({
                                    textArea: randomPokemon.id + " " + attack.targetName + " rose!"
                                })
                            }
                        } else if (randomAttack.type === "modifying_enemy") {
                            this.setState ({
                                textArea: playerPokemon.id + " " + randomAttack.targetName + " fell!"
                            })
                        } else if (randomAttack.type === "normal" || randomAttack.type === "special") {
                            if (playerPokemonStamina === this.props.battleReducer.playerPokemon.stamina) {
                                this.setState ({
                                    textArea: randomPokemon.id + " missed"
                                })
                            }
                        }
                        if (this.props.battleReducer.playerPokemon.stamina <= 0) {
                            setTimeout(() => {
                                this.setState ({
                                    display: "none",
                                    textArea: playerPokemon.id + " fainted"
                                });
                                setTimeout(() => {
                                    this.props.passingWinnerInfo(randomPokemon);
                                    this.props.onConfirm();
                                },3500);
                            },3000)
                        } else {
                            setTimeout(() => {
                                this.setState({
                                    displayText: "none",
                                    displayAttacks: "block",
                                    textArea: "waiting for next move"
                                })
                            }, 2000);
                        }
                    },3000);
                },3000);
            } else {
                setTimeout(() => {
                    this.setState ({
                        displayAttacks: "none",
                        textArea: randomPokemon.id + " fainted"
                    });
                    setTimeout(() => {
                        this.props.onConfirm();
                        this.props.passingWinnerInfo(playerPokemon);
                    },2500);
                },2000)
            }
        },2000);
    };

    handleLifeBarChange = (staticStaminaValue, changingPokemonStamina) => {
        const lifeBarLength = ((changingPokemonStamina * 100) / staticStaminaValue);
        if (lifeBarLength <= 0) {
            return 0
        } else if (lifeBarLength > 100) {
            return 100;
        } else {
            return lifeBarLength;
        }
    };

    handleColorChange = (functionA) => {
       if (functionA <= 25) {
           return "red";
       } else if (functionA <= 66) {
           return "yellow"
        } else {
           return "#1aff66"
       }
    };

    render () {
        const playerPokeStamina = this.props.battleReducer.playerPokemon.stamina;
        const randomPokeStamina = this.props.battleReducer.randomPokemon.stamina;
        let handleLifeBar1 = this.handleLifeBarChange(this.state.randomBaseStamina,randomPokeStamina);
        let handleLifeBar2 = this.handleLifeBarChange(this.state.playerBaseStamina,playerPokeStamina);
        return <div className = "game-framing">
                    <div className = "border">
                        <div className = "row-1-2">
                            <div className = "background">
                                <div className = "col-1-2">
                                    <div className = "inner-row-1-2" >
                                        <div className = "pokemon-data-border">
                                            <div className = "pokemon-data">
                                                <h4>{this.props.battleReducer.randomPokemon.id}</h4>
                                                <div className = "life-bar-overbar">
                                                    <div className = "life-bar-inner-line">
                                                        <div className = "life-bar" style = {{transition: "all 1s ease-out", backgroundColor: this.handleColorChange(handleLifeBar1), height: "8px", width: handleLifeBar1}}></div>
                                                    </div>
                                                </div>
                                                <div>{randomPokeStamina}/{this.state.randomBaseStamina}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className = "inner-row-1-2a" >
                                        <img className="player-pokemon-img" src={this.props.battleReducer.playerPokemon.gif_back} alt=""/>
                                    </div>
                                </div>
                                <div className= "col-1-2">
                                    <div className = "inner-row-1-2a" >
                                        <img className = "random-pokemon-img" src={this.props.battleReducer.randomPokemon.gif_calm} alt=""/>
                                    </div>
                                    <div className = "inner-row-1-2" >
                                        <div className = "pokemon-data-border">
                                            <div className = "pokemon-data" >
                                                <div className = "pokemon-name-in-data">{this.props.battleReducer.playerPokemon.id}</div>
                                                <div className= "life-bar-overbar">
                                                    <div className = "life-bar-inner-line">
                                                        <div style = {{transition: "all 1s ease-out", backgroundColor: this.handleColorChange(handleLifeBar2), height: "5px", width: handleLifeBar2, borderRadius: "2px"}}></div>
                                                    </div>
                                                </div>
                                                <div className = "stamina-points">{playerPokeStamina}/{this.state.playerBaseStamina}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className = "row-1-2">
                            <div className = "display-window">
                                <div style = {{display: this.state.displayAttacks}}>
                                    <div className = "attacks-menu">
                                        <div className = "list-of-attack-buttons">
                                            {this.attackListGenerator()}
                                        </div>
                                        <div className = "attack-info">
                                            <div>{this.props.battleReducer.attackToDisplay.nature}</div>
                                            <div>power:{this.props.battleReducer.attackToDisplay.power}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className = "battle-commentary-border" style = {{display: this.state.displayText}}>
                                    <div className = "battle-commentary-inner-border">
                                        <div className = "battle-commentary">{this.state.textArea}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
        passingWinnerInfo: actions.passingWinnerInfo,
        passingAttackInfo: actions.passingAttackInfo
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Battle);



