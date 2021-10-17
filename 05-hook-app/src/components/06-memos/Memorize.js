import './memo.css'
import useCounter from '../../hooks/useCounter'
import Small from './Small';
import { useState } from 'react';
const Memorize = () => {

  const { counter, increment } = useCounter(10);
  const [show, setShow] = useState(true)

  return (
    <div>
      <h1>Counter: <Small value={ counter }/> </h1>
      <hr />
      <button className="btn btn-primary m-3" onClick={increment}>+</button>
      <button className="btn btn-outline-primary m-3" onClick={()=>setShow(!show)}>Show/Hide { JSON.stringify(show) }</button>
    </div>
  )
}

export default Memorize
