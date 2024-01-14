import {
    FormattedMessage,
    createFormattedMessageComponent,
    useIntl,
} from '@typesafe-intl/react-intl';
import { useState } from 'react';
import { IntlProvider } from 'react-intl';

const FormattedMessageUsingDefaultMessage = () => {
    return (
        <div>
            <p>
                <FormattedMessage id="void" defaultMessage="Hello" />
            </p>
            <p>
                <FormattedMessage
                    id="void"
                    defaultMessage="Hello {who}!"
                    values={{ who: 'World' }}
                />
            </p>
            <p>
                <FormattedMessage
                    id="void"
                    defaultMessage="{unreadEmails, number} unread Emails"
                    values={{ unreadEmails: 2 }}
                />
            </p>
            <p>
                <FormattedMessage
                    id="void"
                    defaultMessage="{percent, number, percent} complete"
                    values={{ percent: 0.5 }}
                />
            </p>
            <p>
                <FormattedMessage
                    id="void"
                    defaultMessage="{percent, number, ::percent} complete"
                    values={{ percent: 0.25 }}
                />
            </p>
            <p>
                <FormattedMessage
                    id="void"
                    defaultMessage="Price: {price, number, ::currency/GBP}"
                    values={{ price: 42 }}
                />
            </p>
            {['short', 'medium', 'long', 'full'].map((format) => (
                <p key={format}>
                    <FormattedMessage
                        id="void"
                        defaultMessage={`Sale begins on {start, date, ${format}}`}
                        values={{ start: new Date() }}
                    />
                </p>
            ))}
            {['short', 'medium', 'long', 'full'].map((format) => (
                <p key={format}>
                    <FormattedMessage
                        id="void"
                        defaultMessage={`Coupon expires at {expires, time, ${format}}`}
                        values={{ expires: new Date() }}
                    />
                </p>
            ))}
            {(['male', 'female', 'other'] as const).map((gender) => (
                <p key={gender}>
                    <FormattedMessage
                        id="void"
                        defaultMessage="{gender, select, male {He} female {She} other {They}} will respond shortly."
                        values={{ gender }}
                    />
                </p>
            ))}
            {(['yes', 'other'] as const).map((taxableArea) => (
                <p key={taxableArea}>
                    <FormattedMessage
                        id="void"
                        defaultMessage="{taxableArea, select, yes {An additional tax will be collected.} other {No taxes apply.}}"
                        values={{ taxableArea }}
                    />
                </p>
            ))}
            {[1, 2].map((itemCount) => (
                <p key={itemCount}>
                    <FormattedMessage
                        id="void"
                        defaultMessage="Cart: {itemCount} {itemCount, plural, one {item} other {items}}"
                        values={{ itemCount }}
                    />
                </p>
            ))}
            {[0, 1, 2].map((itemCount) => (
                <p key={itemCount}>
                    <FormattedMessage
                        id="void"
                        defaultMessage="You have {itemCount, plural, =0 {no items} one {# item} other {# items}}."
                        values={{ itemCount }}
                    />
                </p>
            ))}
            {[1, 2, 3, 4, 5, 6].map((birthday) => (
                <p key={birthday}>
                    <FormattedMessage
                        id="void"
                        defaultMessage="It's my cat's {birthday, selectordinal, one {#st} two {#nd} few {#rd} other {#th}} birthday!"
                        values={{ birthday }}
                    />
                </p>
            ))}
            <p>
                <FormattedMessage
                    id="void"
                    defaultMessage="Our price is <boldThis>{price, number, ::currency/USD}</boldThis> with <link>{pct, number, ::percent} discount</link>"
                    values={{
                        boldThis: (chunks) => <b>{chunks}</b>,
                        link: (chunks) => (
                            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">{chunks}</a>
                        ),
                        pct: 0.5,
                        price: 42,
                    }}
                />
            </p>
            <p>
                <FormattedMessage id="void" defaultMessage="Hello '{firstname}" />
            </p>
            <p>
                <FormattedMessage
                    id="void"
                    defaultMessage="Hello '{firstname}' {lastname}"
                    values={{ lastname: 'Stark' }}
                />
            </p>
            <p>
                <FormattedMessage
                    id="void"
                    defaultMessage="'{unreadEmails, number} unread Emails"
                />
            </p>
        </div>
    );
};

