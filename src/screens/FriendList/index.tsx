import React, { useEffect, useState } from 'react';
import { Text, View, SafeAreaView, StyleSheet, FlatList } from 'react-native';

import Contacts from 'react-native-contacts';
import FriendItem from './components/FriendItem';

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
      <Text style={styles.text}>FriendList Screen</Text>
      <FlatList
        data={contacts}
        keyExtractor={(item) => `contact${item.recordID}`}
        renderItem={renderContact}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightyellow',
    flex: 1,
  },
  text: {
    fontSize: 32,
  },
});

export default FriendList;
