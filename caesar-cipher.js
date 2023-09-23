const original = "abcdefghijklmnopqrstuvwxyz";
const cipher = "nopqrstuvwxyzabcdefghijklm";

const checkUpper = (index) => {
  if (index === index.toUpperCase() && index !== " ") {
    return true;
  } else {
    return false;
  }
};

const checkLower = (index) => {
  if (index === index.toLowerCase() && index !== " ") {
    return true;
  } else {
    return false;
  }
};

const key = (index) => {
  const char = original.indexOf(index);
  let cipherChar = cipher[char];
  return cipherChar;
};

const caesarCipher = (string) => {
  if (typeof string !== "string") {
    return "Mate, what did I say about no letters at all?";
  }

  let newStr = "";

  for (let i = 0; i < string.length; i++) {
    if (checkUpper(string[i]) || checkLower(string[i])) {
      if (checkLower(string[i])) {
        newStr += key(string[i]);
      } else if (checkUpper(string[i])) {
        newStr += key(string[i].toLowerCase()).toUpperCase();
      }
    } else {
      newStr += string[i];
    }
  }
  return newStr;
};

export default caesarCipher;
