import styled from 'styled-components';
import TextEditor from 'components/Editor';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { BsXLg } from 'react-icons/bs';
import axios from 'axios';

const stepList = [
  'Summarize your problem in a one-line title.',
  'Describe your problem in more detail.',
  'Describe what you tried and what you expected to happen.',
  'Add “tags” which help surface your question to members of the community.',
  'Review your question and post it to the site.',
];

const QuestionAdd = () => {
  const [title, setTitle] = useState('');
  const [titleValid, setTitleValid] = useState(false);
  const [contentValue, setContentValue] = useState('');
  const [contentValid, setContentValid] = useState(false);
  const [tagsInput, setTagsInput] = useState('');
  const [tagsArr, setTagsArr] = useState(['']);
  const [tagsValid, setTagsValid] = useState(false);

  const editorRef = useRef();
  // const navigate = useNavigate();

  // const handleSubmitButton = () => {
  //   // 에디터 내용 HTML 태그 형태로 취득
  //   console.log(editorRef.current?.getInstance().getHTML());
  //   // 에디터 내용 MarkDown 형태로 취득
  //   console.log(editorRef.current?.getInstance().getMarkdown());
  // };

  // useEffect(() => {
  //   if (!isLogin) {
  //     navigate('/login');
  //   }
  // }, []);

  useEffect(() => {
    if (tagsArr.length >= 1) {
      setTagsValid(true);
    } else {
      setTagsValid(false);
    }
  }, [tagsArr]);

  const handleTitleChange = event => {
    setTitle(event.target.value);
    if (title.length >= 10) {
      setTitleValid(true);
    } else {
      setTitleValid(false);
    }
    console.log(title);
  };

  const handleChageEditorContent = () => {
    if (editorRef.current) {
      const htmlText = editorRef.current?.getInstance().getHTML();
      // const markDownText = editorRef.current?.getInstance().getMarkdown();
      setContentValue(htmlText);
      console.log(contentValue);

      if (htmlText.length >= 30) {
        setContentValid(true);
      } else {
        setContentValid(false);
      }
    }
  };

  const handleChangeTag = event => {
    const tagsText = event.target.value.trim().replace(',', '');
    setTagsInput(tagsText);
  };

  const handleTagKeyUp = event => {
    if ((event.key === ',' || event.keyCode === 32) && tagsInput.length > 0) {
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
    if (!titleValid || !contentValid) {
      alert('제목 10자이상, 본문 30자이상인지 확인해주세요');
    }

    console.log(contentValue);

    const data = {
      id: 'abcde11',
      title,
      content: contentValue,
      tag: [...tagsArr],
    };
    axios.post(`http://localhost:3001/questions`, data);
    //   const accessToken = sessionStorage.getItem('accesstoken');
    //   axios.defaults.withCredentials = true;

    //   const headers = {
    //     Authorization: `Bearer ${accessToken}`,
    //     'Content-Type': 'Application/json',
    //     Accept: '*/*',
    //   };

    // const data = {
    //   title,
    //   content: contentValue,
    //   tag: [...tagsArr],
    //   memberId : userId
    // };

    //   return axios.post(`${process.env.REACT_APP_API_URL}/questions`, data, { headers });
    // };
  };

  return (
    <Container>
      <Wrapper>
        <HeaderBackgroundgWrapper>
          <h1>Ask a public qeustion</h1>
        </HeaderBackgroundgWrapper>
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
          <TextEditor
            editorRef={editorRef}
            editorValue={' '}
            editorHeight={`500px`}
            onChange={handleChageEditorContent}
          />
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
                    <BsXLg size={30} />
                  </TagDeleteButton>
                </Tag>
              );
            })}

            <TagsInput value={tagsInput} onChange={handleChangeTag} onKeyUp={handleTagKeyUp} />
          </TagsInputContainer>
        </TagsWrapper>
        <SubmitButton
          isValid={titleValid && contentValid && tagsValid}
          onClick={handleSubmitButton}
        >
          Submit
        </SubmitButton>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: #f8f9f9;
  overflow-x: hidden;
  overflow-y: scroll;
`;

const Wrapper = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 1023px) {
    width: 100%;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

const HeaderBackgroundgWrapper = styled.div`
  background-image: url('https://cdn.sstatic.net/Img/ask/background.svg?v=2e9a8205b368');
  height: 130px;
  display: flex;
  align-items: center;
  width: 1024px;
  margin-bottom: 1rem;

  @media screen and (min-width: 1050px) {
    height: 130px;
    background-position: right;
    background-repeat: no-repeat;
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
  @media screen and (max-width: 767px) {
    width: 70%;
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
  height: 10rem;
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
`;

const EditorContainer = styled(TitleContainer)`
  min-width: fit-content;
  width: 1024px;
  height: 500px;
  margin-bottom: 1rem;
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
  padding: 5px 8px;
  margin: 4px;
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
  margin-left: 5px;
  width: 20px;
  &:hover {
    background-color: #85b5d7;
    cursor: pointer;
  }
`;

const SubmitButton = styled.button`
  width: 10%;
  height: 2rem;
  margin-top: 1rem;
  color: #ffff;
  cursor: pointer;
  background-color: #39739d;
  border: none;
  border-radius: 3px;
`;

export default QuestionAdd;
