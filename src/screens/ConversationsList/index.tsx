import React, { useEffect, useState } from 'react';
import { Colors } from '@app/theme';
import { SafeAreaView, View, StyleSheet, FlatList, Switch, Button } from 'react-native';
import ConversationListItem from './components/ConversationListItem';
import Contacts from 'react-native-contacts';
// import DragTabs from '@app/components/DragTabs';
import { useDispatch, useSelector } from '@app/hooks';
import { setContacts } from '@app/store/contacts/actions';
import { createStackNavigator } from '@react-navigation/stack';
import HeaderMain from '@app/components/_molecules/HeaderMain';
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

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const renderConversation = ({ item }: any) => <ConversationListItem item={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <HeaderMain />

      <Button onPress={() => navigation.navigate('Account')} title={'аккаунт'} />
      <Button onPress={() => navigation.navigate('Settings')} title={'настройки'} />

      {/* <ScrollView> */}

      {/* Свитчер для переключения с Flatlist на Tabs: */}

      {/* <TouchableHighlight
        onPress={() => {
          alert('Switch to rows!');
        }}
        underlayColor="white">
        <View style={styles.button}>
          <Text style={styles.buttonText}>≣</Text>
        </View>
      </TouchableHighlight> 
      
      <Switch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      /> */}

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
