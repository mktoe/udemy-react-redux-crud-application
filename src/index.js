import React from 'react';
import ReactDOM from 'react-dom';

//createstore インポート
import { createStore } from 'redux'

//provider インポート
import { Provider } from 'react-redux'

//作ったreducersをインポート
import reducer from './reducers'

//App.js を　/component/App.jsに移動してインポート
import App from './components/App'

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//storeの作成
const store = createStore(reducer)

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
