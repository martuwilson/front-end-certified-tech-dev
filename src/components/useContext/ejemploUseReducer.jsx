'use client';

import React, { useReducer } from 'react';

// solo por uso didactico, el initial state se pone aca. Debe ser en otro file
const initialState = {
    count: 0
};

function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENTAR':
            return { count: state.count + 1 };
        case 'DECREMENTAR':
            return { count: state.count - 1 };
        default:
            throw new Error();
    }
}

export const EjemploUseReducer = () => {

 const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
        <div>
            <p>Contador {state.count}</p>
            <button onClick={() => dispatch({type: 'INCREMENTAR'})}>Incrementar</button>
            <button onClick={() => dispatch({type: 'DECREMENTAR'})}>Decrementar</button>
        </div>
    </>
  )
}
