// 원 단위 미만 절삭, 천단위 콤마 함수
export const localeString = (data) => {
  return data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

// 가격 포맷팅
// price < 1 : 소수점 4자리
// 1 <= price < 100 : 소수점 2자리
// 100 <= price : 소수점 버림
export const convertPrice = (price) => {
  let toFixtedPrice;
  if (price < 1) {
    return price.toFixed(4);
  } else if (price <= 100) {
    toFixtedPrice = price.toFixed(2);
  } else {
    toFixtedPrice = Math.floor(price);
  }

  return localeString(toFixtedPrice);
};
