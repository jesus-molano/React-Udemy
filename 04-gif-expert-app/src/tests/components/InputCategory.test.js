import { shallow } from 'enzyme';
import InputCategory from '../../components/InputCategory';

describe('InputCategory component tests', () => {

  const setCategories =  jest.fn();
  let wrapper = shallow(<InputCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<InputCategory setCategories={setCategories} />)

  })
  test('should show correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })
  test('should change the text box', () => {
    const input = wrapper.find('input');
    const value = 'Hola mundo'
    input.simulate('change', {target: {value}})
  })
  test('should NOT post the info with submit', () =>{
    wrapper.find('form').simulate('submit', { preventDefault() { } });
    expect(setCategories).not.toHaveBeenCalled();
  })
  test('should call the setCategories and clean the input', () => {
    const input = wrapper.find('input');
    const value = 'Hola mundo';
    // Simular rellenar el input
    input.simulate('change', { target: { value } });
    // Simular hacer submit
    wrapper.find('form').simulate('submit', { preventDefault() { } });
    // Espera que la funcion setCategories sea llamada
    expect(setCategories).toHaveBeenCalled();
    // El input ahora estara vacio
    expect(input.prop('value')).toBe('');
  })
  
})
