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
            return <div className = "winner-info">
                <img  src={this.props.battleReducer.playerPokemon.gif_attack}/>
                <div className = "end-screen-text">Congratulations! You won playing {this.props.battleReducer.playerPokemon.id}!</div>
                <div className = "end-screen-button" onClick = {this.handleClick} >play again</div>
            </div>
        } else {
            return <div className = "winner-info">
                <img  src={this.props.battleReducer.randomPokemon.gif_attack}/>
                <div className = "end-screen-text">You Lost to {this.props.battleReducer.randomPokemon.id}</div>
                <div className = "end-screen-button" onClick = {this.handleClick} >play again</div>
            </div>
        }
    };

    render () {
        return <div className = "game-framing">
                    <div className = "border">
                        {this.handleWinnerText()}
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