import { useRef } from 'react';
import styled from 'styled-components';
import AddButton from './AddButton';
import TextEditor from './Editor';

const YourAnswer = () => {
  const answerRef = useRef('');

  return (
    <YourAnswerWrapper>
      <h1>Your Answer</h1>
      <TextEditor editorRef={answerRef} editorValue={' '} editorHeight="16rem" />
      <AddButton buttonText="Post Your Answer" handleButtonClick={() => {}} />
    </YourAnswerWrapper>
  );
};

const YourAnswerWrapper = styled.div`
  width: 100%;
  height: 18rem;
  margin-top: 2rem;
  h1 {
    font-size: 1.1rem;
    margin-bottom: 1rem;
    font-weight: 500;
  }
`;

export default YourAnswer;
