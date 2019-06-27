
import *as ActionTypes from './Types3';
export function login(){
    return function(dispatch){
        dispatch({
            type:"LOGIN"
        });
    }
}
// export function add2(d){
//     return function(dispatch){
//         dispatch({
//             type:"PASSWORD"
//         });
//     }
// }

