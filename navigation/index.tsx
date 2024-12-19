// StackNavigation.tsx
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/components/Home';
import SeeMore from '../screens/components/SeeMore';
import { RootStackParamList } from '../types';

const Stack = createNativeStackNavigator<RootStackParamList>();

function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SeeMore"
          component={SeeMore}
          options={{ headerShown: true, title: 'See More' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigation;
