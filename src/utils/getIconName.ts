import { ScreenNames } from '@app/types';

export default (name: string) => {
  let iconName = '';
  switch (name) {
    case ScreenNames.CONTACTS_LIST:
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

  return iconName;
};
