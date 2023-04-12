import React from 'react';
import { IFilter } from '../../types/appTypes';
import { Input, Label } from '../ContactForm/ContactForm.styled';
export { Label, Input } from '../ContactForm/ContactForm.styled';

export const Filter:React.FC<IFilter> = ({ value, onChange })=> {
  return (
    <div>
      <Label htmlFor="filter">Find contacts by name </Label>
      <Input type="text" name="filter" value={value} onChange={onChange} />
    </div>
  );
}

