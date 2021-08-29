export type Subtask = {
  mainTaskId: string | undefined;
  title: string;
  id: string;
  status: 'inProgress' | 'completed' | 'deleted';
};

export type AddSubtaskActionPayload = {
  text: string;
  selectedTaskId: string | undefined;
};
