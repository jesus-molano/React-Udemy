import { useLayoutEffect, useRef, useState } from 'react';
import useCounter from '../../hooks/useCounter';
import useFetch from '../../hooks/useFetch';
import './layout.css';

const Layout = () => {
  const { counter, increment, decrement } = useCounter(1);
  const url = `https://www.breakingbadapi.com/api/quotes/${counter}`;

  const { data } = useFetch(url);
  const { quote } = !!data && data[0]
  
  const ref = useRef();
  const [boxSize, setBoxSize] = useState({})

  useLayoutEffect(() => {
    setBoxSize(ref.current.getBoundingClientRect());
  }, [quote])

  return (
    <div>
      <h1>LayoutEffect</h1>
      <hr />
      <blockquote className="blockquote d-flex justify-content-end">
        <p ref={ref} className="mb-3">{quote}</p>
      </blockquote>
      <pre>{JSON.stringify(boxSize, null, 3)}</pre>

      <button className="btn btn-success" onClick={decrement}>Prev Quote</button>
      <button className="btn btn-success" onClick={increment}>Next Quote</button>
    </div>
  )
}

export default Layout
