import styled from 'styled-components';
import { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useLocation } from 'react-router-dom';
// import axios from 'axios';
import Navigation from 'containers/Navigation';
import AddButton from 'components/AddButton';
import MyProfileList from 'components/MyProfileList';
import { ReactComponent as Search } from 'assets/search.svg';
import { patchUser, getUser } from 'features/userSlice';
import { useNavigate } from 'react-router-dom';

const MyPageEdit = () => {
  const editorRef = useRef('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userinfo, isLoading, error } = useSelector(state => state.user);

  const isEdit = true; // edit 창인가 아닌가
  const [content, setContent] = useState({});
  const [inputData, setInputData] = useState({});

  /**
   * @problem id는 이걸로
  const { user } = useSelector(state => state.auth);
  user.memberId 
  */
  useEffect(() => {
    dispatch(getUser(1)); //id
  }, [dispatch]);

  const handleOnChangeEditor = () => {
    const html = editorRef.current?.getInstance().getHTML();
    const markdown = editorRef.current?.getInstance().getMarkdown();
    setContent({ html, markdown });
  };

  const handleOnChangeInput = e => {
    setInputData({ ...inputData, [e.target.id]: e.target.value });
  };

  const handleSaveButtonClick = () => {
    let data = { ...inputData, content };
    if (Object.keys(content).length === 0) {
      data = { ...inputData };
    }

    /**
     * @problem - 나중에 지워 id
     */
    const id = 1;
    const editData = { data, id };
    dispatch(patchUser(editData));
    navigate('/mypage');
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
                    <Search className="profileImage" />
                  </ImageBox>
                </div>
              </InfoHeader>
              <MyProfileList
                userinfo={userinfo}
                editorRef={editorRef}
                isEdit={isEdit}
                handleOnChangeEditor={handleOnChangeEditor}
                handleOnChangeInput={handleOnChangeInput}
              />
            </form>
          </InfoContainer>
          <ButtonBox>
            <AddButton
              buttonText={'Save profile'}
              handleButtonClick={handleSaveButtonClick}
            ></AddButton>
            <button className="cancleButton" onClick={handleCancelButtonClick}>
              Cancel
            </button>
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
    width: 9rem;
    border-radius: 0.8rem;
    background-color: gray;
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
  > .cancleButton {
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
  }
`;

export default MyPageEdit;
