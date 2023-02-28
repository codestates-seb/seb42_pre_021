import styled from 'styled-components';
import TextEditor from 'components/Editor';
import MyProfileInput from './MyProfileInput';

const MyProfileList = ({ userinfo, editorRef, isEdit, state, setState }) => {
  console.log(userinfo);
  return (
    <>
      {userinfo.data && (
        <InfoMain>
          <ul>
            <li>
              <MyProfileInput
                label={'Display name'}
                value={userinfo.data.nickname}
                isEdit={isEdit}
                id={'nickname'}
                state={state}
                setState={setState}
              />
            </li>
            <li>
              <MyProfileInput
                label={'Location'}
                value={userinfo.data.location}
                isEdit={isEdit}
                id={'location'}
                state={state}
                setState={setState}
              />
            </li>
            <li>
              <MyProfileInput
                label={'Title'}
                value={userinfo.data.title}
                isEdit={isEdit}
                id={'title'}
                state={state}
                setState={setState}
              />
            </li>
            <li>
              <div className="inputTitle">About me</div>
              {isEdit ? (
                <TextEditor
                  editorRef={editorRef}
                  editorValue={userinfo.data.markdown ? userinfo.data.markdown : ' '}
                  // editorValue={userinfo.data.markdown || ' '}
                  editorHeight={'10rem'}
                />
              ) : (
                <span>{userinfo.data.markdown ? userinfo.data.markdown : ''}</span>
                // <span>{userinfo.data.markdown}</span>
              )}
            </li>
          </ul>
        </InfoMain>
      )}
    </>
  );
};

const InfoMain = styled.article`
  > ul {
    > li {
      display: flex;
      flex-direction: column;
      list-style: none;
      white-space: nowrap;
      margin: 0.5rem;
      font-size: 0.9rem;
      font-weight: bold;
      > div {
        margin-bottom: 0.2rem;

        @media screen and (max-width: 640px) {
          width: 100%;
        }
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
    }
  }
`;

export default MyProfileList;
