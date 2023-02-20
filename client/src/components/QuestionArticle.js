import styled from 'styled-components';

const QuestionArticle = ({ question }) => {
  return (
    <Question>
      <section>
        <ul>
          <li>{question.view_count} views</li>
        </ul>
        <div>
          <h1>{question.title}</h1>
          <p>{question.content}</p>
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
    </Question>
  );
};

const Question = styled.article`
  width: 100%;
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
        padding-left: 1rem;
        flex: 5;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        h1 {
          color: #0074cc;
          font-size: 1rem;
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
      align-items: flex-end;
      justify-content: flex-end;
      position: absolute;
      bottom: 0.2rem;
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

const Tags = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  margin-bottom: 1.5rem;
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

export default QuestionArticle;
