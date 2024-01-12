import { PluralInterpolationToken, SelectInterpolationToken, Token, Tokenize } from './tokenize';
type SafeExclude<T, U extends T> = T extends U ? never : T;
type UnknownTypeMap = {
    [Key in Token['type']]: unknown;
};
export type DefineTypesForInterpolations<T extends UnknownTypeMap> = T;
type DefaultTypesForInterpolations = DefineTypesForInterpolations<{
    'string-interpolation': string;
    'number-interpolation': number;
    'number-format-interpolation': number;
    'date-interpolation': Date;
    'date-format-interpolation': Date;
    'time-interpolation': Date;
    'select-interpolation': never;
    'time-format-interpolation': Date;
    'plural-interpolation': number;
    'select-ordinal-interpolation': number;
    'rich-text-interpolation': (chunks: any[]) => any;
}>;
export type ExtendTypesForInterpolations<T extends Partial<UnknownTypeMap>> = Omit<DefaultTypesForInterpolations, keyof T> & T;
type _TokensToInterpolations<TypeMap extends UnknownTypeMap, Obj extends NonNullable<unknown>, Tokens extends Token[]> = Tokens extends [infer Head extends Token, ...infer Tail extends Token[]] ? Head['name'] extends keyof Obj ? Head extends PluralInterpolationToken<infer Name, string> ? _TokensToInterpolations<TypeMap, Omit<Obj, Name> & {
    [Key in Name]: TypeMap[Head['type']];
}, Tail> : 'B' : _TokensToInterpolations<TypeMap, Obj & {
    [Key in Head['name']]: Head extends SelectInterpolationToken<string, infer Options> ? TypeMap[Head['type']] | Options : TypeMap[SafeExclude<Head['type'], 'select-interpolation'>];
}, Tail> : Obj;
type TokensToInterpolations<TypeMap extends UnknownTypeMap, Tokens extends Token[]> = _TokensToInterpolations<TypeMap, NonNullable<unknown>, Tokens>;
export type InferInterpolations<Translation extends string, TypeMap extends UnknownTypeMap = DefaultTypesForInterpolations> = string extends Translation ? Record<string, never> : TokensToInterpolations<TypeMap, Tokenize<Translation>>;
export {};
