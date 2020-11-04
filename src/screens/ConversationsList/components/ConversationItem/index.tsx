import React from 'react';
import { Text } from '@app/theme';
import { View, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import { Colors } from '@app/theme';

import { getNumberFromContact } from '@app/utils';

interface ConversationItemProps {
  item: any;
}

const ConversationItem: React.FC<ConversationItemProps> = ({ item }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.avatar} />
      <View style={styles.textWrap}>
        <Text fontSize="medium" style={styles.name}>
          {item.givenName} {item.familyName}
        </Text>
        <Text fontSize="small" style={styles.text}>
          last message
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 68,
    backgroundColor: Colors.WHITE,
    paddingVertical: 16,
    paddingHorizontal: 20,
    flexDirection: 'row',
    borderBottomColor: Colors.STROKE,
    borderBottomWidth: 1,
  },
  textWrap: { justifyContent: 'space-between' },
  name: {
    color: Colors.SOFT_BLACK,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 50,
    backgroundColor: 'black',
    marginRight: 16,
  },
  text: {
    color: Colors.SYSTEM_GREY,
  },
});

export default ConversationItem;
