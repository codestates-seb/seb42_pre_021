import styled from 'styled-components';
import EditAndProfile from './EditAndProfile';
import Tags from './Tags';

const MarkdownContent = ({ data, isAnswer }) => {
  const handleHTML = str => {
    if (str.content !== undefined) {
      const { html } = str.content;
      return { __html: html };
    }
    return { __html: '' };
  };

  return (
    <>
      {data.createdAt && (
        <MarkdownDesign className={isAnswer ? 'answer_markdown' : null}>
          <div className="content" dangerouslySetInnerHTML={handleHTML(data)}></div>
          {data.tag && <Tags data={data} />}
          <EditAndProfile member={data.questionMember} date={data.createdAt} isAnswer={isAnswer} />
        </MarkdownDesign>
      )}
    </>
  );
};

const MarkdownDesign = styled.div`
  font-size: 0.9rem;
  width: 100%;
  min-height: 10rem;
  height: fit-content;
  padding: 0.5rem 0 2rem 4rem;
  .content {
    width: 100%;
    margin-bottom: 2rem;
    p > code {
      // * 인라인 코드
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
        // * 코드 블럭
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

export default MarkdownContent;
