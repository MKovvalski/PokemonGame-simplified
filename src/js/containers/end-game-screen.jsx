//presets
import React from "react";
import {connect} from "react-redux";


class EndGameScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    handleClick = () => {
        if (typeof this.props.onConfirm === "function") {
            this.props.onConfirm();
        }
    };

    render () {
       if (this.props.winnerInfo === this.props.battleReducer.playerPokemon) {
           return <div>
               <div>Gratulacje! Zwyciężyłeś grając {this.props.battleReducer.playerPokemon.id}em</div>
               <button onClick = {this.handleClick} >rozpocznij od nowa</button>
           </div>
       } else {
           return <div>
               <div>Przegrałeś walkę z {this.props.battleReducer.randomPokemon.id}em</div>
               <button onClick = {this.handleClick} >spróbuj ponowie</button>
           </div>
       }

    }
}

function mapStateToProps(state) {
    return {
        battleReducer: state.battleReducer,
        winnerInfo: state.passedWinnerInfo
    }
}

export default connect(mapStateToProps)(EndGameScreen);