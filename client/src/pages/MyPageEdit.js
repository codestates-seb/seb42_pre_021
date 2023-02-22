import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Navigation from 'containers/Navigation';
import AddButton from 'components/AddButton';
import MyProfileList from 'components/MyProfileList';
import { ReactComponent as Search } from 'assets/search.svg';
import { useRef, useState } from 'react';
import axios from 'axios';

const MyPageEdit = () => {
  const isEdit = true;

  const { state } = useLocation(); // mypage에서 가져온 내용

  const editorRef = useRef('');

  const [aboutMe, setAboutMe] = useState(null);
  // const [userNickName, setUserNickName] =

  const handleSaveButtonClick = () => {
    const html = editorRef.current?.getInstance().getHTML();
    const markdown = editorRef.current?.getInstance().getMarkdown();
    setAboutMe({ html, markdown });

    // password -> display name
    // profile
    // company -> location
    // title
    // content
    console.log(aboutMe);
    const data = { aboutMe };
    console.log(data);
  };

  axios;

  return (
    <>
      <Navigation />
      {state[0] && (
        <Container>
          <InfoContainer>
            <h3>Public information</h3>
            <form className="infoForm" onSubmit={handleSaveButtonClick}>
              <InfoHeader>
                <span>Profile image</span>
                <div>
                  <ImageBox>
                    <Search className="profileImage" />
                  </ImageBox>
                </div>
              </InfoHeader>
              <MyProfileList
                username={state[0].nickname}
                location={state[0].location}
                title={state[0].title}
                aboutme={state[0].content}
                editorRef={editorRef}
                isEdit={isEdit}
              />
            </form>
          </InfoContainer>
          <ButtonBox>
            <AddButton
              buttonText={'Save profile'}
              handleButtonClick={handleSaveButtonClick}
            ></AddButton>
            <Link to="/mypage" className="cancleButton">
              Cancel
            </Link>
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
  height: 100vh;
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
