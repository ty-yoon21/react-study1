import styled from 'styled-components';


 

 

const Login = styled.div`

  background-color: #f2f7f8;

  font-family: 'noto-sans', sans-serif;


 

  /* common-form scroll custom */

  .common-form::-webkit-scrollbar {

    width: 6px;

  }

  .common-form::-webkit-scrollbar-thumb {

    background-color: #ddd;

    width: 10px;

    height: 80px;

    border-radius: 10px;

  }

  .common-form::-webkit-scrollbar-track {

    background-color: #fff;

    border: 1px solid #e1e1e1;

    display: none;

  }


 

  input[type='text'],

  input[type='search'],

  input[type='password'],

  input[type='number'],

  input[type='email'],

  input[type='tel'] {

    position: relative;

    -webkit-appearance: none;

    -moz-appearance: none;

    appearance: none;

    border: 1px solid;

    padding: 5px;

    outline: 0;

    -webkit-transition: all 0.3s ease 0s;

    transition: all 0.3s ease 0s;

    border-radius: 4px;

  }

  input[type='text'],

  input[type='search'],

  input[type='password'],

  input[type='number'],

  input[type='email'],

  input[type='tel'] {

    background-color: #fff;

    border-color: #ddd;

    color: #333;

  }


 

  /* 플레이스 홀더 */

  ::-webkit-input-placeholder {

    color: #ccc;

    letter-spacing: -1px;

  }

  :-ms-input-placeholder {

    color: #ccc;

    letter-spacing: -1px;

  }

  ::-ms-input-placeholder {

    color: #ccc;

    letter-spacing: -1px;

  }

  ::placeholder {

    color: #ccc;

    letter-spacing: -1px;

  }


 

  /* 클리어픽스 */

  .clear::after {

    content: '';

    display: block;

    clear: both;

  }


 

  /* label legend caption 등등 숨기기 */

  .blind,

  caption {

    display: block;

    position: absolute;

    left: -9999px;

    overflow: hidden;

    width: 1px;

    height: 1px;

    font-size: 1.6px;

    line-height: 0.16px;

    text-indent: -9999px;

  }


 

  /* 버튼 영역 */

  .btn {

    position: relative;

    display: inline-block;

    text-align: center;

    background-color: transparent;

    border: 1px solid transparent;

    overflow: hidden;

    vertical-align: middle;

    -webkit-transition: all 0.3s ease 0s;

    transition: all 0.3s ease 0s;

    line-height: 1;

    color: #fff;

    text-decoration: none;

    z-index: 1;

    letter-spacing: -1px;

    border-radius: 4px;

    font-weight: 500;

  }


 

  .btn.small {

    width: 70px;

    height: 28px;

    font-size: 14px;

  }

  .btn.middle {

    width: 90px;

    height: 35px;

    font-size: 14px;

    line-height: 35px;

  }

  .btn.full {

    width: 100%;

    height: 50px;

  }

  .btn.popup {

    width: 90px;

    height: 42px;

    font-size: 16px;

    line-height: 42px;

  }

  .btn.alert {

    width: 68px;

    height: 34px;

  }


 

  .btn.primary {

    background-color: #009894;

  }

  .btn.blue {

    background-color: #3f9aed;

  }


 

  /* 로그인. 회원가입 폼 레이아웃 시작 */

  .common-wrap {

    display: flex;

    flex-direction: row;

    width: 100%;

    height: 100vh;

    overflow: hidden;

  }

  .common-wrap > * {

    width: 50%;

    display: flex;

    align-items: center;

    justify-content: center;

    flex-direction: column;

  }


 

  /* bg 영역 레이아웃 */

  .common-wrap .bg-wrap {

    background-color: #1a242e;

    position: relative;

    overflow: hidden;

  }

  .common-wrap .bg-wrap h1,

  .common-wrap .form-wrap h1 {

    position: absolute;

    left: 30px;

    top: 45px;

  }

  .common-wrap .bg-wrap h1 a,

  .common-wrap .form-wrap h1 a {

    text-indent: -9999px;

    width: 140px;

    height: 34px;

    display: inline-block;

  }


 

  /* .common-wrap .bg-wrap h1 a {

    background: #fff

  } */

  .common-wrap .form-wrap h1 a {

    background: #fff

  }

  .common-wrap .bg-wrap .bg-img {

    width: 100%;

    height: 100%;

    background: #fff

  }


 

  .bg-text {

    width: 50%;

    text-align: left;

    position: absolute;

    right: 50px;

    bottom: 50px;

  }

  .bg-text h3 {

    color: #fff;

    font-size: 46px;

    font-weight: bold;

    font-family: 'roboto';

  }

  .bg-text p {

    color: #e9f4ff;

    font-size: 18px;

    line-height: 28px;

    font-family: 'noto-sans';

    font-weight: 300;

  }


 

  /* form 영역 레이아웃 */

  .common-wrap .form-wrap {

    position: relative;

  }

  .common-wrap .form-wrap .logo {

    display: none;

  }

  .common-wrap .form-wrap .common-form {

    width: 59.5%;

    max-width: 100%;

    max-height: 75vh;

    overflow-y: auto;

    padding: 30px;

    background-color: #fff;

    border-radius: 4px;

    border: 1.5px solid #d7dde0;

    box-shadow: rgb(0 0 0 / 15%) 1.95px 1.95px 2.6px;

  }

  .common-wrap .form-wrap .common-form strong {

    display: block;

    font-family: 'roboto';

    font-weight: 700;

    font-size: 28px;

    color: #333;

    text-align: center;

    margin: 40px 0;

    text-transform: uppercase;

  }

  .common-wrap .form-wrap .common-form-info {

    display: flex;

    align-items: center;

    justify-content: center;

    flex-wrap: nowrap;

    flex-direction: row;

    position: absolute;

    bottom: 30px;

    line-height: 1;

    font-size: 14px;

  }


 

  .common-wrap .form-wrap .common-form-info a,

  .common-wrap .form-wrap .common-form-info p {

    color: #666;

    font-weight: 300;

  }

  .common-wrap .form-wrap .common-form-info p::before {

    content: '';

    display: inline-block;

    width: 1px;

    height: 11px;

    background-color: #ddd;

    margin: 0 10px;

  }


 

  .common-form form label,

  .common-form form input,

  .common-form form select {

    width: 100%;

  }

  .common-form form label {

    color: #000;

    font-weight: 500;

    display: block;

    height: auto;

    margin: 20px 0;

  }

  .common-form form input {

    height: 50px;

    border-radius: 4px;

    padding: 0 11px;

    margin-top: 10px;

  }

  .common-form form input:focus {

    border: 1px solid #009894;

  }

  .form-btns li {

    margin-bottom: 10px;

  }

  .more-btns {

    display: flex;

    justify-content: center;

    align-items: center;

    margin: 20px 0 30px;

  }

  .more-btns Link {

    color: #666;

    font-size: 16px;

  }

  .more-btns li:first-child::after {

    content: '';

    display: inline-block;

    margin: 0 15px;

    background: #ddd;

    width: 1px;

    height: 11px;

  }

  .more-btns li a {

    color: #666;

    font-size: 16px;

  }


 

  form #userId {

    background: #fff

    background-position-x: 11px;


  }

  form #userId:focus {

    background: #fff;

    background-position-x: 11px;

  }

  form #password,

  form #re_password {

    background: #fff

    background-position-x: 11px;


  }

  form #password:focus,

  form #re_password:focus {

    background: #fff

    background-position-x: 11px;

  }


 

  /* 로그인 미디어쿼리 */

  @media (max-width: 1280px) {

    .common-wrap {

      flex-wrap: wrap;

    }

    .common-wrap .bg-wrap {

      display: none;

    }

    .common-wrap .form-wrap {

      width: 100%;

    }

    .common-wrap .form-wrap .logo {

      display: block;

    }

    .common-wrap .form-wrap {

      padding: 0 20px;

    }

    .common-wrap .form-wrap .common-form strong {

      margin-bottom: 11px;

    }

  }

  @media (max-width: 768px) {

    .common-wrap .form-wrap .common-form {

      height: 500px;

    }

  }

`;

export default Login;