import Pagination from 'react-js-pagination';
import styled from 'styled-components';

const Paging = ({ size, page, setPage, setSize, total }) => {
  const handlePageChange = page => {
    setPage(page);
    setSize(10);
  };

  const handleClickSize = size => {
    setSize(size);
  };

  return (
    <PagingWrapper>
      <Pagination
        activePage={page}
        itemsCountPerPage={size}
        totalItemsCount={total}
        pageRangeDisplayed={5}
        prevPageText={'Prev'}
        nextPageText={'Next'}
        onChange={handlePageChange}
      />
      <PagePer>
        <ul>
          <li
            role="presentation"
            className={size === 10 ? 'current_size' : null}
            onClick={() => handleClickSize(10)}
          >
            10
          </li>
          <li
            role="presentation"
            className={size === 15 ? 'current_size' : null}
            onClick={() => handleClickSize(15)}
          >
            15
          </li>
          <li
            role="presentation"
            className={size === 20 ? 'current_size' : null}
            onClick={() => handleClickSize(20)}
          >
            20
          </li>
        </ul>
        <p>per page</p>
      </PagePer>
    </PagingWrapper>
  );
};

const PagingWrapper = styled.div`
  width: 100%;
  padding: 1rem;
  padding-bottom: 3rem;
  display: flex;
  justify-content: space-between;
  .pagination {
    list-style: none;
    display: flex;
    gap: 5px;
    > li {
      border-radius: 2px;
      border: 1px solid #bbb;
      width: fit-content;
      min-width: 1.5rem;
      height: 1.5rem;
      padding: 0 0.3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      > a {
        text-decoration: none;
        font-size: 0.8rem;
        color: #777;
        font-weight: 600;
      }
    }
    .active {
      background-color: #f48225;
      > a {
        color: #fff;
      }
    }
    .disabled {
      background-color: #eee;
      cursor: default;
      > a {
        cursor: default;
      }
    }
  }
`;

const PagePer = styled.div`
  display: flex;
  gap: 0.5rem;
  color: #333;
  font-size: 0.9rem;
  > ul {
    display: flex;
    gap: 5px;
    > li {
      border-radius: 2px;
      border: 1px solid #bbb;
      width: fit-content;
      min-width: 1.5rem;
      height: 1.5rem;
      padding: 0 0.3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      font-weight: 600;
      font-size: 0.8rem;
      color: #777;
    }
    .current_size {
      background-color: #f48225;
      color: #fff;
    }
  }
`;

export default Paging;
