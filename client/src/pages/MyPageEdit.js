import styled from 'styled-components';
import { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navigation from 'containers/Navigation';
import AddButton from 'components/AddButton';
import MyProfileList from 'components/MyPage/MyProfileList';
import { patchUser, getUser } from 'features/userSlice';
import HeaderInputForm from 'components/HeaderInputForm';
// import { useNavigate } from 'react-router-dom';

const MyPageEdit = () => {
  const editorRef = useRef('');
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userinfo, isLoading, error } = useSelector(state => state.user);

  const isEdit = true;
  const [inputData, setInputData] = useState({});
  const [userPassword, setUserPassword] = useState({});
  const [isClick, setIsClick] = useState(false);

  const { user } = useSelector(state => state.auth);
  const id = user.memberId;

  useEffect(() => {
    dispatch(getUser(id));
  }, [dispatch]);

  const handleSaveButtonClick = async () => {
    const html = editorRef.current?.getInstance().getHTML();
    const markdown = editorRef.current?.getInstance().getMarkdown();
    const data = { ...inputData, html, markdown, userPassword };
    const userData = { data, id };
    console.log(userData);
    dispatch(patchUser(userData));

    // navigate('/mypage');
  };

  const handleBeforeSaveClick = () => {
    setIsClick(!isClick);
  };

  const handleCancelButtonClick = () => {
    window.location.replace('/mypage');
  };

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {error && <div>{error.message}</div>}

      <Navigation />
      {userinfo && (
        <Container>
          <InfoContainer>
            <h3>Public information</h3>
            <form className="infoForm">
              <InfoHeader>
                <span>Profile image</span>
                <div>
                  <ImageBox>
                    <img
                      src={user.profile}
                      alt={`${user.nickname} profile`}
                      className="profileImage"
                    />
                  </ImageBox>
                </div>
              </InfoHeader>
              <MyProfileList
                userinfo={userinfo}
                editorRef={editorRef}
                isEdit={isEdit}
                state={inputData}
                setState={setInputData}
              />
            </form>
            {isClick && (
              <Backdrop>
                <BackdropView>
                  <div>
                    <HeaderInputForm
                      placeholder={'password..'}
                      icon={'lock'}
                      state={setUserPassword}
                    ></HeaderInputForm>
                  </div>
                  <div className="backdrop-button__box">
                    <AddButton
                      buttonText={'Save profile'}
                      handleButtonClick={handleSaveButtonClick}
                    ></AddButton>
                    <CancelButton onClick={handleBeforeSaveClick}>Cancel</CancelButton>
                  </div>
                </BackdropView>
              </Backdrop>
            )}
          </InfoContainer>
          <ButtonBox>
            <AddButton
              buttonText={'Save profile'}
              handleButtonClick={handleBeforeSaveClick}
            ></AddButton>
            <CancelButton onClick={handleCancelButtonClick}>Cancel</CancelButton>
          </ButtonBox>
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 1280px;
  height: fit-content;
  margin-left: 10%;
  margin-top: 3rem;
`;

const InfoContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 0 0 11rem;
  @media screen and (max-width: 640px) {
    padding: 0 10% 0 0;
    justify-content: center;
  }
  > form {
    width: calc(10rem + 55%);
    padding: 1rem;
    border-radius: 4px;
    border: 1px solid #bbc0c4;
    > h3 {
      margin-bottom: 0.5rem;
      white-space: nowrap;
    }
  }
`;

const InfoHeader = styled.header`
  display: flex;
  flex-direction: column;
  border-radius: 0.2rem;
  > span {
    margin: 0 0 0.2rem 0.5rem;
    font-size: 0.9rem;
    font-weight: bold;
  }
`;

const ImageBox = styled.div`
  > .profileImage {
    width: 8rem;
    border-radius: 0.8rem;
    @media screen and (max-width: 640px) {
      width: 6rem;
    }
  }
`;

const ButtonBox = styled.aside`
  display: flex;
  align-items: center;
  margin-left: 11rem;
  margin-top: 2rem;
  padding-bottom: 2rem;
  @media screen and (max-width: 640px) {
    margin-left: calc(5% + 5rem);
  }
`;

const CancelButton = styled.button`
  display: flex;
  margin-left: 1rem;
  border: none;
  white-space: nowrap;
  text-decoration: none;
  font-size: 0.8rem;
  font-weight: bold;
  color: #0b95ff;
  background-color: transparent;
  :hover {
    cursor: pointer;
    filter: brightness(0.9);
  }
`;

const Backdrop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
`;

const BackdropView = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 20vh;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background-color: #ffffff;
  border-radius: 0.5rem;
  > .backdrop-button__box {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export default MyPageEdit;
