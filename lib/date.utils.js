export const miliToHumanDate = (mili) => {
  if (!mili) return null;

  return Intl.DateTimeFormat("en-US", {
    timeStyle: "medium",
    dateStyle: "medium",
  }).format(mili);
};
