import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import { selectedListTitleSelector } from '../state';
import {
  TasksScreen,
  TaskDetailsScreen,
  CreateListScreen,
} from '../view/screens';
import { Icon } from '../view/components';
import styles from './styles';
import { colors } from '../resources';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  const selectedListTitle = useSelector(selectedListTitleSelector);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="TasksScreen"
        screenOptions={{
          headerShown: true,
        }}>
        <Stack.Screen
          name="TasksScreen"
          component={TasksScreen}
          options={() => ({
            headerShown: false,
            title: selectedListTitle,
            headerStyle: styles.headerStyle,
            headerTitleStyle: {
              ...styles.headerTitleStyle,
              textTransform: 'uppercase',
            },
            headerRight: () => (
              <View style={styles.dotsMenuIcon}>
                <Icon iconName={'dots'} size={25} />
              </View>
            ),
          })}
        />
        <Stack.Screen
          name="CreateList"
          component={CreateListScreen}
          options={() => ({
            title: 'Create List',
            headerStyle: styles.headerStyle,
            headerTitleStyle: styles.headerTitleStyle,
            headerTintColor: colors.text.textWhite,
          })}
        />
        <Stack.Screen
          name="TaskDetails"
          component={TaskDetailsScreen}
          options={() => ({
            title: 'Task Details',
            headerStyle: styles.headerStyle,
            headerTitleStyle: styles.headerTitleStyle,
            headerTintColor: colors.text.textWhite,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigator;
