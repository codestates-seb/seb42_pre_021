import Colletives from 'components/Colletives';
import { Container } from 'components/Container';
import { NavSection } from 'components/NavSection';
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
