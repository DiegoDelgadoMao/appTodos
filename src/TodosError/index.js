import React from 'react';
import imgError from '../senal-de-precaucion.png';
import './TodosError.css';

export function TodosError({ error }) {
	return (
		<>
			<img className='img-error' title='imagen de error' src={imgError} />
			<p className='text-error'>Desesperate, hubo un error</p>
		</>
	);
}
