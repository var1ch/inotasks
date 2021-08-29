import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Keyboard } from 'react-native';
import { useSelector } from 'react-redux';
import { selectedListTitleSelector } from '../../../state';
import { MenuProvider } from 'react-native-popup-menu';
import styles from './styles';
import {
  TasksList,
  BottomBar,
  BottomSheet,
  Input,
  BottomSheetType,
  PopupMenu,
} from './components';

const TasksScreen = () => {
  const selectedListTitle = useSelector(selectedListTitleSelector);
  const [isOpenInputForced, setIsOpenInputForced] = useState(false);
  const sheetRef = useRef<BottomSheetType>(null);

  const onMenuPressHandler = () => {
    sheetRef.current?.expand();
  };

  const onAddTaskPressHandler = (): void => {
    setIsOpenInputForced(true);
  };

  const onDispatchTaskPressHandler = () => {
    setIsOpenInputForced(false);
  };

  const onCreateListPressHandler = (): void => {
    sheetRef.current?.close();
  };

  useEffect(() => {
    Keyboard.addListener('keyboardDidHide', () => {
      setIsOpenInputForced(false);
    });
    return () => {
      Keyboard.removeAllListeners('keyboardDidHide');
    };
  });

  return (
    <View style={styles.container}>
      <Text style={styles.selectedListTitle}>{selectedListTitle}</Text>
      {/*
      <MenuProvider>
        <PopupMenu />
      </MenuProvider> 
      */}
      <TasksList />
      {isOpenInputForced ? (
        <Input onDispatchTaskPress={onDispatchTaskPressHandler} />
      ) : (
        <>
          <BottomBar
            onMenuPress={onMenuPressHandler}
            onAddPress={onAddTaskPressHandler}
          />
          <BottomSheet
            sheetRef={sheetRef}
            onCreateListPress={onCreateListPressHandler}
          />
        </>
      )}
    </View>
  );
};
export default TasksScreen;
export type SheetRefType = React.RefObject<BottomSheetType>;
