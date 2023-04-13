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
import { Item, Phone, Button } from './ContactsListItem.styled';
export var ContactListItem = function (_a) {
    var name = _a.name, number = _a.number, onClick = _a.onClick;
    return (_jsxs(Item, { children: [_jsxs("p", { children: [name, ":", _jsx(Phone, { children: number })] }), _jsx(Button, __assign({ type: "button", onClick: onClick }, { children: "Delete" }))] }));
};
