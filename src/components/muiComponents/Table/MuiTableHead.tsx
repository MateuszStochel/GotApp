import React from 'react'
import TableHead from '@mui/material/TableHead';
import { StyledTableCell } from '../../../styledComponents/MuiComponents.styles';
import { TableRow } from '@mui/material';

import { columnHeaders } from './payload';

const MuiTableHead = () => {
  return (
    <TableHead>
      <TableRow>
        {columnHeaders.map((title) =>
          <StyledTableCell key={title}>{title}</StyledTableCell>
        )}
      </TableRow>
    </TableHead>
  )
}

export default MuiTableHead
