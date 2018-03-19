//presets
import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

//importing actions
import actions from "../actions/all-actions.jsx";

class StartGameScreen extends React.Component {

    handleClick = () => {
      if (typeof this.props.onConfirm === "function") {
          this.props.onConfirm();
          this.props.colorState("left");
          this.props.showHelp("none");
          this.props.transformState("left");
      }
    };

    render () {
        return <div className = "game-framing">
                <div className = "border">
                    <div className = "main-screen-background">
                        <div className = "element-explanation-8" style = {{display: this.props.displayHelp}}>click to start the game</div>
                        <div className = "pointing-line-8" style = {{display: this.props.displayHelp}}/>
                        <h1 className = "main-page-title" onClick = {this.handleClick}>START GAME</h1>
                    </div>
                </div>
            </div>
    }
}

function mapStateToProps(state) {
    return {
        displayHelp: state.passedDisplaySetting
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        showHelp: actions.passingInfoAboutHelpDisplay,
        colorState: actions.passingColorInfo,
        transformState: actions.passingButtonTransformState,

    }, dispatch)
}



export default connect(mapStateToProps, matchDispatchToProps) (StartGameScreen);