import styled from 'styled-components';

const Tags = ({ data }) => {
  return (
    <TagWrapper>
      {data.questionTags.map((tag, idx) => {
        return <li key={idx}>{tag}</li>;
      })}
    </TagWrapper>
  );
};

const TagWrapper = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0.5rem;
  li {
    background-color: #e1ecf4;
    padding: 0.2rem 0.5rem;
    border-radius: 0.2rem;
    font-size: 0.8rem;
    color: #0074cc;
    cursor: pointer;
    :hover {
      background-color: #d0e3f1;
      color: #2c5877;
    }
  }
`;

export default Tags;
