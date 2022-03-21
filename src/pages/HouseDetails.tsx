import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Spinner from '../styledComponents/Spinner.styles';
import { HouseDetailsData } from '../types/HouseDetails.types';

const HouseDetails = () => {
  let params = useParams();
  const navigate = useNavigate();

  const [error, setError] = useState('')
  const [houseDetails, setHouseDetails] = useState<HouseDetailsData | null>(null);

  const getHouseDetails = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_URL}/houses/${params.id}`);
      if (!data) {
        throw new Error('No available data! Try again!');
      }
      setError('')
      setHouseDetails(data)
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message)
      }
    }
  };

  useEffect(() => {
    getHouseDetails()
  }, [])

  if (error) {
    return <div>{error}</div>
  }

  if (!houseDetails) {
    return <Spinner />
  }


  return (
    <div>
      <button onClick={() => navigate(-1)}> GO BACK</button>
      <h2>House details:</h2>
      {houseDetails.name && <p>Name of the House: {houseDetails.name}</p>}
      {houseDetails.region && <p>Region: {houseDetails.region}</p>}
      {houseDetails.coatOfArms && <p>Coat of Arms: {houseDetails.coatOfArms}</p>}
      {houseDetails.words && <p>Words: {houseDetails.words}</p>}
      {!!houseDetails.titles.length && houseDetails.titles[0] !== '' && <p>Titles: {houseDetails.titles.map((title) => title)}</p>}
      {!!houseDetails.seats.length && houseDetails.seats[0] !== '' && <p>Seats: {houseDetails.seats.map((seat) => seat)}</p>}
      {houseDetails.diedOut && <p>Has died out: {houseDetails.diedOut}</p>}
      {houseDetails.overlord && <p>Has overload: {houseDetails.overlord}</p>}
      {!!houseDetails.cadetBranches.length && houseDetails.cadetBranches[0] !== '' &&
        <p>Number of Cadet Branches: {
          houseDetails.cadetBranches.map((branch) => branch)}
        </p>
      }
    </div>
  )
}

export default HouseDetails

