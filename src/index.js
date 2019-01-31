import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import WebFont from 'webfontloader';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'


WebFont.load({
    google: {
        families: ['Lobster', 'cursive']
    }
});

const store = createStore(rootReducer)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
