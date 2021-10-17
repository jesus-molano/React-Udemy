import { useState } from 'react'
import MultipleCustomHooks from '../03-examples/MultipleCustomHooks'
import './useref.css'

const RealExampleRef = () => {

  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  }

  return (
    <div>
      <h1>Real Example useRef</h1>
      <hr />
      {show && <MultipleCustomHooks />}
      <button className="btn btn-outline-primary mt-3" onClick={handleClick}>Show</button>
    </div>
  )
}

export default RealExampleRef
