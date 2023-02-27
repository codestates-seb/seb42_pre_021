import { useMemo, useState } from 'react';
import { IoCaretUpSharp, IoCaretDownSharp } from 'react-icons/io5';
import styled from 'styled-components';
import Bookmark from './Bookmark';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import axios from 'axios';

const Vote = ({ count, id, type, bookmark, setIsShowModal }) => {
  const [voteCount, setVoteCount] = useState(count);
  const [isVoted, setIsVoted] = useState(false);
  const currentVote = useMemo(() => voteCount, []);

  const { user } = useSelector(state => state.auth);
  // const user = JSON.parse(localStorage.getItem('user'));

  const handleArrowClick = type => {
    // ! 로그인 안했을 시 모달 띄우기
    if (!user) {
      setIsShowModal(true);
      return;
    }
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
      toast.error('이미 투표한 글입니다!');
    }
  };

  const patchVote = async count => {
    const headers = {
      Authorization: `Bearer ${user.authorization}`,
      refresh: `Bearer ${user.refresh}`,
      'Content-Type': 'Application/json',
    };

    await axios({
      url: `/${type}/${id}`,
      method: 'patch',
      WithCredentials: true,
      headers,
      data: {
        voteCount: count,
      },
    }).catch(error => {
      console.log(error);
    });
  };

  return (
    <Wrapper>
      <IoCaretUpSharp className="updown" onClick={() => handleArrowClick('up')} />
      <p>{voteCount}</p>
      <IoCaretDownSharp className="updown" onClick={() => handleArrowClick('down')} />
      <Bookmark bookmark={bookmark} id={id} type={type} setIsShowModal={setIsShowModal} />
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
