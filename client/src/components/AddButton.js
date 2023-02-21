import styled from 'styled-components';

const AddButton = ({ buttonText, handleButtonClick }) => {
  return <StyledButton onClick={handleButtonClick}>{buttonText}</StyledButton>;
};

const StyledButton = styled.button`
  border: none;
  width: fit-content;
  height: 2.5rem;
  background-color: #0b95ff;
  color: #fff;
  border-radius: 3px;
  font-size: 0.8rem;
  font-weight: bold;
  box-shadow: inset 0px 1px #95d1ff;
  border: 1px solid #0b95ff;
  padding: 0 0.5rem;
  cursor: pointer;
  :hover {
    filter: brightness(0.9);
  }
`;

export default AddButton;
