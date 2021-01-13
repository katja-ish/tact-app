import React from 'react';
import { Text, Colors } from '@app/theme';
import { View, SafeAreaView, StyleSheet, TextInput, Alert } from 'react-native';
import Button from '@app/components/Button';
import AvatarShape from '@app/components/AvatarShape';
import ButtonLight from '@app/components/ButtonLight';

const Account = () => {
  const [value, onChangeText] = React.useState('Katja Nikitina');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.flex}>
        {/* <View style={styles.avatar}></View> */}

        <ButtonLight text={'Аватар'} value={'●'} />
        {/* <View style={styles.avatarContainer}>
          <AvatarShape shape={'circle'} />
          <AvatarShape shape={'square'} />
          <AvatarShape shape={'rhombus'} />
        </View> */}
        <ButtonLight height={80} text={'Имя'} value={'Катя'} />
        <ButtonLight height={80} text={'Никнейм'} value={'semilunar'} />
        <ButtonLight height={80} text={'Дата рождения'} value={'28.04.1999'} />
        <ButtonLight height={80} text={'Друзья'} value={'➤'} />

        {/*  <TextInput
          style={styles.textInput}
          onChangeText={(text) => onChangeText(text)}
          value={value}
          maxLength={33}
        />
        <Button text={'Сохранить'} /> */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  flex: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    marginBottom: 10,
    color: Colors.SOFT_BLACK,
  },
  textInput: {
    height: 50,
    backgroundColor: Colors.LIGHT_LAZURE,
    fontSize: 16,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  avatarContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  avatar: {
    width: 40,
    height: 40,
    backgroundColor: '#c4c4c4',
    borderRadius: 18,
  },
});

export default Account;
