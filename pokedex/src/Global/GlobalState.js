import React, { useState } from 'react';
import { BASE_URL } from '../constants/BASE_URL';
import useRequestData from '../hooks/useRequestData';
import { GlobalStateContext } from './GlobalStateContext'


const GlobalState = (props) => {

  const [pagination, setPagination] = useState(1);
  const onChangePage = (event, value) => {setPagination(value)}

  const [pokemonsList, error, loading] = useRequestData(`${BASE_URL}?limit=20&offset=${(pagination - 1) * 20}`);
  
  const [page, setPage] = useState("home");

  const [pokedex, setPokedex] = useState();

  const states = { page, pokedex };

  const setters = { setPage, setPokedex, onChangePage };

  const requests = { pokemonsList, error, loading };



  return (
    <GlobalStateContext.Provider value={{ states, setters, requests }}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
