import React, { useEffect, useState } from 'react';
import { Text, Colors } from '@app/theme';
import { SafeAreaView, View, StyleSheet, FlatList, TouchableHighlight, Switch } from 'react-native';
import ConversationItem from './components/ConversationItem';
import Contacts from 'react-native-contacts';
import DragTabs from '@app/components/DragTabs';
import { useDispatch, useSelector } from '@app/hooks';
import { setContacts } from '@app/store/contacts/actions';
import ButtonSquare from '@app/components/ButtonSquare';

const ConversationsList = () => {
  const contacts = useSelector((state) => state.contacts.list);
  const dispatch = useDispatch();
  useEffect(() => {
    Contacts.getAll().then((data) => {
      if (Array.isArray(data)) {
        dispatch(setContacts(data.slice(0, 5)));
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  // const renderConversation = ({ item }: any) => <ConversationItem item={item} />;

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

      {/* <ButtonSquare icon="🚼" />
      <ButtonSquare icon="🧩" /> */}

      <Switch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />

      <TouchableHighlight
        onPress={() => {
          alert('Switch to rows!');
        }}
        underlayColor="white">
        <View style={styles.button}>
          <Text style={styles.buttonText}>≣</Text>
        </View>
      </TouchableHighlight>

      {contacts.length > 0 && <DragTabs />}
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
