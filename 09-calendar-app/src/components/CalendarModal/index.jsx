import Modal from 'react-modal';
import DateTimePicker from 'react-datetime-picker/dist/entry.nostyle';
import moment from 'moment';
import { useState } from 'react';
import { customStyles } from './customStyles';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
import errorAlert from '../../helpers/errorAlert';

Modal.setAppElement('#root');

const now = moment().minutes(0).seconds(0).add(1, 'hours'); //12:00:00
const nowPlusHour = moment().minutes(0).seconds(0).add(2, 'hours'); //12:00:00

const CalendarModal = () => {
	const [startDate, setStartDate] = useState(now.toDate());
	const [endDate, setEndDate] = useState(nowPlusHour.toDate());
	const [formValues, setFormValues] = useState({
		title: 'Evento',
		notes: '',
		start: now.toDate(),
		end: nowPlusHour.toDate(),
	});

	const { notes, title, start, end } = formValues;

	const closeModal = () => {};

	const handleStartDateChange = (e) => {
		setStartDate(e);
		setFormValues({
			...formValues,
			start: e,
		});
	};
	const handleEndDateChange = (e) => {
		setEndDate(e);
		setFormValues({
			...formValues,
			end: e,
		});
	};

	const handleInputChange = ({ target }) => {
		setFormValues({
			...formValues,
			[target.name]: target.value,
		});
	};

	const handleSubmitForm = (e) => {
		e.preventDefault();
		const momentStart = moment(start);
		const momentEnd = moment(end);
		if (momentStart.isSameOrAfter(momentEnd)) {
			return errorAlert(
				'La fecha final siempre debe de ser mayor a la inicial'
			);
		}
		if (title.trim().length < 2) {
			return errorAlert('El evento debe de tener un título');
		}

		closeModal()
	};

	return (
		<Modal
			isOpen={true}
			onRequestClose={closeModal}
			closeTimeoutMS={200}
			style={customStyles}
			className='modal'
			overlayClassName='modal-bg'
		>
			<h1> Nuevo evento </h1>
			<hr />
			<form className='container' onSubmit={handleSubmitForm}>
				<div className='form-group'>
					<label>Fecha y hora inicio</label>
					<DateTimePicker
						onChange={handleStartDateChange}
						value={startDate}
						className='form-control'
					/>
				</div>

				<div className='form-group'>
					<label>Fecha y hora fin</label>
					<DateTimePicker
						onChange={handleEndDateChange}
						value={endDate}
						minDate={startDate}
						className='form-control'
					/>
				</div>

				<hr />
				<div className='form-group'>
					<label>Titulo y notas</label>
					<input
						type='text'
						className='form-control'
						placeholder='Título del evento'
						name='title'
						autoComplete='off'
						value={title}
						onChange={handleInputChange}
					/>
					<small id='emailHelp' className='form-text text-muted'>
						Una descripción corta
					</small>
				</div>

				<div className='form-group'>
					<textarea
						type='text'
						className='form-control'
						placeholder='Notas'
						rows='5'
						name='notes'
						value={notes}
						onChange={handleInputChange}
					></textarea>
					<small id='emailHelp' className='form-text text-muted'>
						Información adicional
					</small>
				</div>

				<button type='submit' className='btnSubmit'>
					<i className='far fa-save'></i>
					<span> Guardar</span>
				</button>
			</form>
		</Modal>
	);
};

export default CalendarModal;
