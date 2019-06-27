import React, { Component } from 'react';
import Demo1 from './Demo1';


class Demo extends Component {
    handleSubmit=()=>{
       window.open("./demo1")
      }
    render() {
        return (
            <div>
                <button onClick={this.handleSubmit}>submit</button>
            </div>
        );
    }
}

export default Demo;





