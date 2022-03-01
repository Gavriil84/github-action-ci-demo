// The operation should return the division of two numbers

const { division } = require('./division')

test.each([[10, 2, 5], [20, 5, 4], [49, 7, 7]])(
    'a / b = c', (a, b, expected) => {
        expect(division(a, b)).toBe(expected)
    }
)