import * as ActionTypes from '../Action/Types';

    const initialState={  
        name:'',
        age:'',
        city:'',
        address:'',
        message:''
      };
      export default(state=initialState,action)=>{
        switch(action.type){
            case  ActionTypes.SUBMIT:{

                return{...state,message:'submitted successfully'}
                        break;
            }
                        // case  ActionTypes.LOGIN:{

                        //     return{...state,password:state.password+action.value}
                        //             break;
    
               
                    
                    default:
                         return state;
        }
    }
