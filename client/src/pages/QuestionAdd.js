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
        <TitleWrapper>
          <TitleContainer>
            <Label>Title</Label>
            <span>Be specific and imagine you’re asking a question to another person.</span>
            <Input placeholder="  e.g Is there an R function for finding the index of an element in a vector?"></Input>
          </TitleContainer>
        </TitleWrapper>
        <TitleWrapper>
          <TitleContainer>
            <Label>What are the details of your problem?</Label>
            <span>
              Introduce the problem and expand on what you put in the title. Minimum 20 characters.
            </span>
            <TextEditor />
          </TitleContainer>
        </TitleWrapper>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: #f8f9f9;
`;

const Wrapper = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  border: 1px solid red;
  flex-direction: column;
  align-items: center;
  padding: 0 3%;
  width: 1310px;
  overflow: auto;

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
  width: 80%;

  @media screen and (min-width: 1050px) {
    height: 130px;
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
  width: 100%;
  margin-top: 3.125rem;
  margin-bottom: 1.5rem;
  padding: 0.8rem;
  min-width: fit-content;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1022px) {
    width: 70%;
    word-wrap: break-word;
    min-width: fit-content;
  }
`;

const NoticeContainer = styled.div`
  min-width: fit-content;
  width: 80%;
  background-color: #ebf4fb;
  border: 1px solid #a6ceed;
  border-radius: 0.2rem;
  padding: 2rem;
  word-wrap: break-word;

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
  @media screen and (max-width: 767px) {
    width: 70%;
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

const TitleWrapper = styled.div`
  min-width: fit-content;
  word-wrap: break-word;
  width: 100%;
  height: 12rem;
  padding: 0.8rem;
  border-radius: 0.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TitleContainer = styled.div`
  min-width: fit-content;
  width: 80%;
  height: 10rem;
  background-color: #ffffff;
  border: 1px solid #e3e6e8;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  border-radius: 0.2rem;

  > span {
    font-size: 0.85rem;
  }
`;

const Label = styled.label`
  width: 90%;
  font-size: 1rem;
  font-weight: 700;
  margin: 0.8rem 0 0.5rem 0;
`;

const Input = styled.input`
  width: 95%;
  height: 2rem;
  margin-top: 0.5rem;
  border-style: none;
  border-radius: 0.2rem;
  border: 1px solid #babfc4;
`;

export default QuestionAdd;
