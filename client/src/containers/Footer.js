import styled from 'styled-components';
import { ReactComponent as StackOverFlowLogo } from 'assets/stackoverflow.svg';

const Footer = () => {
  return (
    <FooterContainer>
      <Logo>
        <StackOverFlowLogo />
      </Logo>
      <Wrapper>
        {footerData.map((data, i) => (
          <Categories key={i}>
            <p>{data.categorie}</p>
            {data.list.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </Categories>
        ))}
        <Social>
          <ul>
            <li>Blog</li>
            <li>FaceBook</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>Instagram</li>
          </ul>
          <p>Stack Overflow Clone / Code States Pre-Project SEB42-021</p>
        </Social>
      </Wrapper>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  position: absolute;
  z-index: 2;
  background-color: #232629;
  width: 100%;
  height: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 1rem;
  @media screen and (max-width: 979px) {
    height: 23rem;
  }
`;

const Logo = styled.div`
  width: 4rem;
  display: flex;
  justify-content: center;
  height: 100%;
  @media screen and (max-width: 979px) {
    margin-right: 1rem;
  }
`;

const Wrapper = styled.div`
  width: calc(1280px - 5rem);
  height: 100%;
  display: flex;
  justify-content: space-around;
  padding: 1rem 0;
  @media screen and (max-width: 979px) {
    flex-direction: column;
  }
`;

const Categories = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  > p {
    text-transform: uppercase;
    font-weight: bold;
    color: #bcbbbb;
    font-size: 0.8rem;
    margin-bottom: 1rem;
  }
  > li {
    color: #999;
    font-size: 0.8rem;
    margin-bottom: 0.3rem;
  }
  @media screen and (max-width: 979px) {
    flex-direction: row;
    flex-wrap: wrap;
    > p {
      width: 100%;
      margin-bottom: 0.5rem;
      margin-top: 0.8rem;
    }
    > li {
      margin-right: 0.5rem;
    }
  }
  @media screen and (max-width: 640px) {
    > p {
      font-size: 0.7rem;
    }
    > li {
      font-size: 0.6rem;
    }
  }
`;

const Social = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  > ul {
    list-style: none;
    display: flex;
    gap: 0.5rem;
    font-size: 0.7rem;
    color: #bcbbbb;
  }
  > p {
    color: #bcbbbb;
    width: 17rem;
    font-size: 0.7rem;
  }
  @media screen and (max-width: 979px) {
    margin-top: 1rem;
    justify-content: space-around;
    margin-left: -3rem;
    > p {
      width: 100%;
    }
  }
`;

const footerData = [
  {
    categorie: 'stack overflow',
    list: ['Questions', 'Help'],
  },
  {
    categorie: 'products',
    list: ['Teams', 'Advertising', 'Collectives', 'Talant'],
  },
  {
    categorie: 'company',
    list: [
      'About',
      'Press',
      'Work Here',
      'Legal',
      'Privacy Policy',
      'Terms of Service',
      'Contact Us',
      'Cookie Settings',
      'Cookie Policy',
    ],
  },
  {
    categorie: 'stack exchange network',
    list: [
      'Technology',
      'Culture & recreation',
      'Life & arts',
      'Science',
      'Professional',
      'Business',
      'API',
      'Data',
    ],
  },
];

export default Footer;
