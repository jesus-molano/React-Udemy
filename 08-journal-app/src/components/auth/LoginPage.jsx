import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { startGoogleLogin, startLoginEmailPassword } from "../../actions/auth";
import { setErrorAction, removeErrorAction } from "../../actions/ui";
import validator from "validator";

const LoginPage = () => {

	const {loading, msgError} = useSelector(state => state.ui);

	const dispatch = useDispatch();

	const [formValues, handleInputChange] = useForm({
		email: '',
		password: ''
	})

	const { email, password } = formValues;
	const handleLogin = (e) => {
		e.preventDefault();
		if (isFormValid()) {
			dispatch(startLoginEmailPassword(email, password))
		}
	}

	const handleGoogleLogin = () => {
		dispatch(startGoogleLogin());
	}

	const isFormValid = () => {
		if (
			email.trim().length === 0 ||
			password.trim().length === 0
		) {
			dispatch(setErrorAction('Fields cannot be empty'));
			return false;
		}
		if (!validator.isEmail(email)) {
			dispatch(setErrorAction('Invalid email'));
			return false;
		}

		dispatch(removeErrorAction());
		return true;
	};

	return (
		<div className='animate__animated animate__fadeIn animate__faster'>
			<h3 className="auth__title">Login</h3>
			<form onSubmit={handleLogin}>
				{
					msgError &&
					(<div className='auth__alert-error'>{msgError}</div>)
				}
				<input className="auth__input" type='text' placeholder='email' name='email' autoComplete="off" value={email} onChange={handleInputChange}/>
				<input className="auth__input" type='password' placeholder='password' name='password' autoComplete="off" value={ password } onChange={handleInputChange}/>
				<button className="btn btn-primary btn-block" type='submit' disabled={loading} >Login</button>
				<div className="auth__social-networks">
					<p>Login with social networks</p>
					<button className='google-btn' disabled={loading} onClick={handleGoogleLogin}>
						<div className='google-icon-wrapper'>
							<img
								className='google-icon'
								src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg'
								alt='google button'
							/>
						</div>
						<p className='btn-text'>
							<strong>Sign in with Google</strong>
						</p>
					</button>
        </div>
        <Link to="/auth/register" className="link">Create new account</Link>
			</form>
		</div>
	);
};

export default LoginPage;
