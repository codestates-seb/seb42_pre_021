import {
  TitleEdit,
  BodyEdit,
  TagEdit,
  HowToEdit,
  HowToFormat,
  HowToTag,
  CancelButton,
  TopNotice,
} from 'components/Edit';
import { Container } from 'containers/Container';
import Navigation from 'containers/Navigation';
import { useRef, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import AddButton from 'components/AddButton';
import baseURL from 'api/baseURL';
import { toast } from 'react-toastify';
// import { useSelector } from 'react-redux';

const QuestionEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const { title, markdown, tags } = location.state;
  const [currentForm, setCurrentForm] = useState('edit');
  const [titleValue, setTitleValue] = useState(title);
  const [tagsArr, setTagsArr] = useState([...tags]);
  const [isQuestionChanged, setIsQuestionChanged] = useState(false);
  const questionEditRef = useRef('');

  // const { user } = useSelector(state => state.auth);
  // const user = JSON.parse(localStorage.getItem('user'));

  const handleSectionClick = form => {
    setCurrentForm(form);
  };

  const handleSubmit = async () => {
    // * 변경된 내용이 없을 시
    if (!isQuestionChanged) {
      toast.error('Nothing has changed!!');
      return;
    }
    const markdownValue = questionEditRef.current?.getInstance().getMarkdown();
    const htmlValue = questionEditRef.current?.getInstance().getHTML();
    // const headers = {
    //   Authorization: `Bearer ${user.authorization}`,
    //   refresh: `Bearer ${user.refresh}`,
    //   'Content-Type': 'Application/json',
    // };
    await baseURL
      .patch(`/questions/${id}`, {
        title: titleValue,
        html: htmlValue,
        markdown: markdownValue,
        tag: [...tagsArr],
      })
      .catch(err => {
        console.log(err.message);
      });

    // ! 서버 연동시 사용할 코드
    // await axios({
    //   url: `/questions/${id}`,
    //   method: 'patch',
    //   data: {
    //     title: titleValue,
    //       html: htmlValue,
    //       markdown: markdownValue,
    //     tag: [...tagsArr],
    //   },
    //   headers,
    //   withCredentials: true,
    // }).catch(err => {
    //   console.log(err.message);
    // });
    navigate(`../${id}`);
    toast.success('수정이 완료되었습니다');
  };

  return (
    <Container>
      <Navigation />
      <Wrapper>
        <EditSection>
          <TopNotice />
          <TitleEdit
            title={title}
            handleSectionClick={handleSectionClick}
            setTitleValue={setTitleValue}
            titleValue={titleValue}
            setIsQuestionChanged={setIsQuestionChanged}
          />
          <BodyEdit
            questionEditRef={questionEditRef}
            content={markdown}
            handleSectionClick={handleSectionClick}
            currentForm={currentForm}
            setIsQuestionChanged={setIsQuestionChanged}
          />
          <TagEdit
            handleSectionClick={handleSectionClick}
            tagsArr={tagsArr}
            setTagsArr={setTagsArr}
            currentForm={currentForm}
            setIsQuestionChanged={setIsQuestionChanged}
          />
          <AddButton buttonText="Save edits" handleButtonClick={handleSubmit} />
          <CancelButton id={id} />
        </EditSection>
        <div>
          <SideNotice>
            {currentForm === 'edit' ? (
              <HowToEdit />
            ) : currentForm === 'format' ? (
              <HowToFormat />
            ) : (
              <HowToTag />
            )}
          </SideNotice>
        </div>
      </Wrapper>
    </Container>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  padding: 1.7rem 0;
  > div {
    :last-of-type {
      width: 23rem;
      height: 100vh;
    }
  }
  @media screen and (max-width: 1279px) {
    display: grid;
    grid-template-columns: calc(100% - 23rem) 23rem;
    padding-right: 1rem;
  }
  @media screen and (max-width: 1049px) {
    grid-template-columns: 100%;
    padding: 1.7rem 1rem;
    > div {
      :last-of-type {
        width: 100%;
        height: auto;
        padding-right: 0;
        margin-top: 2rem;
      }
    }
  }
  @media screen and (max-width: 640px) {
    /* padding: 0; */
  }
`;

const EditSection = styled.section`
  width: 44rem;
  padding: 0 1.7rem;
  @media screen and (max-width: 1279px) {
    width: 100%;
  }
  @media screen and (max-width: 1049px) {
    padding: 0;
  }
`;

const SideNotice = styled.aside`
  z-index: 3;
  background-color: #fdf7e2;
  height: fit-content;
  width: 23rem;
  border-radius: 5px;
  border: 1px solid #f1e5bc;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: fixed;
  > div {
    padding: 0.8rem;
    width: 100%;
    background-color: #fbf3d5;
    border-bottom: 1px solid #f1e5bc;
  }
  > ul {
    padding: 1rem 0.8rem;
    padding-left: 1.8rem;
    > li {
      font-size: 0.8rem;
      margin-bottom: 0.5rem;
      :last-of-type {
        margin-bottom: 0;
      }
    }
    .style_none {
      list-style: none;
      margin-left: -0.7rem;
    }
  }
  @media screen and (max-width: 1279px) {
    width: 22.5rem;
  }
  @media screen and (max-width: 1049px) {
    width: 100%;
    position: relative;
    top: auto;
  }
`;

export default QuestionEdit;
