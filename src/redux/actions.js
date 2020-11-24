export function updateField(array, action) {
  return array.map((item, index) => {
    if (index === action.index) {
      return {
        ...item,
        ...action.payload,
      };
    }
    return item;
  });
}
