import {takeLatest, put, call} from 'redux-saga/effects';
import {StoreConstants} from '../../constants/appConst';
import {IActionType} from '../../types/constantFilesTypes';
import {userLogin} from '../../utils/apis';
import {onLoginEnd, onLoginFailed, onLoginSuccess} from '../reducers/authSlice';

function* loginUser(action: IActionType) {
  try {
    const {data} = yield call(userLogin, action.payload);
    yield put(onLoginSuccess(data));
  } catch (e) {
    yield put(onLoginFailed(e));
  } finally {
    yield put(onLoginEnd());
  }
}

export default function* authSaga() {
  yield takeLatest(`${StoreConstants.AUTH_STORE}/onLoginStart`, loginUser);
}
