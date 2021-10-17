import React, { useCallback, useState } from 'react'
import ShowIncrement from './ShowIncrement';
import './memo.css'

const CallbackHook = () => {

  const [counter, setCounter] = useState(0);

  const increment = useCallback((num) => {
    setCounter(count => count + num);
  }, [setCounter])
  
  return (
    <div>
      <h1>useCallback Hook</h1>
      <hr />
      <h3>Counter: {counter}</h3>
      <ShowIncrement increment={increment} />
    </div>
  )
}

export default CallbackHook
