import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { TabsNavigation } from './src/navigator/TabsNavigation';

export const App = () => {
  return (
    <NavigationContainer>
      <TabsNavigation />
    </NavigationContainer>
  );
};
