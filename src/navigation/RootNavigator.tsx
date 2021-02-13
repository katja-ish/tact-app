import React from 'react';
import {
  ContactsList,
  ConversationsList,
  Account,
  AccountDetails,
  Settings,
  Dictionary,
  Notifications,
} from '@app/screens';
import { ScreenNames, RootStackParamList } from '@app/types';
import { enableScreens } from 'react-native-screens';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AnimatedTabBar from './AnimatedTabBar';

const Tab = createMaterialTopTabNavigator<RootStackParamList>();
// const Stack = createStackNavigator<RootStackParamList>();

enableScreens();

export default () => {
  return (
    // <Stack.Navigator
    //   screenOptions={{
    //     headerShown: false,
    //   }}>
    //   <Stack.Screen name={ScreenNames.CONVERSATIONS_LIST} component={ConversationsList} />
    //   <Stack.Screen name={ScreenNames.ACCOUNT} component={Account} />
    //   <Stack.Screen name={ScreenNames.SETTINGS} component={Settings} />
    //   <Stack.Screen name={ScreenNames.NOTIFICATIONS} component={Notifications} />
    //   <Stack.Screen name={ScreenNames.DICTIONARY} component={Dictionary} />
    // </Stack.Navigator>

    <Tab.Navigator
      swipeEnabled={false}
      tabBar={(props) => <AnimatedTabBar {...props} />}
      tabBarPosition="bottom">
      {/* <Tab.Screen name={ScreenNames.CONTACTS_LIST} component={ContactsList} /> */}
      <Tab.Screen name={ScreenNames.CONVERSATIONS_LIST} component={ConversationsList} />
      <Tab.Screen name={ScreenNames.ACCOUNT} component={Account} />
    </Tab.Navigator>
  );
};
