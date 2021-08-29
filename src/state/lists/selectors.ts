import { createSelector } from '@reduxjs/toolkit';
import { listsAdapter } from './slice';
import { ReduxStore } from '../store/store';
import { ListView } from './types';

const listsSelectors = listsAdapter.getSelectors(
  (state: ReduxStore) => state.lists,
);

export const selectedListIdSelector = (state: ReduxStore) =>
  state.lists.selectedListId;

export const listByIdSelector = listsSelectors.selectById;

export const listsSelector = createSelector(
  [selectedListIdSelector, listsSelectors.selectAll],
  (selectedListId, lists) => {
    const result: ListView[] = [];
    lists.forEach((item) => {
      const list: ListView = {
        list: item,
        isSelected: item.id === selectedListId,
      };
      result.push(list);
    });
    return result;
  },
);

export const selectedListTitleSelector = createSelector(
  [selectedListIdSelector, listsSelectors.selectAll],
  (selectedListId, lists) => {
    const selectedList = lists.find((item) => item.id === selectedListId);
    return selectedList ? selectedList.title : '';
  },
);
