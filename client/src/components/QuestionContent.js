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
    <ContentWrapper>
      <div className="content" dangerouslySetInnerHTML={handleHTML(content)}></div>
    </ContentWrapper>
  );
};

const ContentWrapper = styled.div`
  width: 100%;
  min-height: 10rem;
  height: fit-content;
  padding-top: 0.5rem;
  p > code {
    background-color: #eee;
    border-radius: 0.2rem;
    padding: 0.1rem 0.2rem;
  }
  pre > code {
    background-color: #eee;
    border-radius: 0.3rem;
    display: block;
    margin: 0.5rem auto;
    padding: 0.5rem;
    overflow: auto;
  }
`;

export default QuestionContent;
