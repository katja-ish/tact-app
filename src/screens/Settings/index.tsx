import React from 'react';
import { Text, Colors } from '@app/theme';
import { View, SafeAreaView, StyleSheet, TextInput, Alert } from 'react-native';
import PrimaryButton from '@app/components/_atoms/PrimaryButton';
import AvatarShape from '@app/components/_atoms/AvatarShape';
import ControlShevron from '@app/components/_atoms/ControlShevron';

const Settings = () => {
  const [value, onChangeText] = React.useState('Katja Nikitina');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.flex}>
        <ControlShevron text={'Аватар'} rightAsset={'●'} />
        {/* <View style={styles.avatarContainer}>
          <AvatarShape shape={'circle'} />
          <AvatarShape shape={'square'} />
          <AvatarShape shape={'rhombus'} />
        </View> */}
        <ControlShevron height={80} text={'Имя'} rightAsset={'Катя'} />
        <ControlShevron height={80} text={'Никнейм'} rightAsset={'semilunar'} />
        <ControlShevron height={80} text={'Дата рождения'} rightAsset={'28.04.1999'} />
        <ControlShevron height={80} text={'Друзья'} rightAsset={'➤'} />

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

export default Settings;
