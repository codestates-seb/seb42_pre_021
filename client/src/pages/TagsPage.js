import customAxios from 'api/baseURL';
import { Container } from 'containers/Container';
import Navigation from 'containers/Navigation';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ImSearch } from 'react-icons/im';
import { Paging } from 'components/Questions';

const TagsPage = () => {
  const [tags, setTags] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [page, setPage] = useState(1);
  const [current, setCurrent] = useState('name');

  const getTagsData = async () => {
    await customAxios
      .get('/tags', {
        params: { page, size: 30 },
      })
      .then(resp => {
        if (current === 'name') {
          setTags(
            resp.data.data
              .filter(item => item.name.toUpperCase().includes(searchValue.toUpperCase()))
              .sort()
          );
        } else if (current === 'oldest') {
          setTags(
            resp.data.data
              .filter(item => item.name.toUpperCase().includes(searchValue.toUpperCase()))
              .sort((a, b) => a.tagId - b.tagId)
          );
        } else if (current === 'newest') {
          setTags(
            resp.data.data
              .filter(item => item.name.toUpperCase().includes(searchValue.toUpperCase()))
              .sort((a, b) => b.tagId - a.tagId)
          );
        }
      });
  };

  const handleInputChange = event => {
    const { value } = event.target;
    setSearchValue(value);
  };

  const handleSortClick = type => {
    setCurrent(type);
  };

  useEffect(() => {
    getTagsData();
  }, [searchValue, current]);

  return (
    <Container>
      <Navigation />
      <TagsWrapper>
        <Title>
          <h1>Tags</h1>
          <p>
            A tag is a keyword or label that categorizes your question with other, similar
            questions.
            <br />
            Using the right tags makes it easier for others to find and answer your question.
          </p>
          <p>
            <a href="https://stackoverflow.com/tags/synonyms">Show all tag synonyms</a>
          </p>
        </Title>
        <SearchAndSort>
          <Search>
            <p>
              <ImSearch size={18} color="#888" />
            </p>
            <input type="search" value={searchValue} onChange={handleInputChange} />
          </Search>
          <Sort>
            <li
              role="presentation"
              className={current === 'name' ? 'current_sort' : null}
              onClick={() => handleSortClick('name')}
            >
              Name
            </li>
            <li
              role="presentation"
              className={current === 'oldest' ? 'current_sort' : null}
              onClick={() => handleSortClick('oldest')}
            >
              Oldest
            </li>
            <li
              role="presentation"
              className={current === 'newest' ? 'current_sort' : null}
              onClick={() => handleSortClick('newest')}
            >
              Newest
            </li>
          </Sort>
        </SearchAndSort>
        <TagList>
          {tags.map((tag, i) => (
            <TagArticle key={i}>
              <div>{tag.name}</div>
              <p>
                {tag.content
                  ? tag.content
                  : 'Description of this tag will be updated later. Thank you!'}
              </p>
            </TagArticle>
          ))}
        </TagList>
        <Paging size={30} page={page} setPage={setPage} total={tags.length} />
      </TagsWrapper>
    </Container>
  );
};

const TagsWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
`;

const Title = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  > h1 {
    font-size: 1.5rem;
  }
  > p {
    font-size: 0.9rem;
    > a {
      text-decoration: none;
      color: #0b95ff;
    }
  }
`;

const SearchAndSort = styled.div`
  width: 100%;
  padding: 2rem 0 1rem 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
`;

const Sort = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid #888;
  width: max-content;
  height: 2.2rem;
  list-style: none;
  border-radius: 3px;
  overflow: hidden;
  li {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    color: #888;
    font-size: 0.8rem;
    padding: 0 1rem;
    cursor: pointer;
    :nth-of-type(n + 2) {
      border-left: 1px solid #888;
    }
    :hover {
      background-color: #eee;
      color: #333;
    }
  }
  .current_sort {
    background-color: #ddd;
    color: #222;
  }
`;

const Search = styled.div`
  width: 13rem;
  height: 2.2rem;
  display: flex;
  align-items: center;
  position: relative;

  > p {
    position: absolute;
    left: 7px;
    top: 7px;
  }
  > input {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    padding-left: 2rem;
    padding-right: 0.5rem;
    border: 1px solid #bbb;
    border-radius: 0.3rem;
    :focus {
      border: 1px solid blue;
      outline: 4px solid #ddeaf7;
    }
  }
`;

const TagList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.7rem;
  margin-bottom: 2rem;
  @media screen and (max-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 949px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 640px) {
    div {
      :last-of-type {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.8rem;
      }
    }
  }
`;

const TagArticle = styled.article`
  width: 100%;
  height: 100%;
  border: 1px solid #bbb;
  border-radius: 0.3rem;
  padding: 1rem;
  > div {
    background-color: #e1ecf4;
    padding: 0.2rem 0.5rem;
    border-radius: 0.2rem;
    font-size: 0.8rem;
    color: #0074cc;
    width: fit-content;
    margin-bottom: 0.5rem;
    cursor: pointer;
    :hover {
      background-color: #d0e3f1;
      color: #2c5877;
    }
  }
  > p {
    font-size: 0.9rem;
    color: #333;
  }
`;

export default TagsPage;
