import React from 'react';
import { MaterialTopTabBarProps } from '@react-navigation/material-top-tabs';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Feather';

import { getIconLabel, getIconName, interpolateColors } from '@app/utils';
import { RouteType } from '@app/types';
import { Colors } from '@app/theme';

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

  // const label = getIconLabel(route.name);
  const isFocused = state.index === index;

  const inputRange = state.routes.map((_, i) => i);
  const opacity = Animated.interpolate(position, {
    inputRange,
    outputRange: inputRange.map((i) => (i === index ? 1 : 0.3)),
  });

  // const widthOutput = inputRange.map((i) => (i === index ? 120 : 50));
  // const width = Animated.interpolate(position, {
  //   inputRange,
  //   outputRange: widthOutput,
  // });

  // const scaleOutput = inputRange.map((i) => (i === index ? 1.2 : 1));
  // const scale = Animated.interpolate(position, {
  //   inputRange,
  //   outputRange: scaleOutput,
  // });

  // const labelTranslateOutput = inputRange.map((i) => (i === index ? 50 : 100));
  // const labelTranslate = Animated.interpolate(position, {
  //   inputRange,
  //   outputRange: labelTranslateOutput,
  // });

  // const backgroundOutput = inputRange.map((i) => (i === index ? '#FFFFFF' : Colors.STRONG_BLACK));
  // const backgroundColor = interpolateColors(position, inputRange, backgroundOutput);

  const iconName = getIconName(route.name);

  return (
    <TouchableOpacity
      accessibilityRole="button"
      activeOpacity={0.8}
      onPress={() => onPress(route, isFocused)}
      onLongPress={() => onLongPress(route)}>
      <Animated.Text
        // @ts-ignore
        style={{
          opacity,
        }}>
        <Icon name={iconName} size={24} />
      </Animated.Text>
    </TouchableOpacity>
  );
};
export default Tab;

const styles = StyleSheet.create({
  tabWrap: {
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
