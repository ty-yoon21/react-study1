# 7. ReduxSaga

참고용 velog  
https://velog.io/@ty-yun21/react9  
참고용 github  
https://github.com/ty-yoon21/react-study1    
commit message : 2023/02/08 redux, redux-saga 

## 목표
1. redux-saga

### 정리
1. redux-saga
1.1 redux-saga  
https://react.vlpt.us/redux-middleware/10-redux-saga.html  
```
redux-thunk의 경우엔 함수를 디스패치 할 수 있게 해주는 미들웨어였지요?  
redux-saga의 경우엔, 액션을 모니터링하고 있다가, 
특정 액션이 발생하면 이에 따라 특정 작업을 하는 방식으로 사용합니다.  
여기서 특정 작업이란, 특장 자바스크립트를 실행하는 것 일수도 있고,  
다른 액션을 디스패치 하는 것 일수도 있고, 현재 상태를 불러오는 것 일수도 있습니다.  
  
redux-saga는 redux-thunk로 못하는 다양한 작업들을 처리 할 수 있습니다. 예를 들자면..  
  
비동기 작업을 할 때 기존 요청을 취소 처리 할 수 있습니다  
특정 액션이 발생했을 때 이에 따라 다른 액션이 디스패치되게끔 하거나, 자바스크립트 코드를 실행 할 수 있습니다.  
웹소켓을 사용하는 경우 Channel 이라는 기능을 사용하여 더욱 효율적으로 코드를 관리 할 수 있습니다 (참고)  
API 요청이 실패했을 때 재요청하는 작업을 할 수 있습니다.  
이 외에도 다양한 까다로운 비동기 작업들을 redux-saga를 사용하여 처리 할 수 있답니다.

redux-saga는 다양한 상황에 쓸 수 있는 만큼, 제공되는 기능도 많고, 사용방법도 진입장벽이 꽤나 큽니다. 
자바스크립트 초심자라면 생소할만한 Generator 문법을 사용하는데요, 
이 문법을 이해하지 못하면 redux-saga를 배우는 것이 매우 어려우니, 
이 문법부터 작동방식을 이해해보도록 하겠습니다.
```


1.2 Generator Function & Action Mornitoring  
: redux-saga 에서는 제너레이터 함수를 "saga" 라고 부릅니다.  
```javascript
/**
 * Get List, save, import, send
 */
 export function* getTsysMenusList() {
    yield takeEvery(TSYS_MENU_GET_LIST, getMenusListFromServer);
}

/**
 * Get & Send Menus List From Server
 */
function* getMenusListFromServer() {
    try {
        const response = yield call (getMenusListRequest);
        if(response.data.statusCode ===0) yield put(getTsysMenusListSuccess(response)); // put은 특정 액션을 디스패치 해줍니다.
    } catch (error) {
        message.error('SERVER ERROR') 
    }
}
```
: redux-saga에서는 이러한 원리로 액션을 모니터링하고, 특정 액션이 발생했을때 우리가 원하는 자바스크립트 코드를 실행시켜준답니다.  

1.3 Summary
```
1) store 생성 (reducer create 및 saga apply) 및 App.js에 <Provider>로 적용
2) 메뉴 화면에서 dispatch로 Action 요청
3) Action 실행함수 발동 (./actions/***Actions.js)
4) reducer로 가기전에 saga에서 중간 처리
: 보통 RootSaga --> 해당 제너레이터 함수 (사가) --> 여기서 자바스크립트 함수 사용 (보통 API Call) --> Success시 Success 관련 Action 발생  
--> Reducer에서 호출 메뉴에 새로운 상태 반환 (데이터 반환)  
```


2. 오류
store/index.js에서 아래 내용 추가시  오류 발생  
```javascript
import sagaMonitor from '@redux-saga/simple-saga-monitor';
const sagaMiddleware = createSagaMiddleware( {sagaMonitor});
```
오류 내용  
```
BREAKING CHANGE: webpack < 5 used to include polyfills for node.js core modules by default.
This is no longer the case. Verify if you need this module and configure a polyfill for it.

If you want to include a polyfill, you need to:
	- add a fallback 'resolve.fallback: { "util": require.resolve("util/") }'
	- install 'util'
```
해결책  
https://mr-son.tistory.com/153 를 보고 참고하려 했으나  
결국 해결책은 npm install utill 이였음.  


3. 세팅  
3.1 App.js  
```javascript
import { Provider } from 'react-redux';
import RootSaga from './sagas';
import { configureStore } from './store';

const store = configureStore(window.__INITIAL_STATE__);   //Create Store
store.runSaga(RootSaga);                                  //Run Root Saga, // 주의: 스토어 생성이 된 다음에 위 코드를 실행해야합니다.

const MainApp = () => (
  <Provider store={store}>
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <Router>
        <Routes>
          <Route path="/" element={<App/>} />
          <Route path="app/*" element={<App/>} />
        </Routes>
      </Router>
    </MuiPickersUtilsProvider>
  </Provider>
);
```


3.2 store/index.js  
```javascript
/**
 * Redux Store
 */

import { legacy_createStore as createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware, { END } from 'redux-saga';
import sagaMonitor from '@redux-saga/simple-saga-monitor';
import reducers from '../reducers';
import RootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware( {sagaMonitor});        //Create Saga Middleware 


export function configureStore(initialState) {

    const store = createStore(
        reducers,
        //initialState,
        compose(applyMiddleware(sagaMiddleware))
    );

    store.runSaga = sagaMiddleware.run;
    store.close = () => store.dispatch(END);

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers/index', () => {
            const nextRootReducer = require('../reducers/index');
            store.replaceReducer(nextRootReducer);
        })
    }


    return store;
}
```


