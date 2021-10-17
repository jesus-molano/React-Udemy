import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { activeNote, startDeleting } from '../../actions/notes';
import { useForm } from '../../hooks/useForm';
import NotesAppBar from './NotesAppBar';

const NotePage = () => {
	const dispatch = useDispatch();
	const { active: note } = useSelector((state) => state.notes);
	const [formValues, handleInputChange, reset] = useForm(note);
	const { body, title, id } = formValues;

	const activeId = useRef(note.id);
	const activeUrl = useRef(note.url);

	useEffect(() => {
		if (note.id !== activeId.current) {
			reset(note);
			activeId.current = note.id;
		}
		if (note.url !== activeUrl.current) {
			reset(note);
			activeUrl.current = note.url;
		}
	}, [note, reset])

	useEffect(() => {
		dispatch(activeNote(formValues.id, {...formValues}));
		
	}, [formValues, dispatch])

	const handleDelete = () => {
		dispatch(startDeleting(id));
	}


	return (
		<div className='notes__main-content'>
			<NotesAppBar />

			<form className='notes__content'>
				<input
					type='text'
					placeholder='Some awesome title'
					className='notes__title-input'
					name='title'
					value={title}
					onChange={handleInputChange}
				/>
				<textarea
					placeholder='What happened today?'
					className='notes__textarea'
					name='body'
					cols='30'
					rows='10'
					value={body}
					onChange={handleInputChange}
				></textarea>
				{note.url && (
					<div className='notes__image'>
						<img
							src={note.url}
							alt='image'
						/>
					</div>
				)}
				<button type="button" className="btn btn-danger" onClick={handleDelete}>Delete</button>
				
			</form>
		</div>
	);
};

export default NotePage;
