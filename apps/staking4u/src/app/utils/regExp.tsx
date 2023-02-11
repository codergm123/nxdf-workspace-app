// 이름
export const regName = (name) => {
  const reg = /^[가-힣|a-z|A-Z|*]{2,20}$/;
  return reg.test(name);
};

// 주민번호 앞자리
export const regBirth = (birth) => {
  const reg = /([0-9]{2}(0[1-9]|1[0-2])(0[1-9]|[1,2][0-9]|3[0,1]))/;
  return reg.test(birth);
};

// 주민번호 뒷자리
export const regBirth2 = (birth2) => {
  const reg = /[1-4][0-9]{6}/;
  return reg.test(birth2);
};

// 폰번호 정규식
export const regPhone = (phone) => {
  const addCountry = '+82' + phone.substring(1);
  const reg = /\+\d{10,17}/;
  return reg.test(addCountry);
};

// 이메일 정규식
export const regEmail = (email) => {
  const reg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/m;
  return reg.test(email);
};

// 이메일 정규식 (프로필 수정에서 사용 : 하나의 인풋에서 사용하는 경우)
export const regEmailInEdit = (email) => {
  const reg =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  return reg.test(email);
};

// 비밀번호 (숫자+영자+특수문자 1자리 이상 8~16자리 사이)
export const regPassword = (password) => {
  const reg =
    /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;
  return reg.test(password);
};

// 비밀번호 확인 (숫자+영자+특수문자 1자리 이상 8~16자리 사이, 이전 비밀번호와 동일)
export const regPasswordConfirm = (password, passwordConfirm) => {
  const reg =
    /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;
  return reg.test(password) && password === passwordConfirm;
};

// 숫자만 입력
export const regNumber = (number) => {
  const reg = /^[0-9\b]+$/;
  return reg.test(number);
};
