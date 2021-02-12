import React from 'react';
import { Settings, AccountDetails } from '@app/screens';
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
    </Stack.Navigator>
  );
};

export default Account;
