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
          <li>{question.viewCount} views</li>
        </ul>
        <div>
          <h1>
            <Link to={`/${question.questionId}`}>{question.title}</Link>
          </h1>
          <p>{handleHTMLToText(question.content.html)}</p>
          {question.tag.length ? <Tags data={question} /> : null}
        </div>
      </section>
      <section>
        <img src={question.questionMember.profile} alt="profileImg" />
        <p>{question.questionMember.nickname}</p>
        <p>{new Date(question.createdAt).toLocaleString()}</p>
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
    :first-of-type {
      ul {
        flex: 1;
        text-align: right;
        list-style: none;
        li {
          font-size: 0.8rem;
        }
      }
      div {
        width: 100%;
        padding-left: 1rem;
        flex: 5;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        h1 {
          cursor: pointer;
          a {
            color: #0074cc;
            font-size: 1rem;
            text-decoration: none;
          }
        }
        p {
          width: 100%;
          font-size: 0.9rem;
          text-align: left;
          word-wrap: break-word;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
    :last-of-type {
      align-items: center;
      justify-content: flex-end;
      img {
        width: 1.5rem;
        height: 1.5rem;
        margin-right: 0.5rem;
      }
      p {
        font-size: 0.9rem;
        :first-of-type {
          color: #0074cc;
          margin-right: 1rem;
        }
        :last-of-type {
          font-size: 0.8rem;
          color: #666;
        }
      }
    }
  }
  :last-of-type {
    border-bottom: 1px solid #ddd;
    margin-bottom: 2rem;
  }
  @media screen and (max-width: 1279px) {
  }
  @media screen and (max-width: 979px) {
    section {
      :first-of-type {
        flex-direction: column;
        align-items: flex-start;
        div {
          padding-top: 0.5rem;
          padding-left: 0;
        }
      }
    }
  }
`;

export default QuestionArticle;
