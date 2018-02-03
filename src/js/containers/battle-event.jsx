//presets
import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

//importing actions
import actions from "../actions/all-actions.jsx";

//classes
class Battle extends React.Component {

    handleAttackAction (attack) {
        this.props.playerClickedAttack(attack);
        this.timeoutID = setTimeout(() => {
            this.props.randomSelectedAttack(this.props.battleReducer.randomPokemon.attacks[Math.floor(Math.random()*3)])
        },2000);
    };

    attackListGenerator = () => {
        return this.props.battleReducer.playerPokemon.attacks.map((attack) => {
            return <button className="btn2" onClick = {() => this.handleAttackAction(attack)} key = {attack.id}>{attack.id}</button>
        })
    };

    handleClick = () => {
        if (typeof this.props.onConfirm === "function") {
            this.props.onConfirm();

        }
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
                    {this.attackListGenerator()}
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
        incrementingCounter: actions.incrementingCounter
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Battle);
