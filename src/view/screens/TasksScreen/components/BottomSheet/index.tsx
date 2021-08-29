import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text } from 'react-native';
import BottomSheet, {
  TouchableOpacity,
  BottomSheetFlatList,
} from '@gorhom/bottom-sheet';
import { listsSelector, setSelectedListIdAction } from '../../../../../state';
import { useDispatch, useSelector } from 'react-redux';
import { colors } from '../../../../../resources';
import { Icon } from '../../../../components';
import styles from './styles';
import Handle from './Handle';

interface Props {
  sheetRef: React.RefObject<BottomSheet>;
}

const CustomBottomSheet = (props: any) => {
  const navigation = useNavigation();
  const allLists = useSelector(listsSelector);
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
                dispatch(setSelectedListIdAction(item.list.id));
              }}>
              <Text style={styles.listsTitles}>
                {item.isSelected ? `> ${item.list.title}` : item.list.title}
              </Text>
            </TouchableOpacity>
          )}
        />
        <View style={styles.createListButtonContainer}>
          <TouchableOpacity
            onPress={() => {
              props.onCreateListPress();
              navigation.navigate('CreateList');
            }}>
            <Icon iconName="plus" color={colors.svgIcon.regular} size={30} />
          </TouchableOpacity>
        </View>
      </View>
    </BottomSheet>
  );
};
export default CustomBottomSheet;
export type BottomSheetType = BottomSheet;
