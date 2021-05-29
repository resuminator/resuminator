/**
 * Generate a unique ID for objects locally.
 * @returns unique ID as a string.
 * @description NOTE: To be used for testing, DON'T USE IN PROD.
 */
export const getUniqueID = (): string =>
  Math.random().toString(36).substr(2, 9);

/**
 * Immutably replaces an object in an array.
 * @param array The array to be updated.
 * @param index Index of the object to be updated.
 * @param obj New Object to be replaced by the object at Index.
 * @returns New array with replaced object at the given index.
 */
export const updateArray = <T>(array: Array<T>, index: number, obj: T) => [
  ...array.slice(0, index),
  obj,
  ...array.slice(index + 1),
];

/**
 * Parses the Date String and returns a string to display.
 * @param date Date Instance
 * @param view "Y" | "YM" Decides what view to render - Year only (Y) or Year and Month (YM)
 * @returns Formatted String to display
 */
export const parseDate = (date: Date, view: "Y" | "YM" = "Y") => {
  const parsedDate = new Date(date);
  if (date === undefined) return "";
  if (date === null) return "Present";
  if (view === "Y") return parsedDate.getFullYear();
  if (view === "YM")
    return `${parsedDate.getMonth()} ${parsedDate.getFullYear()}`;
};

