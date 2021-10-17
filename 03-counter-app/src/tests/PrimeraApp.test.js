// import { render } from "@testing-library/react";
import PrimeraApp from "../PrimeraApp";
import { shallow } from 'enzyme';

describe('<PrimeraApp /> tests', () => {
  // testing-library ---
  // test('should show the message "Hola, Soy Goku"', () => {
  //   const saludo = "Hola, Soy Goku";
  //   const { getByText } = render(<PrimeraApp saludo={saludo} />)

  //   expect(getByText(saludo)).toBeInTheDocument();
  // })

  test('should show PrimeraApp component correctly', () => {
    const saludo = 'Hola, Soy Goku'
    const wrapper = shallow(<PrimeraApp saludo={saludo} />);
    expect(wrapper).toMatchSnapshot();
  })
  test('should show the prop => subtitle', () => {
    const saludo = 'Hola, Soy Goku'
    const subtitulo = "Soy un subtitulo"
    const wrapper = shallow(<PrimeraApp saludo={saludo} subtitulo={subtitulo} />);
    const textoSubtitulo = wrapper.find('h3').text();

    expect(textoSubtitulo).toBe(subtitulo);
  })

})
