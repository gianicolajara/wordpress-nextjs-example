const typesLabelMenu = {
  "Home": "/",
  "Blogs": "/blogs/1",
};

export const setUrl = (label) => {
  if (!label) return "";
  if (typesLabelMenu[label]) {
    return typesLabelMenu[label];
  } else {
    return `/${label.toLowerCase()}`;
  }
};
