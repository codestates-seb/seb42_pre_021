import { useMemo, useState } from 'react';
import { IoCaretUpSharp, IoCaretDownSharp } from 'react-icons/io5';
import styled from 'styled-components';
import Bookmark from './Bookmark';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import customAxios from 'api/baseURL';

const Vote = ({ count, id, type, bookmark, setIsShowModal, answerSort, setAnswerSort }) => {
  const [voteCount, setVoteCount] = useState(count);
  const currentVote = useMemo(() => voteCount, []);

  const { user } = useSelector(state => state.auth);
  // const user = JSON.parse(localStorage.getItem('user'));

  const handleArrowClick = type => {
    // ! 로그인 안했을 시 모달 띄우기
    if (!user) {
      setIsShowModal(true);
      return;
    }
    if (type === 'up') {
      if (voteCount > currentVote) {
        toast.error('이미 투표한 글입니다!');
        return;
      }
      setVoteCount(cur => cur + 1);
      patchVote(count + 1);
    } else if (type === 'down') {
      if (voteCount < currentVote) {
        toast.error('이미 투표한 글입니다!');
        return;
      }
      setVoteCount(cur => cur - 1);
      patchVote(count - 1);
    }
  };

  const patchVote = async count => {
    await customAxios
      .patch(`/${type}/${id}`, {
        voteCount: count,
      })
      .catch(error => {
        console.log(error);
      });
    setAnswerSort({ ...answerSort });
  };

  return (
    <Wrapper>
      <IoCaretUpSharp className="updown" onClick={() => handleArrowClick('up')} />
      <p>{count}</p>
      <IoCaretDownSharp className="updown" onClick={() => handleArrowClick('down')} />
      <Bookmark
        bookmark={
          type === 'questions' ? bookmark.questionBookmarkFlag : bookmark.answerBookmarkFlag
        }
        id={id}
        type={type}
        setIsShowModal={setIsShowModal}
        answerSort={answerSort}
        setAnswerSort={setAnswerSort}
      />
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
