export const headers = (token) => {
  return {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  };
};

export const objToQueryString = (obj) => {
  const keys = [];
  for (const key in obj) {
    keys.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
  }
  return keys.join('&');
};

export const isResponseSuccess = (responses) => {
  return responses.every(
    (response) =>
      response.responseStatus >= 200 && response.responseStatus < 300,
  );
};
