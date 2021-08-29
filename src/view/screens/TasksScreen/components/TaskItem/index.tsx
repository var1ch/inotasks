import React from 'react';
import { Text, View, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { useDispatch } from 'react-redux';
import { Icon } from '../../../../components';
import styles from './styles';
import {
  deleteTaskAction,
  checkTaskAction,
  uncheckTaskAction,
} from '../../../../../state';

interface Props {
  title: string;
  id: string;
  status: string;
  checked: boolean;
}

const TaskItem = (props: Props) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <View style={styles.taskItem}>
      <Pressable
        onPress={() => {
          switch (props.status) {
            case 'inProgress':
              dispatch(checkTaskAction(props.id));
              break;
            case 'completed':
              dispatch(uncheckTaskAction(props.id));
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
        <Pressable
          onPress={() => {
            navigation.navigate('TaskDetails', { id: props.id });
          }}>
          <Text
            ellipsizeMode="tail"
            numberOfLines={1}
            style={
              props.checked ? styles.completedTaskItemText : styles.taskItemText
            }>
            {props.title}
          </Text>
        </Pressable>
      </View>
      <Pressable
        onPress={() => {
          dispatch(deleteTaskAction(props.id));
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
export default TaskItem;
