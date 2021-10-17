import React, { useState, useEffect } from 'react';
import './effects.css';
import Message from './Message';

const SimpleForm = () => {
	const [formState, setformState] = useState({
		name: '',
		email: '',
	});
	const { name, email } = formState;

  //  USEEFFECTS
	useEffect(() => {
		console.log('Hey');
  }, []); // Al iniciar la pagina
  
  useEffect(() => {
    console.log("Form changed!");
  }, [formState])

  useEffect(() => {
    console.log("Email changed!");
  }, [email])


	const handleInputChange = ({ target }) => {
		setformState({
			...formState,
			[target.name]: target.value,
		});
	};
	return (
		<>
			<h1>useEffect</h1>
			<hr />
			<div className='form-group'>
				<input
					type='text'
					name='name'
					className='form-control'
					placeholder='Your Name Here...'
					autoComplete='off'
					value={name}
					onChange={handleInputChange}
				/>
      </div>
      
      <div className='form-group'>
				<input
					type='text'
					name='email'
					className='form-control'
					placeholder='email@email.com...'
					autoComplete='off'
					value={email}
					onChange={handleInputChange}
				/>
			</div>
			{(name === 'Jesus') && <Message />}
		</>
	);
};

export default SimpleForm;
