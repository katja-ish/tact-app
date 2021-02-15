import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Switch } from 'react-native-gesture-handler';

const SwitcherBasic = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <Switch
      trackColor={{ false: 'rgba(120, 120, 128, 0.16)', true: '#1A4D8F' }}
      thumbColor={isEnabled ? 'fff' : '#fff'}
      ios_backgroundColor="rgba(120, 120, 128, 0.16)"
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
};

const styles = StyleSheet.create({});

export default SwitcherBasic;
