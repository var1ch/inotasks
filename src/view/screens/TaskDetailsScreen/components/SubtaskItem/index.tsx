import React from 'react';
import { Text, View, Pressable } from 'react-native';
import { useDispatch } from 'react-redux';
import { Icon } from '../../../../components';
import styles from './styles';
import {
  uncheckSubtaskAction,
  checkSubtaskAction,
  deleteSubtaskAction,
} from '../../../../../state';

interface Props {
  title: string;
  id: string;
  status: string;
  checked: boolean;
}

const SubtaskItem = (props: Props) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.subtaskItem}>
      <Pressable
        onPress={() => {
          switch (props.status) {
            case 'inProgress':
              dispatch(checkSubtaskAction(props.id));
              break;
            case 'completed':
              dispatch(uncheckSubtaskAction(props.id));
              break;
          }
        }}>
        {props.checked ? (
          <Icon
            size={25}
            iconName="check"
            color={props.checked ? '#96A7AF' : 'white'}
          />
        ) : (
          <Icon size={25} iconName="uncheck" />
        )}
      </Pressable>
      <View style={styles.textWrapper}>
        <Text
          ellipsizeMode="tail"
          numberOfLines={1}
          style={
            props.checked
              ? styles.completedSubtaskItemText
              : styles.subtaskItemText
          }>
          {props.title}
        </Text>
      </View>
      <Pressable
        onPress={() => {
          dispatch(deleteSubtaskAction(props.id));
        }}>
        <Icon
          size={25}
          iconName={'delete'}
          color={props.checked ? '#96A7AF' : 'white'}
        />
      </Pressable>
    </View>
  );
};
export default SubtaskItem;
