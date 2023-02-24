import baseURL from 'api/baseURL';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getTime } from 'utils/getTime';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
// import { useSelector } from 'react-redux';
// import axios from 'axios';

const EditAndProfile = ({ member, date, isAnswer, data, title }) => {
  const navigate = useNavigate();

  // const { user } = useSelector(state => state.auth);
  // const user = JSON.parse(localStorage.getItem('user'));

  const handleEditClick = isAnswer => {
    if (isAnswer) {
      navigate('./answer-edit', {
        state: {
          title: title,
          markdown: data.markdown,
          answerId: data.answerId,
        },
      });
    } else {
      navigate('./edit', {
        state: {
          title: data.title,
          markdown: data.markdown,
          tags: data.tag,
        },
      });
    }
  };

  const handleDeleteClick = isAnswer => {
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
        deleteRequest(isAnswer);
      } else {
        if (isAnswer) {
          toast.info('Cancelled! Your answer is safe.');
        } else {
          toast.info('Cancelled! Your question is safe.');
        }
      }
    });
  };

  const deleteRequest = async isAnswer => {
    // ! 서버 연동시 사용할 코드
    // const headers = {
    //   Authorization: `Bearer ${user.authorization}`,
    //   refresh: `Bearer ${user.refresh}`,
    //   'Content-Type': 'Application/json',
    // };

    if (isAnswer) {
      await baseURL.delete(`/answers/${data.answerId}`).catch(error => {
        console.log(error.message);
      });

      // ! 서버 연동시 사용할 코드
      // await axios({
      //   url: `/answers/${data.answerId}`,
      //   method: 'delete',
      //   withCredentials: true,
      //   headers,
      // }).catch(error => {
      //   console.log(error);
      // });
      location.reload();
      toast.success('Your answer has been deleted!');
    } else {
      await baseURL.delete(`/questions/${data.questionId}`).catch(error => {
        console.log(error.message);
      });

      // ! 서버 연동시 사용할 코드
      // await axios({
      //   url: `/questions/${data.questionId}`,
      //   method: 'delete',
      //   withCredentials: true,
      //   headers,
      // }).catch(error => {
      //   console.log(error);
      // });
      navigate('/');
      toast.success('Your question has been deleted!');
    }
  };

  return (
    <ProfileWrapper>
      <EditAndDelete>
        <li>Share</li>
        {/* {user.memberId === data.memberId && (
          <> */}
        <li role="presentation" onClick={() => handleEditClick(isAnswer)}>
          Edit
        </li>
        <li role="presentation" onClick={() => handleDeleteClick(isAnswer)}>
          Delete
        </li>
        {/* </>
        )} */}
      </EditAndDelete>
      <Profile className={isAnswer ? 'answer_profile' : null}>
        <img src={member.profile} alt={`${member.nickname} profile`} />
        <div>
          <p>{member.nickname}</p>
          <p>
            {isAnswer ? 'answered' : 'asked'} {getTime(date)}
          </p>
        </div>
      </Profile>
    </ProfileWrapper>
  );
};

const ProfileWrapper = styled.div`
  width: 100%;
  margin-top: 3rem;
  display: flex;
  justify-content: space-between;
  .answer_profile {
    background-color: #fff;
  }
  @media screen and (max-width: 640px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const EditAndDelete = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;
  font-size: 0.8rem;
  color: #888;
  font-weight: 600;
  cursor: pointer;
  li {
    :hover {
      color: #aaa;
    }
  }
`;

const Profile = styled.div`
  width: 13rem;
  height: 4.3rem;
  background-color: #d0e2f0;
  padding: 0 0.7rem;
  display: flex;
  align-items: center;
  border-radius: 0.3rem;
  > img {
    width: 2.5rem;
    margin-right: 1rem;
    cursor: pointer;
  }
  > div {
    display: flex;
    flex-direction: column;
    > p {
      :first-of-type {
        cursor: pointer;
      }
      :last-of-type {
        margin-top: 0.2rem;
        color: #777;
        font-size: 0.8rem;
      }
    }
  }
  @media screen and (max-width: 640px) {
    align-self: flex-end;
  }
`;

export default EditAndProfile;
