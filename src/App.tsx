import 'react-native-gesture-handler';
import * as React from 'react';
import { enableScreens } from 'react-native-screens';
import MainStackNavigator from './navigation/MainStackNavigator';
import { Provider } from 'react-redux';
import { store } from './state';

enableScreens();

const App = () => {
  return (
    <Provider store={store}>
      <MainStackNavigator />
    </Provider>
  );
};

export default App;
