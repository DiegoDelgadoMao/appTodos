import React from 'react';
import { RiAddLine } from 'react-icons/ri';
import './TodoButton.css';

function CreateTodoButton({ setModal }) {
	const onClickButton = () => {
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
