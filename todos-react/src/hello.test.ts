import { hello } from "./hello"

test('return Hello Romain', () => {
  expect(hello('Romain')).toBe('Hello Romain');
});
