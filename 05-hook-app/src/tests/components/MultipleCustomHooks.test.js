import { shallow } from 'enzyme';
import MultipleCustomHooks from '../../components/03-examples/MultipleCustomHooks';
import useCounter from '../../hooks/useCounter';
import useFetch from '../../hooks/useFetch';
jest.mock('../../hooks/useFetch');
jest.mock('../../hooks/useCounter');

describe('<MultipleCustomHooks /> tests', () => {
	beforeEach(() => {
		useCounter.mockReturnValue({
			counter: 10,
			increment: () => {},
			decrement: () => {},
			reset: () => {},
		});
	});

	test('should show correctly', () => {
		useFetch.mockReturnValue({
			data: null,
			loading: true,
			error: null,
		});

		const wrapper = shallow(<MultipleCustomHooks />);
		expect(wrapper).toMatchSnapshot();
	});

	test('should show the info', () => {
		useFetch.mockReturnValue({
			data: [
				{
					author: 'jesus',
					quote: 'Esto es una prueba',
				},
			],
			loading: false,
			error: null,
		});
		const wrapper = shallow(<MultipleCustomHooks />);
		expect(wrapper.find('.alert').exists()).toBe(false);
		expect(wrapper.find('.mb-3').text().trim()).toBe('Esto es una prueba');
		expect(wrapper.find('footer').text().trim()).toBe('jesus');
	});
});
