import * as ActionTypes from '../Action/type';

const initialState={
    b:1
};
export default(state=initialState,action)=>{
    debugger;
    // const state={...state};
    switch(action.type){
        case  ActionTypes.ADD_2:{
            return{...state,b:state.b+action.payloadD}
                break;
            }
            default:
            return state;
        }
    }
       
//    export default reducer;



