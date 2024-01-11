/* eslint-disable @typescript-eslint/no-unused-vars */
import { Equals, Expect } from './testing-utils';
import { Join, Trim } from './utils';

// test cases are just exported to get rid of the ts error message about unused variables

// trim

export type TrimTest01 = Expect<Equals<Trim<string>, string>>;
export type TrimTest02 = Expect<Equals<Trim<''>, ''>>;
export type TrimTest03 = Expect<Equals<Trim<' '>, ''>>;
export type TrimTest04 = Expect<Equals<Trim<' a'>, 'a'>>;
export type TrimTest05 = Expect<Equals<Trim<'  a'>, 'a'>>;
export type TrimTest06 = Expect<Equals<Trim<'a '>, 'a'>>;
export type TrimTest07 = Expect<Equals<Trim<'a  '>, 'a'>>;
export type TrimTest08 = Expect<Equals<Trim<'a b '>, 'a b'>>;
export type TrimTest09 = Expect<Equals<Trim<' a b'>, 'a b'>>;
export type TrimTest10 = Expect<Equals<Trim<' a b '>, 'a b'>>;
export type TrimTest11 = Expect<Equals<Trim<'\na'>, 'a'>>;
export type TrimTest12 = Expect<Equals<Trim<' \na'>, 'a'>>;
export type TrimTest13 = Expect<Equals<Trim<'a\n'>, 'a'>>;
export type TrimTest14 = Expect<Equals<Trim<'a\n '>, 'a'>>;

export type TrimTest15 = Expect<Equals<Trim<'\ta'>, 'a'>>;
export type TrimTest16 = Expect<Equals<Trim<' \ta'>, 'a'>>;
export type TrimTest17 = Expect<Equals<Trim<'a\t'>, 'a'>>;
export type TrimTest18 = Expect<Equals<Trim<'a\t '>, 'a'>>;

const test19 = `\t
    a  
`;

export type TrimTest19 = Expect<Equals<Trim<typeof test19>, 'a'>>;

// join

export type JoinTest01 = Expect<Equals<Join<[]>, ''>>;
export type JoinTest02 = Expect<Equals<Join<string[]>, string>>;
export type JoinTest03 = Expect<Equals<Join<[string, string]>, string>>;
export type JoinTest04 = Expect<Equals<Join<['a']>, 'a'>>;
export type JoinTest05 = Expect<Equals<Join<['a', 'b']>, 'ab'>>;
export type JoinTest06 = Expect<Equals<Join<['a', string]>, `a${string}`>>;
