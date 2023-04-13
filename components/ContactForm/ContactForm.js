var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
import { Component } from 'react';
import { Form, Label, Input, Button } from './ContactForm.styled';
var ContactForm = /** @class */ (function (_super) {
    __extends(ContactForm, _super);
    function ContactForm() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            name: '',
            number: '',
        };
        _this.handleChange = function (e) {
            var _a;
            var _b = e.target, name = _b.name, value = _b.value;
            _this.setState((_a = {}, _a[name] = value, _a));
        };
        _this.handleSubmit = function (e) {
            e.preventDefault();
            _this.props.onSubmit(_this.state);
            _this.reset();
        };
        _this.reset = function () {
            _this.setState({ name: '', number: '' });
        };
        return _this;
    }
    ContactForm.prototype.render = function () {
        return (_jsxs(Form, __assign({ onSubmit: this.handleSubmit }, { children: [_jsx(Label, __assign({ htmlFor: "name" }, { children: "Name " })), _jsx(Input, { type: "text", name: "name", onChange: this.handleChange, value: this.state.name, pattern: "^[a-zA-Z\u0430-\u044F\u0410-\u042F]+(([' -][a-zA-Z\u0430-\u044F\u0410-\u042F ])?[a-zA-Z\u0430-\u044F\u0410-\u042F]*)*$", title: "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan", required: true }), _jsx(Label, __assign({ htmlFor: "number" }, { children: "Number " })), _jsx(Input, { type: "tel", name: "number", pattern: "\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}", title: "Phone number must be digits and can contain spaces, dashes, parentheses and can start with +", required: true, value: this.state.number, onChange: this.handleChange }), _jsx(Button, __assign({ type: "submit" }, { children: "Add contact" }))] })));
    };
    return ContactForm;
}(Component));
export { ContactForm };
