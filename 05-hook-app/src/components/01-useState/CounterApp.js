import React, { useState } from 'react';
import './counter.css';

export const CounterApp = () => {
  const [counters, setCounters] = useState({ counter1: 10, counter2: 20 });
  const { counter1, counter2 } = counters;
	return (
		<>
			<h1>Counter 1: {counter1}</h1>
			<h1>Counter 2: {counter2}</h1>
			<hr />
			<button
				className='btn btn-primary'
				onClick={() => {
          setCounters({
            ...counters,
            counter1: counter1 + 1,
          });
				}}
			>
				+
			</button>
		</>
	);
};
