import styled from 'styled-components';

const HeaderInputFocusDrop = ({ handleSumit }) => {
  return (
    <>
      <Container>
        <div className="wrapper">
          <div className="column">
            <div className="row">
              <span className="first">{`[tag] `}</span>
              <span className="second">{`search within a tag`}</span>
            </div>
            <div className="row">
              <span className="first">{`user: 1234 `}</span>
              <span className="second">{`search by author`}</span>
            </div>
            <div className="row">
              <span className="first">{`"words here" `}</span>
              <span className="second">{`exact phrase`}</span>
            </div>
            <div className="row">
              <span className="first">{`collective:"Name" `}</span>
              <span className="second">{`collective content`}</span>
            </div>
          </div>
          <div className="column">
            <div className="row">
              <span className="first">{`answers: 0 `}</span>
              <span className="second">{`unanswered questions`}</span>
            </div>
            <div className="row">
              <span className="first">{`score: 3 `}</span>
              <span className="second">{`posts with a 3+ score`}</span>
            </div>
            <div className="row">
              <span className="first">{`is: question `}</span>
              <span className="second">{`type of post`}</span>
            </div>
            <div className="row">
              <span className="first">{`isaccepted: yes `}</span>
              <span className="second">{`search within status`}</span>
            </div>
          </div>
        </div>
        <div className="drop-button__wrapper">
          <button
            className="ask-button"
            onClick={() => {
              handleSumit();
            }}
          >
            Ask a question
          </button>
          <button className="help-button">search help</button>
        </div>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  border: 1px solid rgb(227, 230, 232);
  border-radius: 0.3rem;
  background-color: white;

  > .wrapper {
    display: flex;
    width: 100%;
    padding: 0.4rem 0.7rem;
    > .column {
      display: flex;
      width: 100%;
      justify-content: start;
      flex-direction: column;
      > .row {
        width: 100%;
        margin: 0.2rem 0;
        > .first {
          font-size: 0.9rem;
        }

        > .second {
          font-size: 0.8rem;
          color: gray;
        }
      }
    }
  }
  > .drop-button__wrapper {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0.8rem;
    border-top: 1px solid rgb(227, 230, 232);
    > button {
      cursor: pointer;
    }
    > .ask-button {
      padding: 0.4rem;
      font-size: 0.7rem;
      color: #4e8ec0;
      border-radius: 2px;
      border: 1px solid #4e8ec0;
      background-color: #e1ecf4;
    }

    > .help-button {
      font-size: 0.8rem;
      border: none;
      color: #0376cd;
      background-color: transparent;
    }
  }
`;

export default HeaderInputFocusDrop;
