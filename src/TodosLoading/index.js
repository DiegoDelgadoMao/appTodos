import React from 'react';
import './TodosLoading.css';

export function TodosLoading() {
	return (
		<div className='loadingTodo-container'>
			<i className={`ri-check-line loadingTodo-completeIcon`}></i>
			<span className='loadingTodo-text'>Cargando TODOS....</span>
			<i className='ri-delete-bin-5-line loadingTodo-deleteIcon'></i>
		</div>
	);
}
