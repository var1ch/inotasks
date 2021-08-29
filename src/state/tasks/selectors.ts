import { createSelector } from 'reselect';
import { tasksAdapter } from './slice';
import { ReduxStore } from '../store/store';
import { selectedListIdSelector } from '../lists';
import type { Task } from './types';

const tasksSelectors = tasksAdapter.getSelectors(
  (state: ReduxStore) => state.tasks,
);

export const taskByIdSelector = tasksSelectors.selectById;

export const nonDeletedTasksSelector = createSelector(
  [selectedListIdSelector, tasksSelectors.selectAll],
  (selectedListId, tasks) => {
    const result: Task[] = tasks.filter(
      (item) => selectedListId === item.listId && item.status !== 'deleted',
    );
    return result;
  },
);
