import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navigation from 'containers/Navigation';
import MyProfileList from 'components/MyProfileList';
import { ReactComponent as Search } from 'assets/search.svg';
import { MdCake } from 'react-icons/md';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { FaRegCalendarAlt, FaPen, FaTrashAlt } from 'react-icons/fa';
import { useEffect, useState } from 'react';

// 원래는 userInfo를 mypage가 받아서 조회를 받아서 조회
const URL = 'http://localhost:3001/data';

const MyPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  const getData = async () => {
    const { data } = await axios.get(URL);
    setUser(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleClickEdit = () => {
    navigate('/mypage/edit', { state: user });
  };

  return (
    <>
      <Navigation />
      {user[0] && (
        <Container>
          <ButtonBox>
            <button className="mypageButton" onClick={handleClickEdit}>
              <FaPen />
              Edit profile
            </button>
            <button className="mypageButton">
              <FaTrashAlt />
              Delete Profile
            </button>
          </ButtonBox>
          <InfoContainer>
            <h3>Public information</h3>
            <div>
              <InfoHeader>
                <span>Profile image</span>
                <ProfileContainer>
                  <ImageBox>
                    <Search className="profileImage" />
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
              <MyProfileList
                username={user[0].nickname}
                location={user[0].location}
                title={user[0].title}
                aboutme={user[0].content}
              />
            </div>
          </InfoContainer>
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
  padding-left: 11rem;
  @media screen and (max-width: 640px) {
    padding: 0 5%;
    justify-content: center;
  }

  > div {
    width: calc(10rem + 55%);
    justify-content: center;
    padding: 1rem;
    border-radius: 4px;
    border: 1px solid #bbc0c4;
    margin-bottom: 3rem;
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
    margin-left: 1rem;
    padding-right: 0.2rem;
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
  align-items: start;
  justify-content: end;
  margin-right: 4rem;
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
