import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import CharactersTable from '../pages/CharactersTable';
import HouseDetails from '../pages/HouseDetails';

const Page = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CharactersTable />} />
        <Route path='/house/:id' element={<HouseDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Page
