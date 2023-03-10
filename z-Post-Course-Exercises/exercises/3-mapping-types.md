1. Create a type called DeepReadOnly that makes all properties of an object and its nested objects read-only.

2. Create a type called DeepPartial that makes all properties of an object and its nested objects optional.

3. Create a type called Nullable that makes all properties of an object and its nested objects nullable.

4. Create a type called CamelToSnake that converts all keys of an object from camelCase to snake_case.

5. Create a type called SnakeToCamel that converts all keys of an object from snake_case to camelCase.

6. Create a type called RequiredKeys that takes an object type and returns a union of its required keys.

7. Create a type called OptionalKeys that takes an object type and returns a union of its optional keys.

8. Create a type called RequiredBy that takes an object type and a key, and makes that key required.

9. Create a type called OptionalBy that takes an object type and a key, and makes that key optional.

10. Create a type called PickRequired that takes an object type and a set of required keys, and returns a new type with only those keys and made required.

11. Create a type called PickOptional that takes an object type and a set of optional keys, and returns a new type with only those keys and made optional.

12. Create a type called ExcludeKeys that takes an object type and a set of keys, and returns a new type with those keys excluded.

13. Create a type called ReplaceKeys that takes an object type, a set of keys to replace, and a new set of keys, and returns a new type with the old keys replaced by the new ones.
