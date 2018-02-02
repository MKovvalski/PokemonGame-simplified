//presets
import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

//importing actions
import SentAttack from "../actions/attack-sending-action.jsx";

//classes
class Battle extends React.Component {

    attackListGenerator = () => {
        return this.props.listener.pokemon1.attacks.map((attack) => {
            return <button className="btn2" onClick = {() => this.props.sentAttack(attack)} key = {attack.id}>{attack.id}</button>
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
                               <img src={this.props.listener.pokemon2.gif_calm} alt=""/>
                               {this.props.listener.pokemon2.stamina}
                           </div>
                       </div>
                       <div className= "row1-2a">
                          <div className= "col1-2-1a">
                              <img className="player-pokemon" src={this.props.listener.pokemon1.gif_back} alt=""/>
                              {this.props.listener.pokemon1.stamina}
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
        genders: state.characterGender,
        pokemons: state.pokemonList,
        listener: state.reducerListener
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        sentAttack:SentAttack,
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Battle);
