import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
import { FriendList, ConversationsList, Settings } from '@app/screens';
import Icon from 'react-native-vector-icons/Feather';
import { ScreenNames, RootStackParamList } from '@app/types';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator<RootStackParamList>();

export default () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName = '';

          if (route.name === ScreenNames.FRIEND_LIST) {
            iconName = 'users';
          }
          if (route.name === ScreenNames.CONVERSATIONS_LIST) {
            iconName = 'message-circle';
          }
          if (route.name === ScreenNames.SETTINGS) {
            iconName = 'settings';
          }

          return <Icon name={iconName} size={24} color={color} />;
        },
      })}
      // initialRouteName={Routes.HomeNavigator}
      tabBarOptions={tabBarOption}>
      <Tab.Screen name={ScreenNames.FRIEND_LIST} component={FriendList} />
      <Tab.Screen name={ScreenNames.CONVERSATIONS_LIST} component={ConversationsList} />
      <Tab.Screen name={ScreenNames.SETTINGS} component={Settings} />
    </Tab.Navigator>
  );
};

const tabBarOption = {
  activeTintColor: '#000',
  inactiveTintColor: '#808080',
  showLabel: false,
  style: { borderTopWidth: 0, backgroundColor: '#fff' },
};
