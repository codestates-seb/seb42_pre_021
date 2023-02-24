import styled from 'styled-components';

function Spinner() {
  return (
    <Container>
      <LodingSpinner />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
const LodingSpinner = styled.div`
  border: 16px solid #bcae9a;
  border-top: 16px solid #252423;
  border-radius: 50%;
  height: 120px;
  width: 120px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Spinner;
