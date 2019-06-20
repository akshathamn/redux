import * as ActionTypes from '../Action/type';

const initialState={
    c:1
};
export default(state=initialState,action)=>{
  
    switch(action.type){
        case  ActionTypes.ADD_3:{

            return{...state,c:state.c+action.payloadA}
                    break;

           
                }
                default:
                     return state;
                 }
                }
 