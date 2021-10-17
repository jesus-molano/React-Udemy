import React from 'react';
import useCounter from '../../hooks/useCounter';
import './counter.css';

export const CounterWithCustomHook = () => {
	const { state, increment, decrement, reset } = useCounter();

	return (
		<>
			<h1>Counter With Hook: {state}</h1>
			<hr />
			<button className='btn btn-primary' onClick={() => increment(2)}>+</button>
			<button className='btn btn-danger' onClick={reset}>Reset</button>
			<button className='btn btn-primary' onClick={() => decrement(3)}>-</button>
		</>
	);
};
