import { useEffect, useState } from 'react';
import styled from 'styled-components';
import AddButton from './AddButton';
import ListSort from './ListSort';
import QuestionArticle from './QuestionArticle';
import { useNavigate } from 'react-router-dom';
import baseURL from 'api/baseURL';
import { useSelector } from 'react-redux';

const QuestionList = () => {
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);
  //useSelect는 전역스토어에서 유저의 정보를 가져옵니다. 없으면 null 값입니다.
  //dispatch를 이용하여 get 요청을 날려야하므로 feature 폴더에 관련 api를 작성하세요

  const SORT_BY = ['Newest', 'Oldest', 'Answers', 'Views'];
  const [questionList, setQuestionList] = useState([]);
  const [currentSortBy, setCurrentSortBy] = useState(0);

  const getQuestionsData = async () => {
    await baseURL.get('/questions').then(response => setQuestionList(response.data));
  };

  useEffect(() => {
    getQuestionsData();
  }, []);

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
          <ListSort
            sortby={SORT_BY}
            currentSortBy={currentSortBy}
            setCurrentSortBy={setCurrentSortBy}
          />
        </div>
      </TitleWrapper>
      <QuestionWrapper>
        {questionList.map(question => {
          return <QuestionArticle key={question.questionId} question={question} />;
        })}
      </QuestionWrapper>
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
