import { useState } from 'react';
import styled from 'styled-components';

const ListSort = ({ setSortBy }) => {
  const SORT_BY = ['Newest', 'Votes', 'Answers', 'Views'];
  const [current, setCurrent] = useState(0);

  const handleSortClick = (index, type) => {
    setCurrent(index);
    switch (type) {
      case 'Votes':
        setSortBy('voteCount');
        break;
      case 'Answers':
        setSortBy('answerCount');
        break;
      case 'Views':
        setSortBy('viewCount');
        break;
      default:
        setSortBy('createdAt');
    }
  };

  return (
    <Sort>
      {SORT_BY.map((item, idx) => {
        return (
          <li
            key={idx}
            role="presentation"
            className={current === idx ? 'current' : null}
            onClick={() => handleSortClick(idx, item)}
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
  width: max-content;
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
    padding: 0 1rem;
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
