import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { login, reset } from 'features/authSlice';
import { checkEmail, checkPassword } from 'features/validationCheck';
import Spinner from 'components/Spinner';

const LoginInputForm = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { email, password } = values;
  const { user, isLoding, isError, isSuccess, message } = useSelector(state => state.auth);

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      navigate('/');
    }
    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const handleChangeInput = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  if (isLoding) {
    return <Spinner />;
  }

  const handleSubmit = event => {
    event.preventDefault();
    const userData = {
      email,
      password,
    };
    dispatch(login(userData));
  };

  return (
    <InputContainer>
      <Label>Email</Label>
      <Input
        type={'email'}
        name="email"
        value={values.email}
        onChange={handleChangeInput}
        onBlur={event => {
          checkEmail(event.target.value);
        }}
      />
      <Label>Password</Label>
      <Input
        type={'password'}
        name="password"
        value={values.password}
        onChange={handleChangeInput}
        onBlur={event => {
          checkPassword(event.target.value);
        }}
      />
      <LoginButton onClick={handleSubmit}>Log in</LoginButton>
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
