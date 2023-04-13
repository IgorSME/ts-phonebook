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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';
import { Container } from '../App.styled';
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            contacts: [
                { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
                { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
                { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
                { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
            ],
            filter: '',
        };
        _this.addNewContact = function (_a) {
            var name = _a.name, number = _a.number;
            if (_this.state.contacts.find(function (contact) { return contact.name.toLowerCase() === name.toLowerCase(); })) {
                alert("".concat(name, " is alredy in contacts"));
                return;
            }
            var newContact = { id: nanoid(), name: name, number: number };
            _this.setState(function (_a) {
                var contacts = _a.contacts;
                return ({ contacts: __spreadArray([newContact], contacts, true) });
            });
        };
        _this.onChangeFilter = function (e) {
            _this.setState({ filter: e.currentTarget.value });
        };
        _this.getFilteredContacts = function () {
            var _a = _this.state, contacts = _a.contacts, filter = _a.filter;
            var normalizedFilter = filter.toLowerCase();
            return contacts.filter(function (contact) {
                return contact.name.toLowerCase().includes(normalizedFilter);
            });
        };
        _this.onDeleteContact = function (id) {
            _this.setState(function (_a) {
                var contacts = _a.contacts;
                return ({
                    contacts: contacts.filter(function (contact) { return contact.id !== id; }),
                });
            });
        };
        return _this;
    }
    App.prototype.render = function () {
        var filter = this.state.filter;
        var filteredContacts = this.getFilteredContacts();
        return (_jsxs(Container, { children: [_jsx("h1", { children: "Phonebook" }), _jsx(ContactForm, { onSubmit: this.addNewContact }), _jsx("h2", { children: "Contacts" }), _jsx(Filter, { value: filter, onChange: this.onChangeFilter }), _jsx(ContactList, { contacts: filteredContacts, onDelete: this.onDeleteContact })] }));
    };
    return App;
}(Component));
export { App };
