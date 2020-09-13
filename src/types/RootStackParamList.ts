import { RouteProp } from '@react-navigation/native';
import { ScreenNames } from './ScreenNames';

export type RootStackParamList = {
  [ScreenNames.ACCOUNT]: undefined;
  [ScreenNames.SETTINGS]: undefined;
  [ScreenNames.CONVERSATION]: undefined;
  [ScreenNames.CONVERSATIONS_LIST]: undefined;
  [ScreenNames.FRIEND_LIST]: undefined;
};

export type RouteType = RouteProp<Record<string, object | undefined>, string>;
