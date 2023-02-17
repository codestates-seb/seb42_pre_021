import styled from 'styled-components';
import Header from './containers/Header';

const App = () => {
  return (
    <div className="App">
      <Header />
      <MainContainer></MainContainer>
    </div>
  );
};

const MainContainer = styled.main`
  width: 100%;
  height: 200%;
  padding-top: 3rem;
`;

export default App;
