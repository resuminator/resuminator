//To be used for testing, DON'T USE IN PROD
export const getUniqueID = (): string =>
  Math.random().toString(36).substr(2, 9);

export const updateArray = <T>(array: Array<T>, index: number, obj: T) => [
  ...array.slice(0, index),
  obj,
  ...array.slice(index + 1),
];
