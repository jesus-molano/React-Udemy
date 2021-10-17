import CalendarEvent from '../../components/CalendarEvent';
import moment, { months } from 'moment';
import { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { NavBar } from '../../components/Navbar';
import { messages, momentES } from '../../config/languageES-SP';
import {eventStyleGetter, onDoubleClick, onSelectEvent} from './funtions'
import CalendarModal from '../../components/CalendarModal';
import 'react-big-calendar/lib/css/react-big-calendar.css';

moment.updateLocale('es', momentES);
const localizer = momentLocalizer(moment);
const events = [
	{
		title: 'Cumpleaños de Maria',
		start: moment().toDate(), //new Date()
		end: moment().add(2, 'hours').toDate(),
		user: {
			_id: '123',
			name: 'Jesus',
		},
	},
];

const CalendarPage = () => {

	const [lastView, setLastView] = useState(
		localStorage.getItem('lastView') || 'month'
	);
	
	 const onViewChange = (e, setLastView) => {
		setLastView(e);
		localStorage.setItem('lastView', e);
	};

	return (
		<div className='calendar-page'>
			<NavBar />
			<Calendar
				localizer={localizer}
				events={events}
				startAccessor='start'
				endAccesor='end'
				messages={messages}
				eventPropGetter={eventStyleGetter}
				onDoubleClickEvent={onDoubleClick}
				onView={setLastView}
				onSelectEvent={onSelectEvent}
				view={lastView}
				components={{
					event: CalendarEvent,
				}}
			/>
			<CalendarModal />
		</div>
	);
};

export default CalendarPage;
