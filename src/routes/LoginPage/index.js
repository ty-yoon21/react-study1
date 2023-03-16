import React, {useState} from 'react';
import Login from './Styled';
import { useDispatch, useSelector } from 'react-redux';
import {tAuthLogin} from '../../actions';
import {useNavigate, Link, useLocation} from 'react-router-dom';


const LoginPage = () => {

    //const {error} = useSelector(reducer => reducer.tAuthReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const [state, setState] = useState({
        account: '',
        password: ''
    });

    const onHandleChange = e => {
        const {name, value} = e.target;
        setState({...state, [name]: value})
    }

    const onHandleSubmit = e => {
        e.preventDefault();
        dispatch(tAuthLogin({account: state.account, password: state.password, navigate}))
    }

    return (

        <Login>
            <div className='common-wrap'>
                <div className='bg-wrap'>
                    <h1 className='logo'>
                        React Portal
                    </h1>
                    <div className='bg-img'/>
                    <div className='bg-text'>
                        <h3>React Portal</h3>
                        <p>Service Introduce...</p>
                    </div>
                </div>
            

                <div className='form-wrap'>
                    <h1 className='logo'>
                        React Portal
                    </h1>
                    <div className='common-form scroll-custom'>
                        <form onSubmit={onHandleSubmit}>
                            <strong>Login</strong>
                            {/* {error && <p>{error}</p>} */}
                            <label htmlFor='userId'>
                                ID
                                <input type='text' id='account' name='account' value={state.account} onChange={onHandleChange}/>
                            </label>
                            <label htmlFor='password'>
                                PW
                                <input type='text' id='password' name='password' value={state.password} onChange={onHandleChange}/>
                            </label>
                            <ul className='form-btns'>
                                <li>
                                    <button className='btn full primary' type='submit'>
                                        Login
                                    </button>
                                </li>                            
                            </ul>
                            <ul className='more-btns'>
                                <Link to="/userRegister" state={{ background: location }}>
                                    Sign up
                                </Link>
                                {/* <li>
                                    <a href='#none'>Sign Up</a>
                                </li>
                                <li>
                                    <a href='#none'>Forgot password?</a>
                                </li> */}
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
        </Login>

    );


};

export default LoginPage;