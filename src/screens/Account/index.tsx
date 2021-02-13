import React from 'react';
import { Settings, AccountDetails, Notifications, Dictionary } from '@app/screens';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Account = () => {
  return (
    <Stack.Navigator initialRouteName="AccountDetails">
      <Stack.Screen
        name="AccountDetails"
        component={AccountDetails}
        options={{ title: 'Аккаунт' }}
      />
      <Stack.Screen name="Settings" component={Settings} options={{ title: 'Настройки' }} />
      <Stack.Screen
        name="Notifications"
        component={Notifications}
        options={{ title: 'Уведомления' }}
      />
      <Stack.Screen name="Dictionary" component={Dictionary} options={{ title: 'Словарь' }} />
    </Stack.Navigator>
  );
};

export default Account;
