import tasksSlice from './slice';

export { tasksSlice };
export const {
  addTaskAction,
  checkTaskAction,
  uncheckTaskAction,
  deleteTaskAction,
  changeTaskTitleAction,
  addTaskDescriptionAction,
  changeTaskListAction,
  changeTaskDueDateAction,
  changeTaskPriorityAction,
} = tasksSlice.actions;
export * from './selectors';
export * from './types';
