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
import Routes from './components/routes/Routes';
import Header from './components/Heder/Header';
import Footer from './components/Footer/Footer';

WebFont.load({
    google: {
        families: ['Pacifico', 'cursive','Amatic SC', 'Comfortaa',
        'Montserrat', 'sans-serif', 'Yanone Kaffeesatz']
    }
});

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
    <Provider store={store}>
        <App>
            <Header/>
            <Routes/>
            <Footer/>
        </App>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
