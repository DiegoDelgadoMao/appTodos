import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext/index';

function TodoCounter() {
	const { totalTodos, completedTodos } = React.useContext(TodoContext);
	return (
		<h2 className='tittle'>
			{' '}
			completado <span>{completedTodos}</span> de <span>{totalTodos}</span>{' '}
			TODOs
		</h2>
	);
}

export { TodoCounter };
