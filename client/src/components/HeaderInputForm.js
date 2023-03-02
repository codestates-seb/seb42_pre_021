import styled from 'styled-components';
import { useState, useRef } from 'react';
// import customAxios from 'api/baseURL';
import { ReactComponent as Search } from 'assets/search.svg';
import { AiFillLock } from 'react-icons/ai';
import HeaderInputFocusDrop from 'components/HeaderInputFocusDrop';
import { useDispatch } from 'react-redux';
import { getSearchList } from 'features/searchSlice';

const HeaderInputForm = ({ placeholder, icon }) => {
  const dispatch = useDispatch();
  const searchInput = useRef();

  const [isInputOpened, setIsInputOpened] = useState(false);

  const handleInputOpend = e => {
    if (e.target.className === 'searchInput') {
      setIsInputOpened(true);
      return;
    }
  };

  const handleInputClosed = () => {
    setIsInputOpened(false);
  };

  const handleSumit = async e => {
    e.preventDefault();
    const keyword = searchInput.current.value;
    if (searchInput.current.value) {
      const data = {
        keyword,
        size: 10,
        page: 1,
        sortBy: 'createdAt',
        sortDir: 'DESC',
      };
      dispatch(getSearchList(data));
    }
    searchInput.current.value = null;
    setIsInputOpened(false);
  };
  return (
    <>
      <Container>
        <SearchFrom role="search" className="searchFrom" onSubmit={handleSumit}>
          <label className="searchIconContainer" htmlFor={icon}>
            {icon === 'search' ? (
              <Search width={16} height={16} className="icon" id={icon} />
            ) : (
              <AiFillLock width={16} height={16} className="icon" id={icon} />
            )}
          </label>
          <input
            className="searchInput"
            id={icon}
            type={icon === 'lock' ? 'password' : 'text'}
            placeholder={placeholder}
            autoComplete="off"
            ref={searchInput}
            onBlur={handleInputClosed}
            onClick={handleInputOpend}
          />
        </SearchFrom>
        {/* <HeaderInputFocusDrop /> */}
        {isInputOpened && placeholder === 'Search...' ? (
          <HeaderInputFocusDrop handleSumit={handleSumit} handleInputOpend={handleInputOpend} />
        ) : null}
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 0.5rem;
`;

const SearchFrom = styled.form`
  display: flex;
  width: 100%;
  border-radius: 0.2rem;
  border: 1px solid rgb(204, 208, 211);
  margin-top: 0.5rem;
  background-color: #fff;
  &:focus-within {
    border: 1px solid RGB(10, 149, 255);
    box-shadow: 0px 0px 0px 5px RGB(225, 236, 244);
  }

  > .searchIconContainer {
    > .icon {
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
    &:focus {
      outline: none;
    }
  }
`;

export default HeaderInputForm;
