import styled from 'styled-components';

const TitleEdit = ({ titleValue, setTitleValue, handleSectionClick, setIsQuestionChanged }) => {
  const handleTitleChange = event => {
    const { value } = event.target;
    setTitleValue(value);
    setIsQuestionChanged(cur => cur || true);
  };
  return (
    <TitleEditWrapper onClick={() => handleSectionClick('edit')}>
      <h1>Title</h1>
      <input type="text" value={titleValue} onChange={handleTitleChange} />
    </TitleEditWrapper>
  );
};

const TitleEditWrapper = styled.div`
  width: 100%;
  > h1 {
    font-size: 1rem;
    margin-top: 1rem;
    margin-bottom: 0.3rem;
    cursor: pointer;
  }
  > input {
    width: 100%;
    border: 1px solid #bbb;
    border-radius: 3px;
    padding: 0.3rem 0.5rem;
    :focus {
      border: 1px solid #58a4de;
      outline: 4px solid #ddeaf7;
    }
  }
`;

export default TitleEdit;
