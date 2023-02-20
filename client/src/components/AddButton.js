import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const AddButton = () => {
  const navigate = useNavigate();
  const handleAskButtonClick = () => {
    navigate('/add');
  };

  return <StyledButton onClick={handleAskButtonClick}>Ask Question</StyledButton>;
};

const StyledButton = styled.button`
  border: none;
  width: 7.2rem;
  height: 2.5rem;
  background-color: #0b95ff;
  color: #fff;
  border-radius: 3px;
  font-size: 0.9rem;
  box-shadow: inset 0px 1px #95d1ff;
  border: 1px solid #0b95ff;
  cursor: pointer;
  :hover {
    filter: brightness(0.9);
  }
`;

export default AddButton;
