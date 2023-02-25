import baseURL from 'api/baseURL';
import { useRef } from 'react';
import styled from 'styled-components';
import AddButton from 'components/AddButton';
import TextEditor from 'components/Editor';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
// import axios from 'axios';

const YourAnswer = ({ questionId }) => {
  const answerRef = useRef('');
  const { user } = useSelector(state => state.auth);
  // const user = JSON.parse(localStorage.getItem('user'));

  const handlePostButton = async () => {
    const html = answerRef.current?.getInstance().getHTML();
    const markdown = answerRef.current?.getInstance().getMarkdown();

    // * 내용이 없을 시 경고문 & return
    if (markdown === ' ' || !markdown.length) {
      toast.error('내용을 작성해주세요!');
      return;
    }

    // ^ json-server 테스트용 코드
    await baseURL.post('/answers', {
      questionId,
      markdown,
      html,
      memberId: user.memberId,
    });

    // ! 서버 연동시 사용할 코드
    // const headers = {
    //   Authorization: `Bearer ${user.authorization}`,
    //   refresh: `Bearer ${user.refresh}`,
    //   'Content-Type': 'Application/json',
    // };
    //
    // await axios({
    //   url: '/answers',
    //   method: 'post',
    //   data: {
    //     questionId,
    //     content: {
    //       markdown,
    //       html,
    //     },
    //     memberId: user.memberId,
    //   },
    //   withCredentials: true,
    //   headers,
    // });
    location.reload();
    toast.success('답변이 등록되었습니다!');
  };

  return (
    <YourAnswerWrapper>
      <h1>Your Answer</h1>
      <TextEditor editorRef={answerRef} editorValue={' '} editorHeight="16rem" />
      <ButtonWrapper>
        <AddButton
          buttonText="Post Your Answer"
          handleButtonClick={handlePostButton}
          isDisabled={!user ? true : false}
        />
        {!user && (
          <div>
            To answer a question, you must either sign up for an account or post as a guest.
          </div>
        )}
      </ButtonWrapper>
      <p>
        Not the answer you&apos;re looking for?&nbsp;<Link to="/add">ask your own question.</Link>
      </p>
    </YourAnswerWrapper>
  );
};

const YourAnswerWrapper = styled.div`
  width: 100%;
  margin-top: 1rem;
  > h1 {
    font-size: 1.1rem;
    margin-bottom: 1rem;
    font-weight: 500;
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
  > p {
    display: flex;
    align-items: center;
    font-size: 1.1rem;
    flex-wrap: wrap;
    margin-bottom: 2rem;
    > a {
      text-decoration: none;
      color: #0b95ff;
    }
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  margin: 1rem 0;
  margin-bottom: 2rem;
  position: relative;
  > button {
  }
  :hover {
    > div {
      display: block;
    }
  }
  > div {
    display: none;
    position: absolute;
    width: fit-content;
    padding: 8px;
    left: 0;
    top: 3.5rem;
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    border-radius: 8px;
    background: #c22e32;
    color: #fff;
    font-size: 14px;
    ::after {
      position: absolute;
      bottom: 100%;
      left: 2rem;
      width: 0;
      height: 0;
      margin-left: -10px;
      border: solid transparent;
      border-color: rgba(51, 51, 51, 0);
      border-bottom-color: #c22e32;
      border-width: 10px;
      pointer-events: none;
      content: ' ';
    }
  }
`;

export default YourAnswer;
