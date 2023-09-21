const capitalize = (string) => {
  for (let i = 0; i < string.length; i++) {
    if (isUpperCase(string[i])) {
      return string;
    } else if (isLowerCase(string[i])) {
      let newString =
        string.slice(0, i) +
        string[i].toUpperCase() +
        string.slice(i + 1, string.length + 1);

      return newString;
    }
  }
  return "Dude there aren't any letters here!";
};

const isLowerCase = (index) => {
  if (index == index.toLowerCase() && index != index.toUpperCase()) {
    return true;
  }
  return false;
};

const isUpperCase = (index) => {
  if (index == index.toUpperCase() && index != index.toLowerCase()) {
    return true;
  }
  return false;
};

export default capitalize;
