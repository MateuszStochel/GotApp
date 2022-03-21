import { ParamsPage } from './../types/Params.types';
import queryString from 'query-string';

export const getQueryString = (data: ParamsPage) => {
  return queryString.stringify(data)
}