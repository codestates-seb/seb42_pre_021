import baseURL from 'api/baseURL';
// import axios from 'axios';
import { useState } from 'react';
import { FaRegBookmark, FaBookmark } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const Bookmark = ({ bookmark, id, type, setIsShowModal }) => {
  const [isBookmarked, setIsBookmarked] = useState(bookmark);

  const { user } = useSelector(state => state.auth);
  // const user = JSON.parse(localStorage.getItem('user'));

  const handleBookmarkClick = async () => {
    // ! 로그인 안했을 시 모달창 띄우기
    if (!user) {
      setIsShowModal(true);
      return;
    }

    setIsBookmarked(cur => !cur);
    // const headers = {
    //   Authorization: `Bearer ${user.authorization}`,
    //   refresh: `Bearer ${user.refresh}`,
    //   'Content-Type': 'Application/json',
    // };
    console.log();
    await baseURL
      .patch(`/${type}/${id}`, {
        memberId: user.memberId,
      })
      .catch(err => {
        console.log(err.message);
      });
    // ! 서버 연동시 사용할 코드
    // await axios({
    //   url: `bookmarks/${type}/${id}`,
    //   method: 'patch',
    //   data: {
    //     memberId: user.memberId,
    //   },
    //   withCredentials: true,
    //   headers,
    // }).catch(error => {
    //   console.log(error);
    // });
  };

  return (
    <div>
      {isBookmarked ? (
        <FaBookmark className="bookmark bookmark_true" onClick={handleBookmarkClick} />
      ) : (
        <FaRegBookmark className="bookmark bookmark_false" onClick={handleBookmarkClick} />
      )}
    </div>
  );
};

export default Bookmark;
