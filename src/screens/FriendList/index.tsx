import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, StyleSheet, FlatList } from 'react-native';
import { Text, Colors } from '@app/theme';

import Contacts from 'react-native-contacts';
import FriendItem from './components/FriendItem';
// import { Colors } from 'react-native/Libraries/NewAppScreen';

const FriendList = () => {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    Contacts.getAll().then((data) => {
      if (Array.isArray(data)) {
        setContacts(data);
      }
    });
  }, []);

  const renderContact = ({ item, index }) => <FriendItem item={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <Text fontSize="large" style={styles.title}>
        Мои контакты
      </Text>
      <FlatList
        data={contacts}
        keyExtractor={(item) => `contact${item.recordID}`}
        renderItem={renderContact}
        style={styles.list}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  list: {
    // borderRadius: 10,
  },
  title: {
    color: Colors.SOFT_BLACK,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});

export default FriendList;
