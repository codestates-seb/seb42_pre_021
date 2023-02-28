import styled from 'styled-components';
import TextEditor from 'components/Editor';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { BsXLg } from 'react-icons/bs';
// import axios from 'axios';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import customAxios from 'api/baseURL';
import Swal from 'sweetalert2';

const stepList = [
  'Summarize your problem in a one-line title.',
  'Describe your problem in more detail.',
  'Describe what you tried and what you expected to happen.',
  'Add “tags” which help surface your question to members of the community.',
  'Review your question and post it to the site.',
];

const QuestionAdd = () => {
  const { user } = useSelector(state => state.auth);
  const [title, setTitle] = useState('');
  const [titleValid, setTitleValid] = useState(false);
  const [contentValid, setContentValid] = useState(false);
  const [tagsInput, setTagsInput] = useState('');
  const [tagsArr, setTagsArr] = useState([]);
  const [tagsValid, setTagsValid] = useState(false);
  const navigate = useNavigate();
  const editorRef = useRef();

  useEffect(() => {
    if (tagsArr.length >= 1) {
      setTagsValid(true);
    } else {
      setTagsValid(false);
    }
  }, [tagsArr, title, navigate]);

  const handleTitleChange = event => {
    setTitle(event.target.value);
    if (title.length >= 5) {
      setTitleValid(true);
    } else {
      setTitleValid(false);
    }
  };

  const handleChangeTag = event => {
    const tagsText = event.target.value.trim().replace(',', '');
    setTagsInput(tagsText);
  };

  const handleTagKeyUp = event => {
    if (
      (event.key === ',' || event.keyCode === 32 || event.keyCode === 13) &&
      tagsInput.length > 0
    ) {
      setTagsArr([...tagsArr, tagsInput.slice(0, tagsInput.length)]);
      setTagsInput('');
    }
  };

  const handleDeleteTag = index => {
    if (index === 0) {
      const newTagsArr = [...tagsArr.slice(1)];
      setTagsArr(newTagsArr);
    } else if (index === tagsArr.length - 1) {
      const newTagsArr = [...tagsArr.slice(0, index)];
      setTagsArr(newTagsArr);
    } else {
      const newTagsArr = [...tagsArr.slice(0, index), ...tagsArr.slice(index + 1)];
      setTagsArr(newTagsArr);
    }
  };

  const handleSubmitButton = () => {
    const html = editorRef.current?.getInstance().getHTML();
    const markdown = editorRef.current?.getInstance().getMarkdown();

    const pureMarkUpTextLength = markdown.replace(/(<([^>]+)>)/gi, ' ').length;
    const pureHtmlTextLength = html.replace(/(<([^>]+)>)/gi, ' ').length;
    console.log(`텍스트 글자는 :${pureHtmlTextLength}`);
    console.log(`타이틀 글자는 : ${title.length}`);

    if (pureMarkUpTextLength.length >= 10 || pureHtmlTextLength >= 10) {
      setContentValid(true);
    } else {
      setContentValid(false);
    }

    if (!titleValid || !contentValid || !tagsValid) {
      // return alert('제목 5자이상, 본문 10자이상, 태그 1개이상인지 확인해주세요');
      Swal.fire({
        icon: 'error',
        text: '제목 5자이상, 본문 10자이상, 태그 1개이상인지 확인해주세요',
      });
      return;
    }

    const questionData = {
      memberId: user.memberId,
      title,
      html,
      markdown,
      tagNames: [...tagsArr],
    };

    return customAxios
      .post('/questions', questionData)
      .then(response => {
        console.log(response);
        navigate(`/`);
      })
      .catch(error => {
        console.log(error);
        toast.error('질문 생성에 실패하였습니다. 다시 시도해주세요');
      });
  };

  return (
    <Container>
      <Wrapper>
        <HeaderWrapper>
          <HeaderTitleContainer>
            <h1>Ask a public qeustion</h1>
          </HeaderTitleContainer>
          <HeaderBackground />
        </HeaderWrapper>

        <NoticeContainer>
          <h2>Writing a good question</h2>
          <p>
            You’re ready to <Linkto>ask</Linkto> a <Linkto>programming-related question</Linkto> and
            this form will help guide you through the process.
            <br />
            Looking to ask a non-programming question? See <Linkto>the topics here</Linkto> to find
            a relevant site.
          </p>
          <h5>Steps</h5>
          {stepList.map((step, idx) => {
            return <li key={idx}>{step}</li>;
          })}
        </NoticeContainer>

        <TitleContainer>
          <Label>Title</Label>
          <span>Be specific and imagine you’re asking a question to another person.</span>
          <Input
            placeholder="  e.g Is there an R function for finding the index of an element in a vector?"
            onChange={handleTitleChange}
            value={title}
          ></Input>
        </TitleContainer>

        <EditorContainer>
          <Label>What are the details of your problem?</Label>
          <span>
            Introduce the problem and expand on what you put in the title. Minimum 20 characters.
          </span>
          <TextEditor editorRef={editorRef} editorValue={' '} editorHeight={`500px`} />
        </EditorContainer>
        <TagsWrapper>
          <Label>Tags</Label>
          <span>
            Add up to 5 tags to describe what your question is about. Start typing to see
            suggestions.
          </span>
          <TagsInputContainer>
            {tagsArr.map((tag, index) => {
              return (
                <Tag key={index}>
                  {tag}
                  <TagDeleteButton
                    onClick={() => {
                      handleDeleteTag(index);
                    }}
                  >
                    <BsXLg />
                  </TagDeleteButton>
                </Tag>
              );
            })}

            <TagsInput value={tagsInput} onChange={handleChangeTag} onKeyUp={handleTagKeyUp} />
          </TagsInputContainer>
        </TagsWrapper>
        <ButtonContainer>
          <SubmitButton onClick={handleSubmitButton}>Submit</SubmitButton>
        </ButtonContainer>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: fit-content;
  display: flex;
  justify-content: center;
  background-color: #f8f9f9;
  /* overflow-x: hidden; */
  /* overflow-y: scroll; */
`;

const Wrapper = styled.div`
  padding: 1rem 0 2rem 0;
  width: 1280px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 1279px) {
    width: 100%;
    padding: 1rem 1.5rem;
  }
  @media screen and (max-width: 1023px) {
    width: 100%;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

const HeaderWrapper = styled.div`
  width: 100%;
  height: 130px;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  white-space: nowrap;
`;

const HeaderTitleContainer = styled.div`
  min-width: fit-content;
  height: 130px;
  display: flex;
  align-items: center;
`;

const HeaderBackground = styled.div`
  background-image: url('https://cdn.sstatic.net/Img/ask/background.svg?v=2e9a8205b368');
  display: flex;
  align-items: center;
  width: 100%;
  height: 130px;
  margin-bottom: 1rem;
  background-repeat: no-repeat;

  @media screen and (min-width: 1050px) {
    position: relative;

    width: 500px;
    background-position: right;
  }

  @media screen and (max-width: 1023px) {
    background-image: none;
    height: 80px;
    font-size: 0.8rem;
  }
`;

const NoticeContainer = styled.div`
  min-width: fit-content;
  width: 1024px;
  background-color: #ebf4fb;
  border: 1px solid #a6ceed;
  border-radius: 0.2rem;
  padding: 2rem;
  word-wrap: break-word;
  margin-bottom: 1rem;

  p {
    margin-top: 1rem;
    font-size: 0.95rem;
  }

  h5 {
    margin: 1rem 0 0.3rem 0;
  }

  li {
    font-size: 0.8rem;
  }
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
  @media screen and (max-width: 767px) {
    /* width: 70%; */
  }
`;

const Linkto = styled(Link)`
  color: #3b95ff;
  font-size: 0.9rem;
  text-decoration: none;
  &:hover,
  &:focus {
    color: #80bbff;
  }
`;

const TitleContainer = styled.div`
  position: relative;
  min-width: fit-content;
  width: 1024px;
  /* height: 10rem; */
  background-color: #ffffff;
  border: 1px solid #e3e6e8;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  border-radius: 0.2rem;
  margin-bottom: 1rem;

  > span {
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
  }
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

const Label = styled.label`
  width: 90%;
  font-size: 1rem;
  font-weight: 700;
  margin: 0.8rem 0 0.5rem 0;
`;

const Input = styled.input`
  width: 95%;
  height: 2rem;
  margin-top: 0.5rem;
  border-style: none;
  border-radius: 0.2rem;
  border: 1px solid #babfc4;
  :focus {
    border: 1px solid rgba(0, 103, 194, 0.4);
    box-shadow: 0 0 0 4px rgba(144, 203, 255, 0.4);
    outline: none;
  }
`;

const EditorContainer = styled(TitleContainer)`
  width: 1024px;
  height: 500px;
  margin-bottom: 1rem;
  overflow: hidden;
  .toastui-editor-main {
    :has(.ProseMirror-focused) {
      border-radius: 3px;
      border: 1px solid rgba(0, 103, 194, 0.4);
      box-shadow: 0 0 0 4px rgba(144, 203, 255, 0.4);
    }
  }
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
  @media screen and (max-width: 640px) {
    .toastui-editor-defaultUI {
      width: calc(100vw - 6rem);
    }
  }
`;

const TagsWrapper = styled(TitleContainer)`
  height: auto;
  border-radius: 0.2rem;
`;

const TagsInputContainer = styled.div`
  border: 1px solid #cacaca;
  border-radius: 4px;
  display: flex;
  height: 35px;
  width: 100%;

  &:focus-within {
    border: 1px solid rgba(0, 103, 194, 0.4);
    box-shadow: 0 0 0 4px rgba(144, 203, 255, 0.4);
  }
`;
const TagsInput = styled.input`
  background-color: transparent;
  border: none;
  border-radius: 4px;
  box-sizing: border-box;
  height: 30px;
  padding-top: 3px;
  width: 100%;
  &:focus-within {
    outline: none;
  }
`;

const Tag = styled.div`
  display: flex;
  align-items: center;
  height: 25px;
  width: max-content;
  white-space: nowrap;
  padding: 2px 8px;
  margin: 5px;
  background-color: #e1ecf4;
  border-radius: 5px;
  border: 1px #e1ecf4;
  color: #39739d;
  font-size: small;
`;

const TagDeleteButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  color: #39739d;
  height: 20px;
  padding: 5px;
  margin-left: 2px;
  width: 20px;
  &:hover {
    background-color: #85b5d7;
    cursor: pointer;
  }
`;

const ButtonContainer = styled(TagsInputContainer)`
  height: 3rem;
  display: flex;
  justify-content: center;
  border: none;
  padding-bottom: 5rem;
  &:focus-within {
    border: none;
    box-shadow: none;
  }
`;

const SubmitButton = styled.button`
  width: 20%;
  height: 3.125rem;
  margin-top: 1rem;
  margin-bottom: 3rem;
  color: #ffff;
  cursor: pointer;
  background-color: #39739d;
  border: none;
  border-radius: 3px;

  &:hover {
    background-color: #85b5d7;
    cursor: pointer;
  }
`;

export default QuestionAdd;
