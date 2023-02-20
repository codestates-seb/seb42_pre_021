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
    </Question>
  );
};

const Question = styled.article`
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

export default QuestionArticle;
