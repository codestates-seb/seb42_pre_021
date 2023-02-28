import customAxios from 'api/baseURL';
import AddButton from 'components/AddButton';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { getTime } from 'utils/getTime';
import { GoX } from 'react-icons/go';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

const Comments = ({ data, isAnswer }) => {
  const [comments, setComments] = useState([]);
  const [commentValue, setCommentValue] = useState('');
  const [isShow, setIsShow] = useState(false);
  const { user } = useSelector(state => state.auth);

  useEffect(() => {
    if (isAnswer) {
      setComments(data.answerComments);
    } else {
      setComments(data.questionComments);
    }
  }, []);

  const handleInputChange = event => {
    const { value } = event.target;
    setCommentValue(value);
  };

  const handleSubmit = async () => {
    if (isAnswer) {
      const newData = {
        memberId: user.memberId,
        answerId: data.answerId,
        html: commentValue,
        markdown: commentValue,
      };
      await customAxios.post(`/comments/answers`, {
        ...newData,
      });
      setComments(cur => [...cur, { ...newData, nickname: user.nickname }]);
    } else {
      const newData = {
        memberId: user.memberId,
        questionId: data.questionId,
        html: commentValue,
        markdown: commentValue,
      };
      await customAxios.post(`/comments/questions`, { ...newData });
      setComments(cur => [...cur, { ...newData, nickname: user.nickname }]);
    }
    setCommentValue('');
  };

  const handleDelete = comment => {
    Swal.fire({
      title: 'Are you sure?',
      text: "you won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        deleteRequest(isAnswer, comment);
      } else {
        toast.info('Cancelled! Your comment is safe.');
      }
    });
  };

  const deleteRequest = async (isAnswer, comment) => {
    console.log('comment', comment, 'user', user);
    if (isAnswer) {
      await customAxios.delete(`/comments/answers/${comment.answerCommentId}`);
    } else {
      await customAxios.delete(`/comments/questions/${comment.questionCommentId}`);
    }
    location.reload();
  };

  return (
    <CommentWrapper>
      <ul>
        {comments.map((comment, i) => (
          <CommentDesign key={i}>
            <div className="contents">
              <p>{comment.html}</p>
              <span className="name">&nbsp;- {comment.nickname}</span>
              <span className="time">&nbsp;{getTime(comment.createdAt)}</span>
            </div>
            {/* {user.memberId === comment.memberId ? ( */}
            <div className="delete">
              <GoX role="presentation" onClick={() => handleDelete(comment)} />
            </div>
            {/* ) : null} */}
          </CommentDesign>
        ))}
      </ul>
      <div className="comment_click" role="presentation" onClick={() => setIsShow(cur => !cur)}>
        Add a comment
      </div>
      {isShow ? (
        <div>
          <input type={'text'} value={commentValue} onChange={handleInputChange} />
          <AddButton buttonText={'Add'} handleButtonClick={handleSubmit} />
        </div>
      ) : null}
    </CommentWrapper>
  );
};

const CommentWrapper = styled.div`
  width: 100%;
  > ul {
    margin-top: 1rem;
  }
  > div {
    margin-top: 1rem;
    width: 100%;
    height: fit-content;
    position: relative;
    > button {
      position: absolute;
      right: 0;
    }
    > input {
      height: 2.5rem;
      width: 100%;
      padding: 0 3rem 0 0.5rem;
      border: 1px solid #bbb;
      border-radius: 0.3rem;
      :focus {
        border: 1px solid #58a4de;
        outline: 4px solid #ddeaf7;
      }
    }
  }
`;

const CommentDesign = styled.li`
  width: 100%;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px solid #ddd;
  padding: 0.5rem 1rem;
  position: relative;
  align-items: center;
  font-size: 0.9rem;
  .contents {
    display: flex;
    flex-wrap: wrap;
  }
  :first-of-type {
    border-top: 1px solid #ddd;
  }
  .name {
    color: #0074cc;
  }
  .time {
    color: #888;
    font-size: 0.8rem;
  }
  .delete {
    width: 1rem;
    height: 1rem;
    background-color: #0074cc;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 1rem;
    border-radius: 50%;
    color: #fff;
    cursor: pointer;
    :hover {
      filter: brightness(0.8);
    }
  }
`;

export default Comments;
