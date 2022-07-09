import React from 'react';
import './TodoSearch.css';
import { TodoContext } from '../TodoContext/index';

function TodoSearch() {
	const onSearchValueChange = event => {
		console.log(event.target.value);
		setSearchValue(event.target.value);
	};
	const { searchValue, setSearchValue } = React.useContext(TodoContext);
	// react no puede renderizar de un componente varios elementos, para ello toca meterlos dentro de un fragmento o un array, como aqui abajo
	return (
		<input
			className='containerSearch'
			placeholder='cebolla'
			onChange={onSearchValueChange}
			value={searchValue}
		/>
	);
}

export { TodoSearch };
