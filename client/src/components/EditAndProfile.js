import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getTime } from 'utils/getTime';

const EditAndProfile = ({ member, date, isAnswer, data, answerId, title }) => {
  const navigate = useNavigate();
  const handdleEditClick = isAnswer => {
    if (isAnswer) {
      navigate('./answer-edit', {
        state: {
          title: title,
          content: data.content,
          answerId,
        },
      });
    } else {
      navigate('./edit', {
        state: {
          title: data.title,
          content: data.content,
          tags: data.tag,
        },
      });
    }
  };
  return (
    <ProfileWrapper>
      <EditAndDelete>
        <li>Share</li>
        <li role="presentation" onClick={() => handdleEditClick(isAnswer)}>
          Edit
        </li>
        <li>Delete</li>
      </EditAndDelete>
      <Profile className={isAnswer ? 'answer_profile' : null}>
        <img src={member.profile} alt={`${member.nickname} profile`} />
        <div>
          <p>{member.nickname}</p>
          <p>
            {isAnswer ? 'answered' : 'asked'} {getTime(date)}
          </p>
        </div>
      </Profile>
    </ProfileWrapper>
  );
};

const ProfileWrapper = styled.div`
  width: 100%;
  margin-top: 3rem;
  display: flex;
  justify-content: space-between;
  .answer_profile {
    background-color: #fff;
  }
  @media screen and (max-width: 640px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const EditAndDelete = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;
  font-size: 0.8rem;
  color: #888;
  font-weight: 600;
  cursor: pointer;
  li {
    :hover {
      color: #aaa;
    }
  }
`;

const Profile = styled.div`
  width: 13rem;
  height: 4.3rem;
  background-color: #d0e2f0;
  padding: 0 0.7rem;
  display: flex;
  align-items: center;
  border-radius: 0.3rem;
  > img {
    width: 2.5rem;
    margin-right: 1rem;
    cursor: pointer;
  }
  > div {
    display: flex;
    flex-direction: column;
    > p {
      :first-of-type {
        cursor: pointer;
      }
      :last-of-type {
        margin-top: 0.2rem;
        color: #777;
        font-size: 0.8rem;
      }
    }
  }
  @media screen and (max-width: 640px) {
    align-self: flex-end;
  }
`;

export default EditAndProfile;
