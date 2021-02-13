import React from 'react';
import { Text, Colors } from '@app/theme';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import ControlShevron from '@app/components/_atoms/ControlShevron';

const Notifications = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ControlShevron text={'Звуковые уведомления'} rightAsset={'🖲'} />
      <ControlShevron text={'Наклейки'} rightAsset={'🖲'} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.BG_GREY,
  },
});

export default Notifications;
