/**
 * Root Sagas
 */

import {all} from 'redux-saga/effects';

//system
import tsysMenuSagas from './TsysMenuSaga';
//import tsysAuthSagas from './TsysAuthSaga';

//Auth
import tAuthSagas from './TAuthSagas';

export default function* rootSaga(getState) {
    yield all(
        [
            tsysMenuSagas(),
            tAuthSagas(),
        ]
    );
}