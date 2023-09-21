import reverseString from "./reverse-string";

test('"hello" will return "olleh"', () => {
  expect(reverseString("hello")).toBe("olleh");
});

test('"Me myself and I" will return "I dna flesym eM"', () => {
  expect(reverseString("Me myself and I")).toBe("I dna flesym eM");
});

test('"12345" will return "54321"', () => {
  expect(reverseString("12345")).toBe("54321");
});

test("12345 will return 'Yo, where's the letters?", () => {
  expect(reverseString(12345)).toBe("Yo, where's the letters?");
});

test("'My mother's car is a 1995 Honda Civic' will return 'civiC adnoH 5991 a si rac s'rehtom yM", () => {
  expect(reverseString("My mother's car is a 1995 Honda Civic")).toBe(
    "civiC adnoH 5991 a si rac s'rehtom yM",
  );
});
