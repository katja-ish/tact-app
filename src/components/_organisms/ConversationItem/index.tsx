import React from 'react';
import { Text } from '@app/theme';
import { View, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import { Colors } from '@app/theme';
import { useNavigation } from '@react-navigation/native';
import Avatar from '@app/components/_atoms/Avatar';

interface ConversationItemProps {
  item: any;
  navigation: any;
}

const ConversationItem: React.FC<ConversationItemProps> = ({ item }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.navigate('Conversation');
      }}>
      <View style={styles.avatarContainer}>
        <Avatar />
      </View>
      <View style={styles.textWrap}>
        <Text style={styles.name}>
          {item.givenName} {item.familyName}
        </Text>
        <Text style={styles.text}>Печаль</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: Colors.WHITE,
    paddingVertical: 17,
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  avatarContainer: {
    marginRight: 14,
  },
  textWrap: { justifyContent: 'space-between' },
  name: {
    color: Colors.SOFT_BLACK,
    fontSize: 18,
    lineHeight: 21,
    letterSpacing: 0.02,
    fontFamily: 'TTCommons-Regular',
  },
  text: {
    color: Colors.SOFT_BLACK,
    opacity: 0.6,
    fontFamily: 'TTCommons-Regular',
  },
});

export default ConversationItem;
