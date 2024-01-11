/* eslint-disable @typescript-eslint/no-unused-vars */
import { Equals, Expect } from './testing-utils';
import { NumberInterpolationToken, StringInterpolationToken, Tokenize } from './tokenize';

// test cases are just exported to get rid of the ts error message about unused variables

// string interpolations

export type StringTest01 = Expect<Equals<Tokenize<string>, string>>;
export type StringTest02 = Expect<Equals<Tokenize<''>, []>>;
export type StringTest03 = Expect<Equals<Tokenize<'Hello'>, []>>;
export type StringTest04 = Expect<
    Equals<Tokenize<'Hello {name}'>, [StringInterpolationToken<'name'>]>
>;
export type StringTest05 = Expect<Equals<Tokenize<"Hello '{name}">, []>>;
export type StringTest06 = Expect<Equals<Tokenize<"Hello '{name}'">, []>>;
export type StringTest07 = Expect<
    Equals<
        Tokenize<'Hello {firstname} {lastname}'>,
        [StringInterpolationToken<'firstname'>, StringInterpolationToken<'lastname'>]
    >
>;
export type StringTest08 = Expect<
    Equals<Tokenize<"Hello '{firstname} {lastname}">, [StringInterpolationToken<'lastname'>]>
>;
export type StringTest09 = Expect<Equals<Tokenize<"Hello '{firstname} {lastname}'">, []>>;

// number interpolations without format

export type NumberTest1 = Expect<
    Equals<Tokenize<'Count: {num, number}'>, [NumberInterpolationToken<'num'>]>
>;
export type NumberTest2 = Expect<Equals<Tokenize<"Count: '{num, number}">, []>>;
export type NumberTest3 = Expect<Equals<Tokenize<"Count: '{num, number}'">, []>>;
export type NumberTest4 = Expect<
    Equals<
        Tokenize<'Count: {num, number} Other count: {num2, number}'>,
        [NumberInterpolationToken<'num'>, NumberInterpolationToken<'num2'>]
    >
>;
export type NumberTest5 = Expect<
    Equals<
        Tokenize<"Count: '{num, number} Other count: {num2, number}">,
        [NumberInterpolationToken<'num2'>]
    >
>;
export type NumberTest6 = Expect<
    Equals<Tokenize<"Count: '{num, number} Other count: {num2, number}'">, []>
>;
