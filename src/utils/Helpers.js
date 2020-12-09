/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

export const getMonth = (month) => {
  switch (month) {
    case "01":
      return "Jan";
    case "02":
      return "Feb";
    case "03":
      return "Mar";
    case "04":
      return "Apr";
    case "05":
      return "May";
    case "06":
      return "Jun";
    case "07":
      return "Jul";
    case "08":
      return "Aug";
    case "09":
      return "Sep";
    case "10":
      return "Oct";
    case "11":
      return "Nov";
    case "12":
      return "Dec";
    default:
      return "";
  }
};

export const parseDate = (type, value) => {
  if (type === "date") {
    const date = value.split("-", 2);
    return getMonth(date[1]).concat(" ", date[0].substring(2, 5));
  }

  return value;
};

export const parseYear = (type, value) => {
  if (type === "date") {
    const date = value.split("-", 1);
    return date[0];
  }

  return value;
};

export const checkEmptyState = (state) => {
  let flag1 = true;
  let flag2 = true;
  if (state.length === 0) flag1 = false;
  for (let i = 0; i < state.length; i++) {
    for (const pair of Object.entries(state[i])) {
      if (pair[1]) {
        flag2 = false;
        break;
      }
    }
  }

  return flag1 && flag2;
};

export const findNextId = (array) => {
  const len = array.length;
  return array[len - 1].id + 1 || 0;
};

export const currentDate = () => {
  const currentDate = new Date();

  const currentDayOfMonth = currentDate.getDate();
  const currentMonth = currentDate.getMonth(); // Be careful! January is 0, not 1
  const currentYear = currentDate.getFullYear();

  return currentMonth + 1 + "-" + currentDayOfMonth + "-" + currentYear; // MM/DD/YYYY
};

export const parseLines = (value) =>
  value.replace(/\\'/g, "'").replace(/(\\n)/g, "\n");

export const parseDateView = (date, year) => {
  const obj = new Date(date);
  const currYear = currentDate().split("-")[2];
  const currMonth = currentDate().split("-")[0];
  
  if (
    currMonth === (obj.getMonth() + 1).toString() &&
    currYear === obj.getFullYear().toString()
  )
    return "Present";

  if (year && obj.getFullYear().toString() === currYear) return "Present";
  if (year) return obj.toLocaleString([], { year: "numeric" });

  return obj.toLocaleString([], { month: "short", year: "numeric" });
};
