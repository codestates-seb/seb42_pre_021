// eslint-disable-next-line
import { Route } from 'react-router-dom';
// eslint-disable-next-line
import { Routes } from 'react-router-dom';
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
import Footer from 'containers/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <MainContainer>
        <Routes>
          <Route path="/" element={<Questions />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/:id" element={<QuestionDetail />} />
          <Route path="/:id/edit" element={<QuestionEdit />} />
          <Route path="/add" element={<QuestionAdd />} />
          <Route path="/:id/answer-edit" element={<AnswerEdit />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/mypage/edit" element={<MyPageEdit />} />
        </Routes>
        <ToastContainer />
      </MainContainer>
      <Footer />
    </div>
  );
};

const MainContainer = styled.main`
  width: 100%;
  height: max-content;
  padding-top: 3rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  /* flex-direction: column; */
  flex-wrap: wrap;
`;

export default App;
