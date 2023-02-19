import Notices from 'components/Notices';
import QuestionList from 'components/QuestionList';
import styled from 'styled-components';

const Questions = () => {
  return (
    <>
      <TestNav>네비게이션 공간 테스트용</TestNav>
      <Container>
        <QuesionSection>
          <QuestionList />
        </QuesionSection>
        <SideContent>
          <Notices />
        </SideContent>
      </Container>
    </>
  );
};

const TestNav = styled.nav`
  border: 2px solid blue;
  width: 15rem;
  height: 100%;
  position: fixed;
  top: 3rem;
  left: 5%;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding-top: 2rem;
  padding-left: calc(5% + 15rem);
`;

const QuesionSection = styled.section`
  /* border: 2px solid red; */
  width: 48rem;
  height: fit-content;
`;

const SideContent = styled.aside`
  /* border: 2px solid greenyellow; */
  width: 19rem;
  height: 100%;
`;

export default Questions;
