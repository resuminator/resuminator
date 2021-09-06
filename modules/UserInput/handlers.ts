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

import { Content } from "@tiptap/core";
import React from "react";
import { DropResult } from "react-beautiful-dnd";
import { UpdateAction } from "../../store/types";

/**
 * Handles the input element change for the current object using `key:value` pair
 * @param e Event Object
 * @param index Index of the current object.
 * @param action Callback action to perform. TypeOf (index: number, key: string, value: any)
 */
export const handleChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  index: number,
  action: UpdateAction
): void => {
  e.preventDefault();
  const [key, value] = [e.target.name, e.target.value];
  action(index, key, value);
};

/**
 * Handle the change from an uncontrolled TipTap Editor instance in a controlled manner.
 * @param index Index of the current object.
 * @param output Output from the TipTap Editor instance. Typeof Content.
 * @param action Callback action to perform. TypeOf `(index: number, key: string, value: any)`
 */
export const handleEditorChange = (
  index: number,
  output: Content,
  action: UpdateAction
): void => {
  action(index, "description", output);
};

/**
 * Handles the change for MUI DatePicker component.
 * @param index Index of the current object.
 * @param key Key to update. Generally "start" or "end"
 * @param action Callback action to perform. TypeOf `(index: number, key: string, value: any)`
 * @returns
 */
export const handleDateChange =
  (index: number, key: string, action: UpdateAction) => (date: Date) => {
    action(index, key, date);
  };

/**
 * Toggles the checkbox by controlling the value of the `end` date.
 * @param index Index of the current object.
 * @param value Value of "end" or Key to update. Toggles between `null` and Present Date
 * @param action Callback action to perform. TypeOf `(index: number, key: string, value: any)`
 * @param key Optional argument to change the key for which the value needs to be updated. Default = "end"
 * @returns void
 */
export const handlePresentCheckbox = (
  index: number,
  value: Date,
  action: UpdateAction,
  key?: string
) => {
  const K = key || "end";
  if (value) return action(index, K, null);
  else return action(index, K, new Date());
};

/**
 * Toggles the checkbox by controlling the value of the `end` date.
 * @param index Index of the current object.
 * @param value Value of "end" or Key to update. Toggles between `null` and Present Date
 * @param action Callback action to perform. TypeOf `(index: number, key: string, value: any)`
 * @param key Optional argument to change the key for which the value needs to be updated. Default = "end"
 * @returns void
 */
export const handleClearDate = (
  index: number,
  value: Date,
  action: UpdateAction
) => {
  const K1 = "start";
  const K2 = "end";
  if (value) {
    action(index, K1, null);
    action(index, K2, null);
  } else {
    action(index, K1, new Date());
    action(index, K2, new Date());
  }
};

/**
 * Uses string input separated by comma(',') and saves an array as tags.
 * @param e Event Object
 * @param index Index of the current object.
 * @param action Callback action to perform. TypeOf `(index: number, key: string, value: any)`
 * @param key Optional argument to change the key for which the value needs to be updated. Default = "tags"
 */
export const handleTagsInput = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  index: number,
  action: UpdateAction,
  key?: string
) => {
  const K = key || "tags";
  const value = e.target.value;
  const tags = value !== "" ? value.split(",") : [];
  action(index, K, tags);
};

/**
 * Handles the reordering of a list upon drag end.
 * @param result DropResult from react-beautiful-dnd.
 * @param data List to update and set as state.
 * @param setData Callback Function to set the `data`. Typeof (data: Array<T>) => void
 * @returns void | null
 */
export const handleDragEnd = <T>(
  result: DropResult,
  data: Array<T>,
  setData: (data: Array<T>) => void
): void => {
  const { destination, source } = result;
  if (!destination) return;
  if (
    destination.droppableId === source.droppableId &&
    destination.index === source.index
  )
    return;

  const items = [...data];
  const [reorderedItem] = items.splice(source.index, 1);
  items.splice(destination.index, 0, reorderedItem);
  setData(items);
};
