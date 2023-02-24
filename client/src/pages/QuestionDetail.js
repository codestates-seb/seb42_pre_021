import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Navigation from 'containers/Navigation';
import SideContent from 'components/SideContent';
import DetailTitle from 'components/DetailTitle';
import Vote from 'components/Vote';
import Answers from 'components/Answers';
import MarkdownContent from 'components/MarkdownContent';
import YourAnswer from 'components/YourAnswer';
import { Container } from 'containers/Container';
import baseURL from 'api/baseURL';
import SignUpModal from 'components/SignUpModal';
// import { useSelector } from 'react-redux';
// import axios from 'axios';

const QuestionDetail = () => {
  const { id } = useParams();
  const [question, setQuestion] = useState({});
  const [isShowModal, setIsShowModal] = useState(false);

  // const { user } = useSelector(state => state.auth);
  // const user = JSON.parse(localStorage.getItem('user'));

  const getQuestionData = async () => {
    // const memberId = user ? user.memberId : 0;
    // const headers = {
    //   Authorization: `Bearer ${user.authorization}`,
    //   refresh: `Bearer ${user.refresh}`,
    //   'Content-Type': 'Application/json',
    //   'Access-Control-Allow-Origin': '*',
    // };
    // const params = {
    //   page: 1,
    //   size: 10,
    //   sortDir: 'DESC',
    //   sortBy: 'createdAt',
    //   memberId,
    // };

    // ^ json-server 테스트용 코드
    await baseURL.get(`/questions/${id}`).then(response => {
      setQuestion(response.data);
    });

    // await axios({
    //   url: `/questions/${id}`,
    //   method: 'get',
    //   withCredentials: true,
    //   headers,
    //   params,
    // }).then(response => setQuestion(response.data.data));
  };

  // useEffect(() => {
  //   window.scrollTo({
  //     top: 0,
  //   });
  // }, [window.scrollY]);

  useEffect(() => {
    getQuestionData();
  }, []);

  return (
    <>
      <Container>
        <Navigation />
        <DetailTitle question={question} />
        <ContentSection>
          <Wrapper>
            <div className="question_content">
              {question.voteCount && (
                <Vote
                  count={question.voteCount}
                  id={question.questionId}
                  type="questions"
                  bookmark={question.bookmark}
                  setIsShowModal={setIsShowModal}
                />
              )}
              <MarkdownContent data={question} />
            </div>
            {question.questionAnswers ? (
              <Answers data={question} setIsShowModal={setIsShowModal} />
            ) : null}
            <YourAnswer questionId={question.questionId} />
          </Wrapper>
          <SideContent />
        </ContentSection>
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
