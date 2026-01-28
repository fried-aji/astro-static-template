export const debounce = <T extends unknown[], R>(
  //
  callback: (...args: T) => R,
): ((...args: T) => void) => {
  let timeout: number | undefined;

  return (...args: T): void => {
    if (timeout !== undefined) cancelAnimationFrame(timeout);
    timeout = requestAnimationFrame(() => callback(...args));
  };
};
