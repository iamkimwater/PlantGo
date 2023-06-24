import {all, fork, put, takeEvery} from 'redux-saga/effects';
import EncryptedStorage from 'react-native-encrypted-storage';
import Config from 'react-native-config';
import axios, {AxiosResponse} from 'axios';
import userSlice from '../reducers/user';
import {gateWayWrapper} from './common';

function* loginByFirebaseWatch() {
  yield takeEvery(
    userSlice.actions.loginByFirebase,
    gateWayWrapper(loginByFirebase),
  );
}

function* loginByFirebase(action: any) {
  const {idToken} = action.payload;
  const res: AxiosResponse<any, any> = yield axios.get(
    `${Config.API_URL}/users/login/firebase`,
    {
      withCredentials: true,
      headers: {
        authorization: `Bearer ${idToken}`,
      },
    },
  );
  const {user} = res.data;
  if (res.headers['set-cookie']) {
    const cookie = res.headers['set-cookie'][0];
    EncryptedStorage.setItem('cookie', cookie);
    axios.defaults.headers.Cookie = cookie;
    yield put({
      type: userSlice.actions.loginByFirebaseSuccess,
      payload: {user},
    });
  } else {
    console.log('not received cookie from server');
  }
  return res;
}

export default function* userSaga() {
  yield all([fork(loginByFirebaseWatch)]);
}
