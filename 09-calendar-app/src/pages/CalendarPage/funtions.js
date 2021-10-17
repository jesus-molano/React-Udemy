

export const onDoubleClick = (e) => {
	console.log(e);
};

export const onSelectEvent = (e) => {
	console.log(e);
};



export const eventStyleGetter = (event, start, end, isSelected) => {
	const style = {
		backgroundColor: '#F01341',
		borderRadius: '0.6rem',
		display: 'block',
		color: '#fff',
	};
	return {
		style,
	};
};
