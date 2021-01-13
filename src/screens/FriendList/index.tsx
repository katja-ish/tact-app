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

  const renderContact = ({ item }) => <FriendItem item={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <Text fontSize="h1" style={styles.title}>
        Телефонная книга
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
    backgroundColor: '#F6F6F6',
  },
  list: {
    backgroundColor: 'black',
    // height: '100%',
  },
  title: {
    color: Colors.STRONG_BLACK,
    alignSelf: 'center',
    marginTop: 32,
    marginBottom: 70,
  },
});

export default FriendList;
