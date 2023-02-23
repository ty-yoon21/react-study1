# 7. Redux

참고용 velog
https://velog.io/@ty-yun21/react7
참고용 github
https://github.com/ty-yoon21/react-study1  
commit message : 

## 목표
1. Redux

### 정리
1. Redux
1.1 미들웨어  
: 리덕스로 상태 관리시 우리가 useReducer를 사용할 때 접했던 개념인 리듀서 함수 사용...  
: 리덕스의 미들웨어를 사용하면 액션 객체가 리듀서에서 처리되기 전에 우리가 원하는 작업들 수행 가능  
--> 특정 조건에 따라 액션 무시 가능  
--> 액션을 콘솔에 출력하거나 서버로깅 가능  
--> 액션이 디스패치 됐을 때 이를 수정해서 리듀서에게 전달되도록 가능  
--> 특정 액션이 발생 시 이를 기반으로 다른 액션 발생  
--> 특정 액션 발생 시 특정 자바스크립트 함수 실행 가능  

1.2 유용한 함수  
connect : 리덕스의 상태 또는 액션 생성함수를 컴포넌트의 props로 받아올 수 있음  
useSelector, useDispatch, useStore 를 통해 손쉽게 상태조회나 액션 디스패치 가능  
connect함수와 useSelector함수에는 내부적으로 최적화가 잘 이루어져 있어 실제 상태가 바뀔떄만 컴포넌트가 리렌더링...

1.3 리덕스는 언제 사용?  
: 프로젝트의 규모가 클 때  
: 비동기작업을 자주 할 때  

2. Redux 키워드
: Action, Action Creator, Reducer, Store, Dispatch, Subscribe,  
2.1 Action  
: 상태에 어떤 변화가 필요할 때 액션 발생시
```
//액션 객체는 type 필드를 필수적으로 가지고 있어야하고 그 외의 값들은 개발자 마음대로 넣어줄 수 있습니다.

{
  type: "ADD_TODO",
  data: {
    id: 0,
    text: "리덕스 배우기"
  }
}
```

2.2 액션 생성함수 (Action Creator)  
```javascript
// 액션 생성함수는, 액션을 만드는 함수입니다. 단순히 파라미터를 받아와서 액션 객체 형태로 만들어주죠.

export function addTodo(data) {
  return {
    type: "ADD_TODO",
    data
  };
}

// 화살표 함수로도 만들 수 있습니다.
export const changeInput = text => ({ 
  type: "CHANGE_INPUT",
  text
});

2.3 Reducer
```javascript
// 리듀서는 변화를 일으키는 함수입니다. 리듀서는 두가지의 파라미터를 받아옵니다.
// 리듀서는, 현재의 상태와, 전달 받은 액션을 참고하여 새로운 상태를 만들어서 반환합니다. 이 리듀서는 useReducer 를 사용할때 작성하는 리듀서와 똑같은 형태를 가지고 있습니다.
// 만약 카운터를 위한 리듀서를 작성한다면 다음과 같이 작성할 수 있습니다.

const TsysMenuReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case TSYS_MENU_GET_LIST: { return { ...state, loading: true, menuList: []};}
        case TSYS_MENU_GET_LIST_SUCCESS: { return { ...state, loading: false, menuList: action.payload.body};}
        case TSYS_MENU_GET_LIST_FAILURE: { return { ...state, loading: false};}
        case TSYS_MENU_ON_GET_LIST: { return { ...state, loading: true, menuList: []};}
        case TSYS_MENU_ON_GET_LIST_SUCCESS: { return { ...state, loading: false, grid: {data: action.payload.body}};}
        case TSYS_MENU_ON_GET_LIST_FAILURE: { return { ...state, loading: false};}
        default: return {...state};
    }
}

// useReducer 에선 일반적으로 default: 부분에 throw new Error('Unhandled Action')과 같이 에러를 발생시키도록 처리하는게 일반적인 반면 
// 리덕스의 리듀서에서는 기존 state를 그대로 반환하도록 작성해야합니다.
// 리덕스를 사용 할 때에는 여러개의 리듀서를 만들고 이를 합쳐서 루트 리듀서 (Root Reducer)를 만들 수 있습니다. (루트 리듀서 안의 작은 리듀서들은 서브 리듀서라고 부릅니다.)
```

2.4 Store 
: 리덕스에서는 한 애플리케이션당 하나의 스토어를 만들게 됩니다. 스토어 안에는, 현재의 앱 상태와, 리듀서가 들어가있고, 추가적으로 몇가지 내장 함수들이 있습니다.  

2.5 dispatch  
: 디스패치는 스토어의 내장함수 중 하나입니다. 디스패치는 액션을 발생 시키는 것 이라고 이해하시면 됩니다.  
dispatch 라는 함수에는 액션을 파라미터로 전달합니다.. dispatch(action) 이런식으로 말이죠.  
그렇게 호출을 하면, 스토어는 리듀서 함수를 실행시켜서 해당 액션을 처리하는 로직이 있다면 액션을 참고하여 새로운 상태를 만들어줍니다.  
```javascript
import { useDispatch, useSelector } form 'react-redus';

  // useDispatch 는 리덕스 스토어의 dispatch 를 함수에서 사용 할 수 있게 해주는 Hook 입니다.
  const dispatch = useDispatch();
  // 각 액션들을 디스패치하는 함수들을 만드세요
  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = diff => dispatch(setDiff(diff));
```

2.6 subscribe  
: 구독 또한 스토어의 내장함수 중 하나입니다. subscribe 함수는, 함수 형태의 값을 파라미터로 받아옵니다.  
subscribe 함수에 특정 함수를 전달해주면, 액션이 디스패치 되었을 때 마다 전달해준 함수가 호출됩니다.  
리액트에서 리덕스를 사용하게 될 때 보통 이 함수를 직접 사용하는 일은 별로 없습니다.  
그 대신에 react-redux 라는 라이브러리에서 제공하는 connect 함수 또는 useSelector Hook 을 사용하여 리덕스 스토어의 상태에 구독합니다.  

2.7 useSelector
```javascript
  // useSelector는 리덕스 스토어의 상태를 조회하는 Hook입니다.
  // state의 값은 store.getState() 함수를 호출했을 때 나타나는 결과물과 동일합니다.
  const { number, diff } = useSelector(state => ({
    number: state.counter.number,
    diff: state.counter.diff
  }));
```


### Reference
1. 벨로퍼트 리액트
https://react.vlpt.us/