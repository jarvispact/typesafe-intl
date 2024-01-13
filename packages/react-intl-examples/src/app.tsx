import { FormattedMessage, useIntl } from '@typesafe-intl/react-intl';
import { useState } from 'react';
import { IntlProvider } from 'react-intl';

// https://stackoverflow.com/questions/63883950/make-id-in-formattedmessage-from-react-intl-inherit-from-a-custom-typescript-int
// https://formatjs.io/docs/react-intl/#typing-message-ids-and-locale

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

type View = 'default-message-formatted-message' | 'default-message-format-message-hook';

export const App = () => {
    const [view, setView] = useState<View>('default-message-formatted-message');
    return (
        <div>
            <div className="action-section">
                <button onClick={() => setView('default-message-formatted-message')}>
                    FormattedMessage with defaultMessage
                </button>
                <button onClick={() => setView('default-message-format-message-hook')}>
                    formatMessage hook with defaultMessage
                </button>
            </div>
            {view === 'default-message-formatted-message' && (
                <div className="section">
                    {['en-US', 'en-GB'].map((locale) => (
                        <IntlProvider
                            key={locale}
                            defaultLocale={locale}
                            locale={locale}
                            onError={(err) => {
                                if (!err.message.includes('using default message')) {
                                    console.error(err);
                                }
                            }}
                        >
                            <div>
                                <h2>FormattedMessage with defaultMessage. Locale: {locale}</h2>
                                <FormattedMessageUsingDefaultMessage />
                            </div>
                        </IntlProvider>
                    ))}
                </div>
            )}
            {view === 'default-message-format-message-hook' && (
                <div className="section">
                    {['en-US', 'en-GB'].map((locale) => (
                        <IntlProvider
                            key={locale}
                            defaultLocale={locale}
                            locale={locale}
                            onError={(err) => {
                                if (!err.message.includes('using default message')) {
                                    console.error(err);
                                }
                            }}
                        >
                            <div>
                                <h2>formatMessage hook with defaultMessage. Locale: {locale}</h2>
                                <FormatMessageHookUsingDefaultMessage />
                            </div>
                        </IntlProvider>
                    ))}
                </div>
            )}
        </div>
    );
};
