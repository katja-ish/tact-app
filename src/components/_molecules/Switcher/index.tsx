import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import NavButton from '@app/components/_atoms/NavButton';

const Switcher = ({ text }: any) => {
  return (
    <View style={styles.container}>
      <NavButton text={'Чаты'} />
      <NavButton text={'История'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
});

export default Switcher;
