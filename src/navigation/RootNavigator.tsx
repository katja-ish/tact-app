import React from 'react';
import {
  SignUp,
  ConversationsList,
  Account,
  ContactsList,
  Settings,
  Notifications,
  Dictionary,
} from '@app/screens';
import { AccountDetails } from '@app/screens/AccountDetails/index';
import { ScreenNames, RootStackParamList } from '@app/types';
import { enableScreens, Screen } from 'react-native-screens';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import AnimatedTabBar from './AnimatedTabBar';

// const Tab = createMaterialTopTabNavigator<RootStackParamList>();

export default () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={ScreenNames.CONVERSATIONS_LIST} component={ConversationsList} />
        <Stack.Screen name={ScreenNames.ACCOUNT} component={AccountNavigator} />
        {/* <Stack.Screen name={ScreenNames.ACCOUNT} component={AccountNavigator} /> */}
        {/* <Stack.Screen
          name={ScreenNames.ACCOUNT_DETAILS}
          component={AccountDetails}
          options={{ title: 'Аккаунт', headerTintColor: '#1A4D8F', headerShown: false }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Sample = ({ color, route }: { color: string; route: ScreenNames }) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <TouchableOpacity
        style={{
          width: 100,
          height: 100,
          backgroundColor: color,
          borderRadius: 16,
          margin: 20,
        }}
        onPress={() => navigation.navigate(route)}></TouchableOpacity>
    </SafeAreaView>
  );
};

const AccountNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName={ScreenNames.ACCOUNT_DETAILS}
      screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={ScreenNames.ACCOUNT_DETAILS}
        component={AccountDetails}
        options={{ title: 'Аккаунт', headerTintColor: '#1A4D8F', headerShown: false }}
      />
      <Stack.Screen
        name={ScreenNames.SETTINGS}
        component={Settings}
        options={{ title: 'Настройки', headerTintColor: '#1A4D8F', headerBackTitle: ' ' }}
      />
      <Stack.Screen
        name={ScreenNames.NOTIFICATIONS}
        component={Notifications}
        options={{ title: 'Уведомления', headerTintColor: '#1A4D8F', headerBackTitle: ' ' }}
      />
      <Stack.Screen
        name={ScreenNames.DICTIONARY}
        component={Dictionary}
        options={{ title: 'Словарь', headerTintColor: '#1A4D8F', headerBackTitle: ' ' }}
      />
    </Stack.Navigator>
  );
};
