import styled from 'styled-components';

const Notices = () => {
  const CORE_VALUES = [
    'Adopt a customer-first mindset',
    'Be flexible and inclusive',
    'Be transparent',
    'Empower people to deliver outstanding results',
    'Keep community at our center',
    'Learn, share, grow',
  ];

  return (
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
  );
};

const NoticeWrapper = styled.section`
  margin-top: 1rem;
  width: 100%;
  height: fit-content;
  background-color: #fdf7e3;
  border: 1px solid #f1e5bc;
  color: #525960;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  ul {
    list-style: none;
    p {
      font-size: 0.9rem;
      font-weight: 800;
      padding: 0.7rem 1rem;
      background-color: #fbf3d5;
      border: 1px solid #f1e5bc;
      border-left: none;
      border-right: none;
      margin-bottom: 0.2rem;
    }
    li {
      font-size: 0.8rem;
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

export default Notices;
