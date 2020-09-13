import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
import { FriendList, ConversationsList, Settings } from '@app/screens';
import { ScreenNames, RootStackParamList } from '@app/types';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator<RootStackParamList>();

export default () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={ScreenNames.FRIEND_LIST} component={FriendList} />
      <Tab.Screen name={ScreenNames.CONVERSATIONS_LIST} component={ConversationsList} />
      <Tab.Screen name={ScreenNames.SETTINGS} component={Settings} />
    </Tab.Navigator>
  );
};
