import styled from 'styled-components';

const TopNotice = () => {
  return (
    <TopNoticeWrapper>
      Your edit will be placed in a queue until it is peer reviewed.
      <br />
      <br />
      We welcome edits that make the post easier to understand and more valuable for readers.
      Because community members review edits, please try to make the post substantially better than
      how you found it, for example, by fixing grammar or adding additional resources and
      hyperlinks.
    </TopNoticeWrapper>
  );
};

const TopNoticeWrapper = styled.div`
  width: 100%;
  background-color: #fdf7e2;
  padding: 1rem;
  font-size: 0.8rem;
  border-radius: 5px;
  border: 1px solid #f1e5bc;
`;

export default TopNotice;
