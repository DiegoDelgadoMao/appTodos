import React from 'react';
import logo from '../box.png';
import './emptyTodos.css';

export function TodosEmpty() {
	return (
		<>
			<img className='img-empty' src={logo} />
			<p className='text-empty'>Crea tu primer TODO</p>;
		</>
	);
}
