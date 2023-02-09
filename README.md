# REACT

velog for reference  
https://velog.io/@ty-yun21  
github for reference  
https://github.com/ty-yoon21/react-study1  


## How to use
0. Download VSCode  
https://code.visualstudio.com/download  
1. make directory (terminal or powershell)  
(ex. mkdir project_react_portal_20230209)  
2. git clone https://github.com/ty-yoon21/react-study1.git   
: Skip if you want to start with nothing   
(Instead, Create React App via `$npx create-react-app react-portal` after npm installation.)  
3. open with vscode
4. npm  
4.1 Installation  
4.1.1 mac  
brew install node  
4.1.2 Windows (LTS, msi)  
https://nodejs.org/en/download/  
** If you use vscode's terminal restart vscode  
4.2 `npm install --force`  
--> (npm install --> Error occur (react v18 <-> material-ui))  
4.3. `npm start`  
Runs the app in the development mode.\  
```
npm install @material-ui/core --force
npm install @material-ui/icons --force
```
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.  

## Directory
1. Refer to [S-*] for initial setting, router, and main screen
(Start from nothing...)   
: When creating a react App through npx create-react-app, set in the order of [S-*]  
2. Refer to [M-*] for menu addition and redux related information
: When adding a menu after git clone, refer to [M-*]
3. Directory order should be in non-alphabetical order for ease of operation and viewing.

```
react-study
├─ package-lock.json
├─ package.json                 [S-1] ### list of npm installed libraries ###
├─ .babelrc                     [S-2] ### babel settings ###
├─ webpack.config.js            [S-3] ### webpack settins ###
├─ index.html                   [S-4] ### Entry 0 (main template) ###
├─ public
│  ├─ index.html                ### Set template: './index.html' in webpack so this file (public/index.html) is not referenced ###
├─ src
│  ├─ index.js                  [S-5] ### Entry 1 ### (set by webpack -> entry: "./src/index.js")
│  ├─ index.css
│  ├─ App.js                    [S-6, M-0] ### Entry 2 ### (render in index.js)
                                1) Router Settings
                                2) Redux-Saga store Settings (It is recommended to do the setting after all [S-*])
│  ├─ App.css
│  ├─ App.test.js
│  ├─ container                 [S-7] ### Entry 3 ### (Routing in src/App.js)
│  │  ├─ App.js                 1) Main layout page by combining components (LETF, TOP, BODY composition)
│  ├─ components
│  │  ├─ CustomHooks
│  │  ├─ MainTitle
│  │  ├─ molecules
│  │  │  ├─ Header              ### main header ###
│  │  │  ├─ LeftMenu            ### Main LeftMenu ###
│  │  │  └─ PcLeftMenu          ### Main LeftMenu ###
│  │  └─ toolbar
│  │     ├─ GridButtonBar.js    ### Wijmo Grid Button Bar ###
│  │     └─ SearchForm.js       ### Screen Common Search Bar ###
│  ├─ routes                    
│  │  └─ system                 [S-8-1] Create business unit folder
│  │     ├─ MenuPage            [S-9] Business screen Page folder creation
│  │     ├─ UserPage            
│  │     ├─ index.js            [S-10] sub Routing
│  │  └─ menuA                 
│  │     ├─ menuA1            
│  │     ├─ menuA2
│  │     ├─ index.js            
│  ├─ services
│  │  └─ _routerService.js      [S-8-2] If a sub-router folder is added (main menu), add a folder routing path
│  └─ utils
│     ├─ RouteService.js
│     ├─ loadable.js
│     └─ tree.js
│  ├─ store                     [M-0] Working with Redux Saga's Store, Middleware Create
│  ├─ actions
│  │  ├─ type.js                [M-1] Define Action Type
│  │  ├─ ***Actions.js          [M-2] Add action file
│  │  ├─ index.js               [M-3] Add action file export
│  ├─ api
│  ├─ common
│  ├─ constants
│  ├─ reportWebVitals.js
│  ├─ reducers                  
│  │  ├─ *Reducer.js            [M-4] Add reducer file
│  │  ├─ index.js               [M-5] Add Reducer import / export.
│  ├─ sagas
│  │  ├─ *Saga.js               [M-6] Add Saga file
│  │  ├─ index.js               [M-7] Add Saga import / export
│  ├─ setupTests.js
├─ README.md
```

## Summary
### 1. Router

1) App.js (### Entry1 ###)  
: Set Router (BrowseRouter), Routes, and Route here   
: the top of the router  

2) container/App.js (### Entry2 ###)  
: Substantial main page (composed of header, menuleft, main)  
: There is also a router here, and components are placed so that they appear on the main menu here when the menu is clicked.  
```javascript
import RouteService from "../utils/RouteService";  
<div>
    <Routes>
        <Route path="app2/*" element={<RouteService/>} />
    </Routes>
</div>
```

3) ./utils/RouteService.js  
: Since it was distributed in list format using the .map function, a key must be entered.  
```javascript
    return (
            <div>
                <Routes>
                    {routerService && routerService.map((route, key) => (
                        
                        <Route key={key} path="sys/*" element={<route.element />} />

                    ))}
                </Routes>
            </div>
    );
```

4) ./routes/system/index.js  
: Last final route (to go to the submenu of the system main menu...)  
```javascript
    return (
        <div className='content-wrapper'>
            <Routes>
                <Route path="menu" element={<MenuPage />} exact />
            </Routes>
        </div>
    );
```

### 2. Redux-Saga
1) Create store (reducer create and saga apply) and apply as <Provider> to App.js  
2) Action request by dispatch on the menu screen  
3) Activate the action execution function (./actions/***Actions.js)  
4) Intermediate processing in saga before going to reducer  
: Normal RootSaga --> Corresponding generator function (Saga)  
--> Use a JavaScript function here (usually an API call)  
--> In case of success, action related to success occurs  
--> Return new status from Reducer to call menu (return data)  
