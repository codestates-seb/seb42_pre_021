import { useState } from 'react';
import { IoCaretUpSharp, IoCaretDownSharp } from 'react-icons/io5';
import styled from 'styled-components';
import Bookmark from './Bookmark';

const Vote = () => {
  const [voteCount, setVoteCount] = useState(0);

  const handleArrowClick = type => {
    if (type === 'increase') {
      setVoteCount(cur => cur + 1);
    } else {
      setVoteCount(cur => cur - 1);
    }
  };

  return (
    <Wrapper>
      <IoCaretUpSharp className="updown" onClick={() => handleArrowClick('increase')} />
      <p>{voteCount}</p>
      <IoCaretDownSharp className="updown" onClick={() => handleArrowClick('decrease')} />
      <Bookmark />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 1rem;
  .updown {
    cursor: pointer;
    color: #babfc3;
    font-size: 2.5rem;
  }
  .updown :active {
    color: #f48224;
  }
  > p {
    font-size: 1.4rem;
    color: #6a737c;
  }
  .bookmark {
    margin-top: 0.5rem;
    cursor: pointer;
    font-size: 1.1rem;
  }
  .bookmark_false {
    color: #babfc3;
  }
  .bookmark_true {
    color: #f48224;
  }
`;

export default Vote;
