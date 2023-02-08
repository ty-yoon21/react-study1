# 10. Midterm Arrangement (중간정리))

참고용 velog
https://velog.io/@ty-yun21/react10
참고용 github
https://github.com/ty-yoon21/react-study1  
commit message : 10. Mitrem Arrangement

## 목표
1. Styled Compnents



### 정리
1. Styled Compnents (CSS in JS)  
: https://www.daleseo.com/react-styled-components/  
1.1 ThemeProvider  
: https://wonit.tistory.com/366
```javascript
import { ThemeProvider } from 'styled-components';
return (
    <ThemeProvider theme={theme}>
        <div></div>
        <div></div>
    </ThemeProvider>
)
```

2. propTypes  
: https://velog.io/@eunjin/React-PropTypes-%EC%93%B0%EB%8A%94-%EC%9D%B4%EC%9C%A0-%EB%B0%A9%EB%B2%95  
```javascript
PcLeftMenu.propTypes = {
    isActive: PropTypes.bool,
    layout: PropTypes.string,
    color: PropTypes.string,
    sidebarBackgrounds: PropTypes.string,
}
```

3. Suspense, LazyComponent
: https://www.daleseo.com/react-suspense/
: https://velog.io/@code-bebop/dynamic-import%EC%99%80-React.lazy  




### Reference
