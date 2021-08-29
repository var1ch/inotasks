import React from 'react';
import { View, Text } from 'react-native';
import BottomSheet, {
  TouchableOpacity,
  BottomSheetFlatList,
} from '@gorhom/bottom-sheet';
import { changeTaskListAction, listsSelector } from '../../../../../state';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles';
import Handle from './Handle';

interface Props {
  sheetRef: React.RefObject<BottomSheet>;
  selectedTaskId: string;
  taskListId: string | undefined;
}

const ListsSheet = (props: Props) => {
  const allLists = useSelector(listsSelector).filter(
    (item) => item.list.id !== props.taskListId,
  );
  const dispatch = useDispatch();
  return (
    <BottomSheet
      handleComponent={Handle}
      ref={props.sheetRef}
      index={-1}
      snapPoints={[0, '50%']}>
      <View style={styles.bottomSheetContentContainer}>
        <Text style={styles.title}>ALL LISTS</Text>
        <BottomSheetFlatList
          data={allLists}
          keyExtractor={(item) => item.list.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                dispatch(
                  changeTaskListAction({
                    taskId: props.selectedTaskId,
                    listId: item.list.id,
                  }),
                );
              }}>
              <Text style={styles.listsTitles}>{item.list.title}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </BottomSheet>
  );
};
export default ListsSheet;
export type BottomSheetType = BottomSheet;
