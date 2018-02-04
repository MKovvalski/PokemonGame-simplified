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
        this.state = {
            display: "block",
            textArea: ""
        };
    };

    handleAttackAction (attack) {
        this.setState ({
            display: "none",
            textArea: this.props.battleReducer.playerPokemon.id + " attacks with " + attack.id
        });
        setTimeout(() => { //jak to zoptymalizować?!
            this.props.playerClickedAttack(attack);
            if (this.props.battleReducer.randomPokemon.stamina > 0) {
                this.timeoutId = setTimeout(() => {
                    let randomAttack = this.props.battleReducer.randomPokemon.attacks[Math.floor(Math.random()*3)];
                    this.setState ({
                        textArea: this.props.battleReducer.randomPokemon.id + " attacks with " + randomAttack.id
                    });
                    this.timeoutId1 = setTimeout(() => {
                        this.props.randomSelectedAttack(randomAttack);
                        if (this.props.battleReducer.playerPokemon.stamina < 0) {
                            this.timeoutId2 = setTimeout(() => {
                                this.setState ({
                                    display: "none",
                                    textArea: this.props.battleReducer.playerPokemon.id + " fainted"
                                });
                                this.timeoutId3 = setTimeout(() => {
                                    this.props.passingWinnerInfo(this.props.battleReducer.randomPokemon);
                                    this.props.onConfirm();
                                },2500);
                            },2000)
                        }
                        this.timeoutId4 = setTimeout(() => {
                            this.setState ({
                                display: "block",
                                textArea: "waiting for next move"
                            })
                        },1000);
                    },2000);
                },2000);
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

    attackListGenerator = () => {
        return this.props.battleReducer.playerPokemon.attacks.map((attack) => {
            return <button disabled = {this.state.disabled} className="btn2" onClick = {() => this.handleAttackAction(attack)} key = {attack.id}>{attack.id}</button>
        })
    };

    render () {
        return <div className= "container">
                    <div className= "background">
                       <div className="row1-2">
                           <div className= "col1-2-1">
                               <div className= "life-bar-overbar1">
                               </div>
                           </div>
                           <div className= "col1-2-2">
                               <img src={this.props.battleReducer.randomPokemon.gif_calm} alt=""/>
                               {this.props.battleReducer.randomPokemon.stamina}
                           </div>
                       </div>
                       <div className= "row1-2a">
                          <div className= "col1-2-1a">
                              <img className="player-pokemon" src={this.props.battleReducer.playerPokemon.gif_back} alt=""/>
                              {this.props.battleReducer.playerPokemon.stamina}
                          </div>
                           <div className= "col1-2-2a">
                               <div className= "life-bar-overbar2">
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
        battleReducer: state.battleReducer,
        counter: state.incrementedCounter
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
