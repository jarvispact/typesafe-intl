const selectWithNewLines = `
{gender, select,
    male {He}
    female {She}
    other {They}
} will respond shortly.
`;
const pluralWithNewLines = `
{itemCount, plural,
    one {item}
    other {items}
}
`;
const pluralWithNestedInterpolation = `
You have {itemCount, plural,
    =0 {no items}
    one {1 item}
    other {{itemCount} items}
}.
`;
const pluralWithHash = `
You have {itemCount, plural,
    =0 {no items}
    one {# item}
    other {# items}
}.
`;
const selectOrdinalWithNewLines = `
It's my cat's {year, selectordinal,
    one {#st}
    two {#nd}
    few {#rd}
    other {#th}
} birthday!
`;
export {};
//# sourceMappingURL=tokenize.test.js.map