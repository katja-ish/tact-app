import React from 'react';
import { Text, View, SafeAreaView, StyleSheet, Image } from 'react-native';
import Bubble from '@app/components/Bubble';

const ConversationsList = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        key={'blurryImage'}
        source={{
          uri:
            'https://icdn.lenta.ru/images/2019/11/01/13/20191101130724350/pwa_vertical_1024_f1555b2890fcb39f7ecc85cf65e73fc5.png',
        }}
        resizeMode="cover"
        style={styles.absolute}
      />
      <Text style={styles.text}>ConversationsList Screen</Text>
      <Bubble text="я самая хорошая девочка" direction="right" />
      <Bubble text="я знаю" direction="left" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'purple',
    flex: 1,
  },
  text: {
    fontSize: 32,
    color: '#fff',
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default ConversationsList;
