import * as ActionTypes from '../Action/Types';

const initialState={
    age:20
};
export default(state=initialState,action)=>{
    debugger;
    switch(action.type){
        case ActionTypes.AGE_UP:{
        return{...state,age:state.age+action.value}
    }
    case ActionTypes.AGE_DOWN:{
        return{...state,age:state.age+action.value}
    }
    default:
        return state;
}
}