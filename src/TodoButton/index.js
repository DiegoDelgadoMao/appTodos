import React from 'react';
import './TodoButton.css';

import { TodoContext } from '../TodoContext/index';
import { RiAddLine } from 'react-icons/ri';

function CreateTodoButton() {
	const { openModal, setModal } = React.useContext(TodoContext);
	const onClickButton = () => {
		// si es true va ser false y si es false es true
		setModal(prevState => !prevState);
	};

	const stylesIcon = {
		fontSize: '30px',
		color: '#fff',
	};

	return (
		<button className='addTaskButton' onClick={() => onClickButton()}>
			<RiAddLine style={stylesIcon} />
		</button>
	);
}

export { CreateTodoButton };
