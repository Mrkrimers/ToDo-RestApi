export interface iTask {
    _id: string,
    title: string,
    description: string
}

export interface iCheckboxValues {
    [key: string]: boolean;
}
export interface iPopupMenuProps {
    openModal: boolean;
    setOpenModal: (value: boolean) => void;
    _id: string
}
