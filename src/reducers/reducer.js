import {combineReducers} from 'redux';
import drinksReducers from './drinksState';
import activeState from './activeState';

export default combineReducers({
    drinks: drinksReducers,
    active: activeState,
})