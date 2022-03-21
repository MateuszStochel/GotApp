import queryString from 'query-string';

export interface OnChangeParamsProps {
  onChangeParamsState: (callback: (params: ParamsPage) => ParamsPage) => void;
}

export type ParamsPage = queryString.ParsedQuery<string | number>