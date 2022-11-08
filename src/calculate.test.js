const sum =require('./calculate');

test('adds 7 + 3 equals to 10', () => {
    expect(sum.sum(7,3)).toBe(10);
});

test('Divide 8 / 4 equals to 2', () => {
    expect(sum.divide(8,4)).toBe(2);
});

test('Multiply 10 * 3 equals to 30', () => {
    expect(sum.Multiply(10,3)).toBe(30);
});

test('Subtract 7 - 2 equals to 5', () => {
    expect(sum.subtract(7,2)).toBe(5);
});