export const debounce = (func: Function, timeout: number = 500) => {
  let timer: any;

  return (...args: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), timeout);
  };
};
