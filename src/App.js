import React from 'react';
import {Provider} from 'react-redux';
import store from './redux/stores';
import {GlobalStyle} from './styles';
import IndexView from './views/Index';

function App() {
	return (
		<Provider store={store}>
			<GlobalStyle />
			<IndexView />
		</Provider>
	);
}

export default App;
