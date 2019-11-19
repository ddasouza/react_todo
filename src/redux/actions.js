export const types = {
	TODOS_FROM_IDB: 'TODOS_FROM_IDB',
	CREATE_TODO: 'CREATE_TODO',
	DELETE_TODO: 'DELETE_TODO',
};

export function todosFromIdb(todos) {
	return {
		type: types.TODOS_FROM_IDB,
		payload: todos,
	};
}

export function createTodo(todo) {
	return {
		type: types.CREATE_TODO,
		payload: todo,
	};
}

export function deleteTodo(todoIndex) {
	return {
		type: types.DELETE_TODO,
		payload: todoIndex,
	};
}
