import React from 'react';
import { View, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { Text, Colors } from '@app/theme';

const InfoBanner = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.title}>Люди могут быть слепы к касанию</Text>
      <Text style={styles.p}>
        Первичная сенсорная невропатия означает, что человек потерял все свои сенсоры для
        механического прикосновения.
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 17,
    paddingHorizontal: 20,
    paddingRight: 30,
    borderRadius: 15,
    backgroundColor: '#ddd',
    height: 107,
    marginVertical: 25,
  },
  title: {
    fontSize: 18,
    lineHeight: 21,
    letterSpacing: -0.01,
    marginBottom: 5,
    fontFamily: 'TTCommons-Medium',
  },
  p: {
    fontSize: 15,
    lineHeight: 17,
    fontFamily: 'TTCommons-Regular',
  },
});

export default InfoBanner;
