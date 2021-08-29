import {
  createSlice,
  createEntityAdapter,
  PayloadAction,
} from '@reduxjs/toolkit';
import { ListState, List } from './types';

export const listsAdapter = createEntityAdapter<List>({
  selectId: (list) => list.id,
});

const emptyInitialState = listsAdapter.getInitialState<ListState>({
  selectedListId: '1',
});

const filledState = listsAdapter.addOne(emptyInitialState, {
  id: '1',
  title: 'Default',
});

const listsSlice = createSlice({
  name: 'lists',
  initialState: filledState,
  reducers: {
    addListAction: (state, action: PayloadAction<string>) => {
      listsAdapter.addOne(state, {
        id: Date.now().toString(),
        title: action.payload,
      });
    },
    setSelectedListIdAction: (state, action: PayloadAction<string>) => {
      state.selectedListId = action.payload;
    },
  },
});

export default listsSlice;
