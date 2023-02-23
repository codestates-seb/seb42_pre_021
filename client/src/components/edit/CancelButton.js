import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const CancelButton = () => {
  const navigate = useNavigate();
  const handleCancelButton = () => {
    navigate(-1);
  };
  return <CancelButtonDesign onClick={handleCancelButton}>Cancel</CancelButtonDesign>;
};

const CancelButtonDesign = styled.button`
  margin-left: 0.5rem;
  border: none;
  width: fit-content;
  height: 2.5rem;
  background-color: #fff;
  color: #0b95ff;
  font-size: 0.8rem;
  font-weight: bold;
  padding: 0 1rem;
  cursor: pointer;
  :hover {
    background-color: #eff8ff;
  }
`;

export default CancelButton;
