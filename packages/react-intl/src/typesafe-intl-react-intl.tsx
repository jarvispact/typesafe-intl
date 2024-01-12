import { FormattedMessage as _FormattedMessage, useIntl as _useIntl } from 'react-intl';
import { ExtendTypesForInterpolations, InferInterpolations, Tokenize } from '@typesafe-intl/core';
import { ReactNode } from 'react';

type _TypesForInterpolations = ExtendTypesForInterpolations<{
    'rich-text-interpolation': (chunks: ReactNode[]) => ReactNode;
}>;

export interface TypesForInterpolations extends _TypesForInterpolations {}

type CommonFormattedMessageProps<Translation extends string> = {
    defaultMessage?: Translation;
    id?: string;
    description?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    tagName?: React.ElementType<any>;
};

export type FormattedMessageProps<Translation extends string> =
    Tokenize<Translation> extends []
        ? CommonFormattedMessageProps<Translation>
        : CommonFormattedMessageProps<Translation> & {
              values: InferInterpolations<Translation, TypesForInterpolations>;
          };

export const FormattedMessage = <Translation extends string>(
    props: FormattedMessageProps<Translation>,
) => {
    return <_FormattedMessage {...props} />;
};

type FormatMessageDescriptor<Translation extends string> = {
    id?: string;
    defaultMessage?: Translation;
    description?: string;
};

export const useIntl = () => {
    const intl = _useIntl();
    return {
        ...intl,
        formatMessage: <Translation extends string>(
            messageDescriptor: FormatMessageDescriptor<Translation>,
            values?: InferInterpolations<Translation, TypesForInterpolations>,
        ) => intl.formatMessage(messageDescriptor, values),
    };
};
