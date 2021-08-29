export type Priority = '!!!' | '!!' | '!' | '' | undefined;

export type Task = {
  id: string;
  title: string;
  status: 'inProgress' | 'completed' | 'deleted';
  listId: string;
  isImportant: boolean;
  description: string;
  dueDate: Date;
  priority: Priority;
};

export type AddTaskActionPayload = {
  text: string;
  selectedListId: string;
};

export type changeTaskTitleActionPayload = {
  taskId: string;
  taskTitle: string | undefined;
};

export type addTaskDescriptionActionPayload = {
  taskId: string;
  description: string | undefined;
};

export type changeTaskListActionPayload = {
  taskId: string;
  listId: string | undefined;
};

export type changeTaskDueDateActionPayload = {
  taskId: string;
  date: Date;
};

export type changeTaskPriorityActionPayload = {
  taskId: string;
  priority: Priority;
};
