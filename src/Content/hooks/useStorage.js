import React from 'react';
import * as data from '../resume.json';

function useStorage(cluster) {
  const parsedData = {
    ...data,
  };
  const [storedData, setStoredData] = React.useState('');

  React.useEffect(() => {
    setTimeout((cluster) => {
      const Recieved = localStorage.getItem(cluster);
      if(!Recieved) {
        localStorage.setItem(cluster, JSON.stringify(parsedData));
        setStoredData(parsedData);
      } else {
        setStoredData(Recieved);
      }
    })
  });

  return {
    storedData
  };
}

export { useStorage };
