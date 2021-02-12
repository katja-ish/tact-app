import React from 'react';
import { ConversationsList, Conversation } from '@app/screens';
import { ScreenNames, RootStackParamList } from '@app/types';
import { enableScreens } from 'react-native-screens';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator<RootStackParamList>();

enableScreens();

export default () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={ScreenNames.CONVERSATIONS_LIST} component={ConversationsList} />
      <Stack.Screen name={ScreenNames.CONVERSATION} component={Conversation} />
    </Stack.Navigator>
  );
};

// const ConvListItemNavigator = createStackNavigator({
//   ConversationsList: {
//     screen: ConversationsList,
//     navigationOptions: {
//       title: 'Все друзья',
//     },
//   },
//   Conversation: {
//     screen: Conversation,
//     navigationOptions: ({ navigation }: any) => ({
//       title: navigation.getParam('name'),
//     }),
//   },
// });
