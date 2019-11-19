import {types} from './actions';

export const INITIAL_STATE = {
	todos: [],
};

export function todoApp(state=INITIAL_STATE, action) {
	switch(action.type) {
		case types.TODOS_FROM_IDB:
			return {
				...state,
				todos: action.payload,
			};
		case types.CREATE_TODO:
			return {
				...state,
				todos: [{value: action.payload, idbKey: action.idbKey}, ...state.todos],
			};
		case types.DELETE_TODO:
			return {
				...state,
				todos: state.todos.filter((t,i) => i !== action.payload),
			};
		default:
			return state;
	}
}
