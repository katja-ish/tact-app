import { StyleSheet } from 'react-native';
import { Colors } from '@app/theme';

export default StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: Colors.WHITE,
    paddingVertical: 18,
    paddingHorizontal: 20,
    flexDirection: 'row',
    position: 'relative',
  },
  textWrap: { justifyContent: 'space-between' },
  name: {
    color: Colors.SOFT_BLACK,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 20,
    backgroundColor: '#C4C4C4',
    marginRight: 16,
  },
  text: {
    color: Colors.SOFT_BLACK,
    opacity: 0.6,
  },
  add: {
    position: 'absolute',
    bottom: 20,
    right: 30,
  },
});
