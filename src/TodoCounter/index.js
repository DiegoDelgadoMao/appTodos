import React from 'react';
import './TodoCounter.css';

function TodoCounter({ totalTodos, completedTodos, loading }) {
	return (
		<h2 className={`tittle ${loading && 'tittle-loading'}`}>
			completado <span>{completedTodos}</span> de <span>{totalTodos}</span>
			TODOs
		</h2>
	);
}

export { TodoCounter };
