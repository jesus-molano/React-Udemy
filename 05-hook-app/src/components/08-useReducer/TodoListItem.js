const TodoListItem = ({key, todo, index, handleDelete, handleToggle}) => {
	return (
		<li key={key} className='list-group-item'>
			<p
				className={`${todo.done && 'complete'}`}
				onClick={() => handleToggle(todo.id)}
			>
				{index + 1}. {todo.desc}
			</p>
			<button onClick={() => handleDelete(todo.id)} className='btn btn-danger'>
				Delete
			</button>
		</li>
	);
};

export default TodoListItem;
