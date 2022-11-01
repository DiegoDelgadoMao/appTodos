import React from 'react';
import './TodoList.css';

function TodoList(props) {
	return (
		<section>
			{props.error && props.onError()}
			{props.loading && props.onLoading()}

			{(!props.loading && !props.totalTodos) && props.onEmptyTodos()}

			{(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchedResults(props.searchText)}

			{(!props.error && !props.loading) && props.searchedTodos.map(props.children ?? props.render)}
		</section>
	);
}

export { TodoList };
