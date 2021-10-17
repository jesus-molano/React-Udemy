import ReactDOM from 'react-dom'
import './index.css';
import CounterApp from './CounterApp';
// import PrimeraApp from './PrimeraApp'


const root = document.querySelector('#root');

// ReactDOM.render(<PrimeraApp saludo="Hola, Soy Goku" />, root)
ReactDOM.render(<CounterApp value={10} />, root)