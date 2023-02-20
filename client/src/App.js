// eslint-disable-next-line
import { Route } from 'react-router-dom';
// eslint-disable-next-line
import { Routes, useNavigate } from 'react-router-dom';
import AnswerEdit from 'pages/AnswerEdit';
import Login from 'pages/Login';
import MyPage from 'pages/MyPage';
import MyPageEdit from 'pages/MyPageEdit';
import QuestionAdd from 'pages/QuestionAdd';
import QuestionDetail from 'pages/QuestionDetail';
import QuestionEdit from 'pages/QuestionEdit';
import Questions from 'pages/Questions';
import SignUp from 'pages/SignUp';
import styled from 'styled-components';
import Header from 'containers/Header';
// import axios from 'axios';
// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

const App = () => {
  // const [isLogin, setIsLogin] = useState(false);
  // const [userInfo, setUserInfo] = useState(null);
  // const navigate = useNavigate();

  // const authStatusHandler = () => {
  //   return axios
  //     .get(`https://localhost:3000/members/{member-id}`, {
  //       // 유저의 정보를 어떻게 확인하지?
  //       withCredentials: true,
  //       headers: {
  //         Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
  //       },
  //     })
  //     .then(response => {
  //       setIsLogin(response.data.memberStatus);
  //       setUserInfo(response.data);
  //       navigate('/questions');
  //     })
  //     .catch(err => console.log(err));
  // };

  // useEffect(() => {
  //   authStatusHandler();
  // }, []);

  return (
    <div className="App">
      {/* <Header isLogin={isLogin} setIsLogin={setIsLogin} /> */}
      <Header />
      <MainContainer>
        <Routes>
          <Route path="/" element={<Questions />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/:question-id" element={<QuestionDetail />} />
          <Route path="/:question-id/edit" element={<QuestionEdit />} />
          <Route path="/add" element={<QuestionAdd />} />
          <Route path="/:answer-id/edit" element={<AnswerEdit />} />
          {/* <Route path="/mypage" element={<MyPage userInfo={userInfo} />} /> */}
          <Route path="/mypage" element={<MyPage />} />
          {/* <Route path="/mypage/edit" element={<MyPageEdit userInfo={userInfo} />} /> */}
          <Route path="/mypage/edit" element={<MyPageEdit />} />
        </Routes>
      </MainContainer>
    </div>
  );
};

const MainContainer = styled.main`
  width: 100%;
  height: 100%;
  padding-top: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default App;
