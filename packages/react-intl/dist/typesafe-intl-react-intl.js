import { jsx as _jsx } from "react/jsx-runtime";
import { FormattedMessage as _FormattedMessage, useIntl as _useIntl } from 'react-intl';
export const FormattedMessage = (props) => {
    return _jsx(_FormattedMessage, { ...props });
};
export const createFormattedMessageComponent = () => (props) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return _jsx(FormattedMessage, { ...props });
};
export const useIntl = () => {
    const intl = _useIntl();
    return {
        ...intl,
        formatMessage: intl.formatMessage,
    };
};
//# sourceMappingURL=typesafe-intl-react-intl.js.map