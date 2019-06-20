import React from 'react';

class Trial extends React.Component{
    constructor(props)
    {
      super(props);
      this.state = {addtask: '', tasks:[{name:'Hello'}]};
      this.addValue = this.addValue.bind(this);
      this.updateInput = this.updateInput.bind(this);
    }
    
    addValue(evt)
    {
      // evt.preventDefault();
        
        let tasks = this.state.tasks;
        let addtask = this.state.addtask;
        tasks.push({name:addtask});
        this.setState({tasks});
        // console.log(tasks);
    }
    updateInput(evt){
      this.setState({addtask: evt.target.value});       
        }
    
    render()
    {
      return (
      <div>
      {/* <h1>{this.state.value}</h1> */}
       <ul>
        {
        //map array data
        this.state.tasks.map(function(val){
          return <li key={val.name}>{val.name}</li>
        })
        }
        </ul>
      <input type="text" onChange={this.updateInput} /><br/><br/>
      <input type="button" value="Click Me" onClick={this.addValue}/>
      </div>
      )
    }
  }
  export default Trial;
//   ReactDOM.render(<Hello />, document.getElementById('root'));


// import { connect } from "react-redux";
// import React, { Component } from 'react';
// import './App.css';
// class Trial extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="Age-label">
//         <input type="text" onChange={this.updateInput} />
//           {/* Name:<span>{this.props.age}</span> */}
//         </div>
//         <button onClick={this.props.onAgeUp}>Click</button>
        
//       </div>
//     );
//   }
// }
// const mapStateToProps = (state) => {
//   return {
//     age: state.age
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     onAgeUp: () => dispatch({ type: "AGE_UP", value: 1 }),
   
//   };
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Trial);