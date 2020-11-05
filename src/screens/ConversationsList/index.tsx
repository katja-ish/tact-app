import React, { useEffect, useState } from 'react';
import { Text, Colors } from '@app/theme';
import { SafeAreaView, View, StyleSheet, FlatList } from 'react-native';
import ConversationItem from './components/ConversationItem';
import Contacts from 'react-native-contacts';
import DragToSort from '@app/components/DragToSort';
import DragTabs from '@app/components/DragTabs';

const ConversationsList = () => {
  // const [contacts, setContacts] = useState([]);
  // useEffect(() => {
  //   Contacts.getAll().then((data) => {
  //     if (Array.isArray(data)) {
  //       setContacts(data);
  //     }
  //   });
  // }, []);

  // const renderConversation = ({ item }) => <ConversationItem item={item} />;

  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView> */}
      {/* <View style={styles.flex}>
        <Text fontSize="large" style={styles.title}>
          Список бесед
        </Text>
        <View style={styles.menu}>
          <Text fontSize="medium" style={styles.menuText}>
            About
          </Text>
        </View>
      </View> */}

      <DragTabs />
      {/* <DragToSort /> */}
      {/* <Chrome /> */}
      {/* </ScrollView> */}

      {/* <FlatList
        data={contacts}
        keyExtractor={(item) => `conversation${item.recordID}`}
        renderItem={renderConversation}
        style={styles.list}
      /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {},
  menu: {
    borderRadius: 50,
    backgroundColor: Colors.LIGHT_LAZURE,
  },
  menuText: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    lineHeight: 32,
    fontSize: 15,
    paddingVertical: 4,
    paddingHorizontal: 20,
    borderRadius: 50,
    fontWeight: '500',
    color: Colors.BLUE_WINTHER,
  },
  list: {},
});

export default ConversationsList;
