import AddButton from 'components/AddButton';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getTime } from 'utils/getTime';
import { useSelector } from 'react-redux';

const DetailTitle = ({ question }) => {
  const navigate = useNavigate();
  const { user } = useSelector(state => state.auth);
  const handleAskButtonClick = () => {
    user ? navigate('/add') : navigate('/login');
  };
  return (
    <TitleSection>
      <div>
        <h1>{question.title}</h1>
        <AddButton buttonText="Add Question" handleButtonClick={handleAskButtonClick} />
      </div>
      <ul>
        <p>Asked</p>
        <li>{getTime(question.createdAt)}</li>
        <p>Modefied</p>
        <li>{getTime(question.modifiedAt)}</li>
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
    flex-wrap: wrap;
    margin-bottom: 0.5rem;
    > button {
      margin-left: auto;
    }
    > h1 {
      width: fit-content;
      max-width: 100%;
      white-space: pre-wrap;
      overflow: hidden;
    }
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
      button {
        margin: 1rem 0;
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
