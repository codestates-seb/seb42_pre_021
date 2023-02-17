import styled from 'styled-components';

const Header = () => {
  return <HeaderContainer>Header</HeaderContainer>;
};

const HeaderContainer = styled.header`
  background-color: red;
  width: 100%;
  height: 3rem;
  position: fixed;
  top: 0;
  left: 0;
`;

export default Header;
