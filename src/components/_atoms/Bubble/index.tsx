import React, { useEffect } from 'react';
import { View, StyleSheet, Animated, Easing } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import { Text } from '@app/theme';
import { BubbleSubstractDown, BubbleSubstractUp } from '@app/assets/icons';

interface IBubble {
  text: string;
  direction?: 'left' | 'right';
}

const Bubble: React.FC<IBubble> = ({ text, direction = 'left' }) => {
  const bubbleDirection = direction === 'left' ? 'row' : 'row-reverse';
  const bubbleRotate = direction === 'left' ? '0deg' : '-180deg';
  const scaleValue = new Animated.Value(0);

  const scale = scaleValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0.1, 1],
  });

  useEffect(() => {
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 1500,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View
      style={[
        styles.container,
        {
          flexDirection: bubbleDirection,
          transform: [{ scale }],
        },
      ]}>
      <View style={{ transform: [{ rotate: bubbleRotate }] }}>
        <BubbleSubstractDown style={styles.substractDown} />
        <BubbleSubstractUp style={styles.substractUp} />
        <BlurView
          style={styles.line}
          blurType="light"
          blurAmount={10}
          reducedTransparencyFallbackColor="white"
        />
      </View>
      <BlurView
        style={styles.main}
        blurType="light"
        blurAmount={10}
        reducedTransparencyFallbackColor="white">
        <Text style={styles.text}>{text}</Text>
      </BlurView>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  line: {
    width: 25,
    height: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  substractDown: {
    position: 'absolute',
    top: 10,
    left: 19,
  },
  substractUp: {
    position: 'absolute',
    top: -6,
    left: 19,
  },
  main: {
    minWidth: 110,
    maxWidth: '80%',
    minHeight: 55,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
  },
  text: {},
});

export default Bubble;
