import { ScreenNames } from '@app/types';

export default (name: string) => {
  let iconName = '';
  switch (name) {
    case ScreenNames.SIGNUP:
      iconName = 'users';
      break;
    case ScreenNames.CONVERSATIONS_LIST:
      iconName = 'message-circle';
      break;
    case ScreenNames.ACCOUNT:
      iconName = 'settings';
      break;
    default:
      break;
  }

  return iconName;
};
