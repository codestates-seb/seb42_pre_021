import styled from 'styled-components';
// import ask_background from 'assets/ask_background';
import TextEditor from 'components/Editor';

const QuestionAdd = () => {
  return (
    <Container>
      <Wrapper>
        <TipWrapper>
          <BackgroundWrapper>
            <h1>Ask a public qeustion</h1>
          </BackgroundWrapper>
        </TipWrapper>
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
`;

const TipWrapper = styled.div`
  display: flex;
  margin-bottom: 2rem;
  h1 {
    height: 130px;
    flex-grow: 1;
    overflow: visible;
  }
`;

const BackgroundWrapper = styled.div`
  width: 100vh;
  @media screen and (min-width: 1050px) {
    background-image: url('https://cdn.sstatic.net/Img/ask/background.svg?v=2e9a8205b368');
    height: 130px;
    background-position: right bottom;
    background-repeat: no-repeat;
    flex-grow: 1;
  }
`;

export default QuestionAdd;
