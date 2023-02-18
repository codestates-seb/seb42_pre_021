import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const SORT_BY = ['Newest', 'Answers', 'Views'];
const CORE_VALUES = [
  'Adopt a customer-first mindset',
  'Be flexible and inclusive',
  'Be transparent',
  'Empower people to deliver outstanding results',
  'Keep community at our center',
  'Learn, share, grow',
];
const Questions = () => {
  const navigate = useNavigate();
  const [currentSortBy, setCurrentSortBy] = useState(0);
  const [questionList, setQuestionList] = useState([]);

  // ! redux로 상태 정리 완성되면 코드 변경하기
  useEffect(() => {
    axios.get('http://localhost:3001/questions').then(response => setQuestionList(response.data));
    console.log(questionList);
  }, []);

  const handleSortClick = index => {
    setCurrentSortBy(index);
  };

  const handleAskButtonClick = () => {
    navigate('/add');
  };

  return (
    <>
      <TestNav>네비게이션 공간 테스트용</TestNav>
      <Container>
        <QuesionSection>
          <TitleWrapper>
            <div>
              <h1>All Questions</h1>
              <button onClick={handleAskButtonClick}>Ask Question</button>
            </div>
            <div>
              <h2>
                {questionList.length.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} questions
              </h2>
              <Sort>
                {SORT_BY.map((item, idx) => {
                  return (
                    <li
                      key={idx}
                      role="presentation"
                      className={currentSortBy === idx ? 'current' : null}
                      onClick={() => handleSortClick(idx)}
                    >
                      {item}
                    </li>
                  );
                })}
              </Sort>
            </div>
          </TitleWrapper>
          <QuestionWrapper>
            {questionList.map(question => {
              return (
                <Quesion key={question['question-id']}>
                  <section>
                    <ul>
                      <li>{question.view_count} views</li>
                    </ul>
                    <div>
                      <h1>{question.title}</h1>
                      <p>{question.content.slice(0, 150)}...</p>
                      <Tags>
                        {question.tag.map((tag, idx) => {
                          return <li key={idx}>{tag}</li>;
                        })}
                      </Tags>
                    </div>
                  </section>
                  <section>
                    <p>{question['member-id']}</p>
                    <p>{new Date(question.created_at).toLocaleString()}</p>
                  </section>
                </Quesion>
              );
            })}
          </QuestionWrapper>
        </QuesionSection>
        <SideContent>
          <NoticeWrapper>
            <ul>
              <p>Who we are</p>
              <li>Empowering the world to develop technology through collective knowledge.</li>
            </ul>
            <ul>
              <p>Our core values</p>
              {CORE_VALUES.map((value, idx) => {
                return <li key={idx}>{value}</li>;
              })}
            </ul>
          </NoticeWrapper>
        </SideContent>
      </Container>
    </>
  );
};

const TestNav = styled.nav`
  border: 2px solid blue;
  width: 15rem;
  height: 100%;
  position: fixed;
  top: 3rem;
  left: 5%;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding-top: 2rem;
  padding-left: calc(5% + 15rem);
`;

const QuesionSection = styled.section`
  /* border: 2px solid red; */
  width: 48rem;
  height: fit-content;
`;

const SideContent = styled.aside`
  /* border: 2px solid greenyellow; */
  width: 19rem;
  height: 100%;
`;

const TitleWrapper = styled.div`
  background-color: #fff;
  width: 100%;
  height: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem 2rem;

  div {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  button {
    border: none;
    width: 7.2rem;
    height: 2.5rem;
    background-color: #0b95ff;
    color: #fff;
    border-radius: 3px;
    font-size: 0.9rem;
    box-shadow: inset 0px 1px #95d1ff;
    border: 1px solid #0b95ff;
    cursor: pointer;
    :hover {
      filter: brightness(0.9);
    }
  }
  h2 {
    font-size: 1.3rem;
    font-weight: 500;
    color: #222;
  }
`;

const Sort = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid #888;
  width: 15rem;
  height: 2.3rem;
  list-style: none;
  border-radius: 3px;
  overflow: hidden;
  li {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    color: #888;
    font-size: 0.9rem;
    cursor: pointer;
    :nth-of-type(n + 2) {
      border-left: 1px solid #888;
    }
    :hover {
      background-color: #eee;
      color: #333;
    }
  }
  .current {
    background-color: #ddd;
    color: #222;
  }
`;

const QuestionWrapper = styled.div`
  width: 100%;
  padding-right: 2rem;
`;

const Quesion = styled.article`
  width: 100%;
  border-top: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  section {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 1rem;
    padding: 1rem;
    :first-of-type {
      ul {
        flex: 1;
        text-align: right;
        list-style: none;
      }
      div {
        flex: 5;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        h1 {
          color: #0074cc;
          font-size: 1.2rem;
        }
      }
    }
    :last-of-type {
      align-items: flex-end;
      justify-content: flex-end;

      p {
        :first-of-type {
          color: #0074cc;
        }
        :last-of-type {
          font-size: 0.9rem;
          color: #666;
        }
      }
    }
  }
  :last-of-type {
    border-bottom: 1px solid #ddd;
    margin-bottom: 2rem;
  }
`;

const Tags = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  li {
    margin-right: 0.5rem;
    background-color: #e1ecf4;
    padding: 0.2rem 0.5rem;
    border-radius: 0.2rem;
    font-size: 0.9rem;
    color: #6391b3;
    cursor: pointer;
    :hover {
      background-color: #d0e3f1;
      color: #2c5877;
    }
  }
`;

const NoticeWrapper = styled.section`
  width: 100%;
  height: fit-content;
  background-color: #fdf7e3;
  border: 1px solid #f1e5bc;
  color: #525960;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  ul {
    list-style: none;
    p {
      font-weight: 800;
      padding: 0.7rem 1rem;
      background-color: #fbf3d5;
      border: 1px solid #f1e5bc;
      border-left: none;
      border-right: none;
      margin-bottom: 0.2rem;
    }
    li {
      padding: 0.5rem 1rem;
      :last-of-type {
        margin-bottom: 0.2rem;
      }
    }
    :first-of-type {
      p {
        border-top: none;
      }
    }
  }
`;

export default Questions;
