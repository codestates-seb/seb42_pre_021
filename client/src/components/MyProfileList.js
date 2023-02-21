import styled from 'styled-components';
import { FaMapMarkerAlt } from 'react-icons/fa';
import TextEditor from 'components/Editor';

const MyProfileList = ({ username, location, title, aboutme, isEdit }) => {
  return (
    <InfoMain>
      <ul>
        <li>
          <label htmlFor="name" className="inputTitle">
            Display name
          </label>
          {isEdit ? (
            <div className="inputBox">
              <input id="name" type="text" autoComplete="off" />
            </div>
          ) : (
            <span>{username}</span>
          )}
        </li>
        <li>
          <label htmlFor="location" className="inputTitle">
            Location
          </label>
          {isEdit ? (
            <div className="inputBox">
              <input id="location" type="text" autoComplete="off" />
            </div>
          ) : (
            <span>
              <FaMapMarkerAlt />
              {location}
            </span>
          )}
        </li>
        <li>
          <label htmlFor="title" className="inputTitle">
            Title
          </label>
          {isEdit ? (
            <div className="inputBox">
              <input
                id="title"
                type="text"
                placeholder="No title has been set"
                autoComplete="off"
              />
            </div>
          ) : (
            <span>{title}</span>
          )}
        </li>
        <li>
          <div className="inputTitle">About me</div>
          {isEdit ? (
            <TextEditor editorValue={' '} editorHeight={'10rem'} />
          ) : (
            <AboutMe>{aboutme}</AboutMe>
          )}
        </li>
      </ul>
    </InfoMain>
  );
};

const InfoMain = styled.main`
  > ul {
    > li {
      display: flex;
      flex-direction: column;
      list-style: none;
      white-space: nowrap;
      margin: 0.5rem;
      font-size: 0.9rem;
      font-weight: bold;
      > .inputTitle {
        margin-bottom: 0.2rem;
      }
      > span {
        display: flex;
        align-items: center;
        padding-left: 1rem;
        margin: 0.5rem;
        font-size: 0.9rem;
        font-weight: lighter;
        white-space: normal;
        color: #777;
      }

      > .inputBox {
        display: flex;
        width: 50%;
        padding: 0.3rem;
        border-radius: 4px;
        border: 1px solid #bbc0c4;
        &:focus-within {
          border: 1px solid gray;
        }

        input {
          width: 100%;
          margin: 0.1rem;
          border: none;
          font-size: 0.8rem;
          &:focus {
            outline: none;
          }
        }
        @media screen and (max-width: 640px) {
          width: 100%;
        }
      }
    }
  }
`;

const AboutMe = styled.span``;

export default MyProfileList;
