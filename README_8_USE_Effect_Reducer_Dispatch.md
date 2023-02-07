# 7. useEffect, useReducer, useDispatch, useSelector, useMemo, useCallback 

참고용 velog
https://velog.io/@ty-yun21/react8
참고용 github
https://github.com/ty-yoon21/react-study1  
commit message : 

## 목표
1. useEffect
2. useReducer

### 정리
1. useEffect
1.1 개요  
: useEffect를 활용해서 마운트 (처음 나타났을 때), 언마운트, 업데이트 (특정 props가 바귈 때) 될 때  
특정 작업을 처리하는 방법  
```
useEffect( () => {
    console.log('컴포넌트가 화면에 나타남');
    return () => {
        console.log('컴포넌트가 화면에 사라짐');
    };
}, []);
```
: useEffect 사용 시 첫번째 파라미터에는 함수, 두번째 파라미터에는 의존값이 들어있는 배열 (deps)를 넣음  
deps를 비우면 컴포넌트가 처음 나타날 때만 useEffect에 등록한 함수 호출  
: 마운트시 주로 하는 작업들  
--> props로 받은 값 컴포넌트의 로컬 상태로 설정  
--> 외부 API요청 (REST API etc...)
--> 라이브러리 사용 (D3, Video.js etc..)  
--> setInterval을 통한 반복작업 또는 setTimeout을 통한 작업 예약  

1.2 deps에 특정 값 넣기  
: deps에 특정 값을 넣으면 컴포넌트 마운트, 지정한 값 바뀔 때, 언마운트, 값이 바뀌기 직전 호출  
```
useEffect( () => {
    console.log('user 값 설정됨');
    console.log(user);
    return () => {
        console.log('user 바뀌기 전...');
        console.log(user);
    };
}, [user]);
```
: deps를 생략하면 컴포넌트가 리렌더링 될 때마다 호출됨  



2. useReducer
: useState와 다르게 useReducer를 사용시  
컴포넌트의 상태 업데이트 로직을 컴포넌트에서 분리 가능  
상태 업데이트 로직을 컴포넌트 바깥에 작성 할 수도 있고, 다른 파일에 작성 후 불러와서 사용도 가능  
: reducer는 현재 상태와 액션 객체를 파라미터로 받아와서 새로운 상태를 반환해주는 함수
```
function reducer(state, action) {
    //새로운 상태를 만든튼 로직
    // const nextState = ...
    return nextState;
}
// 리듀서에서 반환하는 상태는 곧 컴포넌트가 지닐 새로운 상태
// action은 업데이트를 위한 정보를 가지고 있음... 
```

: useReducer의 사용법
```
    const [state, dispatch] = useReducer(reducer, initialState);
    // state : 우리가 앖으로 컴포넌트에서 사용할 수 있는 상태를 가르킴
    // dispatch : 액션을 발생시키는 함수
    // ex. dispatch ({ type: 'INVERMENT'})
    // useReducer 함수에 첫 번째 파라미터는 리듀서 함수, 두 번째는 초기상태    
```




### Reference
1. 벨로퍼트 리액트
https://react.vlpt.us/