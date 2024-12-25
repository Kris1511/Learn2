import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Increment, Decrement, Reset } from '../Redux/Actions';

const Counter = () => {

    const count = useSelector(state => state.count);
    console.log(count);

    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(Increment());
    }

    const handleDecrement = () => {
        dispatch(Decrement());
    }

    const handleReset = () => {
        dispatch(Reset());
    }

    

  return (
    <div>
        <h1>Counter</h1>
        <h3>{count}</h3>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default Counter