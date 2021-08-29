import { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
  TasksScreen: undefined;
  CreateList: undefined;
  TaskDetails: { id: string };
};

export type TasksScreenRouteProp = RouteProp<RootStackParamList, 'TaskDetails'>;
