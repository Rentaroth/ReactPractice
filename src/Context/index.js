import React from 'react';
import { useStorage } from '../Content/hooks/useStorage.js'

const context = React.createContext();

function DataProvider(props) {
  console.log('Desde Provider');
  const dataState = useStorage('CV');
  console.log(dataState, 'Provider');
  const {
    id
  } = dataState;
  return (
    <context.Provider value={{
      id
    }}>
      {props.children}
    </context.Provider>
  );
}

export { context, DataProvider };
