import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { SelectCharacters } from '../../../types/Characters.types'
import { OnChangeParamsProps, ParamsPage } from '../../../types/Params.types';

interface MuiSelectProps {
  data: SelectCharacters,
  onChangeParamsState: OnChangeParamsProps['onChangeParamsState']
}

export default function MuiSelect({ data, onChangeParamsState }: MuiSelectProps) {
  const [value, setValue] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120, margin: '16px 0' }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{data.name}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="Age"
          onChange={handleChange}
        >
          {data.options.map((value: number | string) =>
            <MenuItem
              key={value}
              onClick={() => onChangeParamsState((params: ParamsPage) => ({ ...params, [data.params_name]: value }))}
              value={value}>{value}
            </MenuItem>
          )}
        </Select>
      </FormControl>
    </Box>
  );
}