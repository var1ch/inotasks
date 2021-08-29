import {
  createSlice,
  createEntityAdapter,
  PayloadAction,
} from '@reduxjs/toolkit';
import type { Subtask, AddSubtaskActionPayload } from './types';

export const subtasksAdapter = createEntityAdapter<Subtask>({
  selectId: (subtask) => subtask.id,
});

const initialState = subtasksAdapter.getInitialState();

const subtasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addSubtaskAction: (
      state,
      action: PayloadAction<AddSubtaskActionPayload>,
    ) => {
      subtasksAdapter.addOne(state, {
        id: Date.now().toString(),
        title: action.payload.text,
        status: 'inProgress',
        mainTaskId: action.payload.selectedTaskId,
      });
    },
    checkSubtaskAction: (state, action: PayloadAction<string>) => {
      subtasksAdapter.updateOne(state, {
        id: action.payload,
        changes: { status: 'completed' },
      });
    },
    uncheckSubtaskAction: (state, action: PayloadAction<string>) => {
      subtasksAdapter.updateOne(state, {
        id: action.payload,
        changes: { status: 'inProgress' },
      });
    },
    deleteSubtaskAction: (state, action: PayloadAction<string>) => {
      subtasksAdapter.updateOne(state, {
        id: action.payload,
        changes: { status: 'deleted' },
      });
    },
  },
});

export default subtasksSlice;
