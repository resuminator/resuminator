import { format } from "date-fns";

/**
 * Generate a unique ID for objects locally.
 * @returns unique ID as a string.
 * @description NOTE: To be used for testing, DON'T USE IN PROD.
 */
export const getUniqueID = (): string =>
  Math.random().toString(36).substr(2, 9);

/**
 * Truncates a string upto the given limit and appends (...)
 * @param str String to truncate
 * @param limit Character limit for truncating
 * @returns Truncated String
 */
export const truncateString = (str: string, limit: number) =>
  str.length > limit ? str.substr(0, limit) + "..." : str;

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
  if (view === "Y") return format(parsedDate, "yyyy");
  if (view === "YM") return format(parsedDate, "MMM yyyy");
  // `${parsedDate.getMonth()} ${parsedDate.getFullYear()}`;
};

/**
 * Checks if the patterns matches a valid HEX Code pattern
 * @param hexCode HEX Code string for color
 * @returns True if the color hex is valid
 */
export const isValidColorHex = (hexCode: string) => {
  const regex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
  return regex.test(hexCode);
};

/**
 * Changes string's first character to uppercase and rest to lowercase.
 * @param str String to convert
 * @returns The string `str` with First Letter Capital
 */
export const toCamelCase = (str: string) => {
  return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
};
