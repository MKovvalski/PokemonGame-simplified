//presets
import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

//importing actions
import actions from "../actions/all-actions.jsx";

//classes
class Battle extends React.Component {

    attackListGenerator = () => {
        return this.props.playerPokemonState.playerPokemon.attacks.map((attack) => {
            return <button className="btn2" onClick = {() => this.props.clickedAttack(attack)} key = {attack.id}>{attack.id}</button>
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
                               <img src={this.props.randomPokemonState.randomPokemon.gif_calm} alt=""/>
                               {this.props.randomPokemonState.randomPokemon.stamina}
                           </div>
                       </div>
                       <div className= "row1-2a">
                          <div className= "col1-2-1a">
                              <img className="player-pokemon" src={this.props.playerPokemonState.playerPokemon.gif_back} alt=""/>
                              {this.props.playerPokemonState.playerPokemon.stamina}
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
        playerPokemonState: state.playerPokemonSentToBattle,
        randomPokemonState: state.randomPokemonSentToBattle

    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        clickedAttack: actions.clickedAttack
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Battle);
