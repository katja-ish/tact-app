import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Colors } from '@app/theme';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text fontSize="h1">Header inside exact Conversation</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Header;
