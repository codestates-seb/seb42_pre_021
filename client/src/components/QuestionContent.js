import styled from 'styled-components';
import EditAndProfile from './EditAndProfile';
import Tags from './Tags';

const QuestionContent = ({ question }) => {
  const handleHTML = str => {
    if (str.content !== undefined) {
      const { html } = str.content;
      return { __html: html };
    }
    return { __html: '' };
  };

  return (
    <ContentDesign>
      <div className="content" dangerouslySetInnerHTML={handleHTML(question)}></div>
      <Tags question={question} />
      <EditAndProfile member={question.questionMember} asked={question.createdAt} />
    </ContentDesign>
  );
};

const ContentDesign = styled.div`
  font-size: 0.9rem;
  width: 100%;
  min-height: 10rem;
  height: fit-content;
  padding-top: 0.5rem;
  margin-bottom: 3rem;
  padding-left: 4rem;
  .content {
    width: 100%;
    margin-bottom: 2rem;
    p > code {
      background-color: #e4e5e7;
      padding: 1px 2px;
      border-radius: 2px;
    }
    .toastui-editor-ww-code-block {
      max-width: 100%;
      width: 100%;
      pre {
        width: 100%;
      }
      pre > code {
        display: inline-block;
        overflow: auto;
        width: 100%;
        background-color: #f6f6f6;
        padding: 1rem;
        border-radius: 0.5rem;
        margin: 0.5rem 0;
      }
    }
  }
`;

export default QuestionContent;
