import styled from 'styled-components';
import { FaMapMarkerAlt } from 'react-icons/fa';

const MyProfileInput = ({ label, value, isEdit, id, handleOnChange }) => {
  return (
    <>
      <ProfileLabel htmlFor={id}>{label}</ProfileLabel>
      {isEdit ? (
        <InputBox className="inputBox">
          <Inputs
            id={id}
            type="text"
            defaultValue={value}
            autoComplete="off"
            placeholder={label === 'Title' ? 'No title has been set' : null}
            onChange={handleOnChange}
          />
        </InputBox>
      ) : (
        <ValueSpan>
          {label === 'Location' ? <FaMapMarkerAlt /> : null}
          {value}
        </ValueSpan>
      )}
    </>
  );
};

const ProfileLabel = styled.label`
  margin-bottom: 0.2rem;

  @media screen and (max-width: 640px) {
    width: 100%;
  }
`;

const ValueSpan = styled.span`
  display: flex;
  align-items: center;
  padding-left: 1rem;
  margin: 0.5rem;
  font-size: 0.9rem;
  font-weight: lighter;
  white-space: normal;
  color: #777;
`;

const InputBox = styled.div`
  display: flex;
  width: 50%;
  padding: 0.3rem;
  border-radius: 4px;
  border: 1px solid #bbc0c4;
  &:focus-within {
    border: 1px solid gray;
  }
`;

const Inputs = styled.input`
  width: 100%;
  margin: 0.1rem;
  border: none;
  font-size: 0.8rem;
  &:focus {
    outline: none;
  }
`;

export default MyProfileInput;
