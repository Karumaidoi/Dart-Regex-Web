import { useEffect, useState } from 'react';

export function useCurrentYear() {
  const [year, setYear] = useState('');

  useEffect(function () {
    const hour = new Date().getFullYear();
    setYear(hour);
  }, []);

  return year;
}