const FormatMessageHookUsingDefaultMessage = () => {
    const { formatMessage } = useIntl();

    return (
        <div>
            <p>{formatMessage({ id: 'void', defaultMessage: 'Hello' })}</p>
            <p>{formatMessage({ id: 'void', defaultMessage: 'Hello {who}!' }, { who: 'World' })}</p>
            <p>
                {formatMessage(
                    { id: 'void', defaultMessage: '{unreadEmails, number} unread Emails' },
                    { unreadEmails: 3 },
                )}
            </p>
            <p>
                {formatMessage(
                    { id: 'void', defaultMessage: '{percent, number, percent} complete' },
                    { percent: 0.3 },
                )}
            </p>
            <p>
                {formatMessage(
                    { id: 'void', defaultMessage: '{percent, number, ::percent} complete' },
                    { percent: 0.56 },
                )}
            </p>
            <p>
                {formatMessage(
                    { id: 'void', defaultMessage: 'Price: {price, number, ::currency/GBP}' },
                    { price: 84 },
                )}
            </p>
            {['short', 'medium', 'long', 'full'].map((format) => (
                <p key={format}>
                    {formatMessage(
                        { id: 'void', defaultMessage: `Sale begins on {start, date, ${format}}` },
                        { start: new Date() },
                    )}
                </p>
            ))}
            {['short', 'medium', 'long', 'full'].map((format) => (
                <p key={format}>
                    {formatMessage(
                        {
                            id: 'void',
                            defaultMessage: `Coupon expires at {expires, time, ${format}}`,
                        },
                        { expires: new Date() },
                    )}
                </p>
            ))}
            {(['male', 'female', 'other'] as const).map((gender) => (
                <p key={gender}>
                    {formatMessage(
                        {
                            id: 'void',
                            defaultMessage:
                                '{gender, select, male {He} female {She} other {They}} will respond shortly.',
                        },
                        { gender },
                    )}
                </p>
            ))}
            {(['yes', 'other'] as const).map((taxableArea) => (
                <p key={taxableArea}>
                    {formatMessage(
                        {
                            id: 'void',
                            defaultMessage:
                                '{taxableArea, select, yes {An additional tax will be collected.} other {No taxes apply.}}',
                        },
                        { taxableArea },
                    )}
                </p>
            ))}
            {[1, 2].map((itemCount) => (
                <p key={itemCount}>
                    {formatMessage(
                        {
                            id: 'void',
                            defaultMessage:
                                'Cart: {itemCount} {itemCount, plural, one {item} other {items}}',
                        },
                        { itemCount },
                    )}
                </p>
            ))}
            {[0, 1, 2].map((itemCount) => (
                <p key={itemCount}>
                    {formatMessage(
                        {
                            id: 'void',
                            defaultMessage:
                                'You have {itemCount, plural, =0 {no items} one {# item} other {# items}}.',
                        },
                        { itemCount },
                    )}
                </p>
            ))}
            {[1, 2, 3, 4, 5, 6].map((birthday) => (
                <p key={birthday}>
                    {formatMessage(
                        {
                            id: 'void',
                            defaultMessage:
                                "It's my cat's {birthday, selectordinal, one {#st} two {#nd} few {#rd} other {#th}} birthday!",
                        },
                        { birthday },
                    )}
                </p>
            ))}
            <p>
                {formatMessage(
                    {
                        id: 'void',
                        defaultMessage:
                            'Our price is <boldThis>{price, number, ::currency/USD}</boldThis> with <link>{pct, number, ::percent} discount</link>',
                    },
                    {
                        boldThis: (chunks) => <b>{chunks}</b>,
                        link: (chunks) => (
                            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">{chunks}</a>
                        ),
                        pct: 0.5,
                        price: 42,
                    },
                )}
            </p>
            <p>{formatMessage({ id: 'void', defaultMessage: "Hello '{firstname}" })}</p>
            <p>
                {formatMessage(
                    { id: 'void', defaultMessage: "Hello '{firstname}' {lastname}" },
                    { lastname: 'Stark' },
                )}
            </p>
            <p>
                {formatMessage({
                    id: 'void',
                    defaultMessage: "'{unreadEmails, number} unread Emails",
                })}
            </p>
        </div>
    );
};

