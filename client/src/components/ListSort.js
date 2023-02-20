import styled from 'styled-components';

const ListSort = ({ sortby, currentSortBy, setCurrentSortBy }) => {
  const handleSortClick = index => {
    setCurrentSortBy(index);
  };

  return (
    <Sort>
      {sortby.map((item, idx) => {
        return (
          <li
            key={idx}
            role="presentation"
            className={currentSortBy === idx ? 'current' : null}
            onClick={() => handleSortClick(idx)}
          >
            {item}
          </li>
        );
      })}
    </Sort>
  );
};

const Sort = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid #888;
  width: 15rem;
  height: 2.2rem;
  list-style: none;
  border-radius: 3px;
  overflow: hidden;
  li {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    color: #888;
    font-size: 0.8rem;
    cursor: pointer;
    :nth-of-type(n + 2) {
      border-left: 1px solid #888;
    }
    :hover {
      background-color: #eee;
      color: #333;
    }
  }
  .current {
    background-color: #ddd;
    color: #222;
  }
`;

export default ListSort;
