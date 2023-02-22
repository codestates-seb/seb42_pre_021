import styled from 'styled-components';

export const Container = styled.div`
  width: 1280px;
  height: fit-content;
  min-height: calc(100vh - 3rem);
  padding-left: 11rem;
  @media screen and (max-width: 640px) {
    padding-left: 0;
  }
`;
