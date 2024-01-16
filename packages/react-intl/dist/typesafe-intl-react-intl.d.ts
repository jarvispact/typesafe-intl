import { DefaultTypesForInterpolations as CoreDefaultTypesForInterpolations, InferInterpolations, Tokenize } from '@typesafe-intl/core';
import { ReactNode } from 'react';
export interface TypesForInterpolations extends CoreDefaultTypesForInterpolations {
    'rich-text-interpolation': (chunks: ReactNode[]) => ReactNode;
}
type CommonFormattedMessageProps<DefaultMessage extends string, Id extends string> = {
    defaultMessage?: DefaultMessage;
    id?: Id;
    description?: string;
    tagName?: React.ElementType<any>;
};
export type FormattedMessageProps<DefaultMessage extends string, Id extends string> = Tokenize<DefaultMessage> extends [] ? CommonFormattedMessageProps<DefaultMessage, Id> : CommonFormattedMessageProps<DefaultMessage, Id> & {
    values: InferInterpolations<DefaultMessage, TypesForInterpolations>;
};
export declare const FormattedMessage: <DefaultMessage extends string, Id extends string>(props: FormattedMessageProps<DefaultMessage, Id>) => import("react/jsx-runtime").JSX.Element;
type CommonCreateFormattedMessageProps<Messages extends Record<string, string>, Id extends keyof Messages> = {
    id: Id;
    description?: string;
    tagName?: React.ElementType<any>;
};
export type CreateFormattedMessageProps<Messages extends Record<string, string>, Id extends keyof Messages> = Tokenize<Messages[Id]> extends [] ? CommonCreateFormattedMessageProps<Messages, Id> : CommonCreateFormattedMessageProps<Messages, Id> & {
    values: InferInterpolations<Messages[Id], TypesForInterpolations>;
};
export declare const createFormattedMessageComponent: <Messages extends Record<string, string>>() => <Id extends keyof Messages>(props: CreateFormattedMessageProps<Messages, Id>) => import("react/jsx-runtime").JSX.Element;
type FormatMessageDescriptor<DefaultMessage extends string> = {
    defaultMessage?: DefaultMessage;
    id?: string;
    description?: string;
};
type FormatMessageIdDescriptor<Messages extends Record<string, string>, Id extends keyof Messages> = {
    id?: Id;
    description?: string;
};
type RichTextLike = `${string}<${string}>${string}</${string}>${string}`;
export declare const useIntl: <Messages extends Record<string, string>>() => {
    formatMessage: Record<string, string> extends Messages ? <DefaultMessage extends string>(...args: Tokenize<DefaultMessage> extends [] ? [FormatMessageDescriptor<DefaultMessage>] : [FormatMessageDescriptor<DefaultMessage>, InferInterpolations<DefaultMessage, TypesForInterpolations>]) => DefaultMessage extends `${string}<${string}>${string}</${string}>${string}` ? ReactNode : string : <Id extends keyof Messages>(...args: Tokenize<Messages[Id]> extends [] ? [FormatMessageIdDescriptor<Messages, Id>] : [FormatMessageIdDescriptor<Messages, Id>, InferInterpolations<Messages[Id], TypesForInterpolations>]) => Messages[Id] extends `${string}<${string}>${string}</${string}>${string}` ? ReactNode : string;
    formatters: import("react-intl").Formatters;
    textComponent?: import("react").ComponentType<{}> | keyof import("react").ReactHTML | undefined;
    wrapRichTextChunksInFragment?: boolean | undefined;
    locale: string;
    timeZone?: string | undefined;
    fallbackOnEmptyString?: boolean | undefined;
    formats: import("react-intl").CustomFormats;
    messages: Record<string, string> | Record<string, import("react-intl").MessageFormatElement[]>;
    defaultLocale: string;
    defaultFormats: import("react-intl").CustomFormats;
    defaultRichTextElements?: Record<string, import("intl-messageformat").FormatXMLElementFn<ReactNode>> | undefined;
    onError: import("@formatjs/intl").OnErrorFn;
    onWarn?: import("@formatjs/intl").OnWarnFn | undefined;
    formatDateTimeRange(from: number | Date, to: number | Date, opts?: import("react-intl").FormatDateOptions | undefined): string;
    formatDate(value: string | number | Date | undefined, opts?: import("react-intl").FormatDateOptions | undefined): string;
    formatTime(value: string | number | Date | undefined, opts?: import("react-intl").FormatDateOptions | undefined): string;
    formatDateToParts(value: string | number | Date | undefined, opts?: import("react-intl").FormatDateOptions | undefined): Intl.DateTimeFormatPart[];
    formatTimeToParts(value: string | number | Date | undefined, opts?: import("react-intl").FormatDateOptions | undefined): Intl.DateTimeFormatPart[];
    formatRelativeTime(value: number, unit?: Intl.RelativeTimeFormatUnit | undefined, opts?: import("react-intl").FormatRelativeTimeOptions | undefined): string;
    formatNumber(value: number | bigint, opts?: import("react-intl").FormatNumberOptions | undefined): string;
    formatNumberToParts(value: number | bigint, opts?: import("react-intl").FormatNumberOptions | undefined): Intl.NumberFormatPart[];
    formatPlural(value: number, opts?: import("react-intl").FormatPluralOptions | undefined): Intl.LDMLPluralRule;
    $t(descriptor: import("react-intl").MessageDescriptor, values?: Record<string, import("react-intl").PrimitiveType | import("intl-messageformat").FormatXMLElementFn<string, string>> | undefined, opts?: import("intl-messageformat").Options | undefined): string;
    $t<T extends ReactNode>(descriptor: import("react-intl").MessageDescriptor, values?: Record<string, import("react-intl").PrimitiveType | T | import("intl-messageformat").FormatXMLElementFn<T>> | undefined, opts?: import("intl-messageformat").Options | undefined): string | T | (string | T)[];
    formatList(values: readonly string[], opts?: import("react-intl").FormatListOptions | undefined): string;
    formatList<T_1 extends ReactNode>(values: readonly (string | T_1)[], opts?: import("react-intl").FormatListOptions | undefined): string | T_1 | (string | T_1)[];
    formatListToParts<T_2 extends ReactNode>(values: readonly (string | T_2)[], opts?: import("react-intl").FormatListOptions | undefined): import("@formatjs/intl-listformat").Part[];
    formatDisplayName(value: string | number | Record<string, unknown>, opts: import("react-intl").FormatDisplayNameOptions): string | undefined;
};
export {};
