# REACT

참고용 velog  
https://velog.io/@ty-yun21  
참고용 github  
https://github.com/ty-yoon21/react-study1  


## 디렉토리구조
1. 초기 세팅 및 라우터, 메인화면은 [S-*] 참고
2. 메뉴추가 및 redux관련 내용은 [M-*] 참고
3. 디렉토리 순서는 알파벳 순서가 아닌 작업 및 보기 편한 순서대로함

```
react-study
├─ package-lock.json
├─ package.json                 [S-1] ### npm 설치 라이브러리 목록 ###
├─ .babelrc                     [S-2] ### babel 설정 ###
├─ webpack.config.js            [S-3] ### webpack 설정 ###
├─ index.html                   [S-4] ### main template (Entry 0)###
├─ public
│  ├─ index.html                ### webpack에서 template: './index.html' 설정해서 해당 파일은 참고하지 않는다 ###
├─ src
│  ├─ index.js                  [S-5] ### Entry 1 ### (webpack에서 설정함 -> entry: "./src/index.js")
│  ├─ index.css
│  ├─ App.js                    [S-6, M-0] ### Entry 2 ### (index.js에서 render 함)
                                1) Router 설정
                                2) Redux-Saga store 설정 (해당 설정은 [S-*]가 모두 끝나고 할 것을 권함)
│  ├─ App.css
│  ├─ App.test.js
│  ├─ container                 [S-7] ### Entry 3 ### (src/App.js에서 라우팅)
│  │  ├─ App.js                 1) 컴포넌트들을 조합해서 메인 레이아웃 페이지 (LETF, TOP, BODY 구성)
│  ├─ components
│  │  ├─ CustomHooks
│  │  ├─ MainTitle
│  │  ├─ molecules
│  │  │  ├─ Header              ### main header ###
│  │  │  ├─ LeftMenu            ### Main LeftMenu ###
│  │  │  └─ PcLeftMenu          ### Main LeftMenu ###
│  │  └─ toolbar
│  │     ├─ GridButtonBar.js    ### Wijmo Grid Button Bar ###
│  │     └─ SearchForm.js       ### 화면 공통 검색 Bar ###
│  ├─ routes                    
│  │  └─ system                 [S-8-1] 업무단위폴더 생성
│  │     ├─ MenuPage            [S-9] 업무화면 Page 폴더 생성
│  │     ├─ UserPage            
│  │     ├─ index.js            [S-10] sub Routing
│  │  └─ menuA                 
│  │     ├─ menuA1            
│  │     ├─ menuA2
│  │     ├─ index.js            
│  ├─ services
│  │  └─ _routerService.js      [S-8-2] 하위 라우터 폴더가 추가된 경우 (대메뉴) 폴더 라우팅 경로를 추가해준다
│  └─ utils
│     ├─ RouteService.js
│     ├─ loadable.js
│     └─ tree.js
│  ├─ store                     [M-0] Redus Saga의 Store, Middleware Create 작업
│  ├─ actions
│  │  ├─ type.js                [M-1] Action Type을 정의한다
│  │  ├─ ***Actions.js          [M-2] Action 파일을 추가한다
│  │  ├─ index.js               [M-3] Action 파일 export를 추가한다
│  ├─ api
│  ├─ common
│  ├─ constants
│  ├─ reportWebVitals.js
│  ├─ reducers                  
│  │  ├─ *Reducer.js            [M-4] Reducer 파일을 추가한다 
│  │  ├─ index.js               [M-5] Reducer import / export 추가한다.
│  ├─ sagas
│  │  ├─ *Saga.js               [M-6] Saga 파일을 추가한다 
│  │  ├─ index.js               [M-7] Saga import / export 추가한다.
│  ├─ setupTests.js
├─ README.md
```