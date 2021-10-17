import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { setErrorAction, removeErrorAction } from '../../actions/ui';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { startRegisterEmailPasswordName } from '../../actions/auth';
import validator from 'validator';

const RegisterPage = () => {

	const {loading, msgError} = useSelector(state => state.ui);

	const dispatch = useDispatch();

	const [formValues, handleInputChange] = useForm({
		name: '',
		email: '',
		password: '',
		confirmPassword: '',
	});

	const { name, email, password, confirmPassword } = formValues;

	const handleRegister = (e) => {
		e.preventDefault();
		if (isFormValid()) {
			dispatch(startRegisterEmailPasswordName(email, password, name))
		}
	};

	const isFormValid = () => {
		if (
			name.trim().length === 0 ||
			email.trim().length === 0 ||
			password.trim().length === 0 ||
			confirmPassword.trim().length === 0
		) {
			dispatch(setErrorAction('Fields cannot be empty'));
			return false;
		}
		if (!validator.isEmail(email)) {
			dispatch(setErrorAction('Invalid email'));
			return false;
		}
		if (!validator.isStrongPassword(password, { minSymbols: 0 })) {
			dispatch(
				setErrorAction(
					'Enter a strong password (min 8 characters, 1 letter, 1 number, uppercase and lowercase'
				)
			);
			return false;
		}
		if (password !== confirmPassword) {
			dispatch(setErrorAction('Passwords must match'));
			return false;
		}
		dispatch(removeErrorAction());
		return true;
	};

	return (
		<div className='animate__animated animate__fadeIn animate__faster'>
			<h3 className='auth__title'>Register</h3>
			<form onSubmit={handleRegister}>
				{
					msgError &&
					(<div className='auth__alert-error'>{msgError}</div>)
				}
				<input
					className='auth__input'
					type='text'
					placeholder='Name'
					name='name'
					autoComplete='off'
					onChange={handleInputChange}
				/>
				<input
					className='auth__input'
					type='text'
					placeholder='Email'
					name='email'
					autoComplete='off'
					onChange={handleInputChange}
				/>
				<input
					className='auth__input'
					type='password'
					placeholder='Password'
					name='password'
					autoComplete='nope'
					onChange={handleInputChange}
				/>
				<input
					className='auth__input'
					type='password'
					placeholder='Confirm password'
					name='confirmPassword'
					autoComplete='off'
					onChange={handleInputChange}
				/>
				<button className='btn btn-primary btn-block mb-5' disabled={loading} type='submit'>
					Sing Up
				</button>
				<Link to='/auth/login' className='link mt-5'>
					Already registered?
				</Link>
			</form>
		</div>
	);
};

export default RegisterPage;
