import styled from 'styled-components';

export const Container = styled.div`
  width: 1280px;
  height: 100%;
  display: flex;
  padding: 0 1rem;
  padding-top: 1rem;
  justify-content: space-between;
  padding-left: 11rem;
  @media screen and (max-width: 1279px) {
    width: 100%;
    display: grid;
    grid-template-columns: calc(100% - 21rem) 21rem;
  }
  @media screen and (max-width: 979px) {
    grid-template-columns: 1fr;
  }
`;
