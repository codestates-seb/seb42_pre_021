import { useRef } from 'react';
import styled from 'styled-components';
import AddButton from './AddButton';
import TextEditor from './Editor';

const YourAnswer = () => {
  const answerRef = useRef('');
  // ! 버튼 핸들러 함수 구현 필요
  const handlePostButton = () => {
    console.log('html', answerRef.current?.getInstance().getHTML());
    console.log('markdown', answerRef.current?.getInstance().getMarkdown());
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
