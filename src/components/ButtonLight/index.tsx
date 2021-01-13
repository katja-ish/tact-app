import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Colors } from '@app/theme';

const ButtonLight = ({ text, height, value }: any) => {
  return (
    <View style={styles.container} height={height}>
      <View style={styles.textContainer}>
        <Text fontSize="buttonText" style={styles.text}>
          {text}
        </Text>
        <Text fontSize="big" style={styles.value}>
          {value}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    backgroundColor: Colors.WHITE,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderBottomWidth: 1,
    // flexDirection: 'column',
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
    // backgroundColor: 'blue',
  },
  value: {
    color: Colors.SOFT_BLACK,
  },
});

export default ButtonLight;
