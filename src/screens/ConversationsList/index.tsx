import React, { useEffect, useState } from 'react';
import { Text } from '@app/theme';
import { SafeAreaView, StyleSheet, FlatList } from 'react-native';
import Contacts from 'react-native-contacts';
import ConversationItem from './components/ConversationItem';

const ConversationsList = () => {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    Contacts.getAll().then((data) => {
      if (Array.isArray(data)) {
        setContacts(data);
      }
    });
  }, []);

  const renderConversation = ({ item }) => <ConversationItem item={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <Text fontSize="large" style={styles.title}>
        Список бесед
      </Text>
      <FlatList
        data={contacts}
        keyExtractor={(item) => `conversation${item.recordID}`}
        renderItem={renderConversation}
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
  title: {
    paddingHorizontal: 20,
  },
  list: {},
  // absolute: {
  //   position: 'absolute',
  //   top: 0,
  //   left: 0,
  //   bottom: 0,
  //   right: 0,
  // },
});

export default ConversationsList;
