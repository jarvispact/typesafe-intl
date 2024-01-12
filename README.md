# typesafe-intl
typesafe interpolations for icu message format based translations

## Overview

@typesafe-intl is a TypeScript-based library that provides a robust and type-safe way to handle internationalization (i18n) in your web applications. It consists of two main packages:

1. **@typesafe-intl/core**: Offers core functionality for parsing ICU message formats, generating typed objects for safe interpolation.
2. **@typesafe-intl/react-intl**: A wrapper around the popular `react-intl` library, integrating typesafe-intl's type-safe capabilities with React.

By integrating type safety into the core of your internationalization strategy, @typesafe-intl ensures that your multilingual applications are robust, error-free, and easy to maintain. Happy coding!

## Quick Start Guide

### Installation

To start using @typesafe-intl in your existing project that uses `react-intl`, install both the core package and the React-specific package:

```bash
npm install @typesafe-intl/core @typesafe-intl/react-intl
```

### Using the `@typesafe-intl/core` package

1. **Infer the interpolation values for a given translation**:

```typescript
import { InferInterpolations } from '@typesafe-intl/core';

const greeting = "Hello {who}";
type GreetingInterpolations = InferInterpolations<typeof greeting>;
//   ^? { who: string }
```

### Using the `@typesafe-intl/react-intl` Package

1. **FormattedMessage Component**:

```jsx
import { FormattedMessage } from '@typesafe-intl/react-intl';

// `who` is inferred as a string automatically based on the content of `defaultMessage`
<FormattedMessage
    id="greeting"
    defaultMessage="Hello {who}"
    values={{ who: 'World' }}
/>
```

2. **useIntl Hook**:

```jsx
import { useIntl } from '@typesafe-intl/react-intl';

const Component = () => {
    const intl = useIntl();

    // `who` is inferred as a string automatically based on the content of `defaultMessage`
    const message = intl.formatMessage({ defaultMessage: "Hello {who}" }, { who: 'World' });

    return <div>{message}</div>;
};
```

## Examples

All of the features listed [here](https://formatjs.io/docs/core-concepts/icu-syntax/) are supported bt this library.

### Strings

```typescript
import { InferInterpolations } from '@typesafe-intl/core';

const greeting = "Hello {who}";
type GreetingInterpolations = InferInterpolations<typeof greeting>; // { who: string }
```

### Numbers

```typescript
// Example Messages
const catMessage = "I have {numCats, number} cats.";
const pctMessage = "Almost {pctBlack, number, ::percent} of them are black.";
const priceMessage = "The price of this bagel is {num, number, ::sign-always compact-short currency/GBP}";

// Inferred Types
type CatMessageInterpolations = InferInterpolations<typeof catMessage>; // { numCats: number }
type PctMessageInterpolations = InferInterpolations<typeof pctMessage>; // { pctBlack: number }
type PriceMessageInterpolations = InferInterpolations<typeof priceMessage>; // { num: number }
```

### Dates and Times

```typescript
// Example Messages
const saleMessage = "Sale begins {start, date, medium}";
const couponMessage = "Coupon expires at {expires, time, short}";

// Inferred Types
type SaleMessageInterpolations = InferInterpolations<typeof saleMessage>; // { start: Date }
type CouponMessageInterpolations = InferInterpolations<typeof couponMessage>; // { expires: Date }
```

### Select

```typescript
// Example Message
const genderMessage = "{gender, select, male {He} female {She} other {They}} will respond shortly.";

// Inferred Type
type GenderMessageInterpolations = InferInterpolations<typeof genderMessage>; // { gender: 'male' | 'female' | 'other' }
```

### Plurals

```typescript
// Example Message
const cartMessage = "Cart: {itemCount} {itemCount, plural, one {item} other {items}}";

// Inferred Type
type CartMessageInterpolations = InferInterpolations<typeof cartMessage>; // { itemCount: number }
```

### Select-Ordinal

```typescript
// Example Message
const birthdayMessage = "It's my cat's {year, selectordinal, one {#st} two {#nd} few {#rd} other {#th}} birthday!";

// Inferred Type
type BirthdayMessageInterpolations = InferInterpolations<typeof birthdayMessage>; // { year: number }
```

### Rich Text (Extended Feature)

```typescript
// Example Message
const richTextMessage = "Our price is <boldThis>{price, number, ::currency/USD precision-integer}</boldThis> with <link>{pct, number, ::percent} discount</link>";

// Inferred Type
type RichTextMessageInterpolations = InferInterpolations<typeof richTextMessage>;
/*
{
    boldThis: (chunks: ReactNode[]) => ReactNode,
    link: (chunks: ReactNode[]) => ReactNode,
    price: number,
    pct: number,
}
*/
```

### Quoting / Escaping

```typescript
import { InferInterpolations } from '@typesafe-intl/core';

const greeting = "Hello '{who}";
type GreetingInterpolations = InferInterpolations<typeof greeting>; // {}
```


### License

@typesafe-intl is open-source software licensed under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use and modify it in your projects.

### Support

If you encounter any issues or have questions, please file them on our GitHub issues page. Our community is active and always ready to help.

### Versioning

We adhere to [Semantic Versioning](http://semver.org/). For the versions available, see the [tags on this repository](https://github.com/your-repo/tags).
