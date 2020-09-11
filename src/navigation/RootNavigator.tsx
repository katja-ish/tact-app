import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Conversation, ConversationsList, Settings } from '@app/screens';
import { ScreenNames, RootStackParamList } from '@app/types';

const Stack = createStackNavigator<RootStackParamList>();

export default () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={ScreenNames.CONVERSATIONS_LIST} component={ConversationsList} />
      <Stack.Screen name={ScreenNames.CONVERSATION} component={Conversation} />
      <Stack.Screen name={ScreenNames.SETTINGS} component={Settings} />
    </Stack.Navigator>
  );
};
