import React from 'react';
import { useStorage } from '../Content/hooks/useStorage.js';

const Context = React.createContext();

function CvContext(props) {
  const { currentInfo } = useStorage('CV');
  const {
    education
  } = currentInfo;

  return (
    <Context.Provider
      value={{
        education,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { Context, CvContext };
