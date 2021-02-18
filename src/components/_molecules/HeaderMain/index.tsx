import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Colors } from '@app/theme';
import Avatar from '@app/components/_atoms/Avatar';
import { TouchableOpacity } from 'react-native-gesture-handler';

const HeaderMain = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text fontSize="h1" style={styles.status}>
        Ты как, Semilunar?
      </Text>
      <Avatar size={'main'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    maxHeight: 76,
    marginVertical: 25,
    paddingHorizontal: 20,
  },
  status: {
    fontSize: 35,
    lineHeight: 35,
    letterSpacing: -0.01,
    color: Colors.SOFT_BLACK,
    fontFamily: 'TTCommons-Medium',
  },
});

export default HeaderMain;
