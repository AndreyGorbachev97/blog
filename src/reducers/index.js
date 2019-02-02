import {combineReducers} from 'redux';
import drinksReducers from './drinks';
import activeState from './activeState';

export default combineReducers({
    drinks: drinksReducers,
    active: activeState,
})