import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Colors } from '@app/theme';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ButtonSquare = ({ icon }: any, { onPress }: any) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text fontSize="big">{icon}</Text>
    </TouchableOpacity>
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
