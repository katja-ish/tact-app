import React from 'react';
import { MaterialTopTabBarProps } from '@react-navigation/material-top-tabs';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Feather';

import { getIconLabel, getIconName, interpolateColors } from '@app/utils';
import { RouteType } from '@app/types';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

interface TabProps extends MaterialTopTabBarProps {
  route: RouteType;
  index: number;
  onPress: (route: RouteType, isFocused: boolean) => void;
  onLongPress: (route: RouteType) => void;
}

const Tab: React.FC<TabProps> = ({
  state,
  index,
  descriptors,
  route,
  position,
  onPress,
  onLongPress,
}) => {
  const { options } = descriptors[route.key];
  // const label =
  //   options.tabBarLabel !== undefined
  //     ? options.tabBarLabel
  //     : options.title !== undefined
  //     ? options.title
  //     : route.name;

  const label = getIconLabel(route.name);
  const isFocused = state.index === index;

  const inputRange = state.routes.map((_, i) => i);
  const opacity = Animated.interpolate(position, {
    inputRange,
    outputRange: inputRange.map((i) => (i === index ? 1 : 0)),
  });

  const widthOutput = inputRange.map((i) => (i === index ? 120 : 50));
  const width = Animated.interpolate(position, {
    inputRange,
    outputRange: widthOutput,
  });

  const scaleOutput = inputRange.map((i) => (i === index ? 1.2 : 1));
  const scale = Animated.interpolate(position, {
    inputRange,
    outputRange: scaleOutput,
  });

  const labelTranslateOutput = inputRange.map((i) => (i === index ? 50 : 100));
  const labelTranslate = Animated.interpolate(position, {
    inputRange,
    outputRange: labelTranslateOutput,
  });

  const backgroundOutput = inputRange.map((i) => (i === index ? '#E7C741' : '#3B3B3B'));
  const backgroundColor = interpolateColors(position, inputRange, backgroundOutput);

  const iconColorOutput = inputRange.map((i) => (i === index ? '#3B3B3B' : '#FFFFFF'));
  const iconColor = interpolateColors(position, inputRange, iconColorOutput);

  const iconName = getIconName(route.name);

  return (
    <TouchableWithoutFeedback
      accessibilityRole="button"
      accessibilityLabel={options.tabBarAccessibilityLabel}
      onPress={() => onPress(route, isFocused)}
      onLongPress={() => onLongPress(route)}>
      <Animated.View
        style={[
          styles.tabWrap,
          // @ts-ignore
          {
            backgroundColor,
            width,
            transform: [{ scale }],
          },
        ]}>
        <Animated.Text
          // @ts-ignore
          style={{
            color: iconColor,
          }}>
          <Icon name={iconName} size={24} />
        </Animated.Text>
        <Animated.Text
          style={[styles.label, { opacity, transform: [{ translateX: labelTranslate }] }]}>
          {label}
        </Animated.Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};
export default Tab;

const styles = StyleSheet.create({
  tabWrap: {
    // flex: 1,
    backgroundColor: 'transparent',
    height: 50,
    borderRadius: 25,
    borderColor: '#ccc',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    overflow: 'hidden',
    paddingHorizontal: 12,
  },
  label: {
    position: 'absolute',
  },
});
