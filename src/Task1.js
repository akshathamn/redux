import { connect } from "react-redux";
import React, { Component } from 'react';
import './App.css';
class Task1 extends Component {
  render() {
    return (
      <div className="App">
         <h1>{this.props.a}</h1>
         <h1>{this.props.b}</h1>
        <button onClick={this.props.UpdateA}>UpdateA</button>
        <button onClick={this.props.UpdateB}>UpdateB</button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    a: state.a,
    b: state.b
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    UpdateA: () => dispatch({ type: "UPDATE_A"}),
    UpdateB: () => dispatch({ type: "UPDATE_B"})
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Task1);
















// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';


// class Task1 extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       operator: '+',
//       num1: '',
//       num2: '',
//       result: '0'
//     };
//     this.actionHandler = this.actionHandler.bind(this);
//     this.handleInputChange = this.handleInputChange.bind(this)
//   }
//   handleChange = (e) => {
//     this.setState({ operator: e.target.value })
//   }

//   handleInputChange(e) {
//     this.setState({
//       [e.target.name]: Number(e.target.value)
//     });
//   }

//   actionHandler = (e) => {
//     e.preventDefault();
//     let x = this.state.num1 + this.state.num2;
//     this.setState({ result: x })
//   }
//   actionHandler1 = (e) => {
//     e.preventDefault();
//     let x = this.state.num1 + this.state.num2;
//     this.setState({ result: x })
//   }
//   render() {
//     return (
//       <div className="calculate">
//         <form>

//           <input type="text" onChange={this.handleInputChange} name="num1" placeholder="Enter 1st Number" />
//           <br />
//           <br />
//           <label>
//             <select value={this.state.operator} onChange={this.handleChange}>
//               <option value="-">-</option>
//               <option value="*">*</option>
//               <option value="/">/</option>
//             </select>
//           </label>
//           <br />
//           <br />
//           <input type="text" onChange={this.handleInputChange} name="num2" placeholder="Enter 2nd Number" />
//           <br />
//           <br />

//           <button onClick={this.actionHandler} type="submit" > update1 </button>
//           <button onClick={this.actionHandler1} type="submit" > update2 </button>
//           <input type="text" value={this.state.result} readOnly />
//         </form>

//       </div>
//     );
//   }
// }
//   export default Task1;