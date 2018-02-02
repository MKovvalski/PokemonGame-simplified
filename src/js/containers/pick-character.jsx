//presets
import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

//importing actions
import GenderID from "../actions/gender-change-action.jsx";

//classes
class PickCharacter extends React.Component {

    createListOfGenders() {
      return this.props.characterGender.map((gender) => {
        return <div className = "gender-titles" key={gender.id} onClick = {() => this.props.selectGender(gender)}>{gender.id}</div>
      })
    };

    render () {
        return <div className= "col1-3a">
            <div className= "character-border">
                <div className = "genderList">
                    {this.createListOfGenders()}
                </div>
                <div>{!this.props.listener.gender1 ? <img className= "genderImgSize" src = {this.props.characterGender[0].img_full_scale}/> : <img className= "genderImgSize" src = {this.props.listener.gender1.img_full_scale}/>}</div>
            </div>
        </div>
    }
}

function mapStateToProps(state) {
    return {
        characterGender: state.characterGender,
        listener: state.reducerListener

    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({selectGender:GenderID}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(PickCharacter);