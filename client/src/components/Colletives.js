import collectives from 'assets/collectives.json';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Colletives = () => {
  const [datas, setDatas] = useState([]);

  const shuffle = array => {
    return array.sort(() => Math.random() - 0.5);
  };

  const handdleButtonClick = url => {
    location.href = url;
  };

  useEffect(() => {
    setDatas(shuffle(collectives));
  }, [datas]);

  return (
    <ContentWrapper>
      <ul>
        <p>Colletives</p>
        {datas.slice(0, 3).map((data, i) => (
          <Content key={i}>
            <section>
              <div>
                <LogoImage>
                  <img src={data.logo} alt="logo" />
                </LogoImage>
                <ContentTitle>
                  <h1>
                    <a href={data.link}>{data.name}</a>
                  </h1>
                  <p>{data.members} members</p>
                </ContentTitle>
              </div>
              <JoinButton onClick={() => handdleButtonClick(data.link)}>Join</JoinButton>
            </section>
            <Description>{data.desc}</Description>
          </Content>
        ))}
      </ul>
    </ContentWrapper>
  );
};

const ContentWrapper = styled.div`
  margin-top: 1.5rem;
  width: 100%;
  height: fit-content;
  background-color: #fff;
  border: 1px solid #ddd;
  color: #525960;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  ul {
    list-style: none;
    > p {
      font-size: 0.9rem;
      font-weight: 800;
      padding: 0.7rem 1rem;
      background-color: #f8f9f9;

      margin-bottom: 0.2rem;
    }
    :first-of-type {
      p {
        border-top: none;
      }
    }
  }
  section {
    :first-child {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      > div {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1rem;
      }
    }
  }
`;

const Content = styled.li`
  font-size: 0.8rem;
  padding: 1rem;
  border-top: 1px solid #ddd;
  :last-of-type {
    margin-bottom: 0.2rem;
  }
`;

const LogoImage = styled.div`
  width: 2rem;
  height: 2rem;
  img {
    width: 100%;
  }
`;

const ContentTitle = styled.div`
  display: flex;
  flex-direction: column;
  a {
    text-decoration: none;
    color: #666;
  }
  p {
    color: #444;
  }
`;

const Description = styled.p`
  margin-top: 0.5rem;
  width: 100%;
  color: #111;
  text-align: left;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const JoinButton = styled.button`
  width: 2.8rem;
  height: 2.2rem;
  background-color: #fff;
  border: 1px solid #0074cc;
  border-radius: 3px;
  color: #0074cc;
  font-weight: bold;
  font-size: 0.8rem;
  cursor: pointer;
  :hover {
    background-color: #eff8ff;
  }
`;

export default Colletives;
