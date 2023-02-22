import QuestionList from 'components/QuestionList';
import SideContent from 'components/SideContent';
import Footer from 'containers/Footer';
import Navigation from 'containers/Navigation';
import styled from 'styled-components';

const Questions = () => {
  return (
    <>
      <Navigation />
      <Container>
        <QuestionSection>
          <QuestionList />
        </QuestionSection>
        <SideContent />
      </Container>
      <Footer />
    </>
  );
};

const Container = styled.div`
  width: 1280px;
  height: fit-content;
  display: flex;
  padding-top: 1rem;
  justify-content: space-between;
  padding-left: 11rem;
  @media screen and (max-width: 1279px) {
    width: 100%;
    display: grid;
    grid-template-columns: calc(100% - 17rem) 17rem;
  }
  @media screen and (max-width: 979px) {
    grid-template-columns: 1fr;
  }
  @media screen and (max-width: 640px) {
    padding-left: 0;
  }
`;

const QuestionSection = styled.div`
  width: 51rem;
  @media screen and (max-width: 1280px) {
    width: 100%;
  }
`;

export default Questions;
