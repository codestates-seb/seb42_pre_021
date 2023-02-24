import TextEditor from 'components/Editor';
import { HowToEdit, HowToFormat, CancelButton, TopNotice } from 'components/edit';
import { Container } from 'containers/Container';
import Navigation from 'containers/Navigation';
// eslint-disable-next-line
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
// eslint-disable-next-line
import { useRef } from 'react';
import styled from 'styled-components';
import AddButton from 'components/AddButton';
import baseURL from 'api/baseURL';
import { toast } from 'react-toastify';
// import { useSelector } from 'react-redux';
// import axios from 'axios';

const AnswerEdit = () => {
  const navigate = useNavigate();
  const answerEditRef = useRef();
  const location = useLocation();
  const { title, markdown, answerId } = location.state;

  // const { user } = useSelector(state => state.auth);
  // const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    console.log(answerId, title);
  }, []);

  const handleClickTitle = () => {
    navigate(-1);
  };

  const handleSubmit = async () => {
    const markdownValue = answerEditRef.current?.getInstance().getMarkdown();
    const htmlValue = answerEditRef.current?.getInstance().getHTML();
    // const headers = {
    //   Authorization: `Bearer ${user.authorization}`,
    //   refresh: `Bearer ${user.refresh}`,
    //   'Content-Type': 'Application/json',
    // };
    await baseURL
      .patch(`/answers/${answerId}`, {
        html: htmlValue,
        markdown: markdownValue,
      })
      .catch(err => {
        console.log(err.message);
      });

    // ! 서버 연동시 사용할 코드
    // await axios({
    //   url: `/answers/${answerId}`,
    //   method: 'patch',
    //   data: {
    //       html: htmlValue,
    //       markdown: markdownValue,
    //   },
    //   headers,
    //   withCredentials: true,
    // }).catch(err => {
    //   console.log(err.message);
    // });
    navigate(-1);
    toast.success('수정이 완료되었습니다');
  };

  return (
    <Container>
      <Navigation />
      <Wrapper>
        <EditSection>
          <TopNotice />
          <QuestionTitle onClick={handleClickTitle}>{title}</QuestionTitle>
          <BodyEditWrapper>
            <h1>Answer</h1>
            <TextEditor editorRef={answerEditRef} editorValue={markdown} editorHeight="400px" />
          </BodyEditWrapper>
          <AddButton buttonText="Save edits" handleButtonClick={handleSubmit} />
          <CancelButton />
        </EditSection>
        <div>
          <SideNotice>
            <HowToEdit />
            <HowToFormat />
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

const QuestionTitle = styled.div`
  width: fit-content;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
  color: #0b95ff;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
`;

const BodyEditWrapper = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  > h1 {
    font-size: 1.2rem;
    margin: 1rem 0;
    cursor: pointer;
  }
  div {
    width: 100%;
  }
  .toastui-editor-toolbar {
    overflow: hidden;
  }
  .toastui-editor-main {
    :has(.ProseMirror-focused) {
      border-radius: 3px;
      border: 1px solid blue;
      outline: 4px solid #ddeaf7;
    }
  }
  @media screen and (max-width: 640px) {
    width: calc(100vw - 2rem);
  }
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

export default AnswerEdit;
