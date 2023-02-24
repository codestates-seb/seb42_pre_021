import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const SignUpModal = ({ setIsShowModal }) => {
  const navigate = useNavigate();
  const handleCloseModal = () => {
    setIsShowModal(false);
  };
  const handleClickButton = () => {
    navigate('../signup');
  };
  return (
    <ModalContainer onClick={handleCloseModal}>
      <SignUpWrapper>
        <h1>Join the Stack Overflow community</h1>
        <p>
          You need <span>15 reputation</span> to upvote posts.
        </p>
        <p>
          Join Stack Overflow to start earning reputation and
          <br />
          unlocking new privileges like voting and commenting.
        </p>
        <SignUpButton onClick={handleClickButton}>
          <FcGoogle size={21} />
          &nbsp;Sign up with google
        </SignUpButton>
        <SignUpButton onClick={handleClickButton}>
          <FaGithub size={21} />
          &nbsp;Sign up with Github
        </SignUpButton>
        <SignUpButton onClick={handleClickButton}>
          <MdEmail size={21} />
          &nbsp;Sign up using Email
        </SignUpButton>
        <p>
          Already have an account?&nbsp;<Link to="../login">Log in</Link>
        </p>
      </SignUpWrapper>
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SignUpWrapper = styled.div`
  background-color: #fff;
  width: 26rem;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  > h1 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  > p {
    font-size: 0.8rem;
    width: 100%;
    color: #333;
    margin-bottom: 1rem;
    :first-of-type {
      > span {
        color: #0b95ff;
        cursor: pointer;
      }
    }
    :last-of-type {
      margin-bottom: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      > a {
        text-decoration: none;
        color: #0b95ff;
        font-weight: 600;
      }
    }
  }
  @media screen and (max-width: 640px) {
    width: 22rem;
  }
`;

const SignUpButton = styled.button`
  width: 100%;
  height: 3rem;
  border-radius: 0.2rem;
  margin-bottom: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  :nth-of-type(1) {
    background-color: #fff;
    border: 1px solid #ccc;
    color: #666;
  }
  :nth-of-type(2) {
    background-color: #2f3337;
    color: #fff;
    border: none;
  }
  :nth-of-type(3) {
    background-color: #fff;
    border: 1px solid #ccc;
    margin-bottom: 1rem;
    color: #888;
  }
`;
export default SignUpModal;
