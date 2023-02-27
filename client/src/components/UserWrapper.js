import styled from 'styled-components';
import { ReactComponent as Earth } from 'assets/earthvector.svg';

const UserWrapper = ({ users }) => {
  return (
    <>
      <Container>
        {users &&
          users.map(el => (
            <UserContainer key={el.id}>
              {el.profile ? (
                <img src={el.profile} alt="profileImage" className="users-image" />
              ) : (
                <Earth className="users-image" />
              )}
              <ul className="users-info__wrapper">
                <li className="users-nickname">{el.nickname}</li>
                <li className="users-location">{el.location}</li>
                <li className="users-email">{el.email}</li>
              </ul>
            </UserContainer>
          ))}
      </Container>
    </>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  @media screen and (max-width: 1264px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 980px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 640px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const UserContainer = styled.div`
  display: flex;
  padding: 0.5rem;
  align-items: center;
  > .users-image {
    width: 45px;
    height: 45px;
  }

  > .users-info__wrapper {
    margin-left: 0.5rem;
    list-style: none;

    > .users-nickname {
    }

    > .users-location {
      font-size: 0.8rem;
      color: #73737d;
    }

    > .users-email {
      font-size: 0.8rem;
      overflow: auto;
    }
  }
`;

export default UserWrapper;
