import listsSlice from './slice';

export const { addListAction, setSelectedListIdAction } = listsSlice.actions;
export * from './selectors';
export * from './types';
export { listsSlice };
