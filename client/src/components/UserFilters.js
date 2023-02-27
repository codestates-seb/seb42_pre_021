import styled from 'styled-components';
import { useState } from 'react';

const UserFilters = () => {
  const [isClicked, setIsClicked] = useState('Reputation');

  const handleClick = e => {
    setIsClicked(e.target.innerText);
  };
  return (
    <Container>
      <button className={isClicked === 'Reputation' ? 'focus' : null} onClick={handleClick}>
        Reputation
      </button>
      <button className={isClicked === 'New Users' ? 'focus' : null} onClick={handleClick}>
        New Users
      </button>
      <button className={isClicked === 'Voters' ? 'focus' : null} onClick={handleClick}>
        Voters
      </button>
      <button className={isClicked === 'Editors' ? 'focus' : null} onClick={handleClick}>
        Editors
      </button>
      <button className={isClicked === 'Moderators' ? 'focus' : null} onClick={handleClick}>
        Moderators
      </button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  > button {
    padding: 0.5rem 0.3rem;
    white-space: nowrap;
    border: 1px solid #b9bec3;
    border-radius: 2px;
    font-size: 0.8rem;
    color: gray;
    background-color: transparent;
    cursor: pointer;
  }
  > .focus {
    color: #3d4247;
    background-color: #e3e6e8;
  }
`;

export default UserFilters;
