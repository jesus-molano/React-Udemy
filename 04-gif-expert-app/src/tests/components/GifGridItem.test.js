import { shallow } from 'enzyme';
import GifGridItem from '../../Components/GifGridItem';


describe('GifGridItem component tests', () => {
  const title = 'Un Titulo';
	const url = 'https://localhost/testPage.jpg';
  const wrapper = shallow(<GifGridItem title={title} url={url} />);

	test('should render the component correctly', () => {
		expect(wrapper).toMatchSnapshot();
  });
  test('should be a paragraph with the title', () => {
    const p = wrapper.find('p');
    expect(p.text().trim()).toBe(title);
  })
  test('should be a <img> with alt and src from props', () => {
    const img = wrapper.find('img');

    expect(img.prop('src')).toBe(url);
    expect(img.prop('alt')).toBe(title);
  })
  test('should have "animate__fadeIn" animation', () => {
    const div = wrapper.find('div');
    expect(div.prop('className')).toContain('animate__fadeIn');

  })
});
