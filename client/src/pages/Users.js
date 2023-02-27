import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import HeaderInputForm from 'components/HeaderInputForm';
import { Container } from 'containers/Container';
import Navigation from 'containers/Navigation';
import { getUsers } from 'features/usersSlice';
import UsersWrapper from 'components/UserWrapper';
import UserDataFilter from 'components/UserDataFilter';
import UserFilters from 'components/UserFilters';

const Users = () => {
  const dispatch = useDispatch();
  const { users, isLoading, error } = useSelector(state => state.users);
  const [newUserClicked, setNewUserClicked] = useState(false);
  const data = { sortBy: 'createdAt', size: '10', page: '1', sortDir: 'DESC' };

  const handleClickNewUsers = () => {
    setNewUserClicked(!newUserClicked);
    newUserClicked ? (data.sortDir = 'DESC') : (data.sortDir = 'ASC');
    dispatch(getUsers(data));
  };

  useEffect(() => {
    dispatch(getUsers(data));
  }, [dispatch]);

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {error && <div>{error.message}</div>}
      <Navigation />
      <Container>
        <UsersContainer>
          <TitleWrapper>
            <h2>Users</h2>
          </TitleWrapper>
          <section>
            <nav>
              <div className="nav-filter__wrapper">
                <div className="nav-input__wrapper">
                  <HeaderInputForm placeholder={'Filter by user'} icon={'search'} />
                </div>
                <UserFilters handleClickNewUsers={handleClickNewUsers} />
              </div>
              <UserDataFilter />
            </nav>
            <UsersWrapper users={users} />
          </section>
        </UsersContainer>
      </Container>
    </>
  );
};

const UsersContainer = styled.div`
  width: 100%;
  padding: 2rem;

  > section {
    width: 100%;
    > nav {
      display: flex;
      width: 100%;
      flex-direction: column;
      gap: 1rem;
      @media screen and (max-width: 980px) {
        align-items: start;
      }
      > .nav-filter__wrapper {
        display: flex;
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
        @media screen and (max-width: 980px) {
          flex-direction: column;
          gap: 1rem;
        }

        > .nav-input__wrapper {
          width: 12rem;
          @media screen and (max-width: 980px) {
            width: 20rem;
          }
        }
      }
    }
  }
`;

const TitleWrapper = styled.div`
  margin-bottom: 2rem;
`;

export default Users;
