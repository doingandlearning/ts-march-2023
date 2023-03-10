{
  // type ConditionalType = SomeType extends OtherType ? TrueType : FalseType

  type IsString<T> = T extends string ? true : false;

  type A = IsString<"This is a string">;
  type B = IsString<Symbol>;

  // type ExtractIdType<T extends { id: string | number }> = T["id"];
  // type ExtractIdType<T> = T extends { id: string | number } ? T["id"] : never;
  type ExtractIdType<T> = T extends { id: infer ThisType } ? ThisType : never;

  interface NumericId {
    id: number;
  }

  interface StringId {
    id: string;
  }

  interface BooleanId {
    id: boolean;
  }

  type NumericIdType = ExtractIdType<NumericId>;
  type StringIdType = ExtractIdType<StringId>;
  type BooleanIdType = ExtractIdType<BooleanId>;
}

{
  abstract class ApplicationError {
    abstract status: number;
    abstract message: string;
  }

  class ServerError extends ApplicationError {
    status = 500;
    constructor(public message: string, ...rest: any[]) {
      super();
    }
  }

  type ErrorType<T extends { error: ApplicationError | Error }> =
    T["error"] extends ApplicationError ? ApplicationError : Error;

  type error = ErrorType<{ error: ServerError }>;
}
{
  type NonNullable<T> = T extends null | undefined ? never : T;
  type Here = NonNullable<string | boolean | null | undefined>;
}
