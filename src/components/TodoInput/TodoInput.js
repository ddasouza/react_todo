import React, {useState, useCallback} from 'react';
import {useDispatch} from 'react-redux'
import {createTodo} from '../../redux/actions';
import View from './View';

function TodoInput() {
	const [todo, setTodo] = useState('');
	const dispatch = useDispatch();

	const handleTodoChange = useCallback((event) => {
		setTodo(event.target.value);
	}, [setTodo]);

	const handleCreateTodo = useCallback(() => {
		if (!!todo) {
			dispatch(createTodo(todo));
			setTodo('');
		}
	}, [todo, setTodo, dispatch]);

	const handleKeyDown = useCallback((event) => {
		if (event.key === 'Enter') {
			handleCreateTodo();
		}
	}, [handleCreateTodo]);

	return (
		<View
			todo={todo}
			handleTodoChange={handleTodoChange}
			handleCreateTodo={handleCreateTodo}
			handleKeyDown={handleKeyDown}
		/>
	);
}

export default TodoInput;
