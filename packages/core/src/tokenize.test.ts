/* eslint-disable @typescript-eslint/no-unused-vars */
import { Equals, Expect } from './testing-utils';
import {
    DateFormatInterpolationToken,
    DateInterpolationToken,
    NumberFormatInterpolationToken,
    NumberInterpolationToken,
    PluralInterpolationToken,
    RichTextInterpolationToken,
    SelectInterpolationToken,
    SelectOrdinalInterpolationToken,
    StringInterpolationToken,
    TimeFormatInterpolationToken,
    TimeInterpolationToken,
    Tokenize,
} from './tokenize';

// test cases are just exported to get rid of the ts error message about unused variables

// ===========================================================
// ===========================================================
// ===========================================================
// string interpolations

export type StringTest01 = Expect<Equals<Tokenize<string>, []>>;
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
    Equals<Tokenize<"Today is: '{today, date, long} yesterday was: {yesterday, date, long}'">, []>
>;

// ===========================================================
// ===========================================================
// ===========================================================
// time interpolations without format

export type TimeTest1 = Expect<
    Equals<Tokenize<'Now is: {now, time}'>, [TimeInterpolationToken<'now'>]>
>;
export type TimeTest2 = Expect<Equals<Tokenize<"Now is: '{now, time}">, []>>;
export type TimeTest3 = Expect<Equals<Tokenize<"Now is: '{now, time}'">, []>>;
export type TimeTest4 = Expect<
    Equals<
        Tokenize<'Now is: {now, time} Before it was: {before, time}'>,
        [TimeInterpolationToken<'now'>, TimeInterpolationToken<'before'>]
    >
>;
export type TimeTest5 = Expect<
    Equals<
        Tokenize<"Now is: '{now, time} Before it was: {before, time}">,
        [TimeInterpolationToken<'before'>]
    >
>;
export type TimeTest6 = Expect<
    Equals<Tokenize<"Now is: '{now, time} Before it was: {before, time}'">, []>
>;

// ===========================================================
// ===========================================================
// ===========================================================
// time interpolations with format

export type TimeFormatTest1 = Expect<
    Equals<Tokenize<'Now is: {now, time, long}'>, [TimeFormatInterpolationToken<'now', 'long'>]>
>;
export type TimeFormatTest2 = Expect<Equals<Tokenize<"Now is: '{now, time, long}">, []>>;
export type TimeFormatTest3 = Expect<Equals<Tokenize<"Now is: '{now, time, long}'">, []>>;
export type TimeFormatTest4 = Expect<
    Equals<
        Tokenize<'Now is: {now, time, long} Before it was: {before, time, long}'>,
        [
            TimeFormatInterpolationToken<'now', 'long'>,
            TimeFormatInterpolationToken<'before', 'long'>,
        ]
    >
>;
export type TimeFormatTest5 = Expect<
    Equals<
        Tokenize<"Now is: '{now, time, long} Before it was: {before, time, long}">,
        [TimeFormatInterpolationToken<'before', 'long'>]
    >
>;
export type TimeFormatTest6 = Expect<
    Equals<Tokenize<"Now is: '{now, time, long} Before it was: {before, time, long}'">, []>
>;

// ===========================================================
// ===========================================================
// ===========================================================
// select interpolations

// TODO: quoting / escaping does not work with select

export type SelectTest1 = Expect<
    Equals<
        Tokenize<'{gender, select, male {He} female {She} other {They}} will respond shortly.'>,
        [SelectInterpolationToken<'gender', 'male' | 'female' | 'other'>]
    >
>;

export type SelectTest2 = Expect<
    Equals<
        Tokenize<'{ gender,  select, male { He } female  {She } other {They }  } will respond shortly.'>,
        [SelectInterpolationToken<'gender', 'male' | 'female' | 'other'>]
    >
>;

const selectWithNewLines = `
{gender, select,
    male {He}
    female {She}
    other {They}
} will respond shortly.
`;

export type SelectTest3 = Expect<
    Equals<
        Tokenize<typeof selectWithNewLines>,
        [SelectInterpolationToken<'gender', 'male' | 'female' | 'other'>]
    >
>;

