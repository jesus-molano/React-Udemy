import PropTypes from 'prop-types';

const PrimeraApp = ({ saludo, subtitulo }) => {

  // const obj = {name: 'Jesus', age: 26,}

  return (
    <>
      <h1>{saludo}</h1>
      <h3>{subtitulo}</h3>
      {/* <pre>{JSON.stringify(obj, null, 2)}</pre> */}
    </>
  );
}
PrimeraApp.propTypes = {
  saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
  subtitulo: 'Soy un subtitulo'
}

export default PrimeraApp;