import React from "react";

class StartGameScreen extends React.Component {

    handleClick = () => {
      if (typeof this.props.onConfirm === "function") {
          this.props.onConfirm();
      }
    };

    render () {
        return <div className = "container1">
            <h1 className = "main-page-title" onClick = {this.handleClick}>START GAME</h1>
            </div>
    }
}

export default StartGameScreen;