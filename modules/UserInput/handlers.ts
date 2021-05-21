import { Content } from "@tiptap/core";
import { DropResult } from "react-beautiful-dnd";
import { UpdateAction } from "../../store/types";

export const handleChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  index: number,
  action: UpdateAction
): void => {
  e.preventDefault();
  const [key, value] = [e.target.name, e.target.value];
  action(index, key, value);
};

export const handleEditorChange = (
  index: number,
  output: Content,
  action: UpdateAction
) => {
  action(index, "description", output);
};

export const handleDateChange =
  (index: number, key: string, action: UpdateAction) => (date: Date) => {
    action(index, key, date);
  };

export const handlePresentCheckbox = (
  index: number,
  key: Date,
  action: UpdateAction
) => {
  if (key) return action(index, "end", null);
  else return action(index, "end", new Date());
};

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
