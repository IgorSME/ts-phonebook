export interface IContacts{
    id: string,
    name: string,
    number:string
}
export interface IAppState{
    contacts: IContacts[],
    filter:string
}

export interface IContactFormState{
    name: string,
    number: string,
    [key:string]: string
}
export interface IContactFormProps{
    onSubmit: (data:IContactFormState) => void;
}

export interface IFilter{
    value: string,
    onChange:(e:React.ChangeEvent<HTMLInputElement>)=>void
}
export interface IContactsList{
    contacts: IContacts[],
    onDelete:(id:string)=>void
}

export interface IContactListItem{
    // key: string,
    name: string,
    number: string,
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    // onClick:(id:string)=>void
}