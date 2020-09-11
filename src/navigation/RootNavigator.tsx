import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
import { Conversation, ConversationsList, Settings } from '@app/screens';
import { ScreenNames, RootStackParamList } from '@app/types';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator<RootStackParamList>();

export default () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={ScreenNames.CONVERSATIONS_LIST} component={ConversationsList} />
      <Tab.Screen name={ScreenNames.CONVERSATION} component={Conversation} />
      <Tab.Screen name={ScreenNames.SETTINGS} component={Settings} />
    </Tab.Navigator>
  );
};
