# UI & React Router

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
```
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
```
    <Router>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="app/*" element={<RouteService />} />
      </Routes>
    </Router>
```

2.3 ./utils/RouteService
_routerService에 대메뉴 mapdmf 해둠
```
import routerService from '../services/_routerService';
                <Routes>
                    {routerService && routerService.map((route, key) => 
                        <Route key={key} path="sys/*" element={<route.element />} />
                    )}
                </Routes>
```

2.4 ./routes/system

```
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
```
import Styled from './Styled';
```

### Reference
1. package.json 관련 설명