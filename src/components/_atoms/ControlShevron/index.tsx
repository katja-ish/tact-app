import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Colors } from '@app/theme';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ControlShevron = ({ text, height, leftAsset, rightAsset, onPress }: any) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.textContainer}>
        {leftAsset}
        <Text fontSize="buttonText" style={styles.text}>
          {text}
        </Text>
        <Text fontSize="big" style={styles.value}>
          {rightAsset}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 66,
    backgroundColor: Colors.WHITE,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(50, 50, 50, 0.1);',
  },
  textContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    color: Colors.SOFT_BLACK,
    lineHeight: 50,
    fontFamily: 'TTCommons-Regular',
  },
  value: {
    color: Colors.SOFT_BLACK,
  },
});

export default ControlShevron;