1.3 화면에서부터 타고 올라고보자  
1.3.1 routes/system/MenuPage/index.js

```javascript
import { useSelector, useDispatch } from 'react-redux';

import {
    getTsysMenuList,
 } from '../../../actions';

dispatch(getTsysMenuList({}));
```

1.3.2 [M-1] action/types.js  
: Action Type을 정의한다  
```javascript
// TSYS_MENU
export const TSYS_MENU_ON_GET_LIST = 'TSYS_MENU_ON_GET_LIST';
export const TSYS_MENU_ON_GET_LIST_SUCCESS = 'TSYS_MENU_ON_GET_LIST_SUCCESS'; 
export const TSYS_MENU_ON_GET_LIST_FAILURE = 'TSYS_MENU_ON_GET_LIST_FAILURE';
```

1.3.3 [M-2] action/***Actions.js  
: Action 파일을 추가한다
```javascript
/**
 * Todo App Actions
 */
import {
TSYS_MENU_ON_GET_LIST,    
TSYS_MENU_ON_GET_LIST_SUCCESS,
TSYS_MENU_ON_GET_LIST_FAILURE,
} from './types';

export const getTsysMenusList = () => ({
    type: TSYS_MENU_GET_LIST
});

export const getTsysMenusListSuccess = (response) => ({
    type: TSYS_MENU_GET_LIST_SUCCESS,
    payload: response.data
});

export const getTsysMenusListFailure = (error) => ({
    type: TSYS_MENU_GET_LIST_FAILURE,
    payload: error
});

```

1.3.3 [M-3] action/index.js  
: Action 파일 export를 추가한다
```javascript
/**
 * Redux Actions
 */

//system
export * from './TsysMenuActions';
```

1.3.4 [M-4] reducers/***Reducers.js
: Reducer 파일을 추가한다 
```javascript
import { toast, ToastContainer } from 'react-toastify';
// toast 알람
// https://defineall.tistory.com/1021

// action types
import {
    TSYS_MENU_ON_GET_LIST,
    TSYS_MENU_ON_GET_LIST_SUCCESS,
    TSYS_MENU_ON_GET_LIST_FAILURE,
} from '../actions/types';

const INIT_STATE = {
    loading: false,
    statusCode: 0,
    errormsg: "",
    grid: {
        data: [],
        newRowAtTop: false,
        instance: null,
    },
    items: [],
    menuList: [],
};

const TsysMenuReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case TSYS_MENU_ON_GET_LIST: { return { ...state, loading: true, menuList: []};}
        case TSYS_MENU_ON_GET_LIST_SUCCESS: { return { ...state, loading: false, grid: {data: action.payload.body}};}
        case TSYS_MENU_ON_GET_LIST_FAILURE: { return { ...state, loading: false};}
        default: return {...state};
    }
}

export default TsysMenuReducer;
```


1.3.2 [M-5] reducers/index.js  
: Reducer import / export 추가한다. 
```javascript
/**
 * App Reducers
 */
import { combineReducers } from 'redux';

// System
import tsysMenuReducer from './TsysMenuReducer';

const reducers = combineReducers({
    tsysMenuReducer: tsysMenuReducer,
});

export default reducers;
```

1.3.3 [M-6] sagas/***Sagas.js  
: Saga 파일을 추가한다 
```javascript
/**
 * Todo Sagas
 */

import {all, call, fork, put, takeEvery, throttle} from 'redux-saga/effects';

//api
import api from '../api';

import {
    TSYS_MENU_ON_GET_LIST,
    TSYS_MENU_GET_LIST,
} from '../actions/types';

import {
    getTsysMenusListSuccess,
    getTsysMenusListFailure,
    getTsysMenuListSuccess,
    getTsysMenuListFailure,
} from '../actions';

import {message} from 'antd';

/**
 * Get List, save, import, send
 */
 export function* getTsysMenusList() {
    yield takeEvery(TSYS_MENU_GET_LIST, getMenuListFromServer);
}
export function* getTsysMenuList() {
    yield takeEvery(TSYS_MENU_ON_GET_LIST, getListFromServer);
}


/**
 * Get Todos From Server
 */
function* getMenusListFromServer() {
    try {
        const response = yield call (getMenusListRequest);
        if(response.data.statusCode ===0) yield put(getTsysMenusListSuccess(response));
    } catch (error) {
        message.error('SERVER ERROR') 
    }
}

const getMenusListRequest = async (request) => {

    await api({
        method: 'post',
        url: '/api/sys/menu/getSystemMenuList',
        data: JSON.stringify(request.payload),
        // headers: {Authorization: `Bearer ${localStorage.getItem('id_token')}`, 'Content-Type': 'application/json'},
    }).then((response) => {
        return response;
    }).catch((error) => {
        return error;
    });
};

/**
 * Get & Send Menu List From Server
 */
 function* getListFromServer(action) {
    try {
        const response = yield call(getListRequest, action);
        yield put(getTsysMenuListSuccess(response));
    }catch(error) {
        yield put(getTsysMenuListFailure(error));
    }
}

const getListRequest = async (request) =>
    await api( {
        method: 'post',
        url: '/api/sys/menu/list',
        data: JSON.stringify(request.payload),
        //headers: {Authorization: `Bearer ${localStorage.getItem('id_token')}` 'Content-Type': 'application/json'},
    }).then((response) => {
        return response;
    }).catch((error) => {
        return error;
    });

/**
 * Root Saga
 */

export default function* rootSaga() {
    yield all( [
        fork(getTsysMenuList),
    ])
}
```

1.3.3 [M-7] sagas/index.js  
: Saga import / export 추가한다.
```javascript
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
```



### Reference
1. 벨로퍼트 리액트
https://react.vlpt.us/
https://react.vlpt.us/redux-middleware/10-redux-saga.html