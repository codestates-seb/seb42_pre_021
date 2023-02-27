import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  DetailTitle,
  Vote,
  Answers,
  MarkdownContent,
  YourAnswer,
  SignUpModal,
} from 'components/QuestionDetail';
import { SideContent } from 'components/Questions';
import styled from 'styled-components';
import Navigation from 'containers/Navigation';
import { Container, LoadingContainer } from 'containers/Container';
import { useSelector } from 'react-redux';
import customAxios from 'api/baseURL';
import Spinner from 'components/Spinner';
// import baseURL from 'api/baseURL';

const QuestionDetail = () => {
  const { id } = useParams();
  const [question, setQuestion] = useState({});
  const [isShowModal, setIsShowModal] = useState(false);
  const [answerSort, setAnswerSort] = useState({
    by: 'createdAt',
    dir: 'DESC',
  });
  const [isLoading, setIsLoading] = useState(true);

  const { user } = useSelector(state => state.auth);
  // const user = JSON.parse(localStorage.getItem('user'));

  const getQuestionData = async () => {
    const memberId = user ? user.memberId : 0;

    const params = {
      page: 1,
      size: 10,
      sortDir: answerSort.dir,
      sortBy: answerSort.by,
      memberId,
    };

    await customAxios
      .get(`questions/${id}`, {
        params,
      })
      .then(response => {
        setQuestion(response.data.data);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getQuestionData();
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 150);
  }, []);

  return (
    <>
      <Container>
        <Navigation />
        {!isLoading ? (
          <>
            <DetailTitle question={question} />
            <ContentSection>
              <Wrapper>
                <div className="question_content">
                  {question.questionBookmark && (
                    <Vote
                      count={question.voteCount}
                      id={question.questionId}
                      type="questions"
                      bookmark={question.questionBookmark}
                      setIsShowModal={setIsShowModal}
                    />
                  )}
                  <MarkdownContent data={question} />
                </div>
                {question.questionAnswers ? (
                  <Answers
                    data={question}
                    setIsShowModal={setIsShowModal}
                    setAnswerSort={setAnswerSort}
                  />
                ) : null}
                <YourAnswer questionId={question.questionId} />
              </Wrapper>
              <SideContent />
            </ContentSection>
          </>
        ) : (
          <LoadingContainer>
            <Spinner />
          </LoadingContainer>
        )}
      </Container>
      {isShowModal && <SignUpModal setIsShowModal={setIsShowModal} />}
    </>
  );
};

const ContentSection = styled.section`
  width: 100%;
  display: flex;
  @media screen and (max-width: 1279px) {
    display: grid;
    grid-template-columns: calc(100% - 17rem) 17rem;
  }
  @media screen and (max-width: 979px) {
    grid-template-columns: 1fr;
  }
`;

const Wrapper = styled.div`
  width: 51rem;
  height: fit-content;
  padding: 1rem;
  padding-left: 1.5rem;
  padding-right: 2rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  .question_content {
    position: relative;
    width: 100%;
  }
  @media screen and (max-width: 1279px) {
    width: 100%;
  }
  @media screen and (max-width: 979px) {
    padding-right: 1.5rem;
  }
`;

export default QuestionDetail;
