import { RouteProp } from '@react-navigation/native';
import { ScreenNames } from './ScreenNames';

export type RootStackParamList = {
  [ScreenNames.CONVERSATION]: undefined;
  [ScreenNames.CONVERSATIONS_LIST]: undefined;
  [ScreenNames.CONTACTS_LIST]: undefined;
  [ScreenNames.ACCOUNT]: undefined;
  [ScreenNames.ACCOUNT_DETAILS]: undefined;
  [ScreenNames.SETTINGS]: undefined;
};

export type RouteType = RouteProp<Record<string, object | undefined>, string>;
