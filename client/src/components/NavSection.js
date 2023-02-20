import styled from 'styled-components';

export const NavSection = styled.section`
  width: fit-content;
  height: 100%;
  position: fixed;
  left: calc(100% - 1280px - (100% - 1280px) / 2);
  top: 3.2rem;
  background-color: white;
  @media screen and (max-width: 1279px) {
    position: fixed;
    left: 0;
    top: 3.2rem;
  }
`;
