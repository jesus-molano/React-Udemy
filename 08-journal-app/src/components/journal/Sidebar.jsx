import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { startLogout } from '../../actions/auth';
import { startNewNote } from '../../actions/notes';
import Icon from '../Icon';
import JournalEntries from './JournalEntries';

const Sidebar = () => {

	const dispatch = useDispatch();
	const {name} = useSelector(state => state.auth)

	const handleLogout = () => {
		dispatch(startLogout());
	}

	const handleAddEntry = () => {
		dispatch(startNewNote());
	}

	return (
		<aside className='journal__sidebar'>
			<div className='journal__sidebar-navbar'>
				<h3>
					<Icon iconToChoose='user' width='20' height="15" />
					<span>{ name }</span>
				</h3>
				<button className='btn' onClick={handleLogout}>Logout</button>
			</div>
			<button className='journal__new-entry' onClick={handleAddEntry}>
				<Icon iconToChoose='calendar' width="80" height="100" />
				<p>New Entry</p>
      </button>
      <JournalEntries />
		</aside>
	);
};

export default Sidebar;
