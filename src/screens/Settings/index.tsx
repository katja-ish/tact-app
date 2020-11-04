import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Account, SettingsDetails } from '@app/screens';

const Stack = createStackNavigator();

const Settings = () => {
  return (
    <Stack.Navigator initialRouteName="SettingsDetails">
      <Stack.Screen
        name="SettingsDetails"
        component={SettingsDetails}
        options={{ title: 'Настройки' }}
      />
      <Stack.Screen name="Account" component={Account} options={{ title: 'Аккаунт' }} />
    </Stack.Navigator>
  );
};

export default Settings;
