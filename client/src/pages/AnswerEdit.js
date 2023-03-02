import TextEditor from 'components/Editor';
import { HowToEdit, HowToFormat, CancelButton, TopNotice } from 'components/QuestionAnswerEdit';
import { Container } from 'containers/Container';
import Navigation from 'containers/Navigation';
// eslint-disable-next-line
import { useLocation, useNavigate, useParams } from 'react-router-dom';
// eslint-disable-next-line
import { useRef, useState } from 'react';
import styled from 'styled-components';
import AddButton from 'components/AddButton';
import { toast } from 'react-toastify';
import customAxios from 'api/baseURL';

const AnswerEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const answerEditRef = useRef();
  const location = useLocation();
  const { title, markdown, answerId } = location.state;
  const [isChanged, setIsChanged] = useState(false);

  const handleEditorChange = () => {
    const ref = answerEditRef.current?.getInstance().getMarkdown();
    if (ref === markdown) {
      setIsChanged(false);
    } else {
      setIsChanged(true);
    }
  };

  const handleClickTitle = () => {
    navigate(`../${id}`);
  };

  const handleSubmit = async () => {
    // * 변한 내용이 없을 때
    if (!isChanged) {
      toast.error('Nothing has changed!!');
      return;
    }

    const markdownValue = answerEditRef.current?.getInstance().getMarkdown();
    const htmlValue = answerEditRef.current?.getInstance().getHTML();

    await customAxios
      .patch(`/answers/${answerId}`, {
        html: htmlValue,
        markdown: markdownValue,
      })
      .catch(err => {
        console.log(err.message);
      });
    navigate(`../${id}`);
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
            <div className={isChanged ? 'changed' : 'not_changed'}>
              <TextEditor
                editorRef={answerEditRef}
                editorValue={markdown}
                editorHeight="400px"
                onEditorChange={handleEditorChange}
              />
              {!isChanged ? (
                <span>It looks like your post is not changed; please add some more details.</span>
              ) : null}
            </div>
          </BodyEditWrapper>
          <AddButton buttonText="Save edits" handleButtonClick={handleSubmit} />
          <CancelButton id={id} isChanged={isChanged} />
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
  .changed {
    .toastui-editor-main {
      :has(.ProseMirror-focused) {
        border-radius: 3px;
        border: 1px solid blue;
        outline: 4px solid #ddeaf7;
      }
    }
  }
  .not_changed {
    .toastui-editor-main {
      :has(.ProseMirror-focused) {
        border-radius: 3px;
        border: 1px solid red;
        outline: 4px solid #f8e1e0;
      }
    }
    .toastui-editor-main {
      border: 1px solid red;
    }
    > span {
      font-size: 0.8rem;
      margin-top: 1rem;
      color: #d0393e;
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
