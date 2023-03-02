import customAxios from 'api/baseURL';
import { FaRegBookmark, FaBookmark } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const Bookmark = ({ bookmark, id, type, setIsShowModal, answerSort, setAnswerSort }) => {
  const { user } = useSelector(state => state.auth);
  // const user = JSON.parse(localStorage.getItem('user'));

  const handleBookmarkClick = async () => {
    // ! 로그인 안했을 시 모달창 띄우기
    if (!user) {
      setIsShowModal(true);
      return;
    }

    let data;

    if (type === 'questions') {
      data = {
        memberId: user.memberId,
        questionId: id,
      };
    } else {
      data = {
        memberId: user.memberId,
        answerId: id,
      };
    }
    await customAxios
      .post(`bookmarks/${type}`, { ...data })
      .then(resp => {
        if (type === 'questions') {
          if (resp.data.questionBookmarkFlag) {
            toast.success('북마크가 등록되었습니다!');
          } else {
            toast.success('북마크가 해제되었습니다!');
          }
        } else {
          if (resp.data.answerBookmarkFlag) {
            toast.success('북마크가 등록되었습니다!');
          } else {
            toast.success('북마크가 해제되었습니다!');
          }
        }
      })
      .catch(error => {
        console.log(error);
      });
    setAnswerSort({ ...answerSort });
  };

  return (
    <div>
      {bookmark ? (
        <FaBookmark className="bookmark bookmark_true" onClick={handleBookmarkClick} />
      ) : (
        <FaRegBookmark className="bookmark bookmark_false" onClick={handleBookmarkClick} />
      )}
    </div>
  );
};

export default Bookmark;
