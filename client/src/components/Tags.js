import styled from 'styled-components';

const Tags = ({ data }) => {
  return (
    <TagWrapper>
      {data.tag.map((tag, idx) => {
        return <li key={idx}>{tag}</li>;
      })}
    </TagWrapper>
  );
};

const TagWrapper = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  /* margin-bottom: 1.5rem; */
  li {
    margin-right: 0.5rem;
    background-color: #e1ecf4;
    padding: 0.2rem 0.5rem;
    border-radius: 0.2rem;
    font-size: 0.9rem;
    color: #6391b3;
    cursor: pointer;
    :hover {
      background-color: #d0e3f1;
      color: #2c5877;
    }
  }
`;

export default Tags;
