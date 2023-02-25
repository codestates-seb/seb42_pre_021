import styled from 'styled-components';

const AnswerSort = ({ setAnswerSort }) => {
  const handleChangeOption = event => {
    const { value } = event.target;
    console.log(value);
    if (value === 'createdAt') {
      setAnswerSort({
        by: value,
        dir: 'ASC',
      });
    } else {
      setAnswerSort({
        by: value,
        dir: 'DESC',
      });
    }
  };
  return (
    <SortWrapper>
      <p>Sorted by:</p>
      <select onChange={handleChangeOption}>
        <option value="voteCount" defaultValue={true}>
          Highest score (default)
        </option>
        <option value="createdAt">Date Created (oldest firtst)</option>
        <option value="modifiedAt">Date Modified (newest first)</option>
      </select>
    </SortWrapper>
  );
};

const SortWrapper = styled.div`
  width: 18rem;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > p {
    font-size: 0.8rem;
  }
  > select {
    width: 14rem;
    height: 2.1rem;
    border-radius: 0.2rem;
    border: 1px solid #bbb;
    font-size: 0.8rem;
    padding: 0 0.5rem;
  }
  @media screen and (max-width: 640px) {
    width: 14rem;
    flex-direction: column;
    align-items: flex-start;
    > p {
      margin-bottom: 0.2rem;
    }
  }
`;

export default AnswerSort;
