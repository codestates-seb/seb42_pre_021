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
        <HeaderBackgroundgWrapper>
          <h1>Ask a public qeustion</h1>
        </HeaderBackgroundgWrapper>
        <NoticeWrapper>
          <NoticeContainer>
            <h2>Writing a good question</h2>
            <p>
              You’re ready to <Linkto>ask</Linkto> a <Linkto>programming-related question</Linkto>{' '}
              and this form will help guide you through the process.
              <br />
              Looking to ask a non-programming question? See <Linkto>the topics here</Linkto> to
              find a relevant site.
            </p>
            <h5>Steps</h5>
            {stepList.map((step, idx) => {
              return <li key={idx}>{step}</li>;
            })}
          </NoticeContainer>
        </NoticeWrapper>

        <TextEditor />
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: #f1f2f3;
`;

const Wrapper = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  border: 1px solid red;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 3%;
  width: 1310px;

  @media screen and (max-width: 1023px) {
    width: 100%;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

const HeaderBackgroundgWrapper = styled.div`
  background-image: url('https://cdn.sstatic.net/Img/ask/background.svg?v=2e9a8205b368');
  height: 130px;
  display: flex;
  align-items: center;

  @media screen and (min-width: 1050px) {
    height: 130px;
    width: 100%;
    background-position: right;
    background-repeat: no-repeat;
  }

  @media screen and (max-width: 1023px) {
    background-image: none;
    height: 80px;
    font-size: 0.8rem;
  }
`;

const NoticeWrapper = styled.div`
  width: 1024px;
  margin-top: 3.125rem;
  margin-bottom: 3.125rem;
  padding: 0.8rem;
  min-width: fit-content;
  border: 1px solid #ffff;

  @media screen and (min-width: 1023px) {
    width: 100%;
  }

  @media screen and (max-width: 1022px) {
    width: 70%;
    word-wrap: break-word;
    min-width: fit-content;
  }
`;

const NoticeContainer = styled.div`
  min-width: fit-content;
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

  @media screen and (min-width: 1024px) {
    width: 50%;
    word-wrap: break-word;
  }
  @media screen and (max-width: 767px) {
    width: 70%;
    word-wrap: break-word;
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
