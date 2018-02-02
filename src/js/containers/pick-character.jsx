//presets
import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

//importing game-data
import characters from "../game-data/characters.jsx";

//importing action
import actions from "../actions/all-actions.jsx";

//classes
class PickCharacter extends React.Component {

    createListOfGenders() {
      return characters.map((gender) => {
        return <div className = "gender-titles" key={gender.id} onClick = {() => this.props.clickedGender(gender)}>{gender.id}</div>
      })
    };

    render () {
        return <div className= "col1-3a">
            <div className= "character-border">
                <div className = "genderList">
                    {this.createListOfGenders()}
                </div>
                <div><img className= "genderImgSize" src = {this.props.gender.img_full_scale}/></div>
            </div>
        </div>
    }
}

function mapStateToProps(state) {
    return {
        gender: state.selectedGender
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators(
        {clickedGender: actions.clickedGender}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(PickCharacter);