# Getting Started with Create React App

참고용 velog
https://velog.io/@ty-yun21/react1
참고용 github
https://github.com/ty-yoon21/react-study1

commit message : 
## 목표
1. cra를 통해 react app 생성
2. package.json을 통해 의존 라이브러리 설정
3. webpack, babel을 이용해 개발환경 설정

## 사용법
1. make directory
2. git clone https://github.com/ty-yoon21/react-study1.git
3. open with vscode
4. `npm install`
5. `npm start`  
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Settings
### 정리
1. npx create-react-app 을 통해서 프로젝트 생성
: 현재 react 18로 pjt가 생성되기 때문에 나는 17로 변경함
2. npm, yarn 사용법에 대해 알아두자
3. package.json 에 대해 알아두자 
4. webpack, babel을 이용해서 dev환경 실행  
webpack (webpack.config.js), babel (babelrc) 사용하는 이유와 사용법에 대해 알아두자  


### Reference
1. package.json 관련 설명   
https://velog.io/@couchcoding/React-2-%EC%84%A4%EC%B9%98%ED%95%98%EA%B8%B0-package.json  

2. package-lock.json  
https://hyunjun19.github.io/2018/03/23/package-lock-why-need/  
: 의존성 트리에 대한 정보를 가지고 있으며 해당 파일이 작성도니 시점의 의존성 트리가 다시 생성될 수 있도록 보장  
: npm create-react-app 을 통해 생성한 파일들과 지금의 것을 비교해보면 좋다  

3. create-react-app 18 —> 17  
나의 경우 material-ui등 react 18에서 사용하지 못하는 lib를 사용하였기 때문에 17로 version 변경함  
https://trend21c.tistory.com/2250  
1) package.json --> React, react-dom 17.0.0 으로 변경 이후  
`npm i`
2) src/App.js 파일 변경
```
import ReactDOM from 'react-dom/client';
-->
import ReactDOM from 'react-dom';
```

4. npm devDependencies  
package.json에 devDependencies 항목에 lib 추가하기 위해서는 아래 명령어 필요
```bash
$ npm install <package-name> --save-dev
```

5. yarn 설치  
나 같은 경우 yarn add하는 경우 package.json에 추가가 되지 않아서 npm install 을 통해서 lib 추가 하였음...
```bash
$ Npm install -g yarn
$ Yarn install
$ Yarn build
```

6. react + webpack + babel로 개발 환경 구축하기 (javascript)  
https://velog.io/@jinsunee/2.-react-webpack-babel%EB%A1%9C-%EA%B0%9C%EB%B0%9C-%ED%99%98%EA%B2%BD-%EA%B5%AC%EC%B6%95%ED%95%98%EA%B8%B0  
webpack.config.js 설정 하는 방법 알아야 함  
webpack과 babel을 왜 쓰는지 알아야 함  
https://velog.io/@yon3115/%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%ED%95%84%EC%88%98-Webpack%EC%9D%B4%EB%9E%80