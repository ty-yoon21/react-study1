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
: Action, Action Creator, Reducer, tore, Dispatch, Subscribe, 





### Reference
1. 벨로퍼트 리액트
https://react.vlpt.us/