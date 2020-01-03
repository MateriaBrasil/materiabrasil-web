import { useLayoutEffect, useState } from 'react';

export function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  // const [size, setSize] = useState({
  //   width: 0,
  //   height: 0,
  // });
  useLayoutEffect(() => {
    function updateSize() {
      // setSize({
      //   width: window.innerWidth,
      //   height: window.innerHeight,
      // });
      setSize([window.innerWidth, window.innerHeight]);
    }

    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}
/*
function ShowWindowDimensions(props) {
  const [width, height] = useWindowSize();
  return (
    <span>
      Window size: {width} x {height}
    </span>
  );
}
*/
