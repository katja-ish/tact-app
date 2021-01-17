import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Colors } from '@app/theme';

const ButtonSquare = ({ icon }: any) => {
  return (
    <View style={styles.container}>
      <Text fontSize="big">{icon}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 46,
    width: 46,
    borderRadius: 15,
    backgroundColor: Colors.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: { width: 0, height: 3 },
    shadowColor: 'black',
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    // box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.08);
  },
});

export default ButtonSquare;
