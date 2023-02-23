import {
  TitleEdit,
  BodyEdit,
  TagEdit,
  HowToEdit,
  HowToFormat,
  HowToTag,
} from 'components/editQuestion';
import { Container } from 'containers/Container';
import Navigation from 'containers/Navigation';
import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const QuestionEdit = () => {
  const location = useLocation();
  const { title, content, tags } = location.state;
  const [currentForm, setCurrentForm] = useState('edit');
  const [titleValue, setTitleValue] = useState(title);
  const [tagsArr, setTagsArr] = useState([...tags]);
  const questionEditRef = useRef('');

  useEffect(() => {}, []);

  const handleSectionClick = form => {
    setCurrentForm(form);
  };

  return (
    <Container>
      <Navigation />
      <Wrapper>
        <EditSection>
          <TopNotice>
            Your edit will be placed in a queue until it is peer reviewed.
            <br />
            <br />
            We welcome edits that make the post easier to understand and more valuable for readers.
            Because community members review edits, please try to make the post substantially better
            than how you found it, for example, by fixing grammar or adding additional resources and
            hyperlinks.
          </TopNotice>
          <TitleEdit
            title={title}
            handleSectionClick={handleSectionClick}
            setTitleValue={setTitleValue}
            titleValue={titleValue}
          />
          <BodyEdit
            questionEditRef={questionEditRef}
            content={content}
            handleSectionClick={handleSectionClick}
            currentForm={currentForm}
          />
          <TagEdit
            handleSectionClick={handleSectionClick}
            tagsArr={tagsArr}
            setTagsArr={setTagsArr}
            currentForm={currentForm}
          />
        </EditSection>
        <div>
          <SideNotice>
            {currentForm === 'edit' ? (
              <HowToEdit />
            ) : currentForm === 'format' ? (
              <HowToFormat />
            ) : (
              <HowToTag />
            )}
          </SideNotice>
        </div>
      </Wrapper>
    </Container>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  padding: 1.7rem 0;
  > div {
    :last-of-type {
      width: 23rem;
      height: 100vh;
    }
  }
  @media screen and (max-width: 1279px) {
    display: grid;
    grid-template-columns: calc(100% - 23rem) 23rem;
    padding-right: 1rem;
  }
  @media screen and (max-width: 1049px) {
    grid-template-columns: 100%;
    padding: 1.7rem 1rem;
    > div {
      :last-of-type {
        width: 100%;
        height: auto;
        padding-right: 0;
        margin-top: 2rem;
      }
    }
  }
  @media screen and (max-width: 640px) {
    /* padding: 0; */
  }
`;

const EditSection = styled.section`
  width: 44rem;
  padding: 0 1.7rem;
  @media screen and (max-width: 1279px) {
    width: 100%;
  }
  @media screen and (max-width: 1049px) {
    padding: 0;
  }
`;

const TopNotice = styled.div`
  width: 100%;
  background-color: #fdf7e2;
  padding: 1rem;
  font-size: 0.8rem;
  border-radius: 5px;
  border: 1px solid #f1e5bc;
`;

const SideNotice = styled.aside`
  z-index: 3;
  background-color: #fdf7e2;
  height: fit-content;
  width: 23rem;
  border-radius: 5px;
  border: 1px solid #f1e5bc;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: fixed;
  > div {
    padding: 0.8rem;
    width: 100%;
    background-color: #fbf3d5;
    border-bottom: 1px solid #f1e5bc;
  }
  > ul {
    padding: 1rem 0.8rem;
    padding-left: 1.8rem;
    > li {
      font-size: 0.8rem;
      margin-bottom: 0.5rem;
      :last-of-type {
        margin-bottom: 0;
      }
    }
    .style_none {
      list-style: none;
      margin-left: -0.7rem;
    }
  }
  @media screen and (max-width: 1279px) {
    width: 22.5rem;
  }
  @media screen and (max-width: 1049px) {
    width: 100%;
    position: relative;
    top: auto;
  }
`;

export default QuestionEdit;
