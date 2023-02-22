import styled from 'styled-components';
import { useState, useNavigate } from 'react';
import axios from 'axios';
axios.defaults.withCredentials = true;

// import { loginAction } from '/actions';
// import { useDispatch } from 'react-redux';

const LoginInputForm = () => {
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChangeInput = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  // 인풋값입력후 포커스 잃은 후(onBlur) 유효성검사
  const CheckEmail = event => {
    const emailRegex =
      '/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i';
    emailRegex.test(event.target.value) ? setEmailValid(true) : setEmailValid(false);
  };

  const checkPassword = event => {
    const passwordRegex = '^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$';
    passwordRegex.test(event.target.value) ? setPasswordValid(true) : setPasswordValid(false);
  };

  const handleSubmit = event => {
    event.preventDefault();

    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    };

    if (!emailValid || !passwordValid) {
      return alert('이메일과 비밀번호를 올바르게 입력하여 주십시오');
    }

    if (emailValid && passwordValid) {
      return axios
        .post(`${process.env.REACT_APP_API_URL}/members/login`, values, { headers })
        .then(response => {
          const { accessToken } = response.data;
          localStorage.setItem('accessToken', accessToken);
        })
        .get(`${process.env.REACT_APP_API_URL}/members/`, {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        })
        .then(() => {
          // setIsLogin(true);
          navigate('/questions');
        })
        .catch(error => {
          alert(error);
        });
    }
  };

  return (
    <InputContainer>
      <Label>Email</Label>
      <Input
        type={'email'}
        name="email"
        value={values.email}
        onChange={handleChangeInput}
        onBlur={CheckEmail}
      />
      <Label>Password</Label>
      <Input
        type={'password'}
        name="password"
        value={values.password}
        onChange={handleChangeInput}
        onBlur={checkPassword}
      />
      <LoginButton onSubmit={handleSubmit}>Log in</LoginButton>
    </InputContainer>
  );
};

const InputContainer = styled.div`
  width: 20rem;
  height: 15rem;
  border-radius: 0.5rem;
  background-color: #ffff;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: center;
  padding: 0.8rem;
  margin-top: 1rem;
`;

const Label = styled.label`
  width: 90%;
  font-size: 1rem;
  font-weight: 700;
  margin: 0.8rem 0 0.2rem 0.5rem;
`;

const Input = styled.input`
  width: 90%;
  height: 2.2rem;
  align-self: center;
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
  align-self: center;
  border-radius: 0.4rem;
  background-color: #3b95ff;
  color: white;
  display: inline-block;
  margin-top: 1rem;
  border-style: none;
  border: 1px solid #d5d9dc;
  cursor: pointer;
  &:hover {
    background-color: #057aff;
    border: none;
  }
`;

export default LoginInputForm;
