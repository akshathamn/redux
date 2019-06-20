import React, { Component } from 'react';
import { connect } from "react-redux";
import{onAgeUp,onAgeDown} from '../Action/Ageupdownaction';

class Ageupdown extends Component {
    render() {
        return (
            <div>
                Your age:<span>{this.props.age}</span>
                <button onClick={this.props.onAgeUp}>ageup</button>
                <button onClick={this.props.onAgeDown}>agedown</button>
            </div>
        );
    }
}
const mapStateToProps=(state) => {
    const{age}=state.Ageupdownreducers;
    return{age};
};
export default connect(mapStateToProps,{onAgeUp,onAgeDown})(Ageupdown);