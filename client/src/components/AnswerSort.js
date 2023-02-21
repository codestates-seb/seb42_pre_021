import styled from 'styled-components';

const AnswerSort = ({ setAnswerSortBy }) => {
  const handleChangeOption = event => {
    const { value } = event.target;
    console.log(value);
    setAnswerSortBy(value);
  };
  return (
    <SortWrapper>
      <p>Sorted by:</p>
      <select onChange={handleChangeOption}>
        <option value="created_newest">Date Created (newest firtst)</option>
        <option value="created_oldest">Date Created (oldest firtst)</option>
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
