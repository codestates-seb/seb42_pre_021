import { useState } from 'react';
import styled from 'styled-components';
import AnswerSort from './AnswerSort';

const Answers = ({ answers }) => {
  const [answerSortBy, setAnswerSortBy] = useState('created_newest');

  return (
    <AnswerWrapper>
      <AnswerHead>
        <h1>
          {answers.length} {answers.length === 1 ? 'Answer' : 'Answers'}
        </h1>
        <AnswerSort answerSortBy={answerSortBy} setAnswerSortBy={setAnswerSortBy} />
      </AnswerHead>
    </AnswerWrapper>
  );
};

const AnswerWrapper = styled.div`
  border: 3px dotted red;
  width: 100%;
  height: 20rem;
`;

const AnswerHead = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > h1 {
    font-size: 1.1rem;
  }
`;

export default Answers;
