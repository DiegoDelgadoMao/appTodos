import React from 'react';
import { useLocalStorage } from './LocalStorage';

export function useTodos() {
	const {
		item: todos,
		saveItem: saveTodos,
		sincronizeItem: sincronizeTodos,
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

	const state = {
		loading,
		error,
		totalTodos,
		completedTodos,
		searchValue,
		searchedTodos,
		openModal,
	};

	const stateUpdaters = {
		setSearchValue,
		addTodo,
		completeTodo,
		deleteTodo,
		setModal,
		sincronizeTodos,
	};

	return { state, stateUpdaters };
}
