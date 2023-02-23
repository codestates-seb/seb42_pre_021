import baseURL from 'api/baseURL';
import { useState } from 'react';
import { FaRegBookmark, FaBookmark } from 'react-icons/fa';

const Bookmark = ({ bookmark, id, type }) => {
  const [isBookmarked, setIsBookmarked] = useState(bookmark);

  const handleBookmarkClick = async () => {
    setIsBookmarked(cur => !cur);
    await baseURL
      .patch(`/${type}/${id}`, {
        bookmark: !isBookmarked,
      })
      .catch(err => {
        console.log(err.message);
      });
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
