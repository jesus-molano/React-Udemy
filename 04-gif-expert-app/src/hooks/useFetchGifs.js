import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

const useFetchGifs = (category) => {
	const [state, setState] = useState({
		gifs: [],
		loading: true,
	});

	useEffect(() => {
		getGifs(category).then((res) => {
			setState({
				gifs: res,
				loading: false,
			});
		});
	}, [category]);

	return state; // {data:[], loading: true}
};

export default useFetchGifs;
