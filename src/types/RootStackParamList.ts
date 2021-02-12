import { RouteProp } from '@react-navigation/native';
import { ScreenNames } from './ScreenNames';

export type RootStackParamList = {
  [ScreenNames.ACCOUNT]: undefined;
  [ScreenNames.SETTINGS]: undefined;
  [ScreenNames.CONVERSATION]: undefined;
  [ScreenNames.CONVERSATIONS_LIST]: undefined;
  [ScreenNames.CONTACTS_LIST]: undefined;
  [ScreenNames.SETTINGS_DETAILS]: undefined;
};

export type RouteType = RouteProp<Record<string, object | undefined>, string>;
