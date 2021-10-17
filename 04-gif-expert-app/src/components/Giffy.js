import { useState } from 'react';
import InputCategory from './InputCategory';
import GifGrid from './GifGrid';

const Giffy = ({defaultCategories = []}) => {
	const [categories, setCategories] = useState(defaultCategories);

	return (
		<>
			<h1>Giffy</h1>
			<InputCategory setCategories={setCategories} />
			<hr />
			<div className="container">
				{categories.map((category) => (
					<GifGrid key={category} category={category} />
				))}
			</div>
		</>
	);
};

export default Giffy;
