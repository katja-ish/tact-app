import { StyleSheet } from 'react-native';
import { Colors } from '@app/theme';

export default StyleSheet.create({
  container: {
    height: 68,
    backgroundColor: Colors.WHITE,
    paddingVertical: 16,
    paddingHorizontal: 20,
    flexDirection: 'row',
    borderBottomColor: Colors.STROKE,
    borderBottomWidth: 1,
  },
  textWrap: { justifyContent: 'space-between' },
  name: {
    color: Colors.SOFT_BLACK,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 50,
    backgroundColor: 'black',
    marginRight: 16,
  },
  text: {
    color: Colors.SYSTEM_GREY,
  },
});
