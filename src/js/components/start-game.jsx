import React from "react";

class StartGameScreen extends React.Component {

    handleClick = () => {
      if (typeof this.props.onConfirm === "function") {
          this.props.onConfirm();
      }
    };

    render () {
        return <div className = "game-framing">
                <div className = "border">
                    <div className = "main-screen-background">
                        <h1 className = "main-page-title" onClick = {this.handleClick}>START GAME</h1>
                    </div>
                </div>
            </div>
    }
}

export default StartGameScreen;