import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Colors } from '@app/theme';

const ButtonLight = ({ text }: any) => {
  return (
    <View style={styles.container}>
      <Text fontSize="big" style={styles.text}>
        {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    backgroundColor: Colors.LIGHT_LAZURE,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
  text: {
    color: Colors.BLUE_WINTHER,
    fontWeight: '400',
  },
});

export default ButtonLight;
