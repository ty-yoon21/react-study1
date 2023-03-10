# UI & React Router & Suspense

참고용 velog
https://velog.io/@ty-yun21/react2
참고용 github
https://github.com/ty-yoon21/react-study1  
commit message : 2. UI & Router *

## 목표
1. material-ui 라이브러리 적용
2. react router 사용
3. styled-components
https://styled-components.com/

### 정리
1. material-ui : src/App.js 참고
https://material-ui-pickers.dev/getting-started/installation  

2. react router : src/App.js  
react-router-dom v5 v6 차이점 알아두기  
https://blog.woolta.com/categories/1/posts/211  
https://sennieworld.tistory.com/30  
(Ex. switch --> routes, component --> element, withRouter 사라짐, match.url 못씀)  

2.1 components/molecules/LeftMenu/MenuItems
```javascript
    const setSelectedMenuItem = (e) => {   
        if(!e.item.props.path.includes('http')){            
            navigate(e.item.props.path);
        }else{
            window.open(e.item.props.path, '_blank', 'noopener,noreferrer');
        }
    }
```

2.2 src/App.js  
각 메뉴의 접근은 app/*/* (ex. app/sys/menu) 식으로 함
```javascript
    <Router>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="app/*" element={<RouteService />} />
      </Routes>
    </Router>
```

2.3 ./utils/RouteService
_routerService에 대메뉴 mapdmf 해둠
```javascript
import routerService from '../services/_routerService';
                <Routes>
                    {routerService && routerService.map((route, key) => 
                        <Route key={key} path="sys/*" element={<route.element />} />
                    )}
                </Routes>
```

2.4 ./routes/system

```javascript
import loadable from '../../utils/loadable';

const MenuPage = loadable(() => import('./MenuPage'));
const Pages = ({match}) => {    
    return (
        <div className='content-wrapper'>
            <Routes>                
                <Route path="menu" element={<MenuPage />} exact />
            </Routes>
        </div>
    );
};
```

3. styled-components
index.js와 동일경로에 Styeld.js 생성 후 import 함
```javascript
import Styled from './Styled';
```


4. <Suspense>
https://www.daleseo.com/react-suspense/  
src/utils/lodable.js 
```javascript
import React, {lazy, Suspense} from 'react';

const loadable = (importFunc, {fallback = null} = {fallback: null}) => {
    const LazyComponent = lazy(importFunc);

    return props => (
        <Suspense fallback={fallback}>
            <LazyComponent {...props} />
        </Suspense>
    );
};

export default loadable;
```

실제 쓰임 (./routes/system/index.js)
```javascript
const MenuPage = loadable(() => import('./MenuPage'));
```

### Reference
1. package.json 관련 설명