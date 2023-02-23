import styled from 'styled-components';
import { GoX } from 'react-icons/go';
import { useState } from 'react';

const TagEdit = ({ tagsArr, handleSectionClick, setTagsArr, currentForm }) => {
  const [tagValue, setTagValue] = useState('');

  // // * tag창 input 크기 계산을 위한 한 줄당 태그의 글자수 얻기
  // const tagsLineWidth = () => {
  //   if (tagsArr.length % 5 === 0) {
  //     return 0;
  //   }
  //   return tagsArr.slice(-(tagsArr.length % 5)).reduce((acc, cur) => acc + cur.length, 0);
  // };

  const handleChangeInput = event => {
    const { value } = event.target;
    setTagValue(value);
  };

  const handleKeyDown = event => {
    const { keyCode } = event;
    const tagText = tagValue.trim().replace(',', '');
    if (
      (keyCode === 13 || keyCode === 9 || keyCode === 188 || keyCode === 32) &&
      tagValue !== ' ' &&
      tagValue !== ''
    ) {
      setTagsArr(cur => [...cur, tagText]);
      setTagValue('');
    }
  };

  const handleDeleteTag = index => {
    const newTagsArr = [...tagsArr];
    newTagsArr.splice(index, 1);
    setTagsArr(newTagsArr);
  };

  return (
    <TagEditWrapper onClick={() => handleSectionClick('tag')}>
      <h1>Tags</h1>
      <TagWrapper className={currentForm === 'tag' ? 'focused' : null}>
        {tagsArr.map((tag, i) => (
          <Tag key={i}>
            {tag}
            <div>
              <GoX onClick={() => handleDeleteTag(i)} />
            </div>
          </Tag>
        ))}
        <input
          type="text"
          value={tagValue}
          onChange={handleChangeInput}
          onKeyDown={handleKeyDown}
        />
      </TagWrapper>
    </TagEditWrapper>
  );
};

const TagEditWrapper = styled.div`
  width: 100%;
  > h1 {
    font-size: 1rem;
    margin-top: 1rem;
    margin-bottom: 0.3rem;
    cursor: pointer;
  }
  .focused {
    border: 1px solid #58a4de;
    outline: 4px solid #ddeaf7;
  }
`;

const TagWrapper = styled.div`
  width: 100%;
  border: 1px solid #bbb;
  border-radius: 3px;
  padding: 0.3rem 0.5rem;
  display: flex;
  flex-wrap: wrap;
  > input {
    /* width: calc(100% - ${props => props.length * 10 + 20}px); */
    width: auto;
    border: none;
    :focus {
      outline: none;
    }
  }
`;

const Tag = styled.div`
  width: fit-content;
  height: 1.5rem;
  background-color: #e1ecf4;
  margin-right: 0.5rem;
  border-radius: 0.2rem;
  font-size: 0.8rem;
  color: #0074cc;
  padding: 0 0.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
  > div {
    display: flex;
    align-items: center;
    cursor: pointer;
    :hover {
      background-color: #39739e;
      color: #e1ecf4;
    }
  }
`;

export default TagEdit;
