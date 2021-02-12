import { ScreenNames } from '@app/types';

export default (name: string) => {
  let label = '';
  switch (name) {
    case ScreenNames.CONTACTS_LIST:
      label = 'Friends';
      break;
    case ScreenNames.CONVERSATIONS_LIST:
      label = 'Messages';
      break;
    case ScreenNames.ACCOUNT:
      label = 'Account';
      break;
    default:
      break;
  }

  return label;
};
