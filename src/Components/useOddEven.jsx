import { useState, useEffect } from 'react';

function useOddEven(number) {
  const [isOdd, setIsOdd] = useState(null);

  useEffect(() => {
    setIsOdd(number % 2 !== 0);
  }, [number]);

  return isOdd;
}

export default useOddEven;
