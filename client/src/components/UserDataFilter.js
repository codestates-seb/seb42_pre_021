import { useState } from 'react';
import styled from 'styled-components';

const UserDataFilter = () => {
  const [isClicked, setIsClicked] = useState('week');

  const handleClick = e => {
    setIsClicked(e.target.innerText);
  };
  return (
    <Container>
      <button className={isClicked === 'week' ? 'focus' : null} onClick={handleClick}>
        week
      </button>
      <button className={isClicked === 'month' ? 'focus' : null} onClick={handleClick}>
        month
      </button>
      <button className={isClicked === 'qauter' ? 'focus' : null} onClick={handleClick}>
        qauter
      </button>
      <button className={isClicked === 'year' ? 'focus' : null} onClick={handleClick}>
        year
      </button>
      <button className={isClicked === 'all' ? 'focus' : null} onClick={handleClick}>
        all
      </button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: end;
  margin: 0.5rem 0 1rem 0;
  > button {
    padding: 0 0.7rem 0.7rem 0.7rem;
    background-color: transparent;
    border: none;
    color: gray;
    cursor: pointer;
  }

  > .focus {
    color: black;
    font-weight: bolder;
    border-bottom: 1px solid #f6994e;
  }
`;

export default UserDataFilter;
