import React from 'react';

export function useLocalStorage(itemName, initialValue) {
	const [state, dispatch] = React.useReducer(reducer, initialState({ initialValue }));
	const {
		sincronizedItem,
		error,
		loading,
		item
	} = state;

	// action creators
	const onError = (error) => dispatch({ type: actionType.error, payload: error });
	const onSuccess = (parsedItem) => dispatch({ type: actionType.success, payload: parsedItem });
	const onSave = (newItem) => dispatch({ type: actionType.save, payload: newItem })
	const onSincronize = () => dispatch({ type: actionType.sincronize })

	React.useEffect(() => {
		setTimeout(() => {
			try {
				const localStorageItem = localStorage.getItem(itemName);
				let parsedItem;

				if (!localStorageItem) {
					localStorage.setItem(itemName, JSON.stringify(initialValue));
					parsedItem = initialValue;
				} else {
					parsedItem = JSON.parse(localStorageItem);
				}

				onSuccess(parsedItem)
			} catch (error) {
				onError(error)
			}
		}, 1500);
	}, [sincronizedItem]);

	const saveItem = newItem => {
		try {
			const stringifiedItem = JSON.stringify(newItem);
			localStorage.setItem(itemName, stringifiedItem);
			onSave(newItem)
		} catch (error) {
			onError(error)
		}
	};

	return {
		item,
		saveItem,
		loading,
		error,
		sincronizeItem: onSincronize
	};
}

const initialState = ({ initialValue }) => ({
	sincronizedItem: true,
	error: false,
	loading: true,
	item: initialValue,
})

const actionType = {
	error: 'ERROR',
	success: 'SUCCESS',
	save: 'SAVE',
	sincronize: 'SINCRONIZE'
}

const reducerObject = (state, payload) => ({
	[actionType.error]: {
		...state,
		error: true
	},
	[actionType.success]: {
		...state,
		error: false,
		loading: false,
		sincronizedItem: true,
		item: payload,
	},
	[actionType.save]: {
		...state,
		item: payload,
	},
	[actionType.sincronize]: {
		...state,
		sincronizedItem: false,
		loading: true,
	},
})

const reducer = (state, action) => {
	return reducerObject(state, action.payload)[action.type] || state;
}
