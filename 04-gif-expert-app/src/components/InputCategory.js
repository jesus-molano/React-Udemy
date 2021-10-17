import { useState } from 'react';
import PropTypes from 'prop-types';

const InputCategory = ({ setCategories }) => {
	const [inputValue, setInputValue] = useState('');
	const handleInputChange = (e) => setInputValue(e.target.value);
	const handleSubmit = (e) => {
		e.preventDefault();
		if (inputValue.trim().length > 0) {
			setCategories((category) => [ inputValue,...category]);
			setInputValue('');
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				value={inputValue}
				onChange={handleInputChange}
				placeholder="Search Gifs Here..."
			></input>
		</form>
	);
};

InputCategory.propTypes = {
	setCategories: PropTypes.func.isRequired,
};

export default InputCategory;
