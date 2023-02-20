import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as StackoverflowLogo } from 'assets/stackoverflowLogo.svg';
import { ReactComponent as Search } from 'assets/search.svg';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderMenus>
        <button className="logoContainer">
          <Link to="/">
            <StackoverflowLogo width={140} height={40} />
          </Link>
        </button>
        <form role="search" action="/search" className="searchContainer">
          <label className="searchIconContainer" htmlFor="search">
            <Search width={16} height={16} className="searchIcon" />
          </label>
          <input className="searchInput" id="search" type="text" placeholder="Search…" />
        </form>
        <ButtonContainer>
          <button className="loginButton">
            <Link to="/login" className="loginLink">
              Log in
            </Link>
          </button>
          <button className="signupButton">
            <Link to="/signup" className="signupLink">
              Sign up
            </Link>
          </button>
          {/* <button className="mypageButton">
            <Link to="/mypage" className="mypageLink">
              <Search width={25} height={25} />
            </Link>
          </button>
          <button className="logoutButton">
            <Link to="/logout" className="logoutLink">
              Log out
            </Link>
          </button> */}
        </ButtonContainer>
      </HeaderMenus>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgb(248, 249, 249);
  height: 3.1rem;
  width: 100%;
  border-top: 0.18rem solid rgb(244, 130, 37);
  box-shadow: 0.1rem 0.1rem 0.1rem rgb(232, 232, 232);
`;

const HeaderMenus = styled.div`
  display: flex;
  align-items: center;
  width: 1280px;
  margin: 0 auto;
  padding: 0 1rem 0 0.7rem;

  > .logoContainer {
    display: flex;
    background-color: transparent;
    border: none;
    flex-grow: 1;
  }
  > .searchContainer {
    display: flex;
    align-items: center;
    border: 1px solid rgb(204, 208, 211);
    border-radius: 0.2rem;
    flex-grow: 6;

    > .searchIconContainer {
      > .searchIcon {
        margin: 0.4rem 0.4rem 0.2rem;
        &:hover {
          cursor: text;
        }
      }
    }
    > .searchInput {
      display: flex;
      width: 100%;
      border: none;
      background-color: transparent;
      :focus {
        outline: none;
      }
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 9rem;
  margin: 0.2rem;

  > .loginButton {
    border: 1px solid rgb(137, 177, 205);
    background-color: rgb(225, 236, 244);
    border-radius: 0.2rem;
    height: 2rem;
    padding: 2px;

    > .loginLink {
      color: rgb(61, 118, 182);
      text-decoration-line: none;
      font-size: 0.8rem;
      padding: 0.5rem;
    }
  }
  > .signupButton {
    border: 1px solid rgb(82, 179, 253);
    background-color: rgb(10, 149, 255);
    border-radius: 0.2rem;
    height: 2rem;
    padding: 2px;

    > .signupLink {
      color: rgb(220, 240, 255);
      text-decoration-line: none;
      font-size: 0.8rem;
      padding: 0.5rem;
    }
  }
  > .mypageButton {
    background-color: blue;
    border-radius: 50%;
    border: none;
  }

  > .logoutButton {
    border: 1px solid rgb(82, 179, 253);
    background-color: rgb(10, 149, 255);
    border-radius: 0.2rem;
    height: 2rem;
    padding: 2px;

    > .logoutLink {
      color: rgb(220, 240, 255);
      text-decoration-line: none;
      font-size: 0.8rem;
      padding: 0.5rem;
    }
  }
`;

export default Header;
