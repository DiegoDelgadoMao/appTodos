import React from 'react';

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
import { TodoHeader } from '../TodoHeader/index'

import { useTodos } from './useTodos';
import { ChangeAlert } from '../ChangeAlert/index';

function App() {
	const { state, stateUpdaters } = useTodos();

	const {
		error,
		loading,
		searchedTodos,
		totalTodos,
		completedTodos,
		openModal,
		searchValue,
	} = state;

	const {
		setModal,
		addTodo,
		completeTodo,
		deleteTodo,
		setSearchValue,
		sincronizeTodos,
	} = stateUpdaters;
	return (
		<>
			<TodoHeader loading={loading}>
				<TodoCounter
					completedTodos={completedTodos}
					totalTodos={totalTodos}
				// loading={loading}
				/>
				<TodoSearch
					searchValue={searchValue}
					setSearchValue={setSearchValue}
				// loading={loading}
				/>
			</TodoHeader>
			<TodoList
				error={error}
				loading={loading}
				searchedTodos={searchedTodos}
				totalTodos={totalTodos}
				searchText={searchValue}

				onError={() => <TodosError />}
				onLoading={() => <TodosLoading />}
				onEmptyTodos={() => <TodosEmpty />}
				onEmptySearchedResults={
					(searchText) => <p>no hay resultados para {searchText}</p>
				}
			// render props
			// render={todo => (
			// 	<TodoItem
			// 		key={todo.text}
			// 		text={todo.text}
			// 		completed={todo.completed}
			// 		onComplete={() => completeTodo(todo.text)}
			// 		onDelete={() => deleteTodo(todo.text)}
			// 	/>
			// )}
			>

				{/* render function */}
				{todo => (
					<TodoItem
						key={todo.text}
						text={todo.text}
						completed={todo.completed}
						onComplete={() => completeTodo(todo.text)}
						onDelete={() => deleteTodo(todo.text)}
					/>
				)}
			</TodoList>

			{openModal && (
				<Modal>
					<div className='modal-background'>
						<TodoForm addTodo={addTodo} setModal={setModal} />
					</div>
				</Modal>
			)}
			<CreateTodoButton setModal={setModal} />
			<ChangeAlert sincronize={sincronizeTodos} />
		</>
	);
}

export default App;
