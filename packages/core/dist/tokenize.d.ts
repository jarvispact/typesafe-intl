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
export type TimeInterpolationToken<Name extends string> = {
    type: 'time-interpolation';
    name: Name;
};
export type TimeFormatInterpolationToken<Name extends string, Format extends string> = {
    type: 'time-format-interpolation';
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
export type RichTextInterpolationToken<Tag extends string> = {
    type: 'rich-text-interpolation';
    name: Tag;
};
export type Token = StringInterpolationToken<string> | NumberInterpolationToken<string> | NumberFormatInterpolationToken<string, string> | DateInterpolationToken<string> | DateFormatInterpolationToken<string, string> | TimeInterpolationToken<string> | TimeFormatInterpolationToken<string, string> | SelectInterpolationToken<string, string> | PluralInterpolationToken<string, string> | SelectOrdinalInterpolationToken<string, string> | RichTextInterpolationToken<string>;
type States = {
    Start: 'start';
    Escaped: 'escaped';
    InterpolationStart: 'interpolation-start';
    InterpolationType: 'interpolation-type';
    InterpolationFormat: 'interpolation-format';
    SelectOptions: 'select-options';
    PluralOptions: 'plural-options';
    SelectOrdinalOptions: 'select-ordinal-options';
    RichText: 'rich-text';
};
type _BuildOptionsUnion<Union extends string, Options extends string> = Options extends `${infer Head}{${string}}${infer Tail}` ? _BuildOptionsUnion<Union | Trim<Head>, Tail> : Union;
type BuildOptionsUnion<Options extends string> = _BuildOptionsUnion<never, Options>;
type _Tokenize<Tokens extends Token[], State extends States[keyof States], NameBuffer extends string[], TypeBuffer extends string[], FormatBuffer extends string[], OptionsBuffer extends string[], CurlyBracketCounter extends number, Translation extends string> = Translation extends `${infer Head}${infer Tail}` ? State extends States['Start'] ? Head extends '{' ? _Tokenize<Tokens, States['InterpolationStart'], NameBuffer, TypeBuffer, FormatBuffer, OptionsBuffer, CurlyBracketCounter, Tail> : Head extends "'" ? Tail extends `{${infer TailTail}` ? _Tokenize<Tokens, States['Escaped'], NameBuffer, TypeBuffer, FormatBuffer, OptionsBuffer, CurlyBracketCounter, TailTail> : Tail extends `<${infer TailTail}` ? _Tokenize<Tokens, States['Escaped'], NameBuffer, TypeBuffer, FormatBuffer, OptionsBuffer, CurlyBracketCounter, TailTail> : _Tokenize<Tokens, State, NameBuffer, TypeBuffer, FormatBuffer, OptionsBuffer, CurlyBracketCounter, Tail> : Head extends '<' ? _Tokenize<Tokens, States['RichText'], NameBuffer, TypeBuffer, FormatBuffer, OptionsBuffer, CurlyBracketCounter, Tail> : _Tokenize<Tokens, State, NameBuffer, TypeBuffer, FormatBuffer, OptionsBuffer, CurlyBracketCounter, Tail> : State extends States['InterpolationStart'] ? Head extends ',' ? _Tokenize<Tokens, States['InterpolationType'], NameBuffer, TypeBuffer, FormatBuffer, OptionsBuffer, CurlyBracketCounter, Tail> : Head extends '}' ? _Tokenize<[
    ...Tokens,
    StringInterpolationToken<Join<NameBuffer>>
], States['Start'], [
], [
], [
], [
], CurlyBracketCounter, Tail> : _Tokenize<Tokens, State, [
    ...NameBuffer,
    Head
], TypeBuffer, FormatBuffer, OptionsBuffer, CurlyBracketCounter, Tail> : State extends States['InterpolationType'] ? Head extends ',' ? _Tokenize<Tokens, States['InterpolationFormat'], NameBuffer, TypeBuffer, FormatBuffer, OptionsBuffer, CurlyBracketCounter, Tail> : Head extends '}' ? Trim<Join<TypeBuffer>> extends 'number' ? _Tokenize<[
    ...Tokens,
    NumberInterpolationToken<Trim<Join<NameBuffer>>>
], States['Start'], [
], [
], [
], [
], CurlyBracketCounter, Tail> : Trim<Join<TypeBuffer>> extends 'date' ? _Tokenize<[
    ...Tokens,
    DateInterpolationToken<Trim<Join<NameBuffer>>>
], States['Start'], [
], [
], [
], [
], CurlyBracketCounter, Tail> : Trim<Join<TypeBuffer>> extends 'time' ? _Tokenize<[
    ...Tokens,
    TimeInterpolationToken<Trim<Join<NameBuffer>>>
], States['Start'], [
], [
], [
], [
], CurlyBracketCounter, Tail> : 'unknown interpolation type' : _Tokenize<Tokens, State, NameBuffer, [
    ...TypeBuffer,
    Head
], FormatBuffer, OptionsBuffer, CurlyBracketCounter, Tail> : State extends States['InterpolationFormat'] ? Trim<Join<TypeBuffer>> extends 'number' ? Head extends '}' ? _Tokenize<[
    ...Tokens,
    NumberFormatInterpolationToken<Trim<Join<NameBuffer>>, Trim<Join<FormatBuffer>>>
], States['Start'], [
], [
], [
], [
], CurlyBracketCounter, Tail> : _Tokenize<Tokens, State, NameBuffer, TypeBuffer, [
    ...FormatBuffer,
    Head
], OptionsBuffer, CurlyBracketCounter, Tail> : Trim<Join<TypeBuffer>> extends 'date' ? Head extends '}' ? _Tokenize<[
    ...Tokens,
    DateFormatInterpolationToken<Trim<Join<NameBuffer>>, Trim<Join<FormatBuffer>>>
], States['Start'], [
], [
], [
], [
], CurlyBracketCounter, Tail> : _Tokenize<Tokens, State, NameBuffer, TypeBuffer, [
    ...FormatBuffer,
    Head
], OptionsBuffer, CurlyBracketCounter, Tail> : Trim<Join<TypeBuffer>> extends 'time' ? Head extends '}' ? _Tokenize<[
    ...Tokens,
    TimeFormatInterpolationToken<Trim<Join<NameBuffer>>, Trim<Join<FormatBuffer>>>
], States['Start'], [
], [
], [
], [
], CurlyBracketCounter, Tail> : _Tokenize<Tokens, State, NameBuffer, TypeBuffer, [
    ...FormatBuffer,
    Head
], OptionsBuffer, CurlyBracketCounter, Tail> : Trim<Join<TypeBuffer>> extends 'select' ? _Tokenize<Tokens, States['SelectOptions'], NameBuffer, TypeBuffer, FormatBuffer, OptionsBuffer, CurlyBracketCounter, Tail> : Trim<Join<TypeBuffer>> extends 'plural' ? _Tokenize<Tokens, States['PluralOptions'], NameBuffer, TypeBuffer, FormatBuffer, OptionsBuffer, CurlyBracketCounter, Tail> : Trim<Join<TypeBuffer>> extends 'selectordinal' ? _Tokenize<Tokens, States['SelectOrdinalOptions'], NameBuffer, TypeBuffer, FormatBuffer, OptionsBuffer, CurlyBracketCounter, Tail> : 'unknown type' : State extends States['SelectOptions'] | States['PluralOptions'] | States['SelectOrdinalOptions'] ? Head extends '{' ? _Tokenize<Tokens, State, NameBuffer, TypeBuffer, FormatBuffer, [
    ...OptionsBuffer,
    Head
], Increment<CurlyBracketCounter>, Tail> : Head extends '}' ? CurlyBracketCounter extends 0 ? State extends States['SelectOptions'] ? _Tokenize<[
    ...Tokens,
    SelectInterpolationToken<Trim<Join<NameBuffer>>, BuildOptionsUnion<Trim<Join<OptionsBuffer>>>>
], States['Start'], [
], [
], [
], [
], CurlyBracketCounter, Tail> : State extends States['PluralOptions'] ? _Tokenize<[
    ...Tokens,
    PluralInterpolationToken<Trim<Join<NameBuffer>>, BuildOptionsUnion<Trim<Join<OptionsBuffer>>>>
], States['Start'], [
], [
], [
], [
], CurlyBracketCounter, Tail> : State extends States['SelectOrdinalOptions'] ? _Tokenize<[
    ...Tokens,
    SelectOrdinalInterpolationToken<Trim<Join<NameBuffer>>, BuildOptionsUnion<Trim<Join<OptionsBuffer>>>>
], States['Start'], [
], [
], [
], [
], CurlyBracketCounter, Tail> : 'unknown state' : _Tokenize<Tokens, State, NameBuffer, TypeBuffer, FormatBuffer, [
    ...OptionsBuffer,
    Head
], Decrement<CurlyBracketCounter>, Tail> : _Tokenize<Tokens, State, NameBuffer, TypeBuffer, FormatBuffer, [
    ...OptionsBuffer,
    Head
], CurlyBracketCounter, Tail> : State extends States['Escaped'] ? Tail extends `${string}}'${infer TailTail}` ? _Tokenize<Tokens, States['Start'], NameBuffer, TypeBuffer, FormatBuffer, OptionsBuffer, CurlyBracketCounter, TailTail> : Tail extends `${string}>'${infer TailTail}` ? _Tokenize<Tokens, States['Start'], NameBuffer, TypeBuffer, FormatBuffer, OptionsBuffer, CurlyBracketCounter, TailTail> : _Tokenize<Tokens, State, NameBuffer, TypeBuffer, FormatBuffer, OptionsBuffer, CurlyBracketCounter, Tail> : State extends States['RichText'] ? Head extends '>' ? Tail extends `${infer Children}</${Trim<Join<NameBuffer>>}>${infer TailTail}` ? _Tokenize<[
    ...Tokens,
    RichTextInterpolationToken<Trim<Join<NameBuffer>>>,
    ..._Tokenize<[
    ], States['Start'], [
    ], [
    ], [
    ], [
    ], 0, Children>
], States['Start'], [
], [
], [
], [
], CurlyBracketCounter, TailTail> : 'invalid rich text' : _Tokenize<Tokens, State, [
    ...NameBuffer,
    Head
], TypeBuffer, FormatBuffer, OptionsBuffer, CurlyBracketCounter, Tail> : 'unknown-state' : Tokens;
export type Tokenize<Translation extends string> = string extends Translation ? [] : _Tokenize<[], States['Start'], [], [], [], [], 0, Translation>;
export {};
