import { useEffect, useState } from 'react';
import styled from 'styled-components';
import AddButton from '../AddButton';
import ListSort from './ListSort';
import QuestionArticle from './QuestionArticle';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Paging from './Paging';
import customAxios from 'api/baseURL';
import { LoadingContainer } from 'containers/Container';
import Spinner from 'components/Spinner';

const QuestionList = () => {
  const navigate = useNavigate();
  const { user } = useSelector(state => state.auth);
  const { data } = useSelector(state => state.search);
  // const user = JSON.parse(localStorage.getItem('user'));

  const [questionList, setQuestionList] = useState([]);
  const [sortBy, setSortBy] = useState('createdAt');
  const [pageInfo, setPageInfo] = useState({});
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);
  const [isLoading, setIsLoading] = useState(true);

  const getQuestions = async () => {
    const params = {
      page,
      size,
      sortDir: 'DESC',
      sortBy,
    };
    await customAxios
      .get('/questions', {
        params,
      })
      .then(response => {
        setQuestionList(response.data.data);
        setPageInfo(response.data.pageInfo);
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
      });
  };
  useEffect(() => {
    if (!data) {
      getQuestions();
    } else {
      setQuestionList(data.data);
      setPageInfo(data.pageInfo);
    }
  }, [sortBy, page, size, data]);

  const handleAskButtonClick = () => {
    user ? navigate('/add') : navigate('/login');
  };

  return (
    <>
      {!isLoading ? (
        <>
          <TitleWrapper>
            <div>
              <h1>All Questions</h1>
              <AddButton buttonText="Add Question" handleButtonClick={handleAskButtonClick} />
            </div>
            <div>
              <h2>
                {pageInfo.totalElements.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} questions
              </h2>
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
      ) : (
        <LoadingContainer>
          <Spinner />
        </LoadingContainer>
      )}
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
