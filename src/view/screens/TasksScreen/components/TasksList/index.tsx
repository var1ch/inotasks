import React from 'react';
import { View, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { nonDeletedTasksSelector } from '../../../../../state';
import styles from './styles';
import TaskItem from '../TaskItem';

const TasksList = () => {
  const tasks = useSelector(nonDeletedTasksSelector);
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskItem
            title={item.title}
            id={item.id}
            status={item.status}
            checked={item.status === 'completed'}
            isImportant={item.isImportant}
          />
        )}
      />
    </View>
  );
};

export default TasksList;