const messages = {
    test1: 'Hello',
    test2: 'Hello {who}!',
    test3: '{unreadEmails, number} unread Emails',
    test4: '{percent, number, percent} complete',
    test5: '{percent, number, ::percent} complete',
    test6: 'Price: {price, number, ::currency/GBP}',
    test7: `Sale begins on {start, date, full}`,
    test8: `Coupon expires at {expires, time, full}`,
    test9: '{gender, select, male {He} female {She} other {They}} will respond shortly.',
    test10: '{taxableArea, select, yes {An additional tax will be collected.} other {No taxes apply.}}',
    test11: 'Cart: {itemCount} {itemCount, plural, one {item} other {items}}',
    test12: 'You have {itemCount, plural, =0 {no items} one {# item} other {# items}}.',
    test13: "It's my cat's {birthday, selectordinal, one {#st} two {#nd} few {#rd} other {#th}} birthday!",
    test14: 'Our price is <boldThis>{price, number, ::currency/USD}</boldThis> with <link>{pct, number, ::percent} discount</link>',
    test15: "Hello '{firstname}",
    test16: "Hello '{firstname}' {lastname}",
    test17: "'{unreadEmails, number} unread Emails",
} as const;

const FormattedMessageWithId = createFormattedMessageComponent<typeof messages>();

const FormattedMessageUsingId = () => {
    return (
        <div>
            <p>
                <FormattedMessageWithId id="test1" />
            </p>
            <p>
                <FormattedMessageWithId id="test2" values={{ who: 'World' }} />
            </p>
            <p>
                <FormattedMessageWithId id="test3" values={{ unreadEmails: 2 }} />
            </p>
            <p>
                <FormattedMessageWithId id="test4" values={{ percent: 0.5 }} />
            </p>
            <p>
                <FormattedMessageWithId id="test5" values={{ percent: 0.25 }} />
            </p>
            <p>
                <FormattedMessageWithId id="test6" values={{ price: 42 }} />
            </p>
            <p>
                <FormattedMessageWithId id="test7" values={{ start: new Date() }} />
            </p>
            <p>
                <FormattedMessageWithId id="test8" values={{ expires: new Date() }} />
            </p>
            {(['male', 'female', 'other'] as const).map((gender) => (
                <p key={gender}>
                    <FormattedMessageWithId id="test9" values={{ gender }} />
                </p>
            ))}
            {(['yes', 'other'] as const).map((taxableArea) => (
                <p key={taxableArea}>
                    <FormattedMessageWithId id="test10" values={{ taxableArea }} />
                </p>
            ))}
            {[1, 2].map((itemCount) => (
                <p key={itemCount}>
                    <FormattedMessageWithId id="test11" values={{ itemCount }} />
                </p>
            ))}
            {[0, 1, 2].map((itemCount) => (
                <p key={itemCount}>
                    <FormattedMessageWithId id="test12" values={{ itemCount }} />
                </p>
            ))}
            {[1, 2, 3, 4, 5, 6].map((birthday) => (
                <p key={birthday}>
                    <FormattedMessageWithId id="test13" values={{ birthday }} />
                </p>
            ))}
            <p>
                <FormattedMessageWithId
                    id="test14"
                    values={{
                        boldThis: (chunks) => <b>{chunks}</b>,
                        link: (chunks) => (
                            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">{chunks}</a>
                        ),
                        pct: 0.5,
                        price: 42,
                    }}
                />
            </p>
            <p>
                <FormattedMessageWithId id="test15" />
            </p>
            <p>
                <FormattedMessageWithId id="test16" values={{ lastname: 'Stark' }} />
            </p>
            <p>
                <FormattedMessageWithId id="test17" />
            </p>
        </div>
    );
};

