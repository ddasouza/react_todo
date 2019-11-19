import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {TodoRow, Todo} from './styles';
import Button from '../BaseButton';

function TodoListView(props) {
	const {
		todos,
		handleDeleteTodo,
	} = props;

	return todos.map((todo, i) => (
		<TodoRow key={`todo-${i}`}>
			<Button
				onClick={handleDeleteTodo(i)}
			>
				DONE
			</Button>
			<Todo>{todo.value}</Todo>
		</TodoRow>
	));
};

TodoListView.propTypes = {
	todos: PropTypes.arrayOf(PropTypes.exact({
		value: PropTypes.string.isRequired,
		idbKey: PropTypes.number,
	})).isRequired,
	handleDeleteTodo: PropTypes.func.isRequired,
};

export default memo(TodoListView);
