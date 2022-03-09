import React, { useState } from 'react';
import { BASE_URL } from '../constants/BASE_URL';
import useRequestData from '../hooks/useRequestData';
import {GlobalStateContext} from './GlobalStateContext'


const GlobalState = (props) => {

  const [pokemonsList, error, loading] = useRequestData(`${BASE_URL}`);

  const states = { pokemonsList, loading };
  

  return (
    <GlobalStateContext.Provider value={{ states }}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
