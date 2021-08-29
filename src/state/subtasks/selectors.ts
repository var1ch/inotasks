import { createSelector } from '@reduxjs/toolkit';
import { subtasksAdapter } from './slice';
import { ReduxStore } from '../store/store';
import { Subtask } from './types';

const subtasksSelectors = subtasksAdapter.getSelectors(
  (state: ReduxStore) => state.subtasks,
);

export const subtasksSelector = createSelector(
  [subtasksSelectors.selectAll],
  (subtasks) => {
    const result: Subtask[] = subtasks.filter(
      (item) => item.status !== 'deleted',
    );
    return result;
  },
);
