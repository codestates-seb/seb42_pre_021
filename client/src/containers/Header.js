import { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import HeaderInputForm from 'components/HeaderInputForm';
import { reset, logout } from 'features/authSlice';
import { resetSearch } from 'features/searchSlice';

import { ReactComponent as StackoverflowLogo } from 'assets/stackoverflowLogo.svg';
import { ReactComponent as Search } from 'assets/search.svg';
import { ReactComponent as Stackoverflow } from 'assets/stackoverflow.svg';
import { useMediaQuery } from 'react-responsive';
import { FaBars } from 'react-icons/fa';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);

  const [inputOpened, setInputOpened] = useState(false);
  const isDeskOrMobi = useMediaQuery({ maxWidth: 640 });

  const handleMobileSearch = () => {
    setInputOpened(!inputOpened);
  };

  const handleGoHome = () => {
    dispatch(resetSearch());
    navigate('/');
  };

  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/');
  };

  return (
    <>
      <Container>
        <HeaderMenus>
          <div className="logoContainer">
            {isDeskOrMobi === true ? (
              <MobileLogoContainer>
                <button className="mobile-logo__button">
                  <FaBars className="menu-bar" />
                </button>
                <Link to="/" className="mobile-logo__button" onClick={handleGoHome}>
                  <Stackoverflow height={30} className="mobile-logo" />
                </Link>
              </MobileLogoContainer>
            ) : (
              <Link to="/" className="desktop-logo__link" onClick={handleGoHome}>
                <StackoverflowLogo width={140} height={40} className="desktop-logo" />
              </Link>
            )}
          </div>
          <div className="searchContainer">
            {isDeskOrMobi === true ? (
              <div className="mobile-search-button__wrapper">
                <button onClick={handleMobileSearch} className="mobile-search-button">
                  <Search width={16} height={16} className="smallSearchIcon" />
                </button>
              </div>
            ) : (
              <HeaderInputForm placeholder={'Search...'} icon={'search'} />
            )}
          </div>
          <div className="buttonsContainer">
            {user ? (
              <>
                <Link to="/mypage" className="mypageLink">
                  <img
                    src={user.profile}
                    alt={`${user.nickname} profile`}
                    className="profileImage"
                  />
                </Link>
                <Link to="/logout" className="logoutLink" onClick={handleLogout}>
                  Log out
                </Link>
              </>
            ) : (
              <>
                <Link to="/login" className="loginLink">
                  Log in
                </Link>
                <Link to="/signup" className="signupLink">
                  Sign up
                </Link>
              </>
            )}
          </div>
        </HeaderMenus>
        {inputOpened && isDeskOrMobi ? (
          <InputDrop>
            <HeaderInputForm placeholder={'Search...'} icon={'search'} />
          </InputDrop>
        ) : null}
      </Container>
    </>
  );
};

const Container = styled.header`
  display: flex;
  position: fixed;
  justify-content: center;
  height: 3.1rem;
  width: 100%;
  border-top: 0.18rem solid rgb(244, 130, 37);
  box-shadow: 0.1rem 0.1rem 0.1rem rgb(232, 232, 232);
  background-color: rgb(248, 249, 249);
  z-index: 2;
`;

const HeaderMenus = styled.div`
  display: flex;
  align-items: center;
  width: 1280px;
  > .logoContainer {
    display: flex;
    height: 100%;
    flex-grow: 2;
    justify-content: start;

    > .desktop-logo__link {
      display: flex;
      align-items: center;
      > .desktop-logo {
        margin-left: 1rem;
      }
    }
  }

  > .searchContainer {
    display: flex;
    flex-grow: 10;
    height: 100%;
    flex-direction: column;
    align-items: center;
    gap: 0.6rem;
    > .mobile-search-button__wrapper {
      display: flex;
      width: 100%;
      height: 100%;
      justify-content: end;
      > .mobile-search-button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 15%;
        height: 100%;
        border: none;
        background-color: transparent;
        &:hover {
          cursor: pointer;
          background-color: #dddddd;
        }
      }
    }

    > .smallSearchIcon {
      &:hover {
        cursor: pointer;
        background-color: #dddddd;
      }
    }
  }
  > .buttonsContainer {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-grow: 1;
    > .loginLink {
      padding: 0.4rem;
      text-decoration-line: none;
      font-size: 0.8rem;
      white-space: nowrap;
      border-radius: 0.2rem;
      border: 1px solid rgb(137, 177, 205);
      color: rgb(61, 118, 182);
      background-color: rgb(225, 236, 244);
      box-shadow: inset 0px 1px white;
      :hover {
        filter: brightness(0.9);
      }
    }

    > .signupLink {
      padding: 0.4rem;
      text-decoration-line: none;
      font-size: 0.8rem;
      white-space: nowrap;
      border-radius: 0.2rem;
      border: 1px solid rgb(82, 179, 253);
      color: rgb(220, 240, 255);
      background-color: rgb(10, 149, 255);
      box-shadow: inset 0px 1px #95d1ff;
      :hover {
        filter: brightness(0.9);
      }
    }

    > .mypageLink {
      border-radius: 50%;
      border: none;
      width: 30px;
      height: 30px;

      .profileImage {
        width: 100%;
        height: 100%;
      }
    }

    > .logoutLink {
      padding: 0.4rem;
      text-decoration-line: none;
      font-size: 0.8rem;
      white-space: nowrap;
      border-radius: 0.2rem;
      border: 1px solid rgb(82, 179, 253);
      color: rgb(220, 240, 255);
      background-color: rgb(10, 149, 255);
      box-shadow: inset 0px 1px #95d1ff;
      :hover {
        filter: brightness(0.9);
      }
    }
  }
`;

const MobileLogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 5rem;
  > .mobile-logo__button {
    height: 100%;
    width: 100%;
    border: none;
    background-color: transparent;
    &:hover {
      cursor: pointer;
      background-color: #dddddd;
    }

    > .menu-bar {
      font-size: 1rem;
      color: #525960;
    }

    > .mobile-logo {
      margin-top: 0.5rem;
    }
  }
`;

const InputDrop = styled.div`
  position: fixed;
  width: 100%;
  top: 3.1rem;
  left: 0;
  padding: 0 0.5rem 0.5rem 0.5rem;
  background-color: rgb(227, 230, 232);
`;

export default Header;
