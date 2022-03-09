import React, { useState } from 'react';
import { BASE_URL } from '../constants/BASE_URL';
import useRequestData from '../hooks/useRequestData';
import {GlobalStateContext} from './GlobalStateContext'


const GlobalState = (props) => {

  const [pokemonsList, error, loading] = useRequestData(`${BASE_URL}`);

  const [page, setPage] = useState("home");

  const states = { page };

  const setters = {setPage}

  const requests = { pokemonsList, error, loading }
  

  return (
    <GlobalStateContext.Provider value={{ states, setters, requests }}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
