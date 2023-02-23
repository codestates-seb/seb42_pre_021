//이메일 유효성 검사
export const checkEmail = emailValue => {
  const emailRegex = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
  return emailRegex.test(emailValue);
};

//비밀번호 유효성 검사
//8자이상, 하나 이상의 문자(대소문자 구별안함)와 하나 이상의 숫자가 포함될 것
export const checkPassword = passwordValue => {
  const passwordRegex = /^(?=.*?[A-Za-z])(?=.*?[0-9]).{8,}$/;
  return passwordRegex.test(passwordValue);
};

export default { checkEmail, checkPassword };
