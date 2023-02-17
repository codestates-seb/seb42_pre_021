import styled from 'styled-components';
import { useState } from 'react';

const LoginInputForm = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <InputContainer>
      <Label>Email</Label>
      <Input type={'email'} name="email" value={values.email} onChange={handleChange} />
      <Label>Password</Label>
      <Input type={'password'} name="password" value={values.password} onChange={handleChange} />
      <LoginButton>Log in</LoginButton>
    </InputContainer>
  );
};

const InputContainer = styled.div`
  width: 20rem;
  height: 18.125rem;
  border-radius: 0.4rem;
  background-color: #ffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1.5rem;
  margin-top: 1rem;
`;

const Label = styled.label`
  font-size: 1rem;
  font-weight: 700;
  margin: 1rem 0 0.2rem 0.1rem;
`;

const Input = styled.input`
  width: 90%;
  height: 2.1rem;
  border-style: none;
  border-radius: 0.2rem;
  border: 1px solid #999fa3;

  &:focus {
    border: 1px solid #3278ae;
    outline: 4px solid hsla(206, 55%, 87%, 0.75);
  }
`;

const LoginButton = styled.button`
  width: 90%;
  height: 2.5rem;
  border-radius: 0.4rem;
  background-color: #3b95ff;
  color: white;
  display: inline-block;
  margin-top: 0.8rem;
  border-style: none;
  border: 1px solid #d5d9dc;
  cursor: pointer;
  &:hover {
    background-color: #057aff;
    border: none;
  }
`;

export default LoginInputForm;
