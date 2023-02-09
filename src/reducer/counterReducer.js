export const counterReducer = (state, action) =>{
    if(action.type === "INCREMENT"){
        return state + action.payload.count;
    }else if(action.type === "DECREMENT"){
        return state - action.payload.count;
    }
}