import { jsx as _jsx } from "react/jsx-runtime";
import { ContactListItem } from '../ContactListItem/ContactListItem';
import { Contacts } from './ContactList.styled';
export var ContactList = function (_a) {
    var contacts = _a.contacts, onDelete = _a.onDelete;
    return (_jsx(Contacts, { children: contacts.map(function (_a) {
            var id = _a.id, name = _a.name, number = _a.number;
            return (_jsx(ContactListItem, { name: name, number: number, onClick: function () { return onDelete(id); } }, id));
        }) }));
};
