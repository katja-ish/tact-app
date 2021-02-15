import React from 'react';
import { Text, Colors } from '@app/theme';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import ControlShevron from '@app/components/_atoms/ControlShevron';
import SwitcherBasic from '@app/components/_atoms/SwitcherBasic';

const Notifications = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ borderTopWidth: 1, borderTopColor: 'rgba(50, 50, 50, 0.1);' }}>
        <ControlShevron text={'Звуковые уведомления'} rightAsset={<SwitcherBasic />} />
        <ControlShevron text={'Наклейки'} rightAsset={<SwitcherBasic />} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.BG_GREY,
    height: '100%',
    paddingVertical: 32,
  },
});

export default Notifications;
