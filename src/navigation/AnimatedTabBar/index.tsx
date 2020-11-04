import { Colors } from '@app/theme';
import { RouteType } from '@app/types';
import { MaterialTopTabBarProps } from '@react-navigation/material-top-tabs';
import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, Animated, Easing } from 'react-native';
import Tab from './Tab';

const paddingHorizontal = 40;
const iconWidth = 24;

const AnimatedTabBar: React.FC<MaterialTopTabBarProps> = (props) => {
  const [position] = useState(new Animated.ValueXY());

  //We attach the x,y coordinates of the position to the transform property of the indicator so we can freely animate it to any position of our choice.
  const animStyles = {
    top: 60,
    bottom: 0,
    position: 'absolute',
    width: 6,
    height: 6,
    backgroundColor: Colors.LAZURE,
    borderRadius: 50,
    transform: position.getTranslateTransform(),
  };

  const onPress = (route: RouteType, isFocused: boolean) => {
    animate(route.name);

    const event = props.navigation.emit({
      type: 'tabPress',
      target: route.key,
      canPreventDefault: true,
    });

    if (!isFocused && !event.defaultPrevented) {
      props.navigation.navigate(route.name);
    }
  };

  const onLongPress = (route: RouteType) => {
    props.navigation.emit({
      type: 'tabLongPress',
      target: route.key,
    });
  };

  const animate = (routeName: string) => {
    let valueX;
    switch (routeName) {
      case 'FriendListScreen':
        valueX = paddingHorizontal + iconWidth / 2 - 3;
        break;
      case 'ConversationsListScreen':
        valueX = screenWidth / 2 - 3;
        break;
      case 'SettingsScreen':
        valueX = screenWidth - paddingHorizontal - 12 - 3;
        break;
      default:
        valueX = 0;
        break;
    }
    Animated.timing(position, {
      toValue: { x: valueX, y: 0 },
      duration: 450,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.tabBarContainer}>
      <Animated.View
        // @ts-ignore
        style={animStyles}
      />
      {props.state.routes.map((route, index) => (
        <Tab
          {...props}
          onPress={onPress}
          onLongPress={onLongPress}
          route={route}
          index={index}
          key={route.key}
        />
      ))}
    </View>
  );
};

export default AnimatedTabBar;

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
    bottom: 20,
    height: 70,
    paddingHorizontal,
    // transform: [{ translateX: (screenWidth - 350) / 2 }],
    // borderColor: '#fff',
    // borderWidth: 1,
    width: '100%',
  },
});
