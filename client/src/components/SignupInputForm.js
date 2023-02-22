import styled from 'styled-components';
import { useState } from 'react';
import axios from 'axios';

const SignupInputForm = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  axios.defaults.withCredentials = true;

  // const handleSubmit = event => {
  //   event.preventDefault();
  //   axios
  //     .post(`${process.env.REACT_APP_API_URL}/members/login`, values, { withCredentials: true })
  // };

  return (
    <InputContainer>
      <Label>Display name</Label>
      <SignUpInput type={'name'} name="name" value={values.name} onChange={handleChange} />
      <Label>Email</Label>
      <SignUpInput
        type={'email'}
        name="email"
        value={values.email}
        onChange={handleChange}
        required={true}
      />
      <Label>Password</Label>
      <SignUpInput
        type={'password'}
        name="password"
        value={values.password}
        onChange={handleChange}
        required={true}
      />
      <span>
        Passwords must contain at least eight characters, including at least 1 letter and 1 number.
      </span>
      <SignUpButton>Sign up</SignUpButton>
    </InputContainer>
  );
};

const InputContainer = styled.div`
  width: 20rem;
  height: fit-content;
  border-radius: 0.5rem;
  background-color: #ffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  margin-top: 1rem;
  overflow-x: hidden;
  overflow-y: hidden;

  > span {
    margin: 0.8rem 0 0.3rem 0.8rem;
    font-size: 0.7rem;
    color: #6b6b6b;
  }

  @media screen and (max-height: 1024px) {
    height: 70%;
  }
`;

const Label = styled.label`
  width: 90%;
  font-size: 0.8rem;
  font-weight: 700;
  margin: 0.5rem 0 0.5rem 0.2rem;
`;

const SignUpInput = styled.input`
  width: 90%;
  height: 1.8rem;
  position: relative;
  border-style: none;
  border-radius: 0.2rem;
  border: 1px solid #999fa3;
  padding-bottom: 1rem;

  &:focus {
    border: 1px solid #3278ae;
    outline: 4px solid hsla(206, 55%, 87%, 0.75);
  }
`;

const SignUpButton = styled.button`
  width: 90%;
  height: 2rem;
  position: relative;
  align-self: center;
  border-radius: 0.2rem;
  background-color: #3b95ff;
  color: white;
  display: inline-block;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border-style: none;
  border: 1px solid #d5d9dc;
  cursor: pointer;
  &:hover {
    background-color: #057aff;
  }
`;

export default SignupInputForm;
