export const getIdFromUrl = url => {
  const urlArr = url.split('/');
  return urlArr[urlArr.length - 2];
};
