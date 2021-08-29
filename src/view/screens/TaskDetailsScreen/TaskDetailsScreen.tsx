import React, { useRef, useState } from 'react';
import { View, TextInput, Pressable, Text, Keyboard } from 'react-native';
import { useRoute } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { MenuProvider } from 'react-native-popup-menu';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeTaskTitleAction,
  addSubtaskAction,
  addTaskDescriptionAction,
  taskByIdSelector,
  listByIdSelector,
  changeTaskDueDateAction,
} from '../../../state';
import { ReduxStore } from 'state/store/store';
import { colors } from '../../../resources';
import styles from './styles';
import { Icon } from '../../components';
import SubtasksList from './components/SubtasksList';
import ListsSheet, { BottomSheetType } from './components/ListsSheet';
import PopupMenu from './components/PopupMenu';
import type { TasksScreenRouteProp } from '../../../navigation/types';

const TaskDetailsScreen = () => {
  const sheetRef = useRef<BottomSheetType>(null);
  const dispatch = useDispatch();
  const route = useRoute<TasksScreenRouteProp>();
  const taskId = route.params?.id;
  const selectedTask = useSelector((state: ReduxStore) =>
    taskByIdSelector(state, taskId),
  );
  const list = useSelector((state: ReduxStore) =>
    listByIdSelector(state, selectedTask?.listId || ''),
  );
  const [taskTitle, setTaskTitle] = useState(selectedTask?.title);
  const [subtaskTitle, setSubtaskTitle] = useState('');
  const [description, setDescription] = useState(selectedTask?.description);
  const [date, setDate] = useState(selectedTask?.dueDate || new Date());
  const [show, setShow] = useState(false);

  const onChangeDate = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    setShow(false);
    dispatch(
      changeTaskDueDateAction({
        taskId,
        date,
      }),
    );
  };

  return (
    <MenuProvider>
      <View style={styles.container}>
        <View style={styles.topElementBlock}>
          <Pressable
            style={styles.listTitlePressable}
            onPress={() => {
              sheetRef.current?.expand();
            }}>
            <Text style={styles.listTitle}>{list?.title}</Text>
          </Pressable>
          <PopupMenu taskId={taskId} priority={selectedTask?.priority} />
        </View>
        <View style={styles.titleChangeBlock}>
          <TextInput
            style={styles.titleInput}
            value={taskTitle}
            placeholder={'Input Task Title'}
            placeholderTextColor={colors.text.placeHolder}
            onChangeText={(value) => {
              setTaskTitle(value);
            }}
          />
          <Pressable
            onPress={() => {
              dispatch(changeTaskTitleAction({ taskId, taskTitle }));
              Keyboard.dismiss();
            }}>
            <Icon iconName="submit" />
          </Pressable>
        </View>
        <View style={styles.addDateBlock}>
          <Icon iconName="due-date" />
          <Pressable onPress={() => setShow(true)}>
            <Text style={styles.addDateLabel}>{date.toDateString()}</Text>
          </Pressable>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode="date"
              is24Hour={true}
              display="default"
              onChange={onChangeDate}
            />
          )}
        </View>
        <View style={styles.repeatBlock}>
          <Icon iconName="repeat" />
          <Text style={styles.repeatLabel}>Repeat</Text>
        </View>
        <View style={styles.descriptionBlock}>
          <Icon iconName="description" />
          <TextInput
            style={styles.descriptionInput}
            value={description}
            placeholder={'Description'}
            placeholderTextColor={colors.text.placeHolder}
            onChangeText={(value) => {
              setDescription(value);
            }}
          />
          <Pressable
            onPress={() => {
              dispatch(addTaskDescriptionAction({ taskId, description }));
              Keyboard.dismiss();
            }}>
            <Icon iconName="submit" />
          </Pressable>
        </View>
        <View style={styles.subtasksBlock}>
          <Icon iconName="subitem" />
          <TextInput
            style={styles.subtaskInput}
            value={subtaskTitle}
            placeholder={'Add Subtask'}
            placeholderTextColor={colors.text.placeHolder}
            onChangeText={(value) => {
              setSubtaskTitle(value);
            }}
          />
          <Pressable
            onPress={() => {
              if (subtaskTitle === '') return;
              setSubtaskTitle('');
              dispatch(
                addSubtaskAction({
                  text: subtaskTitle,
                  selectedTaskId: selectedTask?.id,
                }),
              );
            }}>
            <Icon iconName="add-down" />
          </Pressable>
        </View>
        <SubtasksList />
        <ListsSheet
          selectedTaskId={taskId}
          sheetRef={sheetRef}
          taskListId={selectedTask?.listId}
        />
      </View>
    </MenuProvider>
  );
};

export default TaskDetailsScreen;
