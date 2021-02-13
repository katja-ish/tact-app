import React, { useEffect } from 'react';
import { Colors } from '@app/theme';
import { SafeAreaView, View, StyleSheet, FlatList, Switch, Button } from 'react-native';
import ConversationListItem from './components/ConversationListItem';
import Contacts from 'react-native-contacts';
// import DragTabs from '@app/components/_organisms/DragTabs';
import { useDispatch, useSelector } from '@app/hooks';
import { setContacts } from '@app/store/contacts/actions';
import { createStackNavigator } from '@react-navigation/stack';
import HeaderMain from '@app/components/_molecules/HeaderMain';
import SquareButton from '@app/components/_atoms/SquareButton';
import Switcher from '@app/components/_molecules/Switcher';
const Stack = createStackNavigator();

const ConversationsList = ({ navigation }: any) => {
  const contacts = useSelector((state) => state.contacts.list);
  const dispatch = useDispatch();
  useEffect(() => {
    Contacts.getAll().then((data) => {
      if (Array.isArray(data)) {
        dispatch(setContacts(data));
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderConversation = ({ item }: any) => <ConversationListItem item={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <HeaderMain />

      <SquareButton icon="👤" onPress={() => navigation.navigate('AccountDetails')} />

      <Switcher />

      {/* <ScrollView> */}

      {/* Tabs: */}
      {/*  {contacts.length > 0 && <DragTabs />} */}

      {/* <DragToSort /> */}
      {/* <Chrome /> */}
      {/* </ScrollView> */}

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
    backgroundColor: Colors.BG_GREY,
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
  button: {
    height: 44,
    width: 44,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 36,
    lineHeight: 44,
  },
});

export default ConversationsList;
