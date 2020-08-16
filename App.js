/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import ScreenStack from './src/screens';
import {Provider} from 'react-redux';
import initStore from './src/store';

const store = initStore();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <ScreenStack />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
