import AddButton from 'components/AddButton';
import styled from 'styled-components';

const DetailTitle = ({ question }) => {
  return (
    <TitleSection>
      <div>
        <h1>{question.title}</h1>
        <AddButton />
      </div>
      <ul>
        <p>Asked</p>
        <li>{new Date(question.createdAt).toLocaleString()}</li>
        <p>Modefied</p>
        <li>{new Date(question.modifiedAt).toLocaleString()}</li>
        <p>Viewed</p>
        <li>{question.viewCount}</li>
      </ul>
    </TitleSection>
  );
};

const TitleSection = styled.section`
  width: calc(100% - 1.5rem);
  margin-left: 1.5rem;
  padding: 1.5rem 1rem 1rem 0;
  border-bottom: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
  }
  > ul {
    list-style: none;
    display: flex;
    gap: 0.5rem;
    font-size: 0.8rem;
    > li {
      margin-right: 1rem;
    }
  }
`;

export default DetailTitle;
