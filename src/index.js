import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import WebFont from 'webfontloader';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/reducer';
import Routes from './components/routes/Routes';
import Header from './components/Heder/Header';
import Footer from './components/Footer/Footer';
import createSagaMiddleware from 'redux-saga';
import mySaga from './sagas/saga'

WebFont.load({
    google: {
        families: ['Pacifico', 'cursive','Amatic SC', 'Comfortaa',
        'Montserrat', 'sans-serif', 'serif', 'Yanone Kaffeesatz', 'Roboto Slab:700', 'Merriweather:700', 'Cuprum',
        'Rubik:500']
    }
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, composeEnhancers( applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(mySaga)

ReactDOM.render(
    <Provider store={store}>
        <App>
            <Routes/>
        </App>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
