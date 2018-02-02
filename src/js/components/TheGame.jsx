//presets
import React from "react";

//file imports
import StartGameScreen from "../components/start-game.jsx";
import PickPokemon from "../containers/pick-pokemon.jsx";
import BattleEvent from "../containers/battle-event.jsx";
import EndGameScreen from "../components/end-game-screen.jsx";

class TheGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ComponentRenderCounter: 1,
        }
    }
    handleRender = () => {
        if (this.state.ComponentRenderCounter === 3) {
            this.setState ({
                ComponentRenderCounter: 0
            })
        } else {
            this.setState ({
                ComponentRenderCounter: this.state.ComponentRenderCounter + 1,
            })
        }
    };

    render () { // tutaj dostawić obramowanie graficzne w stylu GameBoy

        if (this.state.ComponentRenderCounter === 0) {
            return <StartGameScreen onConfirm = {this.handleRender}/>
        }
        if (this.state.ComponentRenderCounter === 1) {
            return <PickPokemon onConfirm = {this.handleRender}/>
        }
        if (this.state.ComponentRenderCounter === 2) {
            return <BattleEvent onConfirm = {this.handleRender}/>
        }
        if (this.state.ComponentRenderCounter === 3) {
            return <EndGameScreen onConfirm = {this.handleRender}/>
        }
    }
}

export default TheGame;
