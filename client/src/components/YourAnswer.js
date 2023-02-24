import baseURL from 'api/baseURL';
import { useRef } from 'react';
import styled from 'styled-components';
import AddButton from './AddButton';
import TextEditor from './Editor';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
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
      content: {
        markdown,
        html,
      },
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

    toast.success('답변이 등록되었습니다!');
  };

  return (
    <YourAnswerWrapper>
      <h1>Your Answer</h1>
      <TextEditor editorRef={answerRef} editorValue={' '} editorHeight="16rem" />
      <AddButton buttonText="Post Your Answer" handleButtonClick={handlePostButton} />
    </YourAnswerWrapper>
  );
};

const YourAnswerWrapper = styled.div`
  width: 100%;
  height: 18rem;
  margin-top: 1rem;
  margin-bottom: 6rem;
  > h1 {
    font-size: 1.1rem;
    margin-bottom: 1rem;
    font-weight: 500;
  }
  > button {
    margin: 1.5rem 0 3rem 0;
  }
`;

export default YourAnswer;
