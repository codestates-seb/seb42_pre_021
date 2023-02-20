import styled from 'styled-components';
import TextEditor from 'components/Editor';
import { Link } from 'react-router-dom';

const stepList = [
  'Summarize your problem in a one-line title.',
  'Describe your problem in more detail.',
  'Describe what you tried and what you expected to happen.',
  'Add “tags” which help surface your question to members of the community.',
  'Review your question and post it to the site.',
];

const QuestionAdd = () => {
  return (
    <Container>
      <Wrapper>
        <TipWrapper>
          <BackgroundWrapper>
            <h1>Ask a public qeustion</h1>
          </BackgroundWrapper>
        </TipWrapper>
        <NoticeContainer>
          <h2>Writing a good question</h2>
          <p>
            You’re ready to <Linkto>ask</Linkto> a <Linkto>programming-related question</Linkto> and
            this form will help guide you through the process.
            <br />
            Looking to ask a non-programming question? See <Linkto>the topics here</Linkto> to find
            a relevant site.
          </p>
          <h5>Steps</h5>
          {stepList.map((step, idx) => {
            return <li key={idx}>{step}</li>;
          })}
        </NoticeContainer>
        <TextEditor />
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f1f2f3;
`;

const Wrapper = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #f1f2f3;
`;

const TipWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 2rem;
  padding: 1rem;

  h1 {
    height: 130px;
    flex-grow: 1;
  }
`;

const BackgroundWrapper = styled.div`
  @media screen and (min-width: 1050px) {
    background-image: url('https://cdn.sstatic.net/Img/ask/background.svg?v=2e9a8205b368');
    height: 130px;
    background-position: right bottom;
    background-repeat: no-repeat;
    flex-grow: 1;
  }
`;

const NoticeContainer = styled.div`
  width: 100%;
  background-color: #ebf4fb;
  border: 1px solid #a6ceed;
  border-radius: 0.2rem;
  padding: 2rem;

  p {
    margin-top: 1rem;
    font-size: 0.95rem;
  }

  h5 {
    margin: 1rem 0 0.3rem 0;
  }

  li {
    font-size: 0.8rem;
  }
`;

const Linkto = styled(Link)`
  color: #3b95ff;
  font-size: 0.9rem;
  text-decoration: none;
  &:hover,
  &:focus {
    color: #80bbff;
  }
`;

export default QuestionAdd;
