import React from 'react';
import { Settings, AccountDetails, Notifications, Dictionary } from '@app/screens';
import { createStackNavigator } from '@react-navigation/stack';
import { ScreenNames } from '@app/types';

const Account = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName={ScreenNames.ACCOUNT_DETAILS}>
      <Stack.Screen
        name={ScreenNames.ACCOUNT_DETAILS}
        component={AccountDetails}
        options={{ title: 'Аккаунт', headerTintColor: '#1A4D8F', headerShown: false }}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{ title: 'Настройки', headerTintColor: '#1A4D8F', headerBackTitle: ' ' }}
      />
      <Stack.Screen
        name="Notifications"
        component={Notifications}
        options={{ title: 'Уведомления', headerTintColor: '#1A4D8F', headerBackTitle: ' ' }}
      />
      <Stack.Screen
        name="Dictionary"
        component={Dictionary}
        options={{ title: 'Словарь', headerTintColor: '#1A4D8F', headerBackTitle: ' ' }}
      />
    </Stack.Navigator>
  );
};

export default Account;
