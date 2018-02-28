//presets
import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

//file imports
import StartGameScreen from "../components/start-game.jsx";
import PickPokemon from "../containers/pick-pokemon.jsx";
import BattleEvent from "../containers/battle-event.jsx";
import EndGameScreen from "../containers/end-game-screen.jsx";

//importing actions
import actions from "../actions/all-actions.jsx";

//classes
class TheGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ComponentRenderCounter: 1,
            buttonColorChange: "#ff0000",
            buttonPosition: "translate(0, 0)"
        }
    }

    handleRender = () => {
        if (this.state.ComponentRenderCounter === 3) {
            this.setState ({
                ComponentRenderCounter: 0,
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

    handleButtonChange = () => {
        this.props.transformState("switching");
        this.props.showHelp(this.props.positionInfo);
      if (this.state.buttonColorChange === "#ff0000") {
          this.setState ({
              buttonColorChange: "#2eb82e",
              buttonPosition: "translate(14px, 0)"
          })
      } else {
          this.setState({
              buttonColorChange: "#ff0000",
              buttonPosition: "translate(0, 0)"
          })
      }
    };

    render () {
        console.log(this.props.positionInfo);
        return <div className = "main-hero">
                    <div className = "over-frame">
                        {this.handleComponents()}
                    </div>
                    <div className = "lower-part" >
                        <div className = "connector">
                            <div className = "help-button-border" style = {{backgroundColor: this.state.buttonColorChange}}>
                                <div className = "help-button" onClick = {() => this.handleButtonChange()} style = {{transform: this.props.positionInfo, transition: "all 0.1s ease-out"}}>Help</div>
                            </div>
                        </div>
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

function mapStateToProps(state) {
    return {
        displayHelp: state.passedDisplaySetting,
        positionInfo: state.passedTransformationInfo
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        showHelp: actions.passingInfoAboutHelpDisplay,
        transformState: actions.passingButtonTransformState,
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(TheGame);
