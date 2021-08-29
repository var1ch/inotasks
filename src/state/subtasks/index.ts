import subtasksSlice from './slice';

export const {
  addSubtaskAction,
  checkSubtaskAction,
  uncheckSubtaskAction,
  deleteSubtaskAction,
} = subtasksSlice.actions;
export * from './selectors';
export * from './types';
export { subtasksSlice };
