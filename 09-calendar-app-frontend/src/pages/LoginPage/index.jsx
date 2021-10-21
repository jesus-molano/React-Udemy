const LoginPage = () => {
	return (
    <div className='container-background'>
      <div className="circle-container">
			<div className='float-circle circle1'></div>
			<div className='float-circle circle2'></div>
      </div>
			<div className='login-container'>
				<div className='login-form'>
					<h3>Sign in</h3>
					<form>
						<div className='form-group'>
							<input type='text' className='form-control' placeholder='Email' />
						</div>
						<div className='form-group'>
							<input
								type='password'
								className='form-control'
								placeholder='Password'
							/>
						</div>

						<input type='submit' className='btnSubmit' value='Login' />
					</form>
				</div>
			</div>
		</div>
	);
};
export default LoginPage;
