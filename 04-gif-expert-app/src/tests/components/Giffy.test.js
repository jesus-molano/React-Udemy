import { shallow } from 'enzyme';
import Giffy from '../../components/Giffy';

describe('Principal component tests', () => {
  test('should show the component correctly', () => {
    const wrapper = shallow(<Giffy />)
    expect(wrapper).toMatchSnapshot();
  })
  test('should show a list of categories', () => {
    const categories = ['One Punch', 'Dragon Ball'];
    const wrapper = shallow(<Giffy defaultCategories={categories} />)
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('GifGrid').length).toBe(categories.length);

  })
  
})

