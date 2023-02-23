import baseURL from 'api/baseURL';
import { useMemo, useState } from 'react';
import { IoCaretUpSharp, IoCaretDownSharp } from 'react-icons/io5';
import styled from 'styled-components';
import Bookmark from './Bookmark';

const Vote = ({ count, id, type, bookmark }) => {
  const [voteCount, setVoteCount] = useState(count);
  const [isVoted, setIsVoted] = useState(false);
  const currentVote = useMemo(() => voteCount, []);

  const handleArrowClick = type => {
    if (type === 'up' && voteCount <= currentVote && !isVoted) {
      setVoteCount(cur => cur + 1);
      setIsVoted(true);
      patchVote(count + 1);
    } else if (type === 'down' && voteCount >= currentVote && !isVoted) {
      setVoteCount(cur => cur - 1);
      setIsVoted(true);
      patchVote(count - 1);
    }
    if (isVoted) {
      alert('이미 투표한 글입니다!');
    }
  };

  const patchVote = async count => {
    await baseURL
      .patch(`/${type}/${id}`, {
        voteCount: count,
      })
      .catch(err => {
        console.log(err.message);
      });
    console.log(voteCount);
  };

  return (
    <Wrapper>
      <IoCaretUpSharp className="updown" onClick={() => handleArrowClick('up')} />
      <p>{voteCount}</p>
      <IoCaretDownSharp className="updown" onClick={() => handleArrowClick('down')} />
      <Bookmark bookmark={bookmark} id={id} type={type} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
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
