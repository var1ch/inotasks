import {
  createSlice,
  createEntityAdapter,
  PayloadAction,
} from '@reduxjs/toolkit';
import {
  Task,
  AddTaskActionPayload,
  changeTaskTitleActionPayload,
  addTaskDescriptionActionPayload,
  changeTaskListActionPayload,
  changeTaskDueDateActionPayload,
  changeTaskPriorityActionPayload,
} from './types';

export const tasksAdapter = createEntityAdapter<Task>({
  selectId: (task) => task.id,
});

const initialState = tasksAdapter.getInitialState();

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTaskAction: (state, action: PayloadAction<AddTaskActionPayload>) => {
      tasksAdapter.addOne(state, {
        id: Date.now().toString(),
        title: action.payload.text,
        status: 'inProgress',
        listId: action.payload.selectedListId,
        isImportant: false,
        description: '',
        dueDate: new Date(),
        priority: '',
      });
    },
    checkTaskAction: (state, action: PayloadAction<string>) => {
      tasksAdapter.updateOne(state, {
        id: action.payload,
        changes: { status: 'completed' },
      });
    },
    uncheckTaskAction: (state, action: PayloadAction<string>) => {
      tasksAdapter.updateOne(state, {
        id: action.payload,
        changes: { status: 'inProgress' },
      });
    },
    deleteTaskAction: (state, action: PayloadAction<string>) => {
      tasksAdapter.updateOne(state, {
        id: action.payload,
        changes: { status: 'deleted' },
      });
    },
    changeTaskTitleAction: (
      state,
      action: PayloadAction<changeTaskTitleActionPayload>,
    ) =>
      tasksAdapter.updateOne(state, {
        id: action.payload.taskId,
        changes: {
          title: action.payload.taskTitle,
        },
      }),
    addTaskDescriptionAction: (
      state,
      action: PayloadAction<addTaskDescriptionActionPayload>,
    ) =>
      tasksAdapter.updateOne(state, {
        id: action.payload.taskId,
        changes: {
          description: action.payload.description,
        },
      }),
    changeTaskListAction: (
      state,
      action: PayloadAction<changeTaskListActionPayload>,
    ) =>
      tasksAdapter.updateOne(state, {
        id: action.payload.taskId,
        changes: {
          listId: action.payload.listId,
        },
      }),
    changeTaskDueDateAction: (
      state,
      action: PayloadAction<changeTaskDueDateActionPayload>,
    ) =>
      tasksAdapter.updateOne(state, {
        id: action.payload.taskId,
        changes: {
          dueDate: action.payload.date,
        },
      }),
    changeTaskPriorityAction: (
      state,
      action: PayloadAction<changeTaskPriorityActionPayload>,
    ) =>
      tasksAdapter.updateOne(state, {
        id: action.payload.taskId,
        changes: {
          priority: action.payload.priority,
        },
      }),
  },
});

export default tasksSlice;
