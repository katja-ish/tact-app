import React from 'react';

import { View, StyleSheet } from 'react-native';
import { Colors } from '@app/theme';

interface IAvatarShape {
  shape?: 'circle' | 'square' | 'rhombus';
}

const AvatarShape: React.FC<IAvatarShape> = ({ shape = 'circle' }: any) => {
  // const avatarRadius = shape === 'circle' ? 50 : 25;
  let avatarRadius;
  let rotateAngle;
  let marginLeft;

  if (shape === 'circle') {
    avatarRadius = 50;
    marginLeft = 0;
  }
  if (shape === 'square') {
    avatarRadius = 25;
    marginLeft = 0;
  }
  if (shape === 'rhombus') {
    avatarRadius = 20;
    rotateAngle = [{ rotate: '45deg' }];
    marginLeft = 10;
  }

  return (
    <View
      style={[
        styles.container,
        {
          borderRadius: avatarRadius,
          transform: rotateAngle,
          marginLeft: marginLeft,
        },
      ]}></View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: 80,
    backgroundColor: Colors.BLUE_WINTHER,
    marginRight: 20,
  },
});

export default AvatarShape;
