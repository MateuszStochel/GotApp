export const getLastPage = (link: string): number => {

  const arrData = link.split(",").slice(-1)[0]
  const lastPage = arrData.match(/page=(\d*)/)

  return Number(lastPage![1]);
}