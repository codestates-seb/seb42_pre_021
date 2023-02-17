import AnswerEdit from 'pages/AnswerEdit';
import Login from 'pages/Login';
import MyPage from 'pages/MyPage';
import MyPageEdit from 'pages/MyPageEdit';
import QuestionAdd from 'pages/QuestionAdd';
import QuestionDetail from 'pages/QuestionDetail';
import QuestionEdit from 'pages/QuestionEdit';
import Questions from 'pages/Questions';
import SignUp from 'pages/SignUp';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import styled from 'styled-components';
import Header from './containers/Header';

const App = () => {
  return (
    <div className="App">
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
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/mypage/edit" element={<MyPageEdit />} />
        </Routes>
      </MainContainer>
    </div>
  );
};

const MainContainer = styled.main`
  width: 100%;
  height: 200%;
  padding-top: 3rem;
`;

export default App;
