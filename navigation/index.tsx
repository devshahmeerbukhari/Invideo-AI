// StackNavigation.tsx
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/components/Home';
import SeeMore from '../screens/components/SeeMore';
import {RootStackParamList} from '../types';
import UserAccount from '../screens/components/UserAccount';
import Home2 from '../screens/components/Home2';

const Stack = createNativeStackNavigator<RootStackParamList>();

function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SeeMore"
          component={SeeMore}
          options={{headerShown: true, title: 'See More'}}
        />
        <Stack.Screen
          name="UserAccount"
          component={UserAccount}
          options={{headerShown: true, title: 'User Account'}}
        />
        <Stack.Screen
          name="Home2"
          component={Home2}
          options={{headerShown: true, title: 'Home 2'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigation;
