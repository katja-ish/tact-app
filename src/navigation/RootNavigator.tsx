import React from 'react';
import { ContactsList, ConversationsList, Settings } from '@app/screens';
import { ScreenNames, RootStackParamList } from '@app/types';
import { enableScreens } from 'react-native-screens';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';

// import AnimatedTabBar from './AnimatedTabBar';
// const Tab = createMaterialTopTabNavigator<RootStackParamList>();

const Stack = createStackNavigator<RootStackParamList>();

enableScreens();

export default () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={ScreenNames.CONVERSATIONS_LIST} component={ConversationsList} />
      <Stack.Screen name={ScreenNames.SETTINGS} component={Settings} />
    </Stack.Navigator>

    // <Tab.Navigator
    //   swipeEnabled={false}
    //   tabBar={(props) => <AnimatedTabBar {...props} />}
    //   tabBarPosition="bottom">
    //   <Tab.Screen name={ScreenNames.CONTACTS_LIST} component={ContactsList} />
    //   <Tab.Screen name={ScreenNames.CONVERSATIONS_LIST} component={ConversationsList} />
    //   <Tab.Screen name={ScreenNames.SETTINGS} component={Settings} />
    // </Tab.Navigator>
  );
};
