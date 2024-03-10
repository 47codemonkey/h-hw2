import { useState, useEffect } from 'react';

type UseListHook = {
  cityList: string[];
  cityColor: string;
};

export const useList = ({ cityList, cityColor }: UseListHook) => {
  const [city, setCity] = useState(cityList);
  const [color, setColor] = useState(cityColor);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCity((prevCity) => [...prevCity, 'Kyiv']);
      setColor('lightpink');
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  return { city, color };
};
