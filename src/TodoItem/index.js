import React from 'react';
import './TodoItem.css';
import { FiTrash2 } from 'react-icons/fi';
import { FiCheck } from 'react-icons/fi';
import { IconContext } from 'react-icons';

function TodoItem({ text, completed, onComplete, onDelete }) {
	return (
		<IconContext.Provider value={{ size: '2.6rem' }}>
			<li className='containerList__item'>
				{/* aqui se hace un condicional si props.complete es true se pondra la calse icon-check... */}
				<FiCheck
					color={(completed && 'rgb(0, 255, 128)') || '#000000'}
					onClick={onComplete}
				/>
				<p className={`${completed && 'TodoItem-p__complete'}`}>{text}</p>
				<FiTrash2 color={'rgb(165, 42, 42)'} onClick={onDelete} />
				{/* <i className='ri-delete-bin-5-line' onClick={onDelete}></i> */}
			</li>
		</IconContext.Provider>
	);
}

export { TodoItem };
