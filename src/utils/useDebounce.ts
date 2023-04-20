import React, { useRef } from "react";

const useDebounce = (search: Function, delay: number) => {
  let timeout: { current: NodeJS.Timeout | null } = useRef(null);

  function debounced(...params: any) {
    timeout.current && clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      search(...params);
    }, delay);
  }

  return debounced;
};

export default useDebounce;
