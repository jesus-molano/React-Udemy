const RegisterPage = () => {
	return (
		<div className='container-background'>
			<div className='circle-container'>
				<div className='float-circle circle1'></div>
				<div className='float-circle circle2'></div>
			</div>
			<div className='login-container'>
				<div className='register-form'>
					<h3>Sign up</h3>
					<form>
						<div className='form-group'>
							<input type='text' className='form-control' placeholder='Name' />
						</div>
						<div className='form-group'>
							<input
								type='email'
								className='form-control'
								placeholder='Email'
							/>
						</div>
						<div className='form-group'>
							<input
								type='password'
								className='form-control'
								placeholder='Password'
							/>
						</div>

						<div className='form-group'>
							<input
								type='password'
								className='form-control'
								placeholder='Repeat Password'
							/>
						</div>

						<input type='submit' className='btnSubmit' value='Create account' />
					</form>
				</div>
			</div>
		</div>
	);
};

export default RegisterPage;
