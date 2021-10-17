import moment from 'moment';

export const useMoment = (date) => {
	const dateFormat = moment(date);
	const dayOfWeek = dateFormat.format('dddd');
  const dayOfMonth = dateFormat.format('Do');
  const monthDayYear = dateFormat.format(`MMMM Do, YYYY`)
  return{dayOfWeek, dayOfMonth, monthDayYear}
};

