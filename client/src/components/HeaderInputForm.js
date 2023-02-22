import styled from 'styled-components';
import { ReactComponent as Search } from 'assets/search.svg';

const HeaderInputForm = () => {
  return (
    <SearchFrom role="search" action="/search" className="searchFrom">
      <label className="searchIconContainer" htmlFor="search">
        <Search width={16} height={16} className="searchIcon" />
      </label>
      <input
        className="searchInput"
        id="search"
        type="text"
        placeholder="Search…"
        autoComplete="off"
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
    &:focus {
      outline: none;
    }
  }
`;

export default HeaderInputForm;
