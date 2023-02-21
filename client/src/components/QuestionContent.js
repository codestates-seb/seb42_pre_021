import styled from 'styled-components';

const QuestionContent = ({ content }) => {
  const handleHTML = str => {
    if (str !== undefined) {
      console.log(str);
      const { html } = str;
      return { __html: html };
    }
    return { __html: '' };
  };

  return (
    <MarkdownDesign>
      <div className="content" dangerouslySetInnerHTML={handleHTML(content)}></div>
    </MarkdownDesign>
  );
};

const MarkdownDesign = styled.div`
  font-size: 0.9rem;
  width: 100%;
  min-height: 10rem;
  height: fit-content;
  padding-top: 0.5rem;
  padding-left: 4rem;
  max-width: 100%;
  .content {
    width: 100%;
    p > code {
      background-color: #e4e5e7;
      padding: 1px 2px;
      border-radius: 2px;
    }
    .toastui-editor-ww-code-block {
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
