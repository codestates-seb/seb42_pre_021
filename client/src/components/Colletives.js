import collectives from 'assets/collectives.json';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Colletives = () => {
  const [datas, setDatas] = useState([]);
  const [test, setTest] = useState(1);

  const shuffle = array => {
    return array.sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    setDatas(shuffle(collectives));
    console.log(test, datas);
  }, [test]);

  return (
    <div>
      <Button onClick={() => setTest(cur => cur + 1)}></Button>
    </div>
  );
};

const Button = styled.button`
  width: 100px;
  height: 50px;
`;

export default Colletives;
