import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { ReactComponent as StackoverflowLogo } from 'assets/stackoverflowLogo.svg';
import { ReactComponent as Search } from 'assets/search.svg';
import { ReactComponent as Stackoverflow } from 'assets/stackoverflow.svg';
import { useMediaQuery } from 'react-responsive';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';
import HeaderInputForm from 'components/HeaderInputForm';
import { useSelector, useDispatch } from 'react-redux';
import { reset, logout } from 'features/authSlice';

// nav가 바로 렌더링되는가 or 메뉴아이콘이 있고 눌러야 렌더링 되는가
// 로그인이 되어있는지 확인하고 헤더 버튼 다르게 출력

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);

  const isDeskOrMobi = useMediaQuery({ maxWidth: 640 });
  const [inputClicked, setInputClickd] = useState(false);

  const handleInputClick = () => {
    setInputClickd(!inputClicked);
  };

  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/');
  };

  return (
    <HeaderContainer>
      <HeaderMenus>
        <div className="logoContainer">
          {isDeskOrMobi === true ? (
            <MobileLogoBox>
              <button className="menuBar">
                <FaBars className="menu" />
              </button>
              <Link to="/" className="menuBar">
                <Stackoverflow height={30} className="smallLogo" />
              </Link>
            </MobileLogoBox>
          ) : (
            <Link to="/">
              <StackoverflowLogo width={140} height={40} className="largeLogo" />
            </Link>
          )}
        </div>
        <div className="searchContainer">
          {isDeskOrMobi === true ? (
            <div>
              <button onClick={handleInputClick}>
                <Search width={16} height={16} className="smallSearchIcon" />
              </button>
            </div>
          ) : (
            <HeaderInputForm />
          )}
        </div>
        <ButtonContainer>
          {user ? (
            <>
              {' '}
              <Link to="/mypage" className="mypageLink">
                <Search width={25} height={25} />
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
        </ButtonContainer>
      </HeaderMenus>
      {inputClicked && isDeskOrMobi ? (
        <InputDrop>
          <HeaderInputForm />
        </InputDrop>
      ) : null}
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
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
  margin: 0 auto;
  > .logoContainer {
    display: flex;
    height: 100%;
    margin-left: 0.5rem;
    background-color: transparent;
    border: none;
    flex-grow: 1;
  }

  > .searchContainer {
    display: inline-flex;
    align-items: center;
    flex-grow: 6;
    height: 100%;
    > div {
      display: flex;
      width: 100%;
      height: 100%;
      justify-content: end;
      > button {
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        width: 2.5rem;
        height: 100%;
        background-color: transparent;
        &:hover {
          cursor: pointer;
          background-color: #dddddd;
          border-radius: 2px;
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
`;

// const SearchFrom = styled.form`
//   display: flex;
//   width: 100%;
//   border-radius: 0.2rem;
//   border: 1px solid rgb(204, 208, 211);
//   background-color: #fff;
//   &:focus-within {
//     border: 1px solid RGB(10, 149, 255);
//     box-shadow: 0px 0px 0px 5px RGB(225, 236, 244);
//   }

//   > .searchIconContainer {
//     > .searchIcon {
//       margin: 0.4rem 0.4rem 0.2rem;
//       &:hover {
//         cursor: text;
//       }
//     }
//   }

//   > .searchInput {
//     display: flex;
//     width: 100%;
//     border: none;
//     background-color: transparent;
//     &:focus {
//       outline: none;
//     }
//   }
// `;

const MobileLogoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 5rem;
  > .menuBar {
    height: 100%;
    width: 100%;
    border: none;
    background-color: transparent;
    &:hover {
      cursor: pointer;
      background-color: #dddddd;
    }

    > .menu {
      font-size: 1rem;
      color: #525960;
    }

    > .smallLogo {
      margin-top: 0.5rem;
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 9rem;
  > .loginLink {
    padding: 0.4rem;
    text-decoration-line: none;
    font-size: 0.8rem;
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
    background-color: blue;
    border-radius: 50%;
    border: none;
  }

  > .logoutLink {
    padding: 0.4rem;
    text-decoration-line: none;
    font-size: 0.8rem;
    border-radius: 0.2rem;
    border: 1px solid rgb(82, 179, 253);
    color: rgb(220, 240, 255);
    background-color: rgb(10, 149, 255);
    box-shadow: inset 0px 1px #95d1ff;
    :hover {
      filter: brightness(0.9);
    }
  }
`;

const InputDrop = styled.div`
  position: fixed;
  width: 100%;
  top: 3.1rem;
  left: 0;
  padding: 0.5rem;
  background-color: rgb(227, 230, 232);
`;

export default Header;
