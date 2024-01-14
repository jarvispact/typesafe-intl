# typesafe-intl
Typesafe interpolation values for [ICU message format](https://formatjs.io/docs/core-concepts/icu-syntax/) based translation strings.

## Overview

The goal of this project is to write a fully compliant ICU message format parser in Typescript's type system that provides typesafe interpolation values just by using inference. **No types are generated!**

It consists of two main packages:

1. [@typesafe-intl/core](packages/core/README.md): A ICU message format parser written in Typescript.
2. [@typesafe-intl/react-intl](packages/react-intl/README.md): A wrapper around the popular [react-intl](https://www.npmjs.com/package/react-intl) library, integrating `@typesafe-intl/core` for automatic typesafe interpolation values.

This package does not contain or adds any runtime javascript code. It is working just at the type level. All of the javascript functionality comes from the well established [react-intl](https://www.npmjs.com/package/react-intl) library itself.

## Quick Start Guide

### Installation

To start using `@typesafe-intl/react-intl` in your existing project that already uses `react-intl`, install both the core package and the react-intl wrapper package:

```bash
npm install @typesafe-intl/core @typesafe-intl/react-intl
```

### Usage

There are 2 ways on how you can use the powerful automatic type inference for your interpolation values. In both ways the `values` object is automatically inferred based on either your `defaultMessage` or `id` prop.

1. Using a `defaultMessage`

```tsx
import { FormattedMessage, useIntl } from '@typesafe-intl/react-intl';

// Component API
const SayHi = () => {
    return (
        <p>
            <FormattedMessage
                id="sayhi"
                defaultMessage="Hello {who}!"
                values={{ who: 'World' }} // inferred as { who: string }
            />
        </p>
    );
}

// Hook API
const SayHi = () => {
    const { formatMessage } = useIntl();
    return (
        <p>
            {formatMessage(
                { id: 'sayhi', defaultMessage: 'Hello {who}!' },
                { who: 'World' } // inferred as { who: string }
            )}
        </p>
    );
}
```

2. Using a `id`

```tsx
import { createFormattedMessageComponent, useIntl } from '@typesafe-intl/react-intl';

// define your messages and annotate them with `as const`.
const messages = {
    SAY_HI: 'Hello {who}!'
    ...
} as const;

// create a typesafe version of the `FormattedMessage` component based on your messages
const FormattedMessage = createFormattedMessageComponent<typeof messages>();

// Component API
const SayHi = () => {
    return (
        <p>
            <FormattedMessage
                id="SAY_HI"
                values={{ who: 'World' }} // inferred as { who: string }
            />
        </p>
    );
}

// Hook API
const SayHi = () => {
    const { formatMessage } = useIntl();
    return (
        <p>
            {formatMessage(
                { id: 'SAY_HI' },
                { who: 'World' } // inferred as { who: string }
            )}
        </p>
    );
}
```