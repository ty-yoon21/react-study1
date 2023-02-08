# 3. useState, local Storage, useEffect

참고용 velog
https://velog.io/@ty-yun21/react3
참고용 github
https://github.com/ty-yoon21/react-study1  
commit message : 2. UI & Router *

## 목표
1. useState 활용                                           
2. local Storage
3.  useEffect를 사용하여 마운트/언마운트/업데이트시 할 작업 설정하기



### 정리
1. useState 활용
컴포넌트에서 보여줘야 하는 내용이 사용자 인터랙션에 따라 바뀌어야 할 때 어떻게 구현할 수 있는지  
컴포넌트에서 동적인 값을 상태(state)라고 부릅니다. 리액트에 useState 라는 함수가 있는데요, 이것을 사용하면 컴포넌트에서 상태를 관리 할 수 있습니다.  

1.1 ./container/App.js

```javascript
    const [ isActive, setActive] = useState(false);

    const onClickMenu = () => {
        setActive(!isActive);
    }
```


2. local Storage
https://www.daleseo.com/js-web-storage/  
2.1 웹 스토리지
로컬 스토리지 vs. 세션 스토리지  
웹 스토리지(web storage)에는 로컬 스토리지(localStorage)와 세션 스토리지(sessionStorage)가 있습니다. 이 두 개의 매커니즘의 차이점은 데이터가 어떤 범위 내에서 얼마나 오래 보존되느냐에 있습니다. 세션 스토리지는 웹페이지의 세션이 끝날 때 저장된 데이터가 지워지는 반면에, 로컬 스토리지는 웹페이지의 세션이 끝나더라도 데이터가 지워지지 않습니다.

다시 말해, 브라우저에서 같은 웹사이트를 여러 탭이나 창에 띄우면, 여러 개의 세션 스토리지에 데이터가 서로 격리되어 저장되며, 각 탭이나 창이 닫힐 때 저장해 둔 데이터도 함께 소멸합니다. 반면에, 로컬 스토리지의 경우 여러 탭이나 창 간에 데이터가 서로 공유되며 탭이나 창을 닫아도 데이터는 브라우저에 그대로 남아 있습니다.


2.1 App.js  
```javascript
    const [stateConfig, setStateConfig] = useState(
        JSON.parse(window.localStorage.getItem('portal-config')) === null
        ? defaultConfig
        : JSON.parse(window.localStorage.getItem('portal-config'))
    );

window.localStorage.setItem('portal-config', JSON.stringify(stateConfig));


```



3.  useEffect를 사용하여 마운트/언마운트/업데이트시 할 작업 설정하기
https://react.vlpt.us/basic/16-useEffect.html  


### Reference
1. https://react.vlpt.us/basic/07-useState.html  
