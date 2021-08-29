export type List = {
  id: string;
  title: string;
};

export type ListState = {
  selectedListId: string;
};

export type ListView = {
  list: List;
  isSelected: boolean;
};
