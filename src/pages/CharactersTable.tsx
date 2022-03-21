import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom"
import queryString from 'query-string';
import axios from 'axios';
import TableContainer from '@mui/material/TableContainer';
import TableBody from '@mui/material/TableBody';
import Table from '@mui/material/Table';
import Paper from '@mui/material/Paper';

import MuiTableHead from '../components/muiComponents/Table/MuiTableHead';
import MuiTableRow from '../components/muiComponents/Table/MuiTableRow';
import MuiPagination from '../components/muiComponents/Pagination/MuiPagination';
import FilterOptions from '../components/FilterOptions/FilterOptions';
import { getLastPage } from '../utils/parseData';
import Spinner from '../styledComponents/Spinner.styles';
import { Characters } from '../types/Characters.types';
import { getQueryString } from '../utils/getQueryString';
import { ParamsPage } from '../types/Params.types';

const initialState = {
  pageSize: 25,
  page: 1,
}

function CharactersTable() {
  let navigate = useNavigate();
  const location = useLocation();
  const params = queryString.parse(location.search)

  const [lastPage, setLastPage] = useState(1);
  const [error, setError] = useState('')
  const [characters, setCharacters] = useState<Characters[] | null>(null)
  const [paramsState, setParamsState] = useState<ParamsPage>({ ...initialState, ...params })

  const getUsers = async () => {
    try {
      const { data, headers } = await axios.get(`${process.env.REACT_APP_URL}/characters?${getQueryString(paramsState)}`);
      if (!data.length) {
        throw new Error('No available data! Try again!');
      }
      setError('')
      setLastPage(getLastPage(headers.link))
      setCharacters(data)
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message)
      }
    }
  };


  useEffect(() => {
    navigate(`?${getQueryString(paramsState)}`)
    getUsers()
  }, [paramsState])


  if (error) {
    return <div>{error}</div>
  }

  if (!characters) {
    return <Spinner />
  }

  return (
    <>
      <FilterOptions onChangeParamsState={setParamsState} />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <MuiTableHead />
          <TableBody>
            {characters.map((data: Characters) => (
              <MuiTableRow key={data.url} data={data} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <MuiPagination
        onChangeParamsState={setParamsState}
        lastPage={Number(lastPage)}
        page={Number(paramsState.page)}
      />
    </>
  );
}

export default CharactersTable;
