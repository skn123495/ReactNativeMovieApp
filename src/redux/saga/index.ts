import {all} from 'redux-saga/effects';
import AuthSaga from './authSaga';

export default function* rootSaga() {
  yield all([AuthSaga()]);
}
