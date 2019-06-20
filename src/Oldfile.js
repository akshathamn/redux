import { connect } from "react-redux";
import React, { Component } from 'react';

import './App.css';
class Oldfile extends Component {
  render() {
    return (
      <div className="App">
        <div className="Age-label">
          Your age:<span>{this.props.age}</span>
        </div>
        <button onClick={this.props.onAgeUp}>Age Up</button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    age: state.age
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onAgeUp: () => dispatch({ type: "AGE_UP", value: 1 })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Oldfile);