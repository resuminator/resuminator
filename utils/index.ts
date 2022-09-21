/*
    Resuminator, Web App and the Website for Resuminator
    Copyright (C) 2021 Resuminator Authors

    This file is part of Resuminator.

    Resuminator is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    Resuminator is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with Resuminator.  If not, see <https://www.gnu.org/licenses/>.
*/

import { format, isSameMonth, isSameYear } from "date-fns";

/**
 * Sanitize HTML elements out of a string input.
 * @param htmlString HTML markup in string format
 * @returns Santized string without the HTML elements
 */
export const sanitizeHTML = (htmlString: string) => {
  const HTML_REGEX = /(<([^>]+)>)/gi;
  return htmlString.replace(HTML_REGEX, "").toString();
};

/**
 * Generate a unique ID for objects locally.
 * @returns unique ID as a string.
 * @description NOTE: To be used for testing, DON'T USE IN PROD.
 */
export const getUniqueID = (): string =>
  Math.random().toString(36).substring(2, 9);

/**
 * Truncates a string upto the given limit and appends (...)
 * @param str String to truncate
 * @param limit Character limit for truncating
 * @returns Truncated String
 */
export const truncateString = (str: string, limit: number) =>
  str.length > limit ? str.substring(0, limit) + "..." : str;

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
  ...array.slice(index + 1)
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
 * Returns the string for date range display
 * @param start Start Date
 * @param end End Date
 * @returns Single Date if Start Date's month and year and same as End Date's month and year.
 * Else returns the string for date range
 */
export const dateDisplay = (start: Date, end: Date, view: "Y" | "YM" = "Y") => {
  const startDate = new Date(start);
  const endDate = new Date(end);

  if (!start) return null;
  if (isSameMonth(startDate, endDate) && isSameYear(startDate, endDate))
    return parseDate(start, view);
  return `${parseDate(start, view)} - ${parseDate(end, view)}`;
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

/**
 * Get the UTC date for 15th of the current month. ONLY USE FOR INITIALIZING THE DATEPICKER.
 * @param currentDate Current Date returned from new Date() or JS date object. Pass this param to modify a custom date.
 * @returns Returns the date in the format of "YYYY-MM-DD" but with 15th of that month and UTC 00:00:00.000 time.
 */
export const getMidMonthDate = (currentDate = new Date()): Date => {
  const now = currentDate;

  const month = now.getMonth() + 1;
  const year = now.getFullYear();

  return new Date(`${month}/15/${year} 00:00:00 UTC`);
};