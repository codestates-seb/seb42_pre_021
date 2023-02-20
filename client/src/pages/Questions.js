import Notices from 'components/Notices';
import QuestionList from 'components/QuestionList';
import Navigation from 'containers/Navigation';
import styled from 'styled-components';

const Questions = () => {
  return (
    <>
      <Container>
        <NavSection>
          <Navigation />
        </NavSection>
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

const Container = styled.div`
  width: 1280px;
  height: 100%;
  display: flex;
  padding: 0 1rem;
  padding-top: 2rem;
  justify-content: space-between;
  position: relative;
  padding-left: 11rem;
  @media screen and (max-width: 1279px) {
    display: grid;
    grid-template-columns: 7fr 3fr;
  }
  @media screen and (max-width: 949px) {
    grid-template-columns: 1fr;
  }
`;

const NavSection = styled.section`
  width: fit-content;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0.2rem;
  background-color: white;
  box-shadow: 5px 0px 5px rgba(0, 0, 0, 0.1);
  /* background-color: red; */
  @media screen and (max-width: 1279px) {
    position: fixed;
    left: 0;
    top: 3.2rem;
  }
`;

const QuesionSection = styled.section`
  /* border: 2px solid red; */
  width: 48rem;
  height: fit-content;
  @media screen and (max-width: 1280px) {
    width: 100%;
  }
`;

const SideContent = styled.aside`
  /* border: 2px solid greenyellow; */
  width: 19rem;
  height: 100%;
  @media screen and (max-width: 1280px) {
    width: 100%;
  }
`;

export default Questions;
