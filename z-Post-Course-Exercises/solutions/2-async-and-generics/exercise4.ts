class Cache<KeyType, ValueType> {
  private cache = new Map<KeyType, ValueType>();

  public async get(key: KeyType): Promise<ValueType> {
    const value = this.cache.get(key);
    if (value !== undefined) {
      return value;
    }
    throw new Error(`Value not found for key ${key}`);
  }

  public set(key: KeyType, value: ValueType): void {
    this.cache.set(key, value);
  }
}

(async () => {
  const cache = new Cache<string, number>();
  cache.set("foo", 42);
  try {
    const result = await cache.get("bar");
  } catch (e) {
    console.error(e.message); // Value not found for key bar
  }
})();

export default {};
