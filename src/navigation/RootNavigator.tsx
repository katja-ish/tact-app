import React from 'react';
import { FriendList, ConversationsList, Settings } from '@app/screens';
import { ScreenNames, RootStackParamList } from '@app/types';
import { enableScreens } from 'react-native-screens';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import AnimatedTabBar from './AnimatedTabBar';

const Tab = createMaterialTopTabNavigator<RootStackParamList>();

enableScreens();

export default () => {
  return (
    <Tab.Navigator
      swipeEnabled={false}
      tabBar={(props) => <AnimatedTabBar {...props} />}
      tabBarPosition="bottom">
      <Tab.Screen name={ScreenNames.FRIEND_LIST} component={FriendList} />
      <Tab.Screen name={ScreenNames.CONVERSATIONS_LIST} component={ConversationsList} />
      <Tab.Screen name={ScreenNames.SETTINGS} component={Settings} />
    </Tab.Navigator>
  );
};
