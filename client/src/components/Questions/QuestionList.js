import { useEffect, useState } from 'react';
import styled from 'styled-components';
import AddButton from '../AddButton';
import ListSort from './ListSort';
import QuestionArticle from './QuestionArticle';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Paging from './Paging';

const QuestionList = () => {
  const navigate = useNavigate();
  const { user } = useSelector(state => state.auth);
  // const user = JSON.parse(localStorage.getItem('user'));

  const [questionList, setQuestionList] = useState([]);
  const [sortBy, setSortBy] = useState('createdAt');
  const [pageInfo, setPageInfo] = useState({});
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);

  // ! 서버 연동시 사용할 코드
  const getQuestions = async () => {
    const headers = {
      'Content-Type': 'Application/json',
      'Access-Control-Allow-Origin': '*',
    };
    const params = {
      page,
      size,
      sortDir: 'DESC',
      sortBy,
    };
    await axios({
      url: '/questions',
      method: 'get',
      withCredentials: true,
      headers,
      params,
    })
      .then(response => {
        console.log(response);
        setQuestionList(response.data.data);
        setPageInfo(response.data.pageInfo);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    getQuestions();
  }, [sortBy, page, size]);

  const handleAskButtonClick = () => {
    user ? navigate('/add') : navigate('/login');
  };

  return (
    <>
      <TitleWrapper>
        <div>
          <h1>All Questions</h1>
          <AddButton buttonText="Add Question" handleButtonClick={handleAskButtonClick} />
        </div>
        <div>
          <h2>{questionList.length.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} questions</h2>
          <ListSort sortBy={sortBy} setSortBy={setSortBy} />
        </div>
      </TitleWrapper>
      <QuestionWrapper>
        {questionList.map(question => {
          return <QuestionArticle key={question.questionId} question={question} />;
        })}
      </QuestionWrapper>
      <Paging
        sortBy={sortBy}
        page={page}
        setPage={setPage}
        size={size}
        setSize={setSize}
        total={pageInfo.totalElements}
      />
    </>
  );
};

const TitleWrapper = styled.div`
  background-color: #fff;
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  div {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    :last-of-type {
      margin-top: 1.5rem;
    }
  }
  h1 {
    font-size: 1.5rem;
    font-weight: 600;
  }
  h2 {
    font-size: 1rem;
    font-weight: 500;
    color: #222;
  }
  @media screen and (max-width: 1280px) {
    padding-right: 1rem;
  }
  @media screen and (max-width: 640px) {
    div {
      :last-of-type {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.8rem;
      }
    }
  }
`;

const QuestionWrapper = styled.div`
  width: 100%;
  padding-right: 0.5rem;

  @media screen and (max-width: 1280px) {
    padding-right: 1rem;
  }
  @media screen and (max-width: 979px) {
    padding-right: 0;
  }
`;

export default QuestionList;
