// tokens

import { Decrement, Increment, Join, Trim } from './utils';

export type StringInterpolationToken<Name extends string> = {
    type: 'string-interpolation';
    name: Name;
};

export type NumberInterpolationToken<Name extends string> = {
    type: 'number-interpolation';
    name: Name;
};

export type NumberFormatInterpolationToken<Name extends string, Format extends string> = {
    type: 'number-format-interpolation';
    name: Name;
    format: Format;
};

export type DateInterpolationToken<Name extends string> = {
    type: 'date-interpolation';
    name: Name;
};

export type DateFormatInterpolationToken<Name extends string, Format extends string> = {
    type: 'date-format-interpolation';
    name: Name;
    format: Format;
};

export type SelectInterpolationToken<Name extends string, Options extends string> = {
    type: 'select-interpolation';
    name: Name;
    options: Options;
};

export type PluralInterpolationToken<Name extends string, Options extends string> = {
    type: 'plural-interpolation';
    name: Name;
    options: Options;
};

export type SelectOrdinalInterpolationToken<Name extends string, Options extends string> = {
    type: 'select-ordinal-interpolation';
    name: Name;
    options: Options;
};

type Token =
    | StringInterpolationToken<string>
    | NumberInterpolationToken<string>
    | NumberFormatInterpolationToken<string, string>
    | DateInterpolationToken<string>
    | DateFormatInterpolationToken<string, string>
    | SelectInterpolationToken<string, string>
    | PluralInterpolationToken<string, string>
    | SelectOrdinalInterpolationToken<string, string>;

// states

type States = {
    Start: 'start';
    InterpolationStart: 'interpolation-start';
    InterpolationType: 'interpolation-type';
    InterpolationFormat: 'interpolation-format';
    SelectOptions: 'select-options';
    PluralOptions: 'plural-options';
    SelectOrdinalOptions: 'select-ordinal-options';
};

// tokenize

type _BuildOptionsUnion<
    Union extends string,
    Options extends string,
> = Options extends `${infer Head}{${string}}${infer Tail}`
    ? _BuildOptionsUnion<Union | Trim<Head>, Tail>
    : Union;

type BuildOptionsUnion<Options extends string> = _BuildOptionsUnion<never, Options>;

type _Tokenize<
    Tokens extends Token[],
    State extends States[keyof States],
    NameBuffer extends string[],
    TypeBuffer extends string[],
    FormatBuffer extends string[],
    OptionsBuffer extends string[],
    CurlyBracketCounter extends number,
    Translation extends string,
