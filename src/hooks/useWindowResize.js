import { useState, useEffect } from 'react';

export const useWindowResize = () => {
  const [size, setSize] = useState({
    windowWidth: window.innerWidth,
    windowHeight: window.innerHeight
  });

  useEffect(() => {
    const handler = ({ target }) => {
      setSize({
        windowWidth: target.innerWidth,
        windowHeight: target.innerHeight
      });
    };
    console.log(size.windowWidth);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, [size]);
  return size;
};