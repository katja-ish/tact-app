import React from 'react';
import { StyleSheet, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { TAB_COLUMNS, TAB_SIZE, tabs } from './Tab';
import SortableTab from './SortableTab';
import { useSelector } from '@app/hooks';

const { Value } = Animated;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#1c1d1e',
  },
});
export default () => {
  const contacts = useSelector((state) => state.contacts.list);

  const offsets = tabs.map((_, index) => ({
    x: new Value(index % TAB_COLUMNS === 0 ? 0 : TAB_SIZE),
    y: new Value(Math.floor(index / TAB_COLUMNS) * TAB_SIZE),
  }));
  return (
    <View style={styles.container}>
      {contacts.map((tab, index) => (
        <SortableTab key={tab.recordID} {...{ tab, index, offsets }} />
      ))}
    </View>
  );
};
