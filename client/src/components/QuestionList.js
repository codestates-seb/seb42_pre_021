import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import AddButton from './AddButton';
import ListSort from './ListSort';
import QuestionArticle from './QuestionArticle';
import { useNavigate } from 'react-router-dom';

const QuestionList = () => {
  const navigate = useNavigate();
  const SORT_BY = ['Newest', 'Oldest', 'Answers', 'Views'];
  const [questionList, setQuestionList] = useState([]);
  const [currentSortBy, setCurrentSortBy] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:3001/questions').then(response => setQuestionList(response.data));
  }, []);
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
