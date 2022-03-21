import React from 'react'

import { Styled } from '../../../styledComponents/Components.styles'
import { StyledTableCell, StyledTableRow } from '../../../styledComponents/MuiComponents.styles'
import { Characters } from '../../../types/Characters.types'

interface MuiTableRowProps {
  data: Characters
}

const alivedInfo = (died: string, born: string) => {
  switch (true) {
    case !born && !died:
      return 'unkown'
    case !born:
      return 'no'
    case !!born && !!died:
      return 'No, died at ..'
    case !!born && !died:
      return 'yes'
  }
}

const MuiTableRow = ({ data }: MuiTableRowProps) => {
  const concatedNameAndAliases = [data.name, ...data.aliases].filter(Boolean).join(', ')

  return (
    <StyledTableRow key={concatedNameAndAliases}>
      <StyledTableCell component="th" scope="row">{concatedNameAndAliases}</StyledTableCell>
      <StyledTableCell>{alivedInfo(data.died, data.born)}</StyledTableCell>
      <StyledTableCell>{data.gender}</StyledTableCell>
      <StyledTableCell>{data.culture ? data.culture : "Unknown"}</StyledTableCell>
      <StyledTableCell>House ID: {!!data.allegiances.length ?
        data.allegiances.map((link: string) => {
          const houseID = link.match(/\/houses\/(\d*)/)![1]
          return <Styled.Link to={`/house/${houseID}`}>{`${houseID} `}</Styled.Link>
        }) :
        "Unknown"
      }
      </StyledTableCell>
    </StyledTableRow>
  )
}

export default MuiTableRow
