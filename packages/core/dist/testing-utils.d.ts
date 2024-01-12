export type Expect<Assertion extends [true, unknown]> = Assertion[1];
export type Equals<A, B> = B extends A ? A extends B ? [
    true,
    {
        Status: 'Ok';
        0: A;
        1: B;
    }
] : [
    false,
    {
        Status: 'Error';
        Msg: 'type at position: `0` does not extend type at position: `1`';
        0: A;
        1: B;
    }
] : [
    false,
    {
        Status: 'Error';
        Msg: 'type at position: `1` does not extend type at position: `0`';
        0: A;
        1: B;
    }
];
