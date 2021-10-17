import { useForm } from '../../hooks/useForm';

const TodoAdd = ({ handleAddTodo }) => {
	const [{ description }, handleInputChange, reset] = useForm({
		description: '',
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		if (description.trim().length >= 1) {
			const newTodo = {
				id: new Date().getTime(),
				desc: description,
				done: false,
			};
			handleAddTodo(newTodo);
			reset();
		}
	};
	return (
		<>
			<h4>Add TODO</h4>
			<hr />
			<form onSubmit={handleSubmit}>
				<input
					className='form-control'
					type='text'
					name='description'
					placeholder='Learn...'
					autoComplete='off'
					value={description}
					onChange={handleInputChange}
				/>
				<button type='submit' className='btn btn-outline-primary mt-2 w-100'>
					Add
				</button>
			</form>
		</>
	);
};
export default TodoAdd;
