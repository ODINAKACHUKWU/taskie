export const format = (dateTime) => {
  return new Date(dateTime).toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
  });
};
