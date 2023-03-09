{
  interface Options {
    subtitles: boolean;
    volume: number;
  }

  interface ReadOnlyOptions {
    readonly subtitles: boolean;
    readonly volume: number;
  }

  interface OptionalOptions {
    subtitles?: boolean;
    volume?: number;
  }

  interface NullableOptions {
    subtitle: boolean | null;
    volume: number | null;
  }
}

{
  interface Options {
    subtitles: boolean;
    volume: number;
    brightness: number;
  }

  type ReadOnlyMapper<T> = { readonly [k in keyof T]: T[k] };
  type ReadOnlyOptions = ReadOnlyMapper<Options>;

  type OptionalMapper<T> = { [k in keyof T]?: T[k] };
  type OptionalOptions = OptionalMapper<Options>;

  type NullableOptionsMapper<T> = { [k in keyof T]: T[k] | null };
  type NullableOptions = NullableOptionsMapper<Options>;
}

{
  interface Options {
    subtitles: boolean;
    volume: number;
    brightness: number;
  }

  type ReadOnlyOptions = Readonly<Options>;
  type OptionalOptions = Partial<Options>;
}
