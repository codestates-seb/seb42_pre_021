import styled from 'styled-components';
import GoogleSignUp from 'components/GoogleSignUp';
import GithubSignUp from 'components/GithubSignUp';
import SignupInputForm from 'components/SignupInputForm';
import { Link } from 'react-router-dom';
import { ReactComponent as QuestionIcon } from 'assets/question.svg';
import { ReactComponent as VoteIcon } from 'assets/vote.svg';
import { ReactComponent as TagIcon } from 'assets/tag.svg';
import { ReactComponent as PrizeIcon } from 'assets/prize.svg';

const SignUp = () => {
  return (
    <Wrapper>
      <Container>
        <LeftTextContainer>
          <h2>Join the Stack Overflow community</h2>
          <BenefitList>
            <QuestionIcon />
            Get unstuck — ask a question
          </BenefitList>
          <BenefitList>
            <VoteIcon />
            Unlock new privileges like voting and commenting
          </BenefitList>
          <BenefitList>
            <TagIcon />
            Save your favorite tags, filters, and jobs
          </BenefitList>
          <BenefitList>
            <PrizeIcon />
            Earn reputation and badges
          </BenefitList>
          <SubText>Collaborate and share knowledge with a private group for FREE.</SubText>
          <SubText>Get Stack Overflow for Teams free for up to 50 users.</SubText>
        </LeftTextContainer>
        <SignUpContainer>
          <GoogleSignUp />
          <GithubSignUp />
          <SignupInputForm />
          <LoginTextContainer>
            Already have an account? <LoginLink to="/login"> Log in</LoginLink>
          </LoginTextContainer>
        </SignUpContainer>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 3rem);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f1f2f3;
`;
const Container = styled.div`
  width: 48rem;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LeftTextContainer = styled.div`
  width: 50%;
  height: 100%;
  flex-grow: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #f1f2f3;
  margin-right: 2.5rem;
  > h2 {
    margin-bottom: 1rem;
  }
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

const BenefitList = styled.div`
  width: 100%;
  height: 1.2rem;
  margin: 1.2rem 0 0.5rem 1rem;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  padding-bottom: 1.5rem;

  > svg {
    width: 18px;
    height: 18px;
    color: #3b95ff;
    margin-right: 0.6rem;
  }
`;

const SubText = styled.span`
  font-size: 0.7rem;
  margin-left: 1rem;
  margin-top: 0.3rem;
  color: #404040;
`;

const SignUpContainer = styled.div`
  width: 40%;
  height: 100%;
  flex-grow: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f1f2f3;
  overflow: auto;
`;

const LoginTextContainer = styled.div`
  margin-top: 2.5rem;
  font-size: 0.9rem;
  text-align: center;
  width: 20rem;
`;

const LoginLink = styled(Link)`
  color: #3b95ff;
  font-size: 0.9rem;
  text-decoration: none;
  &:hover,
  &:focus {
    color: #80bbff;
  }
`;
export default SignUp;