const FormatMessageHookUsingId = () => {
    const { formatMessage } = useIntl<typeof messages>();

    return (
        <div>
            <p>{formatMessage({ id: 'test1' })}</p>
            <p>{formatMessage({ id: 'test2' }, { who: 'World' })}</p>
            <p>{formatMessage({ id: 'test3' }, { unreadEmails: 3 })}</p>
            <p>{formatMessage({ id: 'test4' }, { percent: 0.3 })}</p>
            <p>{formatMessage({ id: 'test5' }, { percent: 0.56 })}</p>
            <p>{formatMessage({ id: 'test6' }, { price: 84 })}</p>
            <p>{formatMessage({ id: 'test7' }, { start: new Date() })}</p>
            <p>
                {formatMessage(
                    {
                        id: 'test8',
                    },
                    { expires: new Date() },
                )}
            </p>
            {(['male', 'female', 'other'] as const).map((gender) => (
                <p key={gender}>
                    {formatMessage(
                        {
                            id: 'test9',
                        },
                        { gender },
                    )}
                </p>
            ))}
            {(['yes', 'other'] as const).map((taxableArea) => (
                <p key={taxableArea}>
                    {formatMessage(
                        {
                            id: 'test10',
                        },
                        { taxableArea },
                    )}
                </p>
            ))}
            {[1, 2].map((itemCount) => (
                <p key={itemCount}>
                    {formatMessage(
                        {
                            id: 'test11',
                        },
                        { itemCount },
                    )}
                </p>
            ))}
            {[0, 1, 2].map((itemCount) => (
                <p key={itemCount}>
                    {formatMessage(
                        {
                            id: 'test12',
                        },
                        { itemCount },
                    )}
                </p>
            ))}
            {[1, 2, 3, 4, 5, 6].map((birthday) => (
                <p key={birthday}>
                    {formatMessage(
                        {
                            id: 'test13',
                        },
                        { birthday },
                    )}
                </p>
            ))}
            <p>
                {formatMessage(
                    {
                        id: 'test14',
                    },
                    {
                        boldThis: (chunks) => <b>{chunks}</b>,
                        link: (chunks) => (
                            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">{chunks}</a>
                        ),
                        pct: 0.5,
                        price: 42,
                    },
                )}
            </p>
            <p>{formatMessage({ id: 'test15' })}</p>
            <p>{formatMessage({ id: 'test16' }, { lastname: 'Stark' })}</p>
            <p>
                {formatMessage({
                    id: 'test17',
                })}
            </p>
        </div>
    );
};

type View =
    | 'formatted-message-with-default-message'
    | 'format-message-hook-with-default-message'
    | 'formatted-message-with-id'
    | 'format-message-hook-with-id';

export const App = () => {
    const [view, setView] = useState<View>('formatted-message-with-default-message');
    return (
        <div>
            <div className="action-section">
                <button onClick={() => setView('formatted-message-with-default-message')}>
                    FormattedMessage with defaultMessage
                </button>
                <button onClick={() => setView('format-message-hook-with-default-message')}>
                    formatMessage hook with defaultMessage
                </button>
                <button onClick={() => setView('formatted-message-with-id')}>
                    FormattedMessage with id
                </button>
                <button onClick={() => setView('format-message-hook-with-id')}>
                    formatMessage hook with id
                </button>
            </div>
            {view === 'formatted-message-with-default-message' && (
                <div className="section">
                    {['en-US', 'en-GB'].map((locale) => (
                        <IntlProvider key={locale} defaultLocale={locale} locale={locale}>
                            <div>
                                <h2>FormattedMessage with defaultMessage. Locale: {locale}</h2>
                                <FormattedMessageUsingDefaultMessage />
                            </div>
                        </IntlProvider>
                    ))}
                </div>
            )}
            {view === 'format-message-hook-with-default-message' && (
                <div className="section">
                    {['en-US', 'en-GB'].map((locale) => (
                        <IntlProvider key={locale} defaultLocale={locale} locale={locale}>
                            <div>
                                <h2>formatMessage hook with defaultMessage. Locale: {locale}</h2>
                                <FormatMessageHookUsingDefaultMessage />
                            </div>
                        </IntlProvider>
                    ))}
                </div>
            )}
            {view === 'formatted-message-with-id' && (
                <div className="section">
                    {['en-US', 'en-GB'].map((locale) => (
                        <IntlProvider
                            key={locale}
                            defaultLocale={locale}
                            locale={locale}
                            messages={messages}
                        >
                            <div>
                                <h2>FormattedMessage with id. Locale: {locale}</h2>
                                <FormattedMessageUsingId />
                            </div>
                        </IntlProvider>
                    ))}
                </div>
            )}
            {view === 'format-message-hook-with-id' && (
                <div className="section">
                    {['en-US', 'en-GB'].map((locale) => (
                        <IntlProvider
                            key={locale}
                            defaultLocale={locale}
                            locale={locale}
                            messages={messages}
                        >
                            <div>
                                <h2>formatMessage hook with id. Locale: {locale}</h2>
                                <FormatMessageHookUsingId />
                            </div>
                        </IntlProvider>
                    ))}
                </div>
            )}
        </div>
    );
};
