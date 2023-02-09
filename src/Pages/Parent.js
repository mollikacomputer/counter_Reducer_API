import React, { useReducer } from 'react';
import { counterReducer } from '../reducer/counterReducer';
import { initialState } from '../State/counterState';

const Parent = () => {
    const [state, dispatch] = useReducer(counterReducer, initialState);
    return (
        <div>
            <h2> Counter{state} </h2>
            <button 
            className='btn btn-success'
            onClick={()=> dispatch({type:"INCREMENT", payload:{count:6}}) }
            > increment +</button>
            <button 
            className='btn btn-success'
            onClick={()=> dispatch({type:"DECREMENT", payload:{count:6}}) }
            > decrement -</button>
        </div>
    );
};

export default Parent;