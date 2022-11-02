import React from 'react';
import * as data from '../resume.json';



function useStorage(cluster) {
  const dataWriter = {
    ...data
  };
  const [ currentInfo, setCurrentInfo ] = React.useState('');

  React.useEffect(() => {
    setTimeout(() => {
      const storedInfo = localStorage.getItem(cluster);
      const parsedInfo = JSON.parse(storedInfo);
      if(!storedInfo) {
        localStorage.setItem(cluster, JSON.stringify(dataWriter));
        setCurrentInfo(dataWriter.json());
      } else {
        setCurrentInfo(parsedInfo);
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return {
    currentInfo,
  };
}

export { useStorage };
