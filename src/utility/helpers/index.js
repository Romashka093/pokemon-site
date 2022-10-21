export const getIdFromUrl = url => {
  const urlArr = url.split('/');
  return urlArr[urlArr.length - 2];
};

export const handlerScrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};
