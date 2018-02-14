//presets
import React from "react";
import {connect} from "react-redux";


class EndGameScreen extends React.Component {

    handleClick = () => {
        if (typeof this.props.onConfirm === "function") {
            this.props.onConfirm();
        }
    };

    handleWinnerText = () => {
        if (this.props.winnerInfo === this.props.battleReducer.playerPokemon) {
            return <div className = "winnerInfo">
                <img  src={this.props.battleReducer.playerPokemon.gif_attack}/>
                <div>Gratulacje! Zwyciężyłeś grając {this.props.battleReducer.playerPokemon.id}em</div>
            </div>
        } else {
            return <div>
                <img  src={this.props.battleReducer.randomPokemon.gif_attack}/>
                <div>Przegrałeś walkę z {this.props.battleReducer.randomPokemon.id}em</div>
            </div>
        }
    };

    render () {
        return <div className = "game-framing">
                    <div className = "border">
                        {this.handleWinnerText()}
                        <button onClick = {this.handleClick} >zagraj ponowie</button>
                    </div>
        </div>
    }
}

function mapStateToProps(state) {
    return {
        battleReducer: state.battleReducer,
        winnerInfo: state.passedWinnerInfo
    }
}

export default connect(mapStateToProps)(EndGameScreen);