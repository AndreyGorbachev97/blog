import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import WebFont from 'webfontloader';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import devToolsEnhancer from 'remote-redux-devtools';


WebFont.load({
    google: {
        families: ['Pacifico', 'cursive','Amatic SC',
        'Montserrat', 'sans-serif']
    }
});

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
