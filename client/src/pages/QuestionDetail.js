import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import Navigation from 'containers/Navigation';
import { NavSection } from 'components/NavSection';
import SideContent from 'components/SideContent';
import AddButton from 'components/AddButton';
import Footer from 'containers/Footer';

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
        <NavSection>
          <Navigation />
        </NavSection>
        <TitleSection>
          <div>
            <h1>{question.title}</h1>
            <AddButton />
          </div>
          <ul>
            <p>Asked</p>
            <li>{new Date(question.createdAt).toLocaleString()}</li>
            <p>Modefied</p>
            <li>{new Date(question.modifiedAt).toLocaleString()}</li>
            <p>Viewed</p>
            <li>{question.viewCount}</li>
          </ul>
        </TitleSection>
        <ContentSection>
          <Content>sfsdsgsdg</Content>
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
`;

const ContentSection = styled.section`
  width: 100%;
  display: flex;
  @media screen and (max-width: 1279px) {
    display: grid;
    grid-template-columns: calc(100% - 21rem) 21rem;
  }

  @media screen and (max-width: 979px) {
    grid-template-columns: 1fr;
  }
`;

const TitleSection = styled.section`
  width: calc(100% - 1.5rem);
  margin-left: 1.5rem;
  padding: 1.5rem 1rem 1rem 0;
  border-bottom: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
  }
  > ul {
    list-style: none;
    display: flex;
    gap: 0.5rem;
    font-size: 0.8rem;
    > li {
      margin-right: 1rem;
    }
  }
`;

const Content = styled.div`
  width: 48rem;
  margin-right: 1rem;
  padding: 1rem;
  padding-left: 1.5rem;
  @media screen and (max-width: 1279px) {
    width: 100%;
    margin-right: 0;
  }

  @media screen and (max-width: 979px) {
  }
`;

export default QuestionDetail;
