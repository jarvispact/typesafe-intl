import { FormattedMessage as _FormattedMessage, useIntl as _useIntl } from 'react-intl';
import {
    DefaultTypesForInterpolations as CoreDefaultTypesForInterpolations,
    InferInterpolations,
    Tokenize,
} from '@typesafe-intl/core';
import { ReactNode } from 'react';

export interface TypesForInterpolations extends CoreDefaultTypesForInterpolations {
    'rich-text-interpolation': (chunks: ReactNode[]) => ReactNode;
}

// ==========================================================
// FormattedMessage

type CommonFormattedMessageProps<DefaultMessage extends string, Id extends string> = {
    defaultMessage?: DefaultMessage;
    id?: Id;
    description?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    tagName?: React.ElementType<any>;
};

export type FormattedMessageProps<DefaultMessage extends string, Id extends string> =
    Tokenize<DefaultMessage> extends []
        ? CommonFormattedMessageProps<DefaultMessage, Id>
        : CommonFormattedMessageProps<DefaultMessage, Id> & {
              values: InferInterpolations<DefaultMessage, TypesForInterpolations>;
          };

export const FormattedMessage = <DefaultMessage extends string, Id extends string>(
    props: FormattedMessageProps<DefaultMessage, Id>,
) => {
    return <_FormattedMessage {...props} />;
};

// ==========================================================
// createFormattedMessageComponent

type CommonCreateFormattedMessageProps<
    Messages extends Record<string, string>,
    Id extends keyof Messages,
> = {
    id: Id;
    description?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    tagName?: React.ElementType<any>;
};

export type CreateFormattedMessageProps<
    Messages extends Record<string, string>,
    Id extends keyof Messages,
> =
    Tokenize<Messages[Id]> extends []
        ? CommonCreateFormattedMessageProps<Messages, Id>
        : CommonCreateFormattedMessageProps<Messages, Id> & {
              values: InferInterpolations<Messages[Id], TypesForInterpolations>;
          };

export const createFormattedMessageComponent =
    <Messages extends Record<string, string>>() =>
    <Id extends keyof Messages>(props: CreateFormattedMessageProps<Messages, Id>) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return <FormattedMessage {...(props as any)} />;
    };

// ==========================================================
// useIntl

type FormatMessageDescriptor<DefaultMessage extends string> = {
    defaultMessage?: DefaultMessage;
    id?: string;
    description?: string;
};

type FormatMessageIdDescriptor<
    Messages extends Record<string, string>,
    Id extends keyof Messages,
> = {
    id?: Id;
    description?: string;
};

type RichTextLike = `${string}<${string}>${string}</${string}>${string}`;

export const useIntl = <Messages extends Record<string, string>>() => {
    const intl = _useIntl();

    type FormatMessage =
        Record<string, string> extends Messages
            ? <DefaultMessage extends string>(
                  ...args: Tokenize<DefaultMessage> extends []
                      ? [FormatMessageDescriptor<DefaultMessage>]
                      : [
                            FormatMessageDescriptor<DefaultMessage>,
                            InferInterpolations<DefaultMessage, TypesForInterpolations>,
                        ]
              ) => DefaultMessage extends RichTextLike ? ReactNode : string
            : <Id extends keyof Messages>(
                  ...args: Tokenize<Messages[Id]> extends []
                      ? [FormatMessageIdDescriptor<Messages, Id>]
                      : [
                            FormatMessageIdDescriptor<Messages, Id>,
                            InferInterpolations<Messages[Id], TypesForInterpolations>,
                        ]
              ) => Messages[Id] extends RichTextLike ? ReactNode : string;

    return {
        ...intl,
        formatMessage: intl.formatMessage as unknown as FormatMessage,
    };
};
