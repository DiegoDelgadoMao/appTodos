import React, { useState } from 'react';
import imgCreateTodo from '../add.png';
import './TodoForm.css';

export function TodoForm({ addTodo, setModal }) {
	const [newTodoValue, setTodoValue] = useState('');
	const onCancel = () => {
		setModal(false);
	};
	const onSubmit = event => {
		event.preventDefault();
		addTodo(newTodoValue);
		setModal(false);
		setTodoValue('');
	};
	const onWrite = event => {
		setTodoValue(event.target.value);
	};
	return (
		<form className='container-modal' onSubmit={onSubmit}>
			<img className='container-modal__img' src={imgCreateTodo} />
			<label className='container-modal__title'>
				Nombre o descripcion de la terea
			</label>
			<textarea
				className='container-modal__text'
				value={newTodoValue}
				onChange={onWrite}
				placeholder='cortar la cebolla'
			/>
			<div className='container-btns-modal'>
				<button
					className='container-btns-modal__btn container-btns-modal__btn--left'
					type='button'
					onClick={onCancel}
				>
					Cancelar
				</button>
				<button className='container-btns-modal__btn' type='submit'>
					Añadir
				</button>
			</div>
		</form>
	);
}
