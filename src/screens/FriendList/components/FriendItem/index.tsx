import React from 'react';
import { Text } from '@app/theme';
import ButtonSmall from '@app/components/ButtonSmall';
import { View, TouchableOpacity } from 'react-native';

import styles from './styles';
import { getNumberFromContact } from '@app/utils';

interface FriendItemProps {
  item: any;
}

const FriendItem: React.FC<FriendItemProps> = ({ item }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.avatar} />

      <View style={styles.textWrap}>
        <Text fontSize="big" style={styles.name}>
          {item.givenName} {item.familyName}
        </Text>
        <Text fontSize="medium" style={styles.text}>
          {item.phoneNumbers && getNumberFromContact(item.phoneNumbers)}
        </Text>
      </View>

      <View style={styles.add}>
        <ButtonSmall text={'Пригласить'} />
      </View>
    </TouchableOpacity>
  );
};

export default FriendItem;
