//presets
import React from "react";


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
        return <div className = "container">
                Zwyciężyłeś: obrazek gracza, jego, pokemon
                <button onClick = {this.handleClick} >rozpocznij od nowa</button>
            </div>

    }
}

export default EndGameScreen;