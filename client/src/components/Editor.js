import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';

const TextEditor = ({ editorRef, editorPlaceholder, editorHeight }) => {
  return (
    <Editor
      ref={editorRef} // DOM 선택용 useRef
      placeholder={editorPlaceholder}
      previewStyle="vertical" // 미리보기 스타일 지정
      height={editorHeight} // 에디터 창 높이
      initialEditType="wysiwyg"
      useCommandShortcut={false}
    ></Editor>
  );
};

export default TextEditor;
