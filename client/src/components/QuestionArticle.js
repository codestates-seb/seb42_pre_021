import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Tags from './Tags';

const QuestionArticle = ({ question }) => {
  const handleHTMLToText = text => {
    return text.replace(/(<([^>]+)>)/gi, ' ');
  };
  return (
    <Question>
      <section>
        <ul>
          <li>0 votes</li>
          <li>{question.answerCount} answers</li>
          <li>{question.viewCount} views</li>
        </ul>
        <div>
          <h1>
            <Link to={`/${question.questionId}`}>{question.title}</Link>
          </h1>
          <p>{handleHTMLToText(question.content.html)}</p>
          <div>
            {question.tag.length ? <Tags data={question} /> : null}
            <MemberInfo>
              <img src={question.questionMember.profile} alt="profileImg" />
              <p>{question.questionMember.nickname}</p>
              <p>{new Date(question.createdAt).toLocaleString()}</p>
            </MemberInfo>
          </div>
        </div>
      </section>
    </Question>
  );
};

const Question = styled.article`
  width: 100%;
  height: fit-content;
  border-top: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  section {
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 1rem;
    > ul {
      width: 7rem;
      text-align: right;
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      li {
        font-size: 0.8rem;
        :nth-last-of-type(-n + 2) {
          color: #555;
        }
      }
    }
    > div {
      width: calc(100% - 7rem);
      padding-left: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
      > h1 {
        cursor: pointer;
        a {
          color: #0074cc;
          font-size: 1rem;
          text-decoration: none;
        }
      }
      > p {
        width: 100%;
        font-size: 0.8rem;
        text-align: left;
        word-wrap: break-word;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      > div {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        gap: 0.5rem;
      }
    }
  }
  :last-of-type {
    border-bottom: 1px solid #ddd;
    margin-bottom: 2rem;
  }
  @media screen and (max-width: 979px) {
    section {
      flex-direction: column;
      align-items: flex-start;
      > ul {
        text-align: left;
        flex-direction: row;
        width: 100%;
      }
      > div {
        width: 100%;
        padding-top: 0.5rem;
        padding-left: 0;
      }
    }
  }
`;

const MemberInfo = styled.div`
  width: max-content;
  display: flex;
  align-items: center;
  margin-left: auto;
  padding: 0.7rem 0;
  img {
    width: 1.2rem;
    height: 1.2rem;
    margin-right: 0.5rem;
  }
  p {
    font-size: 0.8rem;
    :first-of-type {
      color: #0074cc;
      margin-right: 1rem;
    }
    :last-of-type {
      font-size: 0.7rem;
      color: #666;
    }
  }
`;

export default QuestionArticle;
