import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
import { FriendList, ConversationsList, Settings } from '@app/screens';
import Icon from 'react-native-vector-icons/Feather';
import { ScreenNames, RootStackParamList } from '@app/types';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator<RootStackParamList>();

export default () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName = '';
          switch (route.name) {
            case ScreenNames.FRIEND_LIST:
              iconName = 'users';
              break;
            case ScreenNames.FRIEND_LIST:
              iconName = 'users';
              break;
            case ScreenNames.CONVERSATIONS_LIST:
              iconName = 'message-circle';
              break;
            case ScreenNames.SETTINGS:
              iconName = 'settings';
              break;
            default:
              break;
          }
          return <Icon name={iconName} size={24} color={color} />;
        },
      })}
      // initialRouteName={Routes.HomeNavigator}
      tabBarOptions={tabBarOption}
      tabBarPosition="bottom">
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
  showIcon: true,
  style: { borderTopWidth: 0, backgroundColor: '#fff' },
};
