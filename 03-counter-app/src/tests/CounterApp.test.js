import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';

let wrapper = shallow(<CounterApp />);

beforeEach(() => {
  wrapper = shallow(<CounterApp />);
})

describe('CounterApp component tests', () => {
  test('should show the component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })
  test('should show the number 100 by default', () => {
    const value = 100;
    const wrapper = shallow(<CounterApp value={value} />);
    const valorEsperado = wrapper.find('p').text()

    expect(valorEsperado).toBe(value.toString());

  })
  test('should increase with the button +', () => {
    wrapper.find('button').at(0).simulate('click');
    const valorEsperado = wrapper.find('p').text();

    expect(valorEsperado).toBe('1');
  })
  test('should show the default value with the button Reset', () => {
    const value = 100;
    const wrapper = shallow(<CounterApp value={value} />);
    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(1).simulate('click');
    const valorEsperado = wrapper.find('p').text();

    expect(valorEsperado).toBe(`${value}`);
  })
  test('should decrease with the button -', () => {
    wrapper.find('button').at(2).simulate('click');
    const valorEsperado = wrapper.find('p').text();

    expect(valorEsperado).toBe('-1');
  })
})
