import styled from 'styled-components';
import Navigation from 'containers/Navigation';
import TextEditor from 'components/Editor';
import AddButton from 'components/AddButton';
import { ReactComponent as Search } from 'assets/search.svg';

const MyPageEdit = () => {
  return (
    <>
      <Navigation />
      <Container>
        <InfoContainer>
          <h3>Public information</h3>
          <div className="infoBox">
            <InfoHeader>
              <span>Profile image</span>
              <div>
                <ImageBox>
                  <Search width={120} className="profileImage" />
                </ImageBox>
              </div>
            </InfoHeader>
            <InfoMain>
              <ul>
                <li>
                  Display name
                  <span>username</span>
                </li>
                <li>
                  Location
                  <span>Seoul</span>
                </li>
                <li>
                  Title
                  <span>제목입니다</span>
                </li>
                <li>
                  About me
                  <span className="aboutMe">
                    <TextEditor editorValue={'yes'} editorHeight={'15rem'} />
                  </span>
                </li>
              </ul>
            </InfoMain>
          </div>
        </InfoContainer>
        <ButtonBox>
          <AddButton buttonText={'Save profile'}></AddButton>
          <button className="cancleButton">Cancel</button>
        </ButtonBox>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 1280px;
  height: 100vh;
  padding: 2rem 3rem 0 11rem;
  margin-left: 15%;
`;

const InfoContainer = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 80%;
  margin-top: 3rem;

  > div {
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
    border-radius: 0.8rem;
    background-color: gray;
  }
`;

const InfoMain = styled.main`
  > ul {
    > li {
      display: flex;
      flex-direction: column;
      list-style: none;
      white-space: nowrap;
      margin: 0.5rem;
      font-size: 0.9rem;
      font-weight: bold;
      > span {
        display: flex;
        align-items: center;
        padding-left: 1rem;
        margin: 0.5rem;
        font-size: 0.9rem;
        font-weight: lighter;
        white-space: normal;
        color: #777;
      }
    }
  }
`;

const ButtonBox = styled.aside`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  margin-top: 2rem;
  > .cancleButton {
    display: flex;
    margin-left: 1rem;
    border: none;
    white-space: nowrap;
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
