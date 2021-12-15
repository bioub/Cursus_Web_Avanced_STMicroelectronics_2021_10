function hello(name: string) {
  return `Hello ${name}`;
}

describe('hello function', () => {
  beforeEach(() => {}); // avant chaque it
  it('should return Hello followed by name', () => {
    expect(hello('Romain')).toBe('Hello Romain'); // ===
  });
});
