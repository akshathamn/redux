import React,{Component} from 'react';
class Practise extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name:'',
        city:''
      };
    }
    handleChange=(event)=> {
      this.setState({[event.target.name]: event.target.value});
    }
  
    handleSubmit=(event)=>{
      event.preventDefault(); 
      const obj={
        name: this.state.name,
        city: this.state.city
      }
      console.log(obj);
    }
  
    render() {
      return (
        <form >
          <label>
            Name:
            <input type="text" name="name"  onChange={this.handleChange} /><br/><br/>
            City:
            <input type="text" city="city"  onChange={this.handleChange} /><br/><br/>
          </label>
          <button onClick={this.handleSubmit} >submit</button>
        </form>
      );
    }
  }
  export default Practise;
