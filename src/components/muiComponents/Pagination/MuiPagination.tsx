import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import { Styled } from '../../../styledComponents/Components.styles';
import { OnChangeParamsProps, ParamsPage } from '../../../types/Params.types';

interface PaginationControlledProps {
  page: number,
  lastPage: number,
  onChangeParamsState: OnChangeParamsProps['onChangeParamsState'];
}

export default function PaginationControlled({ onChangeParamsState, page, lastPage }: PaginationControlledProps) {

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    onChangeParamsState((prevValue: ParamsPage) => ({ ...prevValue, page: value }));
  };

  return (
    <Styled.PaginationWrapper>
      <Stack spacing={2} >
        <Pagination count={lastPage} page={page} onChange={handleChange} />
      </Stack>
    </Styled.PaginationWrapper>
  );
}