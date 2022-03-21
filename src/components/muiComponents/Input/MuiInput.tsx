import * as React from 'react';
import Box from '@mui/material/Box';
import TextField, { StandardTextFieldProps } from '@mui/material/TextField';

import { OnChangeParamsProps, ParamsPage } from '../../../types/Params.types';
import { useState } from 'react';

export default function MuiInput({ onChangeParamsState }: OnChangeParamsProps) {
  const [state, setState] = useState('')

  const changeParams = (e: React.KeyboardEvent<HTMLDivElement>) => {
    e.preventDefault()
    onChangeParamsState((prevValue: ParamsPage) => ({ ...prevValue, culture: state }))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setState(e.target.value)
  }

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { width: '100%', margin: '16px 0 0' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        onChange={handleChange}
        onKeyPress={e => e.key === 'Enter' && changeParams(e)}
        id="outlined-basic"
        label="Culture"
        variant="outlined"
      />
    </Box>
  );
}