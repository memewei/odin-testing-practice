import capitalize from "./capitalize";

test('"mouse" will return "Mouse"', () => {
  expect(capitalize("mouse")).toBe("Mouse");
});

test('"Mouse" will return "Mouse"', () => {
  expect(capitalize("Mouse")).toBe("Mouse");
});

test('"mickey mouse" will return "Mickey mouse"', () => {
  expect(capitalize("mickey mouse")).toBe("Mickey mouse");
});

test('"12 mouses" will return "12 Mouses"', () => {
  expect(capitalize("12 mouses")).toBe("12 Mouses");
});

test('"365mouses" will return "365Mouses"', () => {
  expect(capitalize("365mouses")).toBe("365Mouses");
});

test('"#@!mouse#$@" will return "#@!mouse#$@"', () => {
  expect(capitalize("#@!mouse#$@")).toBe("#@!Mouse#$@");
});

test('"#@!"', () => {
  expect(capitalize("#@!")).toBe("Dude there aren't any letters here!");
});

test("'  ' will return 'Dude there aren't any letters here!'", () => {
  expect(capitalize("  ")).toBe("Dude there aren't any letters here!");
});

test("1234 will return 'Dude there aren't any letters here!'", () => {
  expect(capitalize(1234)).toBe("Dude there aren't any letters here!");
});
