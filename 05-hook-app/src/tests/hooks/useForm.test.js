import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';

describe('test in useForm', () => {
	const initialForm = {
		name: 'jesus',
		email: 'jesus@email.com',
	};

	test('should return a default form', () => {
		const { result } = renderHook(() => useForm(initialForm));
		const [formValues, handleInputChange, reset] = result.current;

		expect(formValues).toEqual(initialForm);
		expect(typeof handleInputChange).toBe('function');
		expect(typeof reset).toBe('function');
	});

	test('should change a form value', () => {
		const { result } = renderHook(() => useForm(initialForm));
		const [, handleInputChange] = result.current;

		act(() => {
			handleInputChange({ target: { name: 'name', value: 'paco' } });
		});

		const [formValues] = result.current;
		expect(formValues).toEqual({ ...initialForm, name: 'paco' });
	});

	test('should reset the form', () => {
		const { result } = renderHook(() => useForm(initialForm));
		const [, handleInputChange, reset] = result.current;

		act(() => {
			handleInputChange({ target: { name: 'name', value: 'paco' } });
			reset();
		});

		const [formValues] = result.current;
		expect(formValues).toEqual(initialForm);
	});
});
