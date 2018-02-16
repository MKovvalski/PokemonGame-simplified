//presets
import React from "react";

//file imports
import StartGameScreen from "../components/start-game.jsx";
import PickPokemon from "../containers/pick-pokemon.jsx";
import BattleEvent from "../containers/battle-event.jsx";
import EndGameScreen from "../containers/end-game-screen.jsx";

//classes
class TheGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ComponentRenderCounter: 0,
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

    handleComponents = () => {
        if (this.state.ComponentRenderCounter === 0) {
            return <div><StartGameScreen onConfirm = {this.handleRender}/></div>
        }
        if (this.state.ComponentRenderCounter === 1) {
            return <div><PickPokemon onConfirm = {this.handleRender}/></div>
        }
        if (this.state.ComponentRenderCounter === 2) {
            return <div><BattleEvent onConfirm = {this.handleRender}/></div>
        }
        if (this.state.ComponentRenderCounter === 3) {
            return <div><EndGameScreen onConfirm = {this.handleRender}/></div>
        }
    };

    render () {
        return <div className = "main-hero">
                    <div className = "over-frame">
                        {this.handleComponents()}
                    </div>
                    <div className = "lower-part" >
                        <div className = "connector"></div>
                        <div className = "top-button">
                            <div className = "border-button">
                                <div className = "brightness-button"></div>
                            </div>
                        </div>
                        <div className = "row-1">
                            <div className = "col-1-2-a">
                                <div className = "button-circle">
                                    <div className = "arrow-buttons"></div>
                                </div>
                            </div>
                            <div className = "col-1-2-a">
                                <div className = "a-b-buttons">
                                    <div className = "a-button">A</div>
                                    <div className = "a-button">B</div>
                                </div>
                            </div>
                        </div>
                        <div className = "row-2">
                            <div className = "small-buttons">
                                <div className = "border-small-button"><div className = "small-button"></div></div>
                                <div className = "border-small-button"><div className = "small-button"></div></div>
                            </div>
                        </div>
                    </div>
        </div>
    }
}

export default TheGame;
