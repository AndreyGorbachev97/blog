import {call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import {full_posts, one_post} from '../actions/index';
import axios from 'axios'



function* showPostsDrink() {
    try {
        const product = yield axios.post('http://localhost:5000/api/post', {responseType: 'json'});
        yield put(full_posts(product.data));
    } catch (e) {
        console.log(e);
    }
}

function* showPost(actions) {
    try {

        const product = yield axios.get(`http://localhost:5000/api/post/${actions.payload}`, {responseType: 'json'});
        yield put(one_post(product.data));
    } catch (e) {
        console.log(e);
    }
}

export default function* mySaga(){
    yield takeLatest('FETCHED_SHOW_POSTS_DRINK', showPostsDrink);
    yield takeLatest('FETCHED_SHOW_POST', showPost);
};