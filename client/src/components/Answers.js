import { useState } from 'react';
import styled from 'styled-components';
import AnswerSort from './AnswerSort';
import MarkdownContent from './MarkdownContent';

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
      <AnswerList>
        {answers.map((answer, i) => (
          <MarkdownContent key={i} data={answer} isAnswer={true} />
        ))}
      </AnswerList>
    </AnswerWrapper>
  );
};

const AnswerWrapper = styled.div`
  border: 3px dotted red;
  width: 100%;
  height: fit-content;
  .answer_markdown {
    border-bottom: 1px solid #ddd;
  }
`;

const AnswerHead = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 3rem;
  > h1 {
    font-size: 1.1rem;
  }
`;

const AnswerList = styled.div`
  width: 100%;
`;

export default Answers;
