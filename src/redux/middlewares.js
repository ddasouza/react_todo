import {types} from './actions';
import {addTodo, removeTodo} from '../libs/indexedDb';

export default function middleware(store) {
	return function(next) {
		return async function(action) {
			switch(action.type) {
				case types.CREATE_TODO:
					const newIdbKey = await addTodo(action.payload);
					action = {...action, idbKey: newIdbKey};
					break;
				case types.DELETE_TODO:
					const {idbKey} = store.getState().todos[action.payload];
					await removeTodo(idbKey);
					break;
				default:
					break;
			}

			return next(action);
		}
	}
}
