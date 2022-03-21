import React from 'react'

import { OnChangeParamsProps } from '../../types/Params.types'
import MuiInput from '../muiComponents/Input/MuiInput'
import MuiSelect from '../muiComponents/Select/MuiSelect'
import { selectGender, selectPaginatition } from './payload'

const FilterOptions = ({ onChangeParamsState }: OnChangeParamsProps) => {

  return (
    <>
      <MuiInput
        onChangeParamsState={onChangeParamsState}
      />
      <MuiSelect
        onChangeParamsState={onChangeParamsState}
        data={selectPaginatition}
      />
      <MuiSelect
        onChangeParamsState={onChangeParamsState}
        data={selectGender}
      />
    </>
  )
}

export default FilterOptions
