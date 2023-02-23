import styled from 'styled-components';

const TagEdit = ({ tags, handleSectionClick }) => {
  return (
    <TagEditWrapper onClick={() => handleSectionClick('tag')}>
      <h1>Tags</h1>
      <TagWrapper>
        {tags.map((tag, i) => (
          <Tag key={i}>{tag}</Tag>
        ))}
        <input type="text" />
      </TagWrapper>
    </TagEditWrapper>
  );
};

const TagEditWrapper = styled.div`
  width: 100%;
  > h1 {
    font-size: 1rem;
    margin-top: 1rem;
    margin-bottom: 0.3rem;
    cursor: pointer;
  }
`;

const TagWrapper = styled.div`
  width: 100%;
  border: 1px solid #bbb;
  border-radius: 3px;
  padding: 0.3rem 0.5rem;
  display: flex;
`;

const Tag = styled.div`
  width: fit-content;
  height: 1.5rem;
  background-color: #e1ecf4;
  margin-right: 0.5rem;
  border-radius: 0.2rem;
  font-size: 0.8rem;
  color: #0074cc;
  padding: 0 0.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default TagEdit;
