import { useEffect, useState } from 'react';
import styled from 'styled-components';
import AddButton from './AddButton';
import ListSort from './ListSort';
import QuestionArticle from './QuestionArticle';
import { useNavigate } from 'react-router-dom';
import baseURL from 'api/baseURL';
// import Paging from './Paging';

const QuestionList = () => {
  const navigate = useNavigate();
  const [questionList, setQuestionList] = useState([]);
  const [sortBy, setSortBy] = useState('createdAt');
  // const [pageInfo, setPageInfo] = useState({});
  // const [page, setPage] = useState(1);
  // const [size, setSize] = useState(10);

  const getQuestionsData = async () => {
    await baseURL.get('/questions').then(response => setQuestionList(response.data));
  };

  // ! 서버 연동시 사용할 코드
  // const getQuestions = async () => {
  //   let sortDir = 'ASC';
  //   if (sortBy === 'createdAt') {
  //     sortDir = 'DESC'
  //   }
  //   await baseURL.get('/questions', {
  //     page,
  //     size,
  //     sortDir,
  //     sortBy,
  //     memberId
  //   }).then((response) => {
  //     setQuestionList(response.data);
  //     setPageInfo(response.pageInfo);
  //   })
  // }

  useEffect(() => {
    getQuestionsData();
  }, []);

  // ! 서버 연동시 사용할 코드
  // useEffect(() => {
  //   getQuestions();
  // }, [sortBy, page, size])

  const handleAskButtonClick = () => {
    navigate('/add');
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
      {/* <Paging sortBy={sortBy} page={page} setPage={setPage} size={size} setSize={setSize} total={pageInfo.totalElements} /> */}
      {/* <Paging /> */}
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
