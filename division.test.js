// The operation should return the division of two numbers

const { division } = require('./division');

test('9 / 3 = 3', () => {
    expect(division(9, 3)).toBe(3)
})