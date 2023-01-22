export const filterByChosenOptions = (
  el: string | number,
  option: string | number | null
) => {
  if (option === null) {
    return true;
  }

  return el === option;
};
