import * as ActionTypes from '../Action/type';

const initialState={
    a:1
};
export default(state=initialState,action)=>{
  
    switch(action.type){
        case  ActionTypes.ADD_1:{

            return{...state,a:state.a+action.payloadC}
                    break;

           
                }
                default:
                     return state;
                 }
                }
 