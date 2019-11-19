import React, {useCallback} from 'react';
import {shallowEqual, useSelector, useDispatch} from 'react-redux';
import {deleteTodo} from '../../redux/actions';
import View from './View';

function TodoList() {
	const todos = useSelector(state => state.todos, shallowEqual);
	const dispatch = useDispatch();

	const handleDeleteTodo = useCallback((todoIndex) => {
		return () => {
			dispatch(deleteTodo(todoIndex));
		};
	}, [dispatch]);

	return (
		<View
			todos={todos}
			handleDeleteTodo={handleDeleteTodo}
		/>
	);
}

export default TodoList;
