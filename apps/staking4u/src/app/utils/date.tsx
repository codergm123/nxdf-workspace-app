export const getToday = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month =
    now.getMonth() + 1 > 9 ? now.getMonth() + 1 : `0${now.getMonth() + 1}`;
  const day = now.getDate() > 9 ? now.getDate() : `0${now.getDate() + 1}`;

  return `${year}.${month}.${day}`;
};
