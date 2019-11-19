import {createStore, applyMiddleware} from 'redux';
import middleware from './middlewares';
import {INITIAL_STATE, todoApp} from './reducers';

export default createStore(todoApp, INITIAL_STATE, applyMiddleware(middleware));
