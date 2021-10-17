import { useDispatch } from 'react-redux';
import { activeNote } from '../../actions/notes';
import { useMoment } from '../../hooks/useMoment';

const JournalEntry = ({ id, date, title, body, url }) => {
	const { dayOfWeek, dayOfMonth } = useMoment(date);

	const dispatch = useDispatch();
	const handleSelectEntry = () => {
		dispatch(activeNote(id, { date, title, body, url }));
	};

	return (
		<div className='journal__entry pointer animate__animated animate__fadeIn animate__faster' onClick={handleSelectEntry}>
			{url && (
				<div
					className='journal__entry-picture'
					style={{
						backgroundSize: 'cover',
						backgroundImage: `url(${url})`,
					}}
				></div>
			)}
			<div className='journal__entry-body'>
				<p className='journal__entry-title'>{title}</p>
				<p className='journal__entry-content'>{body}</p>
			</div>
			<div className='journal__entry-date-box'>
				<span>{dayOfWeek}</span>
				<h4>{dayOfMonth}</h4>
			</div>
		</div>
	);
};

export default JournalEntry;
