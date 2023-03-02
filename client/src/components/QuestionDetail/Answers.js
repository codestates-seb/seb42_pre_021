import styled from 'styled-components';
import AnswerSort from './AnswerSort';
import MarkdownContent from './MarkdownContent';
import Vote from './Vote';

const Answers = ({ data, setIsShowModal, setAnswerSort, answers, answerSort }) => {
  return (
    <>
      {answers.length ? (
        <AnswerWrapper>
          <AnswerHead>
            <h1>
              {answers.length} {answers.length === 1 ? 'Answer' : 'Answers'}
            </h1>
            <AnswerSort setAnswerSort={setAnswerSort} />
          </AnswerHead>
          <AnswerList>
            {answers.map((answer, i) => (
              <div className="answer_content" key={i}>
                <Vote
                  count={answer.voteCount}
                  id={answer.answerId}
                  type="answers"
                  bookmark={answer.answerBookmark}
                  setIsShowModal={setIsShowModal}
                  answerSort={answerSort}
                  setAnswerSort={setAnswerSort}
                />
                <MarkdownContent
                  data={answer}
                  isAnswer={true}
                  answerId={answer.answerId}
                  title={data.title}
                  answerSort={answerSort}
                  setAnswerSort={setAnswerSort}
                />
              </div>
            ))}
          </AnswerList>
        </AnswerWrapper>
      ) : null}
    </>
  );
};

const AnswerWrapper = styled.div`
  width: 100%;
  height: fit-content;
  .answer_markdown {
    border-bottom: 1px solid #ddd;
    margin-bottom: 1rem;
  }
  .answer_content {
    position: relative;
    width: 100%;
  }
`;

const AnswerHead = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 3rem;
  margin-bottom: 1.5rem;
  > h1 {
    font-size: 1.1rem;
    font-weight: 500;
  }
`;

const AnswerList = styled.div`
  width: 100%;
`;

export default Answers;
