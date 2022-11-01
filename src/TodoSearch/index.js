import React from 'react';
import './TodoSearch.css';

function TodoSearch({ searchValue, setSearchValue, loading }) {
	const onSearchValueChange = event => {
		setSearchValue(event.target.value);
	};
	return (
		<input
			className='containerSearch'
			placeholder='cebolla'
			onChange={onSearchValueChange}
			value={searchValue}
			disabled={loading}
		/>
	);
}

export { TodoSearch };
