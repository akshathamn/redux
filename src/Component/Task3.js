import React,{Component} from 'react';
import { connect } from "react-redux";
import{login} from '../Action/Task3action';
import './Task3.css'

class Task3 extends Component {
    
    render() {
      return (
        <div  id="center">
        <form >
          <label >Username:</label>
            <input className="height" type="text"   /><br/><br/>
            <label> Password:</label>
            <input className="height" type="text" /><br/><br/>
            </form>
          <button  onClick={this.props.login} >login</button>
          <p>{this.props.message}</p>
          </div>
        
      );
    }
  }


  
  const mapStateToProps=(state) => {
    const{username}=state.Task3reducer;
    const{password}=state.Task3reducer;
    const{message}=state.Task3reducer;
    return{username,password,message};
    
};
  export default connect (mapStateToProps,{login})(Task3);



 