const initialState={
    a:1,
    b:1,
    c:1,
    d:1
};
const reducer=(state=initialState,action1) =>{
    const newState={...state};
    switch(action1.type){
        
            case 'UPDATE_A':
                    newState.a+=newState.c;
                    break;

            case 'UPDATE_B':
                        newState.b+=newState.d;
                break;

            case 'UPDATE_C':
                    newState.c+=newState.a;
                    break;

            case 'UPDATE_D':
                        newState.d+=newState.b;
                        break;
    

    }
    return newState;
};

export default reducer;