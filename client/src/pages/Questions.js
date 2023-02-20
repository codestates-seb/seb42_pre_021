import Colletives from 'components/Colletives';
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
          <Colletives />
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
  padding-top: 1rem;
  justify-content: space-between;
  padding-left: 11rem;
  @media screen and (max-width: 1279px) {
    width: 100%;
    display: grid;
    grid-template-columns: calc(100% - 21rem) 21rem;
  }
  @media screen and (max-width: 979px) {
    grid-template-columns: 1fr;
  }
`;

export const NavSection = styled.section`
  width: fit-content;
  height: 100%;
  position: fixed;
  left: calc(100% - 1280px - (100% - 1280px) / 2);
  top: 3.2rem;
  background-color: white;
  @media screen and (max-width: 1279px) {
    position: fixed;
    left: 0;
    top: 3.2rem;
  }
`;

const QuesionSection = styled.div`
  width: 48rem;
  @media screen and (max-width: 1280px) {
    width: 100%;
  }
`;

const SideContent = styled.aside`
  width: 19rem;
  height: fit-content;
  @media screen and (max-width: 1280px) {
    padding-left: 2rem;
    padding-right: 1rem;
    width: 100%;
  }
`;

export default Questions;
