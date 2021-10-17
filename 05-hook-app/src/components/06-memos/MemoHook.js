import React, { useMemo, useState } from 'react'
import heavyProcess from '../../helpers/heavyProcess';
import useCounter from '../../hooks/useCounter';
import './memo.css'

export const MemoHook = () => {
  const { counter, increment } = useCounter(5000);
  const [show, setShow] = useState(true)

  const memoHeavyProcess = useMemo(() => heavyProcess(counter), [counter]);

  return (
    <div>
      <h1>MemoHook</h1>
      <hr />
      <p>{ memoHeavyProcess }</p>
      <h3>Counter: <small>{ counter }</small></h3>
      <button className="btn btn-primary my-3 mr-3" onClick={increment}>+</button>
      <button className="btn btn-outline-primary my-3 mx-3" onClick={()=>setShow(!show)}>Show/Hide { JSON.stringify(show) }</button>
    </div>
  )
}

