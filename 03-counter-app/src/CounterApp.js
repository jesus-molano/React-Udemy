import { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value = 0 }) => {

  const [counter, setCounter] = useState(value)

  // handles
  const handleAdd = () => setCounter(counter + 1);
  const handleSub = () => setCounter(counter - 1);
  const handleRes = () => setCounter(value);
  // Otro manejo de setState
  // const handleSub = () => setCounter((state) => state - 1); //(valor anterior) => nuevo valor

  return (
    <>
      <h1>CounterApp</h1>
      <p>{counter}</p>
      <button onClick={handleAdd} >+</button>
      <button onClick={handleRes} >Reset</button>
      <button onClick={handleSub} >-</button>
    </>
  );
}

CounterApp.propTypes = {
  value: PropTypes.number,
}

export default CounterApp;