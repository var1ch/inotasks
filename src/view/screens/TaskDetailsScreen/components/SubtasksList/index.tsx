import React from 'react';
import { View, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { subtasksSelector } from '../../../../../state';
import SubtaskItem from '../SubtaskItem';
import styles from './styles';

const SubtasksList = () => {
  const subtasks = useSelector(subtasksSelector);
  return (
    <View style={styles.container}>
      <FlatList
        data={subtasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <SubtaskItem
            title={item.title}
            id={item.id}
            status={item.status}
            checked={item.status === 'completed'}
          />
        )}
      />
    </View>
  );
};

export default SubtasksList;
