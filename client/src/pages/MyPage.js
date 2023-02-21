import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Navigation from 'containers/Navigation';
import { ReactComponent as Search } from 'assets/search.svg';
import { MdCake } from 'react-icons/md';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { FaRegCalendarAlt, FaMapMarkerAlt, FaPen, FaTrashAlt } from 'react-icons/fa';

const MyPage = () => {
  return (
    <>
      <Navigation />
      <Container>
        <InfoContainer>
          <h3>Public information</h3>
          <div className="infoBox">
            <InfoHeader>
              <span>Profile image</span>
              <ProfileContainer>
                <ImageBox>
                  <Search width={120} className="profileImage" />
                </ImageBox>
                <ul>
                  <li>
                    <MdCake className="icon" />
                    Member for 3 months
                  </li>
                  <li>
                    <AiOutlineClockCircle className="icon" />
                    Last seen this week
                  </li>
                  <li>
                    <FaRegCalendarAlt className="icon" />
                    Visited 4 days, 2 consecutive
                  </li>
                </ul>
              </ProfileContainer>
            </InfoHeader>
            <InfoMain>
              <ul>
                <li>
                  Display name
                  <span>username</span>
                </li>
                <li>
                  Location
                  <span>
                    <FaMapMarkerAlt />
                    Seoul
                  </span>
                </li>
                <li>
                  Title
                  <span>제목입니다</span>
                </li>
                <li>
                  About me
                  <AboutMe>
                    Est in do anim Lorem consectetur est occaecat nostrud veniam consectetur
                    dolor.Est in do anim Lorem consectetur est occaecat nostrud veniam consectetur
                    dolor.
                  </AboutMe>
                </li>
              </ul>
            </InfoMain>
          </div>
        </InfoContainer>
        <ButtonBox>
          <Link to="/mypage/edit" className="mypageButton">
            <FaPen />
            Edit profile
          </Link>
          <button className="mypageButton">
            <FaTrashAlt />
            Delete Profile
          </button>
        </ButtonBox>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  width: 1280px;
  height: 100vh;
  padding: 2rem 3rem 0 11rem;
`;

const InfoContainer = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  margin-left: 15%;
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

const ProfileContainer = styled.div`
  display: flex;
  > ul {
    display: flex;
    margin-left: 1.5rem;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    > li {
      display: flex;
      align-items: center;
      list-style: none;
      white-space: nowrap;
      font-size: 0.8rem;
      color: #666;
      > .icon {
        margin-right: 0.3rem;
        font-size: 1rem;
      }
    }
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

const AboutMe = styled.span``;

const ButtonBox = styled.aside`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  > .mypageButton {
    display: flex;
    align-items: center;
    padding: 0.4rem;
    margin: 1rem 0.2rem;
    border: 1px solid #bbc0c4;
    border-radius: 0.2rem;
    white-space: nowrap;
    text-decoration: none;
    font-size: 0.8rem;
    color: #666;
    background-color: #ffffff;
    :hover {
      cursor: pointer;
      filter: brightness(0.9);
    }
  }
`;

export default MyPage;
