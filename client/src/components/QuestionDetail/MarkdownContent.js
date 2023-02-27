import styled from 'styled-components';
import EditAndProfile from './EditAndProfile';
import { Tags } from 'components/Questions';

const MarkdownContent = ({ data, isAnswer, answerId, title }) => {
  const handleHTML = str => {
    if (str !== undefined) {
      return { __html: str };
    }
    return { __html: '' };
  };

  return (
    <>
      {data.createdAt && (
        <MarkdownDesign className={isAnswer ? 'answer_markdown' : null}>
          <div className="content" dangerouslySetInnerHTML={handleHTML(data.html)}></div>
          {data.questionTags && <Tags data={data} />}
          <EditAndProfile
            member={data.questionMember}
            date={data.createdAt}
            isAnswer={isAnswer}
            data={data}
            answerId={answerId}
            title={title}
          />
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
  code {
    font-family: 'Fira Code', monospace;
  }
  .content {
    width: 100%;
    margin-bottom: 2rem;
    p > code {
      // * 인라인 코드
      background-color: #f9f2f4;
      padding: 1px 2px;
      border-radius: 2px;
      color: #c27b8d;
    }
    .toastui-editor-ww-code-block {
      width: 100%;
      pre {
        width: 100%;
        > code {
          // * 코드 블럭
          display: block;
          width: 100%;
          height: fit-content;
          overflow-x: auto;
          background-color: #f4f7f8;
          padding: 1rem;
          border-radius: 0.5rem;
          margin: 0.5rem 0;
        }
      }
    }
  }
`;

export default MarkdownContent;
