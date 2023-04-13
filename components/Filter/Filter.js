var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Input, Label } from '../ContactForm/ContactForm.styled';
export { Label, Input } from '../ContactForm/ContactForm.styled';
export var Filter = function (_a) {
    var value = _a.value, onChange = _a.onChange;
    return (_jsxs("div", { children: [_jsx(Label, __assign({ htmlFor: "filter" }, { children: "Find contacts by name " })), _jsx(Input, { type: "text", name: "filter", value: value, onChange: onChange })] }));
};
