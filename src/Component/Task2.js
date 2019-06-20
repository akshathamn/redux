import React, { Component } from 'react';
import { connect } from "react-redux";
import{add1,add2,add3,add4} from '../Action/Task2action';

class Task2 extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.a}</h1>
                <button onClick={()=>this.props.add1(this.props.c)}>add1</button>
                <h1>{this.props.b}</h1>
                <button onClick={()=>this.props.add2(this.props.d)}>add2</button>
                <h1>{this.props.c}</h1>
                <button onClick={()=>this.props.add3(this.props.a)}>add3</button>
                <h1>{this.props.d}</h1>
                <button onClick={()=>this.props.add4(this.props.b)}>add4</button>
            </div>
        );
    }
}
const mapStateToProps=(state) => {
    const{a}=state.Task2reducers;
    const{b}=state.Task2reducers2;
    const{c}=state.Task2reducers3;
    const{d}=state.Task2reducers4;
    return{a,b,c,d};
};
export default connect(mapStateToProps,{add1,add2,add3,add4})(Task2);