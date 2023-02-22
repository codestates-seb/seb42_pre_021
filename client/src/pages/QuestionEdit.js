import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const QuestionEdit = () => {
  const location = useLocation();
  const content = location.state;

  useEffect(() => {
    console.log(content);
  });

  return <div>QuestionEdit</div>;
};

export default QuestionEdit;
