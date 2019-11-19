import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {Container} from './styles';
import TodoInput from '../../components/TodoInput';
import TodoList from '../../components/TodoList';
import {todosFromIdb} from '../../redux/actions';
import {getTodos} from '../../libs/indexedDb';

function Index() {
	const dispatch = useDispatch();

	useEffect(() => {
		getTodos().then(todos => {
			dispatch(todosFromIdb(todos));
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Container>
			<TodoInput />
			<TodoList />
		</Container>
	);
}

export default Index;
