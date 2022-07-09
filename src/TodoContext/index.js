import React from 'react';
import { useLocalStorage } from './LocalStorage';

const TodoContext = React.createContext();

function TodoProvider(props) {
	const {
		item: todos,
		saveItem: saveTodos,
		loading,
		error,
	} = useLocalStorage('TODOS_V1', []);
	const [searchValue, setSearchValue] = React.useState('');
	const [openModal, setModal] = React.useState(false);

	const completedTodos = todos.filter(todo => !!todo.completed).length;
	const totalTodos = todos.length;

	let searchedTodos = [];
	if (!searchValue.length >= 1) {
		searchedTodos = todos;
	} else {
		searchedTodos = todos.filter(todo => {
			const todoText = todo.text.toLowerCase();
			const searchText = searchValue.toLowerCase();
			return todoText.includes(searchText);
		});
	}

	const addTodo = text => {
		const newTodos = [...todos];
		newTodos.push({
			completed: false,
			text,
		});
		console.log(newTodos);
		saveTodos(newTodos);
	};

	const completeTodo = text => {
		const newTodos = todos.map(todo => {
			if (todo.text === text) {
				return {
					...todo,
					completed: true,
				};
			} else {
				return {
					...todo,
				};
			}
		});
		saveTodos(newTodos);
	};

	const deleteTodo = text => {
		const newTodos = todos.filter(todo => todo.text !== text);
		saveTodos(newTodos);
	};

	return (
		<TodoContext.Provider
			value={{
				loading,
				error,
				totalTodos,
				completedTodos,
				searchValue,
				setSearchValue,
				searchedTodos,
				addTodo,
				completeTodo,
				deleteTodo,
				openModal,
				setModal,
			}}
		>
			{props.children}
		</TodoContext.Provider>
	);
}

export { TodoContext, TodoProvider };
