
describe('demo.test.js test', () => {
  test('should be equals the strings', () => {
    // 1. init
    const message = 'Hello World';

    // 2. incentive
    const message2 = `Hello World`;

    // 3. Watch the process
    expect(message).toBe(message2); // ===
  })
})

