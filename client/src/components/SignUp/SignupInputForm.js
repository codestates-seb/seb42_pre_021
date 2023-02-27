import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { register, reset } from 'features/authSlice';
import Spinner from 'components/Spinner';
import { checkEmail, checkPassword } from 'features/validationCheck';

const SignupInputForm = () => {
  const [formErrors, setFormErrors] = useState({});
  const [values, setValues] = useState({
    nickname: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { email, nickname, password } = values;
  const { user, isLoding, isError, isSuccess, message } = useSelector(state => state.auth);

  useEffect(() => {
    // if (isError) {
    //   toast.error(message);
    // }
    if (isError) {
      if (message === 'Email Already Exists') {
        toast.error('이미 사용중인 이메일 입니다.');
      } else if (message === 'Nickname Already Exists') {
        toast.error('이미 사용중인 닉네임 입니다.');
      } else toast.error(message);
    }

    if (isSuccess || user) {
      navigate('/');
    }
    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch, formErrors]);

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const validate = values => {
    const errors = {};
    if (!values.nickname) {
      errors.nickname = 'Nickname is required!';
    }
    if (!values.email) {
      errors.email = 'Email is required!';
    } else if (!checkEmail(values.email)) {
      errors.email = 'Invalid Email Format';
    }
    if (!values.password) {
      errors.password = 'Password is required!';
    } else if (!checkPassword(values.password)) {
      errors.password = 'Invalid Password';
    }
    return errors;
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!nickname || !email || !password) {
      return toast.error('모든 필드를 형식에 맞게 입력해주세요');
    }
    setFormErrors(validate(values));

    const userData = {
      nickname,
      email,
      password,
    };
    dispatch(register(userData));
    navigate('/login');
  };

  if (isLoding) {
    return <Spinner />;
  }

  return (
    <FormContainer>
      <InputForm onSubmit={handleSubmit}>
        <Label>Display name</Label>
        <SignUpInput
          type={'nickname'}
          name="nickname"
          value={values.nickname}
          onChange={handleChange}
        />
        <ValidateMessage>{formErrors.nickname}</ValidateMessage>
        <Label>Email</Label>
        <SignUpInput
          type={'email'}
          name="email"
          value={values.email}
          onChange={handleChange}
          required={true}
        />
        <ValidateMessage>{formErrors.email}</ValidateMessage>
        <Label>Password</Label>
        <SignUpInput
          type={'password'}
          name="password"
          value={values.password}
          onChange={handleChange}
          required={true}
        />
        <ValidateMessage>{formErrors.password}</ValidateMessage>
        <span>
          Passwords must contain at least eight characters, including at least 1 letter and 1
          number.
        </span>
        <SignUpButton
          disabled={!checkEmail(email) || !checkPassword(password) || !nickname.length > 0}
          onClick={handleSubmit}
        >
          Sign up
        </SignUpButton>
      </InputForm>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  width: auto;
  height: auto;
`;
const InputForm = styled.form`
  width: 20rem;
  height: 100%;
  border-radius: 0.5rem;
  background-color: #ffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  margin-top: 1rem;
  overflow-x: hidden;
  overflow-y: auto;

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
  font-size: 0.75rem;
  font-weight: 700;
  margin: 0.3rem 0 0.3rem 0.2rem;
`;

const SignUpInput = styled.input`
  width: 90%;
  height: 1.8rem;
  font-size: 0.8rem;
  border-style: none;
  border-radius: 0.2rem;
  border: 1px solid #999fa3;

  &:focus {
    border: 1px solid #3278ae;
    outline: 4px solid hsla(206, 55%, 87%, 0.75);
  }
`;

const ValidateMessage = styled.p`
  font-size: 0.5rem;
  color: orange;
  height: 0.5rem;
  text-align: start;
  position: relative;
  left: 28%;
  animation: 0.8s shake alternate;

  @keyframes shake {
    0% {
      transform: skewX(-15deg);
    }
    5% {
      transform: skewX(15deg);
    }
    10% {
      transform: skewX(-15deg);
    }
    15% {
      transform: skewX(15deg);
    }
    20% {
      transform: skewX(0deg);
    }
    100% {
      transform: skewX(0deg);
    }
  }
`;

const SignUpButton = styled.button`
  width: 90%;
  height: 1.8rem;
  position: relative;
  align-self: center;
  border-radius: 0.2rem;
  background-color: #3b95ff;
  background-color: ${props => (props.disabled ? 'gray' : ' #3b95ff;')};
  color: white;
  display: inline-block;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border-style: none;
  border: 1px solid #d5d9dc;
  cursor: pointer;

  &:hover {
    background-color: ${props => (props.disabled ? 'gray' : '#9ecbff')};
  }
`;

export default SignupInputForm;
