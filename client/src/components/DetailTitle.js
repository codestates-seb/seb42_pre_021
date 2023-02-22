import AddButton from 'components/AddButton';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const DetailTitle = ({ question }) => {
  const navigate = useNavigate();
  const handleAskButtonClick = () => {
    navigate('/add');
  };
  return (
    <TitleSection>
      <div>
        <h1>{question.title}</h1>
        <AddButton buttonText="Add Question" handleButtonClick={handleAskButtonClick} />
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
  width: calc(100% - 2.5rem);
  margin-left: 1.5rem;
  padding: 1.5rem 0 1rem 0;
  margin-right: 1.5rem;
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
    > p {
      color: #666;
    }
    > li {
      margin-right: 0.5rem;
    }
  }
  @media screen and (max-width: 640px) {
    > div {
      flex-direction: column-reverse;
      button {
        align-self: flex-end;
        margin-bottom: 1rem;
      }
    }
    > ul {
      font-size: 0.7rem;
      > li {
        margin-right: 0.3rem;
      }
    }
  }
`;

export default DetailTitle;
