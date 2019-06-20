import * as ActionTypes from '../Action/type';

const initialState={
    d:1
};
export default(state=initialState,action)=>{
  
    switch(action.type){
        case  ActionTypes.ADD_4:{

            return{...state,d:state.d+action.payloadB}
                    break;

           
                }
                default:
                     return state;
                 }
                }
 