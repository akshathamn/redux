// import React, { Component } from 'react';
// import { connect } from "react-redux";
// import { submit } from '../Action/Task4action';
// import './Task4.css';
// class Task4 extends Component {

//     render() {
//         return (
//             <div id="center1">
//                 <form>
//                    <label >Name:</label>
//                     <input className="height1" type="text" /><br /><br />
//                     <label > Age:</label>
//                     <input className="height2" type="text" /><br /><br />
//                     <label >City:</label>
//                     <input className="height3" type="text" /><br /><br />
//                     <label className="align4">Address:</label>
//                     <input className="height4" type="text" /><br /><br />
//                 </form>
//                 <button onClick={this.props.submit} >submit</button>
//                 <p>{this.props.message}</p>
//             </div>
//         );
//     }
// }



// const mapStateToProps = (state) => {
//     const { name } = state.Task4reducer;
//     const { age } = state.Task4reducer;
//     const { city } = state.Task4reducer;
//     const { address } = state.Task4reducer;
//     const { message } = state.Task4reducer;
//     return { name, age, city, address, message };

// };
// export default connect(mapStateToProps, { submit })(Task4);

// import React, { Component } from 'react';
// import { connect } from "react-redux";

import React, { Component } from 'react';

class Task4 extends Component {
    constructor(props) { 
    super(props); 
    this.state={
        name:'',
        age:'',
        city:'',
        address:'',
        array:[]
    }
}

handleChange=(e)=>{
    this.setState({[e.target.name]:e.target.value});
}

handleClick=(e)=>{
    const reqobj={
        name: this.state.name,
        age: this.state.age,
        city: this.state.city,
        address: this.state.address
    }
    let x=this.state.array.push(reqobj);
    this.setState({x});
  }

render() {
    return (
        <div>
       <center> <form>
            <label>Name</label><br></br>
            <input type='text' name='name' onChange={this.handleChange} value={this.state.value}></input><br></br>
            <label>Age</label><br></br>
            <input type='text' name='age' onChange={this.handleChange} value={this.state.value}></input><br></br>
            <label>City</label><br></br>
            <input type='text' name='city' onChange={this.handleChange} value={this.state.value}></input><br></br>
            <label>Address</label><br></br>
            <input type='text' name='address' onChange={this.handleChange} value={this.state.value}></input><br></br>
            </form>
            <input type='button' onClick={this.handleClick} value='submit'></input>
            {this.state.array.map((display)=>(
        
        <table>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>City</th>
                <th>Address</th>
            </tr>
            <tr>
                <td>{display.name}</td>
                <td>{display.age}</td>
                <td>{display.city}</td>
                <td>{display.address}</td>
            </tr>
        </table>
            ))}
            </center>
        </div>
    );
}
}

export default Task4;

  