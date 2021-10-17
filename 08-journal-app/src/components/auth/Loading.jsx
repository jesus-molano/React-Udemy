const Loading = () => {
	return (
		<div className='auth__main'>
			<div className='auth__loading'>
				<h1>Wait a second!</h1>
				<div className='auth__spinner'>
					<div className='auth__bounce1'></div>
					<div className='auth__bounce2'></div>
					<div className='auth__bounce3'></div>
				</div>
			</div>
		</div>
	);
};

export default Loading;
