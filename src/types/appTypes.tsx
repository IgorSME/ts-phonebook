export interface IState{
    contacts: { [key: string]: string }[],
    filter:string
};

export interface IContactList{
    contacts: { id: string, name: string, number: string }[],
    onDelete:(id: string) => void;
}

export interface IContactListItem{
    name: string,
    number: string,
    onClick:React.MouseEventHandler<HTMLButtonElement>;
}

export interface IFilter{
    value: string,
    onChange:(e: React.ChangeEvent<HTMLInputElement>) => void;
}
export interface IContactFormProps{
    onSubmit:(data:IContactFormState)=>void
}
export interface IContactFormState{
    [key:string]:string
}
