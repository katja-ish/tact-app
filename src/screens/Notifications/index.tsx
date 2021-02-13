import React from 'react';
import { Text, Colors } from '@app/theme';
import { View, SafeAreaView, StyleSheet } from 'react-native';

const Notifications = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Notifications</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Notifications;
