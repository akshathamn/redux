import * as ActionTypes from '../Action/Types3';

    const initialState={  
        username:'',
        password:'',
        message:''
      };
      export default(state=initialState,action)=>{
        switch(action.type){
            case  ActionTypes.LOGIN:{

                return{...state,message:'Logged in Successfully'}
                        break;
            }
                        // case  ActionTypes.LOGIN:{

                        //     return{...state,password:state.password+action.value}
                        //             break;
    
               
                    
                    default:
                         return state;
        }
    }

    