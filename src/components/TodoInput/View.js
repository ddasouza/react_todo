import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {Container, Input} from './styles';
import Button from '../BaseButton';

function TodoListView(props) {
	const {
		todo,
		handleTodoChange,
		handleCreateTodo,
		handleKeyDown,
	} = props;

	return (
		<Container>
			<Input
				value={todo}
				onChange={handleTodoChange}
				onKeyDown={handleKeyDown}
			/>
			<Button
				onClick={handleCreateTodo}
			>Add</Button>
		</Container>
	);
};

TodoListView.propTypes = {
	todo: PropTypes.string.isRequired,
	handleTodoChange: PropTypes.func.isRequired,
	handleCreateTodo: PropTypes.func.isRequired,
	handleKeyDown: PropTypes.func.isRequired,
};

export default memo(TodoListView);
