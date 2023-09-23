import caesarCipher from "./caesar-cipher";

test('"hello" will return "uryyb"', () => {
  expect(caesarCipher("hello")).toBe("uryyb");
});

test('"this is caesar cipher downshifted thirteen times" will return "guvf vf pnrfne pvcure qbjafuvsgrq guvegrra gvzrf"', () => {
  expect(caesarCipher("this is caesar cipher downshifted thirteen times")).toBe(
    "guvf vf pnrfne pvcure qbjafuvsgrq guvegrra gvzrf",
  );
});

test('"call me at nine one one" will return "pnyy zr ng avar bar bar"', () => {
  expect(caesarCipher("call me at nine one one")).toBe(
    "pnyy zr ng avar bar bar",
  );
});

test('1234 will return "Mate, what did I say about no letters at all?"', () => {
  expect(caesarCipher(1234)).toBe(
    "Mate, what did I say about no letters at all?",
  );
});
