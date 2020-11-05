import React from 'react';
import { Text, Colors } from '@app/theme';
import { View, SafeAreaView, StyleSheet, TextInput, Alert } from 'react-native';
import Button from '@app/components/Button';
import AvatarShape from '@app/components/AvatarShape';

const Account = () => {
  const [value, onChangeText] = React.useState('Katja Nikitina');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.flex}>
        <Text fontSize="medium" style={styles.label}>
          Аватар
        </Text>
        <View style={styles.avatarContainer}>
          <AvatarShape shape={'circle'} />
          <AvatarShape shape={'square'} />
          <AvatarShape shape={'rhombus'} />
        </View>
        {/* <View style={styles.avatar}></View> */}
        <Text fontSize="medium" style={styles.label}>
          Имя
        </Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => onChangeText(text)}
          value={value}
          maxLength={33}
        />
        <Button text={'Сохранить'} />
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
  label: {
    marginBottom: 10,
    color: Colors.SOFT_BLACK,
  },
  textInput: {
    height: 50,
    // borderColor: 'gray',
    // borderWidth: 1,
    backgroundColor: Colors.LIGHT_LAZURE,
    fontSize: 16,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  avatarContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    backgroundColor: 'white',
    borderRadius: 50,
    borderColor: '#000',
    borderStyle: 'dashed',
    borderWidth: 1,
    marginBottom: 20,
  },
  button: {
    backgroundColor: Colors.LAZURE,
    color: Colors.WHITE,
  },
});

export default Account;
