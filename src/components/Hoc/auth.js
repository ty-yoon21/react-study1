//https://blog.logrocket.com/complete-guide-authentication-with-react-router-v6/

import React, {useEffect, useState} from "react";
import {Redirect} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {tAuthIsAuth} from "../../actions";
import { Navigate } from "react-router-dom";


const WithAuth = ({ children }) => {
     const authority = localStorage.getItem('authority');
     const dispatch = useDispatch();
     const {isAuth} = useSelector(reducer => reducer.tAuthReducer);
     console.log('##########@@@@@@@@@@@@@@@@@@@@ auth.js1 - isAuth : ', isAuth);
    useEffect(() => {
        dispatch(tAuthIsAuth({}));
    }, [dispatch]);

    useEffect(() => {
        if(isAuth === false) {
            console.log('##########@@@@@@@@@@@@@@@@@@@@ auth.js2 - isAuth : ', isAuth);
            window.localStorage.removeItem('authority');
        }
    }, [isAuth]);

    console.log('###################withAuth - authority : ', authority);
    console.log('###################withAuth - isAuth : ', isAuth);
    if (authority) {
      // user has authority
      return children;  
    }
    return <Navigate to="/login" />;
    
  };
// const withAuth = Component => ({...props}) => {

//     console.log('#################### withAuth');
//     const authority = JSON.parse(localStorage.getItem('authority'));
//     const dispatch = useDispatch();
//     const {isAuth} = useSelector(reducer => reducer.tAuthReducer);

//     useEffect(() => {
//         dispatch(tAuthIsAuth({}));
//     }, []);

//     useEffect(() => {
//         if(isAuth === false) {
//             window.localStorage.removeItem('authority');
//         }
//     }, [isAuth]);
//     console.log('###################withAuth - authority : ', authority);
//     console.log('###################withAuth - Component : ', Component);
//     console.log('###################withAuth - ...props : ', ...props);
//     if (authority) {
//         return Component;
//         //return <Component {...props} />
//     }
//     console.log('###################withAuth - Redirect to /login ');
//     return <Redirect to={'/login'}/>
// }

export default WithAuth;