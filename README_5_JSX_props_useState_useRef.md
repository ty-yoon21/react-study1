# 5. JSX, props, useState, useRef, 배열 렌더링

참고용 velog
https://velog.io/@ty-yun21/react5
참고용 github
https://github.com/ty-yoon21/react-study1  
commit message : 

## 목표
1. JSX
2. props 
3. useState
4. useRef
5. 배열 렌더링
6. useRef 심화

### 정리
1. JSX
: HTML 문법 같이 생겼지만 실제로는 JS  
: Babel을 통해서 자바스크립트 문법을 확장해줌 (ES6 --> ES5)  
: 꼭 태그는 닫혀 있어야 함
: 두개이상의 태그는 <div></div> 또는 fragment <></>로 닫혀 있어야함  
fragment는 브라우저상 별도의 엘리먼트로 나타나지 않음  
: JSX안에 JS값 사용하려면 {}로 감싸서 보여줘야 함
: style 적용하려면 background-color 같은 애들을 backgroundColor와 같이 camelCase로 네이밍  
: CSS class 를 설정하려면 className= 으로 설정해줘야함 (Ex. <div className="main_contents">)  


2. props를 통해 컴포넌트에 값 전달
```javascript
return (
    <Hello name='react' />
);

const Hello = (props) => {
    return <div>안녕하세요 {props.name}</div>
}
```
2.2 여러개의 props  
2.3 defaultProps로 기본값 설정
```javascript
Hello.defaultProps = {
    name: 'noname'
}
```
2.4 props.children  
: 컴포넌트 태그 사이에 넣은 값 조회시 props.children 사용
(Ex. wrapper아래에 컴포넌트 넣을 시 그냥은 안보인 Wrapper의 div 사이에 {children} 넣어줘야 함)  




3. useState를 통해 컴포넌트에서 바뀌는 값 관리
3.1 동적인 값 넣기  
```javascript
const [number, setNumber] = useState(0);
```
3.2 input 상태관리  
```javascript
const [text, setText] = useState('');

const onChange = (e) => {
    setText(e.target.value);
};
// e : 이벤트 객체
// e.target : 이벤트가 발생한 DOM을 가르킴 (여기서는 input DOM)
// DOM 의 value : e.target.value
```
3.2 여러개 input 관리
```javascript
const [inputs, setInputs] = useState( {
    name: '',
    nickname: ''
} );

const {name, nickname} = inputs; // 비구조화 할당을 통해 값 추출
const onChange = (e) => {
    const { value, name } = e.target;   //우선 e.target에서 name과 value를 추출
    setInputs({
        ...inputs, //기존의 input 객체를 복사한 뒤 (스프레드 문법)
        [name] : value //name키를 가진 값을 value로 설정
    });
};

```


4. useRef로 특정 DOM 선택하기
: 이럴 때 리액트에서는 ref 라는 것을 사용함
: ref를 사용하기 위해서는 useRef 라는 Hook 함수를 사용...
```javascript
const nameInput = useRef();

const {name, nickname} = inuts;

const onReset = () = {
    setInputs({
        name: '',
        nickname: ''
    });
    nameInput.current.focus();
};

return (
    <div>
        <input
            name="name"
            placeholder="이름"
            ref={nameIput}
        />
    </div>
)
```


5. 배열 렌더링
```javascript
const users = [
    {
        id: 1,
        username: 'velopert1'
    },
    {
        id: 2,
        username: 'velopert2'
    }
];
return (
    <div>
        {users.map(user => (
            <User user={user} key={user.id} />
        ))}
    </div>
)
// 동적인 배열을 렌더릴 할때 자바스크립트 배열의 내장함수 map()을 사용
// users을 값들을 user객체로 받아와서 객체 수 만큼 뿌려줌 (내 생각) 객체의 정확한 의미는?
// 배열을 렌더릴할 때는 key라는 props를 설정해야 함... (key는 각 원소들이 가지고 있는 고유값...)

```


6. useRef 심화 (컴포넌트 안의 변수 만들기)
: useRef를 통해 DOM을 선택하는 용도 외에도 컴포넌트 안에서 조회 및 수정할 수 있는 변수 관리 가능  
--> setTimeout, setInterval을 통해 만들어진 id  
--> 외부 라이브러리를 사용하여 생성된 인스턴스
--> scroll위치  

```javascript
const users = [
    {
        id: 1,
        username: 'velopert1'
    },
    {
        id: 2,
        username: 'velopert2'
    }
];
const nextId = useRef(3);
const onCrate = () = {
    nextId.current += 1;
}

return (
    <div>
        {users.map(user => (
            <User user={user} key={user.id} />
        ))}
    </div>
)
```

### Reference
1. 벨로퍼트 리액트
https://react.vlpt.us/