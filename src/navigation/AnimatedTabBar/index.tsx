import { RouteType } from '@app/types';
import { MaterialTopTabBarProps } from '@react-navigation/material-top-tabs';
import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Tab from './Tab';

const AnimatedTabBar: React.FC<MaterialTopTabBarProps> = (props) => {
  const onPress = (route: RouteType, isFocused: boolean) => {
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

  return (
    <View style={styles.tabBarContainer}>
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
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: 30,
    // left: screenWidth / 2,
    transform: [{ translateX: (screenWidth - 350) / 2 }],
    // borderColor: '#fff',
    // borderWidth: 1,
    // flex: 1,
    width: 350,
  },
});
