import React, { useMemo } from 'react';
import { useForm } from '../../hooks/useForm';
import HeroCard from '../../components/HeroCard';
import queryString from 'query-string';
import getHeroesByName from '../../selectors/getHeroesByName';

const SearchPage = ({ history, location }) => {
	const { q = '' } = queryString.parse(location.search);
	const [formValues, handleInputChanges] = useForm({
		searchText: q,
	});
	const { searchText } = formValues;
	const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);
	const handleSearch = (e) => {
		e.preventDefault();
		history.push(`?q=${searchText}`);
	};

	return (
		<div>
			<h1>Search</h1>
			<hr />
			<div className='row'>
				<div className='col-5'>
					<h4>Search Form</h4>
					<hr />
					<form onSubmit={handleSearch}>
						<input
							name='searchText'
							type='text'
							placeholder='Find your hero'
							className='form-control'
							autoComplete='off'
							value={searchText}
							onChange={handleInputChanges}
						/>
						<button
							type='submit'
							className='btn mt-1 btn-outline-primary w-100'
						>
							Search...
						</button>
					</form>
				</div>
				<div className='col-7'>
					<h4>Results</h4>
					<hr />
					{q === '' && <div className='alert alert-info'>Search a hero</div>}
					{q !== '' && heroesFiltered.length === 0 && (
						<div className='alert alert-danger'>
							There is no a hero with {q}
						</div>
					)}
					{heroesFiltered.map((hero) => (
						<HeroCard key={hero.id} hero={hero} />
					))}
				</div>
			</div>
		</div>
	);
};

export default SearchPage;
