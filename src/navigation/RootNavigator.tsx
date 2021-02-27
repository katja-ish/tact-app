import React from 'react';
import {
  SignUp,
  ConversationsList,
  Account,
  ContactsList,
  AccountDetails,
  Settings,
  Notifications,
  Dictionary,
} from '@app/screens';
import { ScreenNames, RootStackParamList } from '@app/types';
import { enableScreens, Screen } from 'react-native-screens';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import AnimatedTabBar from './AnimatedTabBar';

// const Tab = createMaterialTopTabNavigator<RootStackParamList>();

export default () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={ScreenNames.CONVERSATIONS_LIST} component={ConversationsList} />
        <Stack.Screen name={ScreenNames.ACCOUNT} component={AccountNavigator} />
        {/* <Stack.Screen
          name={ScreenNames.ACCOUNT_DETAILS}
          component={AccountDetails}
          options={{ title: 'Аккаунт', headerTintColor: '#1A4D8F', headerShown: false }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const AccountNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName={ScreenNames.ACCOUNT_DETAILS}>
      <Stack.Screen
        name={ScreenNames.ACCOUNT_DETAILS}
        component={AccountDetails}
        options={{ title: 'Аккаунт', headerTintColor: '#1A4D8F', headerShown: false }}
      />
      <Stack.Screen
        name={ScreenNames.SETTINGS}
        component={Settings}
        options={{ title: 'Настройки', headerTintColor: '#1A4D8F', headerBackTitle: ' ' }}
      />
      <Stack.Screen
        name={ScreenNames.NOTIFICATIONS}
        component={Notifications}
        options={{ title: 'Уведомления', headerTintColor: '#1A4D8F', headerBackTitle: ' ' }}
      />
      <Stack.Screen
        name={ScreenNames.DICTIONARY}
        component={Dictionary}
        options={{ title: 'Словарь', headerTintColor: '#1A4D8F', headerBackTitle: ' ' }}
      />
    </Stack.Navigator>
  );
};
