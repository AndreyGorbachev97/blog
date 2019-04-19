import {call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import {full_posts} from '../actions/index';
import axios from 'axios'



function* showPostsDrink() {
    try {
        const product = yield axios.get('http://localhost:5000/api/post', {responseType: 'json'});
        yield put(full_posts(product.data));
    } catch (e) {
        console.log(e);
    }
}

export default function* mySaga(){
    yield takeLatest('FETCHED_SHOW_POSTS_DRINK', showPostsDrink);
};