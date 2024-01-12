import { jsx as _jsx } from "react/jsx-runtime";
import { FormattedMessage as _FormattedMessage, useIntl as _useIntl } from 'react-intl';
export const FormattedMessage = (props) => {
    return _jsx(_FormattedMessage, { ...props });
};
export const useIntl = () => {
    const intl = _useIntl();
    return {
        ...intl,
        formatMessage: (messageDescriptor, values) => intl.formatMessage(messageDescriptor, values),
    };
};
//# sourceMappingURL=typesafe-intl-react-intl.js.map