// ===========================================================
// ===========================================================
// ===========================================================
// plural interpolations

// TODO: quoting / escaping does not work with plural

export type PluralTest1 = Expect<
    Equals<
        Tokenize<'{itemCount, plural, one {item} other {items}}'>,
        [PluralInterpolationToken<'itemCount', 'one' | 'other'>]
    >
>;

export type PluralTest2 = Expect<
    Equals<
        Tokenize<'{ itemCount, plural , one   {item } other  {  items} }'>,
        [PluralInterpolationToken<'itemCount', 'one' | 'other'>]
    >
>;

const pluralWithNewLines = `
{itemCount, plural,
    one {item}
    other {items}
}
`;

export type PluralTest3 = Expect<
    Equals<
        Tokenize<typeof pluralWithNewLines>,
        [PluralInterpolationToken<'itemCount', 'one' | 'other'>]
    >
>;

const pluralWithNestedInterpolation = `
You have {itemCount, plural,
    =0 {no items}
    one {1 item}
    other {{itemCount} items}
}.
`;

export type PluralTest4 = Expect<
    Equals<
        Tokenize<typeof pluralWithNestedInterpolation>,
        [PluralInterpolationToken<'itemCount', '=0' | 'one' | 'other'>]
    >
>;

const pluralWithHash = `
You have {itemCount, plural,
    =0 {no items}
    one {# item}
    other {# items}
}.
`;

export type PluralTest5 = Expect<
    Equals<
        Tokenize<typeof pluralWithHash>,
        [PluralInterpolationToken<'itemCount', '=0' | 'one' | 'other'>]
    >
>;

// ===========================================================
// ===========================================================
// ===========================================================
// select-ordinal interpolations

// TODO: quoting / escaping does not work with select-ordinal

export type SelectOrdinalTest1 = Expect<
    Equals<
        Tokenize<"It's my cat's {year, selectordinal, one {#st} two {#nd} few {#rd} other {#th}} birthday!">,
        [SelectOrdinalInterpolationToken<'year', 'one' | 'two' | 'few' | 'other'>]
    >
>;

export type SelectOrdinalTest2 = Expect<
    Equals<
        Tokenize<"It's my cat's { year ,   selectordinal, one {#st  } two { #nd} few {   #rd}  other  {#th  } }birthday!">,
        [SelectOrdinalInterpolationToken<'year', 'one' | 'two' | 'few' | 'other'>]
    >
>;

const selectOrdinalWithNewLines = `
It's my cat's {year, selectordinal,
    one {#st}
    two {#nd}
    few {#rd}
    other {#th}
} birthday!
`;

export type SelectOrdinalTest3 = Expect<
    Equals<
        Tokenize<typeof selectOrdinalWithNewLines>,
        [SelectOrdinalInterpolationToken<'year', 'one' | 'two' | 'few' | 'other'>]
    >
>;

// ===========================================================
// ===========================================================
// ===========================================================
// rich text interpolations

export type RichTextTest1 = Expect<
    Equals<
        Tokenize<'The answer is <boldThis>42</boldThis>'>,
        [RichTextInterpolationToken<'boldThis'>]
    >
>;

export type RichTextTest2 = Expect<
    Equals<
        Tokenize<'The answer is <boldThis>42 and some italic <i>info</i></boldThis>'>,
        [RichTextInterpolationToken<'boldThis'>, RichTextInterpolationToken<'i'>]
    >
>;

export type RichTextTest3 = Expect<
    Equals<
        Tokenize<'Our price is <boldThis>{price, number, ::currency/USD precision-integer}</boldThis>'>,
        [
            RichTextInterpolationToken<'boldThis'>,
            NumberFormatInterpolationToken<'price', '::currency/USD precision-integer'>,
        ]
    >
>;

export type RichTextTest4 = Expect<
    Equals<
        Tokenize<'The answer is <boldThis>42 and your name in italic <i>{name}</i>.Today is {today, date} btw</boldThis>'>,
        [
            RichTextInterpolationToken<'boldThis'>,
            RichTextInterpolationToken<'i'>,
            StringInterpolationToken<'name'>,
            DateInterpolationToken<'today'>,
        ]
    >
>;
