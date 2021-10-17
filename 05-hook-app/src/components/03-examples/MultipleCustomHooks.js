import useCounter from '../../hooks/useCounter';
import useFetch from '../../hooks/useFetch';
import './customHooks.css';

const MultipleCustomHooks = () => {
  const { counter, increment, decrement } = useCounter(1);
  const url = `https://www.breakingbadapi.com/api/quotes/${counter}`;

  const { loading, data } = useFetch(url);
  const {author, quote} = (!loading && data.length > 0) && data[0]

  return (
    <div>
      <h1>BreakingBad Quotes</h1>
      <hr />
      {loading && <div className="alert alert-info text-center">Loading...</div>}
      {!loading && (
          <blockquote className="blockquote text-end">
            <p className="mb-3">{quote}</p>
            <footer className="blockquote-footer">{author}</footer>
          </blockquote>
        )
      }
      <button className="btn btn-success" onClick={decrement}>Prev Quote</button>
      <button className="btn btn-success" onClick={increment}>Next Quote</button>
    </div>
  )
}

export default MultipleCustomHooks
