function useCallback(cb: (val: string) => void) {
  cb('TEST');
}

describe('useCallback function', () => {
  it('should call the callback', () => {
    const spy = jest.fn();
    useCallback(spy);

    expect(spy).toHaveBeenCalled()
    expect(spy).toHaveBeenCalledTimes(1)
    expect(spy).toHaveBeenCalledWith('TEST');
  });
});
