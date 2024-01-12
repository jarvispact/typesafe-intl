import { ExtendTypesForInterpolations, InferInterpolations } from '@typesafe-intl/core';
import { ReactNode } from 'react';
type _TypesForInterpolations = ExtendTypesForInterpolations<{
    'rich-text-interpolation': (chunks: ReactNode[]) => ReactNode;
}>;
export interface TypesForInterpolations extends _TypesForInterpolations {
}
export type FormattedMessageProps<Translation extends string> = {
    id?: string;
    defaultMessage?: Translation;
    description?: string;
    values?: InferInterpolations<Translation, TypesForInterpolations>;
    tagName?: React.ElementType<any>;
};
export declare const FormattedMessage: <Translation extends string>(props: FormattedMessageProps<Translation>) => import("react/jsx-runtime").JSX.Element;
type FormatMessageDescriptor<Translation extends string> = {
    id?: string;
    defaultMessage?: Translation;
    description?: string;
};
export declare const useIntl: () => {
    formatMessage: <Translation extends string>(messageDescriptor: FormatMessageDescriptor<Translation>, values?: InferInterpolations<Translation, TypesForInterpolations> | undefined) => string;
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
