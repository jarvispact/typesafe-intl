import { Equals, Expect } from './testing-utils';
import { DateFormatInterpolationToken, DateInterpolationToken, NumberFormatInterpolationToken, NumberInterpolationToken, PluralInterpolationToken, RichTextInterpolationToken, SelectInterpolationToken, SelectOrdinalInterpolationToken, StringInterpolationToken, TimeFormatInterpolationToken, TimeInterpolationToken, Tokenize } from './tokenize';
export type StringTest1 = Expect<Equals<Tokenize<string>, []>>;
export type StringTest2 = Expect<Equals<Tokenize<''>, []>>;
export type StringTest3 = Expect<Equals<Tokenize<'Hello'>, []>>;
export type StringTest4 = Expect<Equals<Tokenize<'Hello {name}'>, [StringInterpolationToken<'name'>]>>;
export type StringTest5 = Expect<Equals<Tokenize<"Hello '{name}">, []>>;
export type StringTest6 = Expect<Equals<Tokenize<"Hello '{name}'">, []>>;
export type StringTest7 = Expect<Equals<Tokenize<'Hello {firstname} {lastname}'>, [
    StringInterpolationToken<'firstname'>,
    StringInterpolationToken<'lastname'>
]>>;
export type StringTest8 = Expect<Equals<Tokenize<"Hello '{firstname} {lastname}">, []>>;
export type StringTest9 = Expect<Equals<Tokenize<"Hello '{firstname}' {lastname}">, [StringInterpolationToken<'lastname'>]>>;
export type StringTest10 = Expect<Equals<Tokenize<"Hello '{firstname} {lastname}'">, []>>;
export type NumberTest1 = Expect<Equals<Tokenize<'Count: {num, number}'>, [NumberInterpolationToken<'num'>]>>;
export type NumberTest2 = Expect<Equals<Tokenize<"Count: '{num, number}">, []>>;
export type NumberTest3 = Expect<Equals<Tokenize<"Count: '{num, number}'">, []>>;
export type NumberTest4 = Expect<Equals<Tokenize<'Count: {num, number} Other count: {num2, number}'>, [
    NumberInterpolationToken<'num'>,
    NumberInterpolationToken<'num2'>
]>>;
export type NumberTest5 = Expect<Equals<Tokenize<"Count: '{num, number} Other count: {num2, number}">, []>>;
export type NumberTest6 = Expect<Equals<Tokenize<"Count: '{num, number}' Other count: {num2, number}">, [
    NumberInterpolationToken<'num2'>
]>>;
export type NumberTest7 = Expect<Equals<Tokenize<"Count: '{num, number} Other count: {num2, number}'">, []>>;
export type NumberFormatTest1 = Expect<Equals<Tokenize<'Count: {num, number, percent}'>, [
    NumberFormatInterpolationToken<'num', 'percent'>
]>>;
export type NumberFormatTest2 = Expect<Equals<Tokenize<"Count: '{num, number, percent}">, []>>;
export type NumberFormatTest3 = Expect<Equals<Tokenize<"Count: '{num, number, percent}'">, []>>;
export type NumberFormatTest4 = Expect<Equals<Tokenize<'Count: {num, number, percent} Other count: {num2, number, percent}'>, [
    NumberFormatInterpolationToken<'num', 'percent'>,
    NumberFormatInterpolationToken<'num2', 'percent'>
]>>;
export type NumberFormatTest5 = Expect<Equals<Tokenize<"Count: '{num, number, percent} Other count: {num2, number, percent}">, []>>;
export type NumberFormatTest6 = Expect<Equals<Tokenize<"Count: '{num, number, percent}' Other count: {num2, number, percent}">, [
    NumberFormatInterpolationToken<'num2', 'percent'>
]>>;
export type NumberFormatTest7 = Expect<Equals<Tokenize<"Count: '{num, number, percent} Other count: {num2, number, percent}'">, []>>;
export type DateTest1 = Expect<Equals<Tokenize<'Today is: {today, date}'>, [DateInterpolationToken<'today'>]>>;
export type DateTest2 = Expect<Equals<Tokenize<"Today is: '{today, date}">, []>>;
export type DateTest3 = Expect<Equals<Tokenize<"Today is: '{today, date}'">, []>>;
export type DateTest4 = Expect<Equals<Tokenize<'Today is: {today, date} yesterday was: {yesterday, date}'>, [
    DateInterpolationToken<'today'>,
    DateInterpolationToken<'yesterday'>
]>>;
export type DateTest5 = Expect<Equals<Tokenize<"Today is: '{today, date} yesterday was: {yesterday, date}">, []>>;
export type DateTest6 = Expect<Equals<Tokenize<"Today is: '{today, date}' yesterday was: {yesterday, date}">, [
    DateInterpolationToken<'yesterday'>
]>>;
export type DateTest7 = Expect<Equals<Tokenize<"Today is: '{today, date} yesterday was: {yesterday, date}'">, []>>;
export type DateFormatTest1 = Expect<Equals<Tokenize<'Today is: {today, date, long}'>, [
    DateFormatInterpolationToken<'today', 'long'>
]>>;
export type DateFormatTest2 = Expect<Equals<Tokenize<"Today is: '{today, date, long}">, []>>;
export type DateFormatTest3 = Expect<Equals<Tokenize<"Today is: '{today, date, long}'">, []>>;
export type DateFormatTest4 = Expect<Equals<Tokenize<'Today is: {today, date, long} yesterday was: {yesterday, date, long}'>, [
    DateFormatInterpolationToken<'today', 'long'>,
    DateFormatInterpolationToken<'yesterday', 'long'>
]>>;
export type DateFormatTest5 = Expect<Equals<Tokenize<"Today is: '{today, date, long} yesterday was: {yesterday, date, long}">, []>>;
export type DateFormatTest6 = Expect<Equals<Tokenize<"Today is: '{today, date, long}' yesterday was: {yesterday, date, long}">, [
    DateFormatInterpolationToken<'yesterday', 'long'>
]>>;
export type DateFormatTest7 = Expect<Equals<Tokenize<"Today is: '{today, date, long} yesterday was: {yesterday, date, long}'">, []>>;
export type TimeTest1 = Expect<Equals<Tokenize<'Now is: {now, time}'>, [TimeInterpolationToken<'now'>]>>;
export type TimeTest2 = Expect<Equals<Tokenize<"Now is: '{now, time}">, []>>;
export type TimeTest3 = Expect<Equals<Tokenize<"Now is: '{now, time}'">, []>>;
export type TimeTest4 = Expect<Equals<Tokenize<'Now is: {now, time} Before it was: {before, time}'>, [
    TimeInterpolationToken<'now'>,
    TimeInterpolationToken<'before'>
]>>;
export type TimeTest5 = Expect<Equals<Tokenize<"Now is: '{now, time} Before it was: {before, time}">, []>>;
export type TimeTest6 = Expect<Equals<Tokenize<"Now is: '{now, time}' Before it was: {before, time}">, [
    TimeInterpolationToken<'before'>
]>>;
export type TimeTest7 = Expect<Equals<Tokenize<"Now is: '{now, time} Before it was: {before, time}'">, []>>;
export type TimeFormatTest1 = Expect<Equals<Tokenize<'Now is: {now, time, long}'>, [TimeFormatInterpolationToken<'now', 'long'>]>>;
export type TimeFormatTest2 = Expect<Equals<Tokenize<"Now is: '{now, time, long}">, []>>;
export type TimeFormatTest3 = Expect<Equals<Tokenize<"Now is: '{now, time, long}'">, []>>;
export type TimeFormatTest4 = Expect<Equals<Tokenize<'Now is: {now, time, long} Before it was: {before, time, long}'>, [
    TimeFormatInterpolationToken<'now', 'long'>,
    TimeFormatInterpolationToken<'before', 'long'>
]>>;
export type TimeFormatTest5 = Expect<Equals<Tokenize<"Now is: '{now, time, long} Before it was: {before, time, long}">, []>>;
export type TimeFormatTest6 = Expect<Equals<Tokenize<"Now is: '{now, time, long}' Before it was: {before, time, long}">, [
    TimeFormatInterpolationToken<'before', 'long'>
]>>;
export type TimeFormatTest7 = Expect<Equals<Tokenize<"Now is: '{now, time, long} Before it was: {before, time, long}'">, []>>;
export type SelectTest1 = Expect<Equals<Tokenize<'{gender, select, male {He} female {She} other {They}} will respond shortly.'>, [
    SelectInterpolationToken<'gender', 'male' | 'female' | 'other'>
]>>;
export type SelectTest2 = Expect<Equals<Tokenize<'{ gender,  select, male { He } female  {She } other {They }  } will respond shortly.'>, [
    SelectInterpolationToken<'gender', 'male' | 'female' | 'other'>
]>>;
declare const selectWithNewLines = "\n{gender, select,\n    male {He}\n    female {She}\n    other {They}\n} will respond shortly.\n";
export type SelectTest3 = Expect<Equals<Tokenize<typeof selectWithNewLines>, [
    SelectInterpolationToken<'gender', 'male' | 'female' | 'other'>
]>>;
export type PluralTest1 = Expect<Equals<Tokenize<'{itemCount, plural, one {item} other {items}}'>, [
    PluralInterpolationToken<'itemCount', 'one' | 'other'>
]>>;
export type PluralTest2 = Expect<Equals<Tokenize<'{ itemCount, plural , one   {item } other  {  items} }'>, [
    PluralInterpolationToken<'itemCount', 'one' | 'other'>
]>>;
declare const pluralWithNewLines = "\n{itemCount, plural,\n    one {item}\n    other {items}\n}\n";
export type PluralTest3 = Expect<Equals<Tokenize<typeof pluralWithNewLines>, [
    PluralInterpolationToken<'itemCount', 'one' | 'other'>
]>>;
declare const pluralWithNestedInterpolation = "\nYou have {itemCount, plural,\n    =0 {no items}\n    one {1 item}\n    other {{itemCount} items}\n}.\n";
export type PluralTest4 = Expect<Equals<Tokenize<typeof pluralWithNestedInterpolation>, [
    PluralInterpolationToken<'itemCount', '=0' | 'one' | 'other'>
]>>;
declare const pluralWithHash = "\nYou have {itemCount, plural,\n    =0 {no items}\n    one {# item}\n    other {# items}\n}.\n";
export type PluralTest5 = Expect<Equals<Tokenize<typeof pluralWithHash>, [
    PluralInterpolationToken<'itemCount', '=0' | 'one' | 'other'>
]>>;
export type PluralTest6 = Expect<Equals<Tokenize<"Cart: '{itemCount, plural, one {item} other {items}}">, []>>;
export type PluralTest7 = Expect<Equals<Tokenize<"Cart: '{itemCount, plural, one {item} other {items}} Some more info {whaat}">, [
]>>;
export type PluralTest8 = Expect<Equals<Tokenize<"Cart: '{itemCount, plural, one {item} other {items}}' Some more info {whaat}">, [
    StringInterpolationToken<'whaat'>
]>>;
export type SelectOrdinalTest1 = Expect<Equals<Tokenize<"It's my cat's {year, selectordinal, one {#st} two {#nd} few {#rd} other {#th}} birthday!">, [
    SelectOrdinalInterpolationToken<'year', 'one' | 'two' | 'few' | 'other'>
]>>;
export type SelectOrdinalTest2 = Expect<Equals<Tokenize<"It's my cat's { year ,   selectordinal, one {#st  } two { #nd} few {   #rd}  other  {#th  } }birthday!">, [
    SelectOrdinalInterpolationToken<'year', 'one' | 'two' | 'few' | 'other'>
]>>;
declare const selectOrdinalWithNewLines = "\nIt's my cat's {year, selectordinal,\n    one {#st}\n    two {#nd}\n    few {#rd}\n    other {#th}\n} birthday!\n";
export type SelectOrdinalTest3 = Expect<Equals<Tokenize<typeof selectOrdinalWithNewLines>, [
    SelectOrdinalInterpolationToken<'year', 'one' | 'two' | 'few' | 'other'>
]>>;
export type SelectOrdinalTest4 = Expect<Equals<Tokenize<"It's my cat's '{year, selectordinal, one {#st} two {#nd} few {#rd} other {#th}} birthday!">, [
]>>;
export type SelectOrdinalTest5 = Expect<Equals<Tokenize<"It's my cat's '{year, selectordinal, one {#st} two {#nd} few {#rd} other {#th}} birthday! {whaat}">, [
]>>;
export type SelectOrdinalTest6 = Expect<Equals<Tokenize<"It's my cat's '{year, selectordinal, one {#st} two {#nd} few {#rd} other {#th}}' birthday! {whaat}">, [
    StringInterpolationToken<'whaat'>
]>>;
export type RichTextTest1 = Expect<Equals<Tokenize<'The answer is <boldThis>42</boldThis>'>, [
    RichTextInterpolationToken<'boldThis'>
]>>;
export type RichTextTest2 = Expect<Equals<Tokenize<'The answer is <boldThis>42 and some italic <i>info</i></boldThis>'>, [
    RichTextInterpolationToken<'boldThis'>,
    RichTextInterpolationToken<'i'>
]>>;
export type RichTextTest3 = Expect<Equals<Tokenize<'Our price is <boldThis>{price, number, ::currency/USD precision-integer}</boldThis>'>, [
    RichTextInterpolationToken<'boldThis'>,
    NumberFormatInterpolationToken<'price', '::currency/USD precision-integer'>
]>>;
export type RichTextTest4 = Expect<Equals<Tokenize<'The answer is <boldThis>42 and your name in italic <i>{name}</i>.Today is {today, date} btw</boldThis>'>, [
    RichTextInterpolationToken<'boldThis'>,
    RichTextInterpolationToken<'i'>,
    StringInterpolationToken<'name'>,
    DateInterpolationToken<'today'>
]>>;
export type RichTextTest5 = Expect<Equals<Tokenize<"The answer is '<boldThis>42</boldThis>">, []>>;
export type RichTextTest6 = Expect<Equals<Tokenize<"The answer is '<boldThis>42</boldThis> and here is a <link>link</link>">, []>>;
export type RichTextTest7 = Expect<Equals<Tokenize<"The answer is '<boldThis>42</boldThis>' and here is a <link>link</link>">, [
    RichTextInterpolationToken<'link'>
]>>;
export {};
