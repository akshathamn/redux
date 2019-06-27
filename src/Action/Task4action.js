import *as ActionTypes from './Types';
export function submit(){
    return function(dispatch){
        dispatch({
            type:"SUBMIT"
        });
    }
}