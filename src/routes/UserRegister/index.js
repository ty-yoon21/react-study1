import React, { useState } from "react";
import styled from "styled-components";

import { useDispatch, useSelector } from 'react-redux';
import {tAuthRegister} from '../../actions';
import {useNavigate, Link, useLocation} from 'react-router-dom';

const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  font-size: 1.1rem;
  font-weight: bold;
`;

const FormInput = styled.input`
  padding: 0.5rem;
  border: 2px solid #ccc;
  border-radius: 0.25rem;
  font-size: 1.1rem;

  &:focus {
    outline: none;
    border-color: #0077ff;
  }
`;

const SubmitButton = styled.button`
  padding: 0.5rem;
  border: none;
  border-radius: 0.25rem;
  font-size: 1.1rem;
  font-weight: bold;
  color: white;
  background-color: #0077ff;
  cursor: pointer;

  &:hover {
    background-color: #0055cc;
  }

  &:active {
    background-color: #004499;
  }
`;

const SignUp = () => {
  const [account, setAccount] = useState("");
  const [username, setUsername] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
    const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Account: ${account}, Email: ${email}, Password: ${password}`);
    // Here, you would typically make an API call to sign up the user
    dispatch(tAuthRegister({account: account, password: password, username: username, email: email, nickname: nickname, navigate}));
  };

  return (
    <SignUpForm onSubmit={handleSubmit}>
      <FormLabel>
        ID
        <FormInput
          type="text"
          value={account}
          onChange={(event) => setAccount(event.target.value)}
        />
      </FormLabel>
      <FormLabel>
        Password
        <FormInput
          type="text"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </FormLabel>
      <FormLabel>
        Username
        <FormInput
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </FormLabel>
      <FormLabel>
        Email
        <FormInput
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </FormLabel>
      <FormLabel>
        Nickname
        <FormInput
          type="nickname"
          value={nickname}
          onChange={(event) => setNickname(event.target.value)}
        />
      </FormLabel>
      <SubmitButton type="submit">Sign up</SubmitButton>
    </SignUpForm>
  );
};

export default SignUp;