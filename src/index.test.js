it('should check for equal values', () => {
    expect(5).toEqual(5);
});

it('should check for equal values using deep quality', () => {
    expect({ foo: 5 }).toEqual({ foo: 5 });
    expect([1, 2, 3]).toEqual([1, 2, 3]);
})

it('should check for an array contains s a specific value', () => {
    expect([1, 2, 3]).toContain(2);
});

it('should check an array contains a specific object/array', () => {
    expect([{ foo: 5 }, { foo: 6 }]).toContainEqual({ foo: 6 });
});

it('should support spies', () => {
    const spy = jest.fn();
    spy('foo');
    expect(spy).toHaveBeenCalledWith('foo');
});