> = Translation extends `${infer Head}${infer Tail}`
    ? State extends States['Start']
        ? Head extends '{'
            ? _Tokenize<
                  Tokens,
                  States['InterpolationStart'],
                  NameBuffer,
                  TypeBuffer,
                  FormatBuffer,
                  OptionsBuffer,
                  CurlyBracketCounter,
                  Tail
              >
            : _Tokenize<
                  Tokens,
                  State,
                  NameBuffer,
                  TypeBuffer,
                  FormatBuffer,
                  OptionsBuffer,
                  CurlyBracketCounter,
                  Tail
              >
        : State extends States['InterpolationStart']
          ? Head extends ','
              ? _Tokenize<
                    Tokens,
                    States['InterpolationType'],
                    NameBuffer,
                    TypeBuffer,
                    FormatBuffer,
                    OptionsBuffer,
                    CurlyBracketCounter,
                    Tail
                >
              : Head extends '}'
                ? _Tokenize<
                      [...Tokens, StringInterpolationToken<Join<NameBuffer>>],
                      States['Start'],
                      [],
                      [],
                      [],
                      [],
                      CurlyBracketCounter,
                      Tail
                  >
                : _Tokenize<
                      Tokens,
                      State,
                      [...NameBuffer, Head],
                      TypeBuffer,
                      FormatBuffer,
                      OptionsBuffer,
                      CurlyBracketCounter,
                      Tail
                  >
          : State extends States['InterpolationType']
            ? Head extends ','
                ? _Tokenize<
                      Tokens,
                      States['InterpolationFormat'],
                      NameBuffer,
                      TypeBuffer,
                      FormatBuffer,
                      OptionsBuffer,
                      CurlyBracketCounter,
                      Tail
                  >
                : Head extends '}'
                  ? Trim<Join<TypeBuffer>> extends 'number'
                      ? _Tokenize<
                            [...Tokens, NumberInterpolationToken<Trim<Join<NameBuffer>>>],
                            States['Start'],
                            [],
                            [],
                            [],
                            [],
                            CurlyBracketCounter,
                            Tail
                        >
                      : Trim<Join<TypeBuffer>> extends 'date'
                        ? _Tokenize<
                              [...Tokens, DateInterpolationToken<Trim<Join<NameBuffer>>>],
                              States['Start'],
                              [],
                              [],
                              [],
                              [],
                              CurlyBracketCounter,
                              Tail
                          >
                        : ['AA', Head, Tail, NameBuffer, TypeBuffer]
                  : _Tokenize<
                        Tokens,
                        State,
                        NameBuffer,
                        [...TypeBuffer, Head],
                        FormatBuffer,
                        OptionsBuffer,
                        CurlyBracketCounter,
                        Tail
                    >
            : State extends States['InterpolationFormat']
              ? Trim<Join<TypeBuffer>> extends 'number'
                  ? Head extends '}'
                      ? _Tokenize<
                            [
                                ...Tokens,
                                NumberFormatInterpolationToken<
                                    Trim<Join<NameBuffer>>,
                                    Trim<Join<FormatBuffer>>
                                >,
                            ],
                            States['Start'],
                            [],
                            [],
                            [],
                            [],
                            CurlyBracketCounter,
                            Tail
                        >
                      : _Tokenize<
                            Tokens,
                            State,
                            NameBuffer,
                            TypeBuffer,
                            [...FormatBuffer, Head],
                            OptionsBuffer,
                            CurlyBracketCounter,
                            Tail
                        >
                  : Trim<Join<TypeBuffer>> extends 'date'
                    ? Head extends '}'
                        ? _Tokenize<
                              [
                                  ...Tokens,
                                  DateFormatInterpolationToken<
                                      Trim<Join<NameBuffer>>,
                                      Trim<Join<FormatBuffer>>
                                  >,
                              ],
                              States['Start'],
                              [],
                              [],
                              [],
                              [],
                              CurlyBracketCounter,
                              Tail
                          >
                        : _Tokenize<
                              Tokens,
                              State,
                              NameBuffer,
                              TypeBuffer,
                              [...FormatBuffer, Head],
                              OptionsBuffer,
                              CurlyBracketCounter,
                              Tail
                          >
                    : Trim<Join<TypeBuffer>> extends 'select'
                      ? _Tokenize<
                            Tokens,
                            States['SelectOptions'],
                            NameBuffer,
                            TypeBuffer,
                            FormatBuffer,
                            OptionsBuffer,
                            CurlyBracketCounter,
                            Tail
                        >
                      : Trim<Join<TypeBuffer>> extends 'plural'
                        ? _Tokenize<
                              Tokens,
                              States['PluralOptions'],
                              NameBuffer,
                              TypeBuffer,
                              FormatBuffer,
                              OptionsBuffer,
                              CurlyBracketCounter,
                              Tail
                          >
                        : Trim<Join<TypeBuffer>> extends 'selectordinal'
                          ? _Tokenize<
                                Tokens,
                                States['SelectOrdinalOptions'],
                                NameBuffer,
                                TypeBuffer,
                                FormatBuffer,
                                OptionsBuffer,
                                CurlyBracketCounter,
                                Tail
                            >
                          : 'unknown type'
              : State extends
                      | States['SelectOptions']
                      | States['PluralOptions']
                      | States['SelectOrdinalOptions']
                ? Head extends '{'
                    ? _Tokenize<
                          Tokens,
                          State,
                          NameBuffer,
                          TypeBuffer,
                          FormatBuffer,
                          [...OptionsBuffer, Head],
                          Increment<CurlyBracketCounter>,
                          Tail
                      >
                    : Head extends '}'
                      ? CurlyBracketCounter extends 0
                          ? State extends States['SelectOptions']
                              ? _Tokenize<
                                    [
                                        ...Tokens,
                                        SelectInterpolationToken<
                                            Trim<Join<NameBuffer>>,
                                            BuildOptionsUnion<Trim<Join<OptionsBuffer>>>
                                        >,
                                    ],
                                    States['Start'],
                                    [],
                                    [],
                                    [],
                                    [],
                                    CurlyBracketCounter,
                                    Tail
                                >
                              : State extends States['PluralOptions']
                                ? _Tokenize<
                                      [
                                          ...Tokens,
                                          PluralInterpolationToken<
                                              Trim<Join<NameBuffer>>,
                                              BuildOptionsUnion<Trim<Join<OptionsBuffer>>>
                                          >,
                                      ],
                                      States['Start'],
                                      [],
                                      [],
                                      [],
                                      [],
                                      CurlyBracketCounter,
                                      Tail
                                  >
                                : State extends States['SelectOrdinalOptions']
                                  ? _Tokenize<
                                        [
                                            ...Tokens,
                                            SelectOrdinalInterpolationToken<
                                                Trim<Join<NameBuffer>>,
                                                BuildOptionsUnion<Trim<Join<OptionsBuffer>>>
                                            >,
                                        ],
                                        States['Start'],
                                        [],
                                        [],
                                        [],
                                        [],
                                        CurlyBracketCounter,
                                        Tail
                                    >
                                  : 'unknown state'
                          : _Tokenize<
                                Tokens,
                                State,
                                NameBuffer,
                                TypeBuffer,
                                FormatBuffer,
                                [...OptionsBuffer, Head],
                                Decrement<CurlyBracketCounter>,
                                Tail
                            >
                      : _Tokenize<
                            Tokens,
                            State,
                            NameBuffer,
                            TypeBuffer,
                            FormatBuffer,
                            [...OptionsBuffer, Head],
                            CurlyBracketCounter,
                            Tail
                        >
                : 'unknown state'
    : Tokens;

export type Tokenize<Translation extends string> = string extends Translation
    ? string
    : _Tokenize<[], States['Start'], [], [], [], [], 0, Translation>;

type Test = Tokenize<'Hello {name}'>;
//   ^?
type Test2 = Tokenize<'Hello {num, number}'>;
//   ^?
type Test3 = Tokenize<'Hello {today, date}'>;
//   ^?
type Test3 = Tokenize<'Hello {name, number, percent}'>;
//   ^?
type Test4 = Tokenize<'Hello {name, date, long}'>;
//   ^?
type Test5 = Tokenize<'{gender, select, male {He} other {They}} will respond shortly.'>;
//   ^?
type Test6 = Tokenize<'Cart: {itemCount} {itemCount, plural, one {item} other {items}}'>;
//   ^?
type Test7 = Tokenize<"It's my {year, selectordinal, one {#st} two {#nd} other {#th}} birthday!">;
//   ^?
