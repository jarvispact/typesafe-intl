/* eslint-disable @typescript-eslint/no-unused-vars */
import { Equals, Expect } from './testing-utils';
import {
    DateFormatInterpolationToken,
    DateInterpolationToken,
    NumberFormatInterpolationToken,
    NumberInterpolationToken,
    StringInterpolationToken,
    Tokenize,
} from './tokenize';

// test cases are just exported to get rid of the ts error message about unused variables

// ===========================================================
// ===========================================================
// ===========================================================
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

// ===========================================================
// ===========================================================
// ===========================================================
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

// ===========================================================
// ===========================================================
// ===========================================================
// number interpolations with format

export type NumberFormatTest1 = Expect<
    Equals<
        Tokenize<'Count: {num, number, percent}'>,
        [NumberFormatInterpolationToken<'num', 'percent'>]
    >
>;
export type NumberFormatTest2 = Expect<Equals<Tokenize<"Count: '{num, number, percent}">, []>>;
export type NumberFormatTest3 = Expect<Equals<Tokenize<"Count: '{num, number, percent}'">, []>>;
export type NumberFormatTest4 = Expect<
    Equals<
        Tokenize<'Count: {num, number, percent} Other count: {num2, number, percent}'>,
        [
            NumberFormatInterpolationToken<'num', 'percent'>,
            NumberFormatInterpolationToken<'num2', 'percent'>,
        ]
    >
>;
export type NumberFormatTest5 = Expect<
    Equals<
        Tokenize<"Count: '{num, number, percent} Other count: {num2, number, percent}">,
        [NumberFormatInterpolationToken<'num2', 'percent'>]
    >
>;
export type NumberFormatTest6 = Expect<
    Equals<Tokenize<"Count: '{num, number, percent} Other count: {num2, number, percent}'">, []>
>;

// ===========================================================
// ===========================================================
// ===========================================================
// date interpolations without format

export type DateTest1 = Expect<
    Equals<Tokenize<'Today is: {today, date}'>, [DateInterpolationToken<'today'>]>
>;
export type DateTest2 = Expect<Equals<Tokenize<"Today is: '{today, date}">, []>>;
export type DateTest3 = Expect<Equals<Tokenize<"Today is: '{today, date}'">, []>>;
export type DateTest4 = Expect<
    Equals<
        Tokenize<'Today is: {today, date} yesterday was: {yesterday, date}'>,
        [DateInterpolationToken<'today'>, DateInterpolationToken<'yesterday'>]
    >
>;
export type DateTest5 = Expect<
    Equals<
        Tokenize<"Today is: '{today, date} yesterday was: {yesterday, date}">,
        [DateInterpolationToken<'yesterday'>]
    >
>;
export type DateTest6 = Expect<
    Equals<Tokenize<"Today is: '{today, date} yesterday was: {yesterday, date}'">, []>
>;

// ===========================================================
// ===========================================================
// ===========================================================
// date interpolations with format

export type DateFormatTest1 = Expect<
    Equals<
        Tokenize<'Today is: {today, date, long}'>,
        [DateFormatInterpolationToken<'today', 'long'>]
    >
>;
export type DateFormatTest2 = Expect<Equals<Tokenize<"Today is: '{today, date, long}">, []>>;
export type DateFormatTest3 = Expect<Equals<Tokenize<"Today is: '{today, date, long}'">, []>>;
export type DateFormatTest4 = Expect<
    Equals<
        Tokenize<'Today is: {today, date, long} yesterday was: {yesterday, date, long}'>,
        [
            DateFormatInterpolationToken<'today', 'long'>,
            DateFormatInterpolationToken<'yesterday', 'long'>,
        ]
    >
>;
export type DateFormatTest5 = Expect<
    Equals<
        Tokenize<"Today is: '{today, date, long} yesterday was: {yesterday, date, long}">,
        [DateFormatInterpolationToken<'yesterday', 'long'>]
    >
>;
export type DateFormatTest6 = Expect<
    Equals<Tokenize<"Today is: '{today, date, long} yesterday was: {num2, number, long}'">, []>
>;
