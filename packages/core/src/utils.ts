export type Trim<T extends string> = string extends T
    ? string
    : T extends ` ${infer Trimmed}`
      ? Trim<Trimmed>
      : T extends `${infer Trimmed} `
        ? Trim<Trimmed>
        : T extends `\n${infer Trimmed}`
          ? Trim<Trimmed>
          : T extends `${infer Trimmed}\n`
            ? Trim<Trimmed>
            : T extends `\t${infer Trimmed}`
              ? Trim<Trimmed>
              : T extends `${infer Trimmed}\t`
                ? Trim<Trimmed>
                : T;

type _Join<Value extends string, Buffer extends string[]> = Buffer['length'] extends 0
    ? Value
    : Buffer extends [infer Head extends string, ...infer Tail extends string[]]
      ? _Join<`${Value}${Head}`, Tail>
      : never;

export type Join<Buffer extends string[]> = string[] extends Buffer ? string : _Join<'', Buffer>;

type NumberMap = {
    0: { prev: -1; next: 1 };
    1: { prev: 0; next: 2 };
    2: { prev: 1; next: 3 };
    3: { prev: 2; next: 4 };
};

export type Increment<Num extends number> = Num extends keyof NumberMap
    ? NumberMap[Num]['next']
    : never;

export type Decrement<Num extends number> = Num extends keyof NumberMap
    ? NumberMap[Num]['prev']
    : never;
