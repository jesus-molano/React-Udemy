import { useRef } from 'react';
import './useref.css'
const FocusScreen = () => {

  const ref = useRef()

  const handleClick = () => {
    ref.current.select();
  }
  return (
    <div>
      <h1>Focus Screen</h1>
      <hr />
      <input ref={ref} className="form-control" placeholder='Your name here...'></input>
      <button className="btn btn-outline-primary mt-3" onClick={handleClick}>Focus</button>
    </div>
  )
}

export default FocusScreen
