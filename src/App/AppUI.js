import React from 'react';
import { TodoContext } from '../TodoContext/index';

import { TodoCounter } from '../TodoCounter';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoSearch } from '../TodoSearch';
import { CreateTodoButton } from '../TodoButton';
import { Modal } from '../Modal/index';
import { TodoForm } from '../TodoForm/index';

import { TodosError } from '../TodosError';
import { TodosEmpty } from '../EmptyTodos';
import { TodosLoading } from '../TodosLoading';

function AppUI() {
	const {
		error,
		loading,
		searchedTodos,
		completeTodo,
		deleteTodo,
		openModal,
		setModal,
	} = React.useContext(TodoContext);
	return (
		<>
			<TodoCounter />
			<TodoSearch />
			<TodoList>
				{error && <TodosError />}
				{loading && <TodosLoading />}
				{!loading && !searchedTodos.length && <TodosEmpty />}
				{searchedTodos.map(todo => (
					<TodoItem
						key={todo.text}
						text={todo.text}
						completed={todo.completed}
						onComplete={() => completeTodo(todo.text)}
						onDelete={() => deleteTodo(todo.text)}
					/>
				))}
			</TodoList>
			{openModal && (
				<Modal>
					<div className='modal-background'>
						<TodoForm />
					</div>
				</Modal>
			)}
			<CreateTodoButton />
		</>
	);
}

export { AppUI };
