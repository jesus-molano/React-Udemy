import React from 'react';
import { useForm } from '../../hooks/useForm';
import './effects.css';


const FormWithCustomHook = () => {
	const [formValues, handleInputChanges] = useForm({
		name: '',
    email: '',
    password: '',
	});
  const { name, email, password } = formValues;
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  }

 
	
	return (
    <form onSubmit={handleSubmit}>
			<h1>FormWithCustomHook</h1>
			<hr />
			<div className='form-group'>
				<input
					type='text'
					name='name'
					className='form-control'
					placeholder='Your Name Here...'
					autoComplete='off'
					value={name}
					onChange={handleInputChanges}
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
					onChange={handleInputChanges}
				/>
			</div>
      <div className='form-group'>
				<input
					type='password'
					name='password'
					className='form-control'
					placeholder='****'
					value={password}
					onChange={handleInputChanges}
				/>
      </div>
      <button type="submit" className="btn btn-primary">Guardar</button>
		</form>
	);
};

export default FormWithCustomHook;
