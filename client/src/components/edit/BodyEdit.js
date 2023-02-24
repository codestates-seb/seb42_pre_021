import styled from 'styled-components';
import TextEditor from 'components/Editor';
import { useState } from 'react';

const BodyEdit = ({ questionEditRef, content, handleSectionClick, currentForm }) => {
  const [isChanged, setIsChanged] = useState(false);

  const handleEditorChange = () => {
    const ref = questionEditRef.current?.getInstance().getMarkdown();
    if (ref === content) {
      setIsChanged(false);
    } else {
      setIsChanged(true);
    }
  };

  return (
    <BodyEditWrapper onClick={() => handleSectionClick('format')}>
      <h1>Body</h1>
      <div
        className={
          currentForm === 'format'
            ? `focused ${isChanged ? 'changed' : 'not_changed'}`
            : `not_focused ${isChanged ? null : 'not_changed'}`
        }
      >
        <TextEditor
          editorRef={questionEditRef}
          editorValue={content}
          editorHeight="400px"
          onEditorChange={handleEditorChange}
        />
        {!isChanged ? (
          <span>It looks like your post is not changed; please add some more details.</span>
        ) : null}
      </div>
    </BodyEditWrapper>
  );
};

const BodyEditWrapper = styled.div`
  width: 100%;
  > h1 {
    font-size: 1rem;
    margin-top: 1rem;
    margin-bottom: 0.3rem;
    cursor: pointer;
  }
  div {
    width: 100%;
  }
  .toastui-editor-toolbar {
    overflow: hidden;
  }
  .focused.changed {
    .toastui-editor-main {
      border-radius: 3px;
      border: 1px solid #58a4de;
      outline: 4px solid #ddeaf7;
    }
  }
  .focused.not_changed {
    .toastui-editor-main {
      border-radius: 3px;
      border: 1px solid red;
      outline: 4px solid #f8e1e0;
    }
    > span {
      font-size: 0.8rem;
      margin-top: 1rem;
      color: #d0393e;
    }
  }
  .not_focused.not_changed {
    .toastui-editor-main {
      border: 1px solid red;
      border-radius: 0px 0px 3px 3px;
      outline: none;
    }
    > span {
      font-size: 0.8rem;
      margin-top: 1rem;
      color: #d0393e;
    }
  }
  @media screen and (max-width: 640px) {
    width: calc(100vw - 2rem);
  }
`;

export default BodyEdit;
