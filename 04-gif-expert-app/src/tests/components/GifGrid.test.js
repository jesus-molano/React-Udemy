import { shallow } from 'enzyme';
import GifGrid from '../../components/GifGrid';
// import useFetchGifs from '../../hooks/useFetchGifs';
// jest.mock('../../hooks/useFetchGifs');

describe('GifGrid component tests', () => {
  const category = 'One Punch';

  test('should show the component correctly', () => {
    // useFetchGifs.mockReturnValue({
    //   data: [],
    //   loading: true,
    // });
    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  })
  test('should show items when the imgs are loaded', () => {

    // const gifs = [{
    //   id: 'ABC',
    //   url: 'https://hola/hola.jpg',
    //   title: 'Cualquier Cosa',
    // }]
    // useFetchGifs.mockReturnValue({
    //   data: gifs,
    //   loading: false,
    // });

    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  })
  
})
