import * as ActionTypes from './Types';
export function add1(c){
    return function(dispatch){
        dispatch({
            type:"ADD_1",payloadC:c
        });
    }
}
export function add2(d){
    return function(dispatch){
        dispatch({
            type:"ADD_2",payloadD:d
        });
    }
}
export function add3(a){
    return function(dispatch){
        dispatch({
            type:"ADD_3",payloadA:a
        });
    }
}
export function add4(b){
    return function(dispatch){
        dispatch({
            type:"ADD_4",payloadB:b
        });
    }
}