import React from 'react';
import './TodoButton.css';

import { TodoContext } from '../TodoContext/index';

function CreateTodoButton() {
	const { openModal, setModal } = React.useContext(TodoContext);
	const onClickButton = () => {
		// si es true va ser false y si es false es true
		setModal(prevState => !prevState);
	};

	return (
		<button className='addTaskButton' onClick={() => onClickButton()}>
			<i className='ri-add-fill'></i>
		</button>
	);
}

export { CreateTodoButton };
