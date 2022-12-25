const debounce = (func: Function, delay: number = 1000) => {
  let timer;
  return (...args: unknown[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

export default debounce;
