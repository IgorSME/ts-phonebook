import React from 'react';
import { IContactsList } from '../../types/appTypes';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import { Contacts } from './ContactList.styled';

export const ContactList:React.FC<IContactsList> = ({ contacts, onDelete }) =>{
  return (
    <Contacts>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactListItem
            key={id}
            name={name}
            number={number}
            onClick={() => onDelete(id)}
          />
        );
      })}
    </Contacts>
  );
}

