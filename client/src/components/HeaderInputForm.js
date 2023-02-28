import styled from 'styled-components';
import { ReactComponent as Search } from 'assets/search.svg';
import { AiFillLock } from 'react-icons/ai';

const HeaderInputForm = ({ placeholder, icon, state }) => {
  return (
    <SearchFrom role="search" action="/search" className="searchFrom">
      <label className="searchIconContainer" htmlFor="search">
        {!(icon === 'lock') ? (
          <Search width={16} height={16} className="icon" />
        ) : (
          <AiFillLock width={16} height={16} className="icon" />
        )}
      </label>
      <input
        className="searchInput"
        id={icon}
        type={icon === 'lock' ? 'password' : 'text'}
        placeholder={placeholder}
        autoComplete="off"
        onChange={e => {
          state(e.target.value);
        }}
      />
    </SearchFrom>
  );
};

const SearchFrom = styled.form`
  display: flex;
  width: 100%;
  border-radius: 0.2rem;
  border: 1px solid rgb(204, 208, 211);
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
