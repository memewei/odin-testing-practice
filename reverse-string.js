const reverseString = (string) => {
  if (typeof string === "string") {
    const splitStringArray = string.split("");
    const reverseArray = splitStringArray.reverse();
    const newString = reverseArray.join("");
    return newString;
  }
  return "Yo, where's the letters?";
};

export default reverseString;
