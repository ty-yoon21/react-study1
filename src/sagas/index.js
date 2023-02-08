/**
 * Root Sagas
 */

import {all} from 'redux-saga/effects';

//system
import tsysMenuSagas from './TsysMenuSaga';
//import tsysAuthSagas from './TsysAuthSaga';

export default function* rootSaga(getState) {
    yield all(
        [
            tsysMenuSagas(),
        ]
    );
}