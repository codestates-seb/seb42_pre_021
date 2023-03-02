import Notices from './Notices';
import Colletives from './Colletives';
import styled from 'styled-components';

const SideContent = () => {
  return (
    <SideContentWrapper>
      <Notices />
      <Colletives />
    </SideContentWrapper>
  );
};

const SideContentWrapper = styled.aside`
  width: 17rem;
  height: fit-content;
  @media screen and (max-width: 1280px) {
    padding-right: 1rem;
    width: 100%;
  }
  @media screen and (max-width: 979px) {
    padding-left: 1rem;
  }
`;
export default SideContent;
