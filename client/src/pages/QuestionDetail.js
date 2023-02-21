import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import Navigation from 'containers/Navigation';
import SideContent from 'components/SideContent';
import Footer from 'containers/Footer';
import DetailTitle from 'components/DetailTitle';
import Vote from 'components/Vote';
import QuestionContent from 'components/QuestionContent';
import Answers from 'components/Answers';

// const USER = '김코딩';

const QuestionDetail = () => {
  const { id } = useParams();
  const [question, setQuestion] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:3001/questions?questionId=${id}`)
      .then(response => setQuestion(response.data[0]));
    console.log(question);
  }, []);

  return (
    <>
      <Container>
        <Navigation />
        <DetailTitle question={question} />
        <ContentSection>
          <Wrapper>
            <div className="question_content">
              <Vote />
              <QuestionContent question={question} />
            </div>
            <Answers />
          </Wrapper>
          <SideContent />
        </ContentSection>
      </Container>
      <Footer />
    </>
  );
};

const Container = styled.div`
  width: 1280px;
  height: fit-content;
  padding-left: 11rem;
  @media screen and (max-width: 640px) {
    padding-left: 0;
  }
`;

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
  padding: 1rem;
  padding-left: 1.5rem;
  padding-right: 2rem;
  display: flex;
  flex-direction: column;
  overflow: auto;
  .question_content {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  @media screen and (max-width: 1279px) {
    width: 100%;
  }
  @media screen and (max-width: 979px) {
  }
`;

export default QuestionDetail;
