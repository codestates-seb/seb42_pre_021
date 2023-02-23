import styled from 'styled-components';
import TextEditor from 'components/Editor';
import MyProfileInput from './MyProfileInput';

const MyProfileList = ({
  nickname,
  location,
  title,
  content,
  editorRef,
  isEdit,
  handleOnChangeEditor,
  handleOnChangeInput,
}) => {
  return (
    <InfoMain>
      <ul>
        <li>
          <MyProfileInput
            label={'Display name'}
            value={nickname}
            isEdit={isEdit}
            id={'nickname'}
            handleOnChange={handleOnChangeInput}
          />
        </li>
        <li>
          <MyProfileInput
            label={'Location'}
            value={location}
            isEdit={isEdit}
            id={'location'}
            handleOnChange={handleOnChangeInput}
          />
        </li>
        <li>
          <MyProfileInput
            label={'Title'}
            value={title}
            isEdit={isEdit}
            id={'title'}
            handleOnChange={handleOnChangeInput}
          />
        </li>
        <li>
          <div className="inputTitle">About me</div>
          {isEdit ? (
            <TextEditor
              editorRef={editorRef}
              editorValue={content || ' '}
              editorHeight={'10rem'}
              value={content}
              onEditorChange={handleOnChangeEditor}
            />
          ) : (
            <span>{content}</span>
          )}
        </li>
      </ul>
    </InfoMain>
